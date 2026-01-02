import { ref, computed, onUnmounted } from 'vue'
import { 
  loginWithEmail, 
  registerWithEmail, 
  loginWithGoogle, 
  logout, 
  onAuthChange 
} from '@/firebase/auth'
import type { UserProfile, UserRole } from '@/firebase/types'

// Singleton для слушателя аутентификации
let globalUnsubscribe: (() => void) | null = null
let globalUser = ref<UserProfile | null>(null)
let globalHasCheckedAuth = ref(false)

// Инициализируем слушатель при первом импорте
if (typeof window !== 'undefined') {
  // Запускаем проверку только один раз
  if (!globalUnsubscribe) {
    globalUnsubscribe = onAuthChange((currentUser) => {
      console.log('Auth change detected:', !!currentUser)
      globalUser.value = currentUser
      globalHasCheckedAuth.value = true
      
      // Сохраняем состояние проверки в sessionStorage
      if (currentUser) {
        sessionStorage.setItem('auth_checked', 'true')
        sessionStorage.setItem('user_id', currentUser.uid)
        
        // Сохраняем данные пользователя для быстрого доступа
        const userProfile = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          role: currentUser.role
        }
        sessionStorage.setItem('user_profile', JSON.stringify(userProfile))
      } else {
        sessionStorage.setItem('auth_checked', 'true')
        sessionStorage.removeItem('user_id')
        sessionStorage.removeItem('user_profile')
      }
    })
  }
}

export const useAuth = () => {
  const user = ref<UserProfile | null>(null)
  const isLoading = ref(true)
  const error = ref<string | null>(null)
  const hasCheckedAuth = ref(false)
  
  // Инициализация из глобального состояния
  user.value = globalUser.value
  hasCheckedAuth.value = globalHasCheckedAuth.value
  
  // Проверяем кэш и быстро обновляем состояние загрузки
  if (typeof window !== 'undefined') {
    // Проверяем, есть ли кэшированные данные
    const cachedProfile = sessionStorage.getItem('user_profile')
    const isAuthChecked = sessionStorage.getItem('auth_checked') === 'true'
    
    if (cachedProfile && !user.value) {
      try {
        user.value = JSON.parse(cachedProfile)
        hasCheckedAuth.value = true
      } catch (e) {
        console.warn('Ошибка парсинга кэшированного профиля:', e)
      }
    }
    
    // Если проверка аутентификации уже выполнена, останавливаем загрузку
    if (isAuthChecked && hasCheckedAuth.value) {
      isLoading.value = false
    } else if (globalHasCheckedAuth.value) {
      // Если глобальное состояние уже проверено
      isLoading.value = false
    }
    
    // Добавляем таймаут для загрузки (на случай проблем с сетью)
    setTimeout(() => {
      if (isLoading.value) {
        console.warn('Auth loading timeout - falling back to cached state')
        isLoading.value = false
        hasCheckedAuth.value = true
      }
    }, 3000) // 3 секунды таймаут
  }

  const isAuthenticated = computed(() => !!user.value)

  // Метод для проверки, была ли уже выполнена проверка авторизации
  const isAuthChecked = (): boolean => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem('auth_checked') === 'true'
  }

  // Получение кэшированного пользователя
  const getCachedUser = (): UserProfile | null => {
    if (typeof window === 'undefined') return null
    
    try {
      const cached = sessionStorage.getItem('user_profile')
      return cached ? JSON.parse(cached) : null
    } catch {
      return null
    }
  }

  const login = async (email: string, password: string) => {
    isLoading.value = true
    error.value = null
    
    try {
      const { user: authUser, error: authError } = await loginWithEmail(email, password)
      
      if (authError) {
        throw authError
      }
      
      // Обновляем локальное состояние
      user.value = getCachedUser()
      
      return { success: true, error: null }
    } catch (err) {
      error.value = getAuthErrorMessage(err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const register = async (
    email: string, 
    password: string, 
    displayName: string, 
    role?: UserRole, 
    school?: string, 
    grade?: string, 
    subjects?: string
  ) => {
    isLoading.value = true
    error.value = null
    
    try {
      const { user: authUser, error: authError } = await registerWithEmail(
        email, 
        password, 
        displayName, 
        role,
        school,
        grade,
        subjects
      )
      
      if (authError) {
        throw authError
      }
      
      // Обновляем локальное состояние
      user.value = getCachedUser()
      
      return { success: true, error: null }
    } catch (err) {
      error.value = getAuthErrorMessage(err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const googleLogin = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const { user: authUser, error: authError } = await loginWithGoogle()
      
      if (authError) {
        throw authError
      }
      
      // Обновляем локальное состояние
      user.value = getCachedUser()
      
      return { success: true, error: null }
    } catch (err) {
      error.value = getAuthErrorMessage(err)
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }

  const signOut = async () => {
    isLoading.value = true
    try {
      await logout()
      // Очищаем локальное состояние
      user.value = null
      hasCheckedAuth.value = true
      sessionStorage.setItem('auth_checked', 'true')
      sessionStorage.removeItem('user_profile')
    } catch (err) {
      error.value = getAuthErrorMessage(err)
    } finally {
      isLoading.value = false
    }
  }

  const getAuthErrorMessage = (error: any): string => {
    const errorCode = error?.code || ''
    
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Неверный формат email'
      case 'auth/user-disabled':
        return 'Аккаунт заблокирован'
      case 'auth/user-not-found':
        return 'Пользователь не найден'
      case 'auth/wrong-password':
        return 'Неверный пароль'
      case 'auth/email-already-in-use':
        return 'Email уже используется'
      case 'auth/weak-password':
        return 'Пароль должен содержать минимум 6 символов'
      case 'auth/network-request-failed':
        return 'Ошибка сети. Проверьте подключение к интернету'
      case 'auth/too-many-requests':
        return 'Слишком много попыток. Попробуйте позже'
      case 'auth/operation-not-allowed':
        return 'Регистрация по email отключена'
      default:
        return error?.message || 'Произошла ошибка при авторизации'
    }
  }

  // Функция для принудительной остановки загрузки
  const stopLoading = () => {
    isLoading.value = false
    hasCheckedAuth.value = true
  }

  return {
    user,
    isAuthenticated,
    isLoading,
    hasCheckedAuth,
    isAuthChecked,
    error,
    login,
    register,
    googleLogin,
    signOut,
    getAuthErrorMessage,
    stopLoading,
    getCurrentUser: () => user.value
  }
}

// Функция для очистки глобального слушателя
export const cleanupAuth = () => {
  if (globalUnsubscribe) {
    globalUnsubscribe()
    globalUnsubscribe = null
  }
}