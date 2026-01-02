// composables/useFirebaseAuth.ts
import { ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { firebaseApp } from '@/firebase/config'
import type { User } from 'firebase/auth'

// Создаем auth здесь
const auth = getAuth(firebaseApp)

export const useFirebaseAuth = () => {
  const currentUser = ref<User | null>(null)
  
  // Получаем текущего пользователя Firebase
  const getCurrentUser = () => {
    return auth.currentUser
  }
  
  // Получаем ID токена для авторизации в Supabase
  const getFirebaseToken = async () => {
    const user = auth.currentUser
    if (!user) return null
    return await user.getIdToken()
  }
  
  // Получаем данные пользователя
  const getUserData = () => {
    const user = auth.currentUser
    if (!user) return null
    
    return {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
  }
  
  // Проверяем аутентификацию
  const isAuthenticated = () => {
    return !!auth.currentUser
  }
  
  // Получаем UID пользователя
  const getUserId = () => {
    return auth.currentUser?.uid || null
  }
  
  // Получаем имя пользователя
  const getUserName = () => {
    return auth.currentUser?.displayName || 'Анонимный автор'
  }
  
  return {
    currentUser,
    getCurrentUser,
    getFirebaseToken,
    getUserData,
    isAuthenticated,
    getUserId,
    getUserName
  }
}