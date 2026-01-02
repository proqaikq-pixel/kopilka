// auth.ts
import { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { doc, setDoc, getDoc, enableNetwork, disableNetwork } from 'firebase/firestore'
import { firebaseApp, db } from './config'
import type { UserProfile, UserRole, EduUser } from './types'

// Singleton для auth
let authInstance: ReturnType<typeof getAuth> | null = null
let googleProviderInstance: GoogleAuthProvider | null = null

export const getAuthInstance = () => {
  if (!authInstance) {
    authInstance = getAuth(firebaseApp)
  }
  return authInstance
}

export const getGoogleProvider = () => {
  if (!googleProviderInstance) {
    googleProviderInstance = new GoogleAuthProvider()
    googleProviderInstance.setCustomParameters({
      prompt: 'select_account'
    })
  }
  return googleProviderInstance
}

// Функция для проверки сетевого соединения
const checkNetworkStatus = async (): Promise<boolean> => {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    console.warn('Приложение работает в оффлайн режиме')
    return false
  }
  return true
}

// Расширенная версия регистрации с сохранением в Firestore
export const registerWithEmail = async (
  email: string, 
  password: string, 
  displayName: string,
  role: UserRole = 'user',
  school?: string,
  grade?: string,
  subjects?: string
) => {
  const auth = getAuthInstance()
  
  try {
    console.log('Регистрация пользователя:', email, 'Роль:', role)
    
    // Проверяем соединение
    const isOnline = await checkNetworkStatus()
    
    // Создаем пользователя в Firebase Auth
    const result = await createUserWithEmailAndPassword(auth, email, password)
    
    if (result.user && auth.currentUser) {
      // Обновляем профиль с именем
      await updateProfile(auth.currentUser, { 
        displayName: displayName 
      })

      // Сохраняем дополнительную информацию в Firestore (только если онлайн)
      if (isOnline) {
        await saveUserToFirestore(result.user.uid, {
          email,
          displayName,
          role,
          school,
          grade,
          subjects: subjects ? subjects.split(',').map(s => s.trim()) : [],
          createdAt: new Date()
        })
      } else {
        // Сохраняем во временное хранилище для синхронизации позже
        saveUserToLocalStorage(result.user.uid, {
          email,
          displayName,
          role,
          school,
          grade,
          subjects: subjects ? subjects.split(',').map(s => s.trim()) : [],
          createdAt: new Date().toISOString()
        })
      }
      
      console.log('Профиль создан:', displayName, 'Роль:', role)
    }
    
    return { user: result.user, error: null }
  } catch (error) {
    console.error('Ошибка регистрации:', error)
    return { user: null, error }
  }
}

// Функция для сохранения пользователя в Firestore
const saveUserToFirestore = async (uid: string, userData: any) => {
  try {
    await setDoc(doc(db, 'users', uid), userData)
    console.log('Пользователь сохранен в Firestore:', uid)
    
    // Очищаем локальное хранилище после успешной синхронизации
    localStorage.removeItem(`pending_user_${uid}`)
  } catch (error) {
    console.error('Ошибка сохранения в Firestore:', error)
    // Сохраняем в локальное хранилище для повторной попытки
    saveUserToLocalStorage(uid, userData)
    throw error
  }
}

// Локальное сохранение для оффлайн режима
const saveUserToLocalStorage = (uid: string, userData: any) => {
  try {
    localStorage.setItem(`pending_user_${uid}`, JSON.stringify(userData))
    localStorage.setItem('pending_sync', 'true')
  } catch (error) {
    console.error('Ошибка локального сохранения:', error)
  }
}

// Функция для получения данных пользователя из Firestore
export const getUserData = async (uid: string): Promise<EduUser | null> => {
  try {
    // Сначала проверяем локальное хранилище
    const cachedData = localStorage.getItem(`user_${uid}`)
    if (cachedData) {
      return JSON.parse(cachedData) as EduUser
    }
    
    // Проверяем соединение
    const isOnline = await checkNetworkStatus()
    if (!isOnline) {
      return getCachedUserData(uid)
    }
    
    const userDoc = await getDoc(doc(db, 'users', uid))
    if (userDoc.exists()) {
      const userData = userDoc.data() as EduUser
      
      // Кэшируем данные
      localStorage.setItem(`user_${uid}`, JSON.stringify(userData))
      return userData
    }
    
    return null
  } catch (error) {
    console.error('Ошибка получения данных пользователя:', error)
    // Возвращаем кэшированные данные при ошибке
    return getCachedUserData(uid)
  }
}

// Получение кэшированных данных
const getCachedUserData = (uid: string): EduUser | null => {
  try {
    const cached = localStorage.getItem(`user_${uid}`)
    if (cached) {
      return JSON.parse(cached) as EduUser
    }
    return null
  } catch (error) {
    return null
  }
}

// Вход по email/паролю
export const loginWithEmail = async (email: string, password: string) => {
  const auth = getAuthInstance()
  
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    return { user: result.user, error: null }
  } catch (error) {
    console.error('Ошибка входа:', error)
    return { user: null, error }
  }
}

// Вход через Google
export const loginWithGoogle = async () => {
  const auth = getAuthInstance()
  const provider = getGoogleProvider()
  
  try {
    const result = await signInWithPopup(auth, provider)
    
    // Для Google пользователей тоже создаем запись в Firestore
    if (result.user) {
      const isOnline = await checkNetworkStatus()
      
      if (isOnline) {
        const userData = await getUserData(result.user.uid)
        if (!userData) {
          await saveUserToFirestore(result.user.uid, {
            email: result.user.email,
            displayName: result.user.displayName,
            role: 'user',
            photoURL: result.user.photoURL,
            createdAt: new Date()
          })
        }
      }
    }
    
    return { user: result.user, error: null }
  } catch (error) {
    console.error('Ошибка Google входа:', error)
    return { user: null, error }
  }
}

// Выход
export const logout = () => {
  const auth = getAuthInstance()
  // Очищаем локальное хранилище
  localStorage.removeItem('pending_sync')
  return signOut(auth)
}

// Слушатель изменения состояния аутентификации
export const onAuthChange = (callback: (user: UserProfile | null) => void) => {
  const auth = getAuthInstance()
  
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Получаем дополнительные данные из Firestore
      let userData: EduUser | null = null
      
      try {
        userData = await getUserData(user.uid)
      } catch (error) {
        console.warn('Используем кэшированные данные пользователя')
        userData = getCachedUserData(user.uid)
      }
      
      const userProfile: UserProfile = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
        role: userData?.role || 'user'
      }
      callback(userProfile)
    } else {
      callback(null)
    }
  })
}

// Функция для синхронизации оффлайн данных при восстановлении соединения
export const syncOfflineData = async () => {
  try {
    const pendingSync = localStorage.getItem('pending_sync')
    if (pendingSync === 'true') {
      // Здесь можно добавить логику синхронизации
      // Например, отправку данных из localStorage в Firestore
      console.log('Синхронизация оффлайн данных...')
      localStorage.removeItem('pending_sync')
    }
  } catch (error) {
    console.error('Ошибка синхронизации:', error)
  }
}