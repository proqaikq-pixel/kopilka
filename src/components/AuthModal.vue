<template>
  <div class="auth-modal">
    <div class="modal-header">
      <div class="header-content">
        <div class="logo-placeholder">
          <span class="logo-icon">📚</span>
        </div>
        <h2>Добро пожаловать в Кабинет Методиста</h2>
        <p class="header-subtitle">Присоединяйтесь к сообществу педагогов</p>
      </div>
      <button class="close-btn" @click="$emit('close')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    

    <div class="auth-content">
      <!-- Единственный ползунок для переключения -->
      <div class="auth-switch single-mode">
        <button 
          class="switch-btn" 
          :class="{ active: !isRegister }"
          @click="toggleMode"
        >
          {{ isRegister ? 'Войти в существующий аккаунт' : 'Создать новый аккаунт' }}
        </button>
        <div class="switch-track">
          <div class="switch-slider" :class="{ toRegister: isRegister }"></div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <!-- Общие поля -->
        <div class="form-section">
          <!-- Email -->
          <div class="form-row">
            <div class="form-group full-width">
              <label>Email адрес</label>
              <div class="input-wrapper">
                <span class="input-icon">📧</span>
                <input 
                  type="email" 
                  v-model="form.email" 
                  placeholder="your.email@example.com" 
                  required
                  class="modern-input"
                />
              </div>
            </div>
          </div>

          <!-- Пароль -->
          <div class="form-row">
            <div class="form-group full-width">
              <label>Пароль</label>
              <div class="input-wrapper">
                <span class="input-icon">🔒</span>
                <input 
                  type="password" 
                  v-model="form.password" 
                  :placeholder="isRegister ? 'Минимум 6 символов' : 'Введите ваш пароль'" 
                  required
                  :minlength="isRegister ? 6 : undefined"
                  class="modern-input"
                />
              </div>
              <div v-if="isRegister" class="password-hint">
                Используйте надежный пароль с буквами и цифрами
              </div>
            </div>
          </div>

          <!-- Поля только для регистрации -->
          <div v-if="isRegister" class="registration-fields">
            <!-- Полное имя -->
            <div class="form-row">
              <div class="form-group full-width">
                <label>Полное имя</label>
                <div class="input-wrapper">
                  <span class="input-icon">👤</span>
                  <input 
                    type="text" 
                    v-model="form.displayName" 
                    placeholder="Иван Иванов" 
                    required
                    class="modern-input"
                  />
                </div>
              </div>
            </div>

            <!-- Выбор роли -->
            <div class="form-section" v-if="isRegister">
              <h3 class="section-title">Выберите вашу роль</h3>
              <div class="role-selection">
                <div 
                  v-for="role in availableRoles" 
                  :key="role.value"
                  class="role-card"
                  :class="{ 
                    active: form.role === role.value,
                    recommended: role.value === 'teacher'
                  }"
                  @click="form.role = role.value"
                >
                  <div class="role-header">
                    <div class="role-icon">{{ role.icon }}</div>
                    <div class="role-badge" v-if="role.value === 'teacher'">Рекомендуется</div>
                  </div>
                  <div class="role-content">
                    <h4 class="role-title">{{ role.name }}</h4>
                    <p class="role-description">{{ role.description }}</p>
                    <ul class="role-features">
                      <li v-for="feature in role.features" :key="feature">✓ {{ feature }}</li>
                    </ul>
                  </div>
                  <div class="role-check">
                    <div class="check-circle" :class="{ checked: form.role === role.value }">
                      <svg v-if="form.role === role.value" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Дополнительные поля -->
            <div v-if="isRegister && form.role" class="form-section">
              <h3 class="section-title">Дополнительная информация</h3>
              
              <!-- Для учителя -->
              <div v-if="form.role === 'teacher'" class="additional-fields">
                <div class="form-row">
                  <div class="form-group full-width">
                    <label>Учебное заведение</label>
                    <div class="input-wrapper">
                      <span class="input-icon">🏫</span>
                      <input 
                        type="text" 
                        v-model="form.school" 
                        placeholder="Название школы или учреждения" 
                        class="modern-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group full-width">
                    <label>Преподаваемые предметы</label>
                    <div class="input-wrapper">
                      <span class="input-icon">📝</span>
                      <input 
                        type="text" 
                        v-model="form.subjects" 
                        placeholder="Математика, Русский язык, Физика..." 
                        class="modern-input"
                      />
                    </div>
                    <div class="field-hint">Перечислите предметы через запятую</div>
                  </div>
                </div>
              </div>

              <!-- Для ученика -->
              <div v-if="form.role === 'student'" class="additional-fields">
                <div class="form-row">
                  <div class="form-group full-width">
                    <label>Учебное заведение</label>
                    <div class="input-wrapper">
                      <span class="input-icon">🏫</span>
                      <input 
                        type="text" 
                        v-model="form.school" 
                        placeholder="Название вашей школы" 
                        class="modern-input"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group full-width">
                    <label>Класс обучения</label>
                    <div class="select-wrapper">
                      <span class="input-icon">🎓</span>
                      <select v-model="form.grade" class="modern-select">
                        <option value="">Выберите класс</option>
                        <option v-for="grade in grades" :key="grade" :value="grade">
                          {{ grade }} класс
                        </option>
                      </select>
                      <span class="select-arrow">▼</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Для пользователя -->
              <div v-if="form.role === 'user'" class="additional-fields">
                <div class="info-message">
                  <div class="info-icon">💡</div>
                  <div class="info-content">
                    <p>Как обычный пользователь вы получите базовый доступ к платформе. 
                    Вы всегда сможете изменить свою роль позже в настройках профиля.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Кнопка отправки -->
        <button 
          type="submit" 
          class="submit-btn primary large" 
          :disabled="isLoading || (isRegister && !form.role)"
          :class="{ disabled: isRegister && !form.role }"
        >
          <span v-if="isLoading" class="btn-spinner"></span>
          <span v-else>
            {{ isRegister 
                ? (form.role ? `Создать ${getRoleText(form.role)} аккаунт` : 'Выберите роль') 
                : 'Войти в аккаунт' 
            }}
          </span>
        </button>

        <!-- Социальные кнопки -->
        <div class="divider" v-if="!isRegister">
          <span>или продолжите с</span>
        </div>

        <button 
          v-if="!isRegister" 
          type="button" 
          class="social-btn google" 
          @click="handleGoogleLogin" 
          :disabled="isLoading"
        >
          <span class="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </span>
          Войти через Google
        </button>

        <!-- Переключение между формами -->
        <div class="auth-footer">
          <p>
            {{ isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?' }}
            <a href="#" @click.prevent="toggleMode">
              {{ isRegister ? 'Войдите здесь' : 'Зарегистрируйтесь здесь' }}
            </a>
          </p>
        </div>
      </form>

      <!-- Сообщение об ошибке -->
      <div v-if="error" class="error-message">
        <div class="error-icon">⚠️</div>
        <div class="error-content">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useAuth } from '@/composables/useAuth'
import type { UserRole } from '@/firebase/types'

import { 
  loginWithEmail, 
  registerWithEmail, 
  loginWithGoogle 
} from '@/firebase/auth'

const { isLoading, error } = useAuth()

const isRegister = ref(false)

const toggleMode = () => {
  isRegister.value = !isRegister.value
  error.value = null
  // Сбрасываем дополнительные поля при переключении режимов
  if (!isRegister.value) {
    form.role = ''
    form.displayName = ''
    form.school = ''
    form.grade = ''
    form.subjects = ''
  }
}

const availableRoles = [
  { 
    value: 'teacher' as UserRole, 
    name: 'Учитель', 
    icon: '👨‍🏫', 
    description: 'Для преподавателей и педагогов',
    features: [
      'Доступ ко всем методическим материалам',
      'Участие в педагогическом форуме',
      'Загрузка собственных материалов',
      'Создание тем для обсуждения'
    ]
  },
  { 
    value: 'student' as UserRole, 
    name: 'Ученик', 
    icon: '🎓', 
    description: 'Для учащихся и студентов',
    features: [
      'Просмотр методических материалов',
      'Доступ к учебным ресурсам',
      'Участие в обсуждениях',
      'Личный кабинет'
    ]
  },
  { 
    value: 'user' as UserRole, 
    name: 'Пользователь', 
    icon: '👤', 
    description: 'Для всех интересующихся',
    features: [
      'Базовый доступ к материалам',
      'Просмотр открытых ресурсов',
      'Участие в сообществе',
      'Гибкие настройки профиля'
    ]
  }
]

const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

const form = reactive({
  email: '',
  password: '',
  displayName: '',
  role: '' as UserRole | '',
  school: '',
  grade: '',
  subjects: ''
})

const emit = defineEmits<{
  close: [],
  loginSuccess: []
}>()

const getRoleText = (role: string) => {
  const roles: { [key: string]: string } = {
    teacher: 'учительский',
    student: 'ученический',
    user: 'пользовательский'
  }
  return roles[role] || ''
}

const handleSubmit = async () => {
  isLoading.value = true
  error.value = null
  
  try {
    if (isRegister.value) {
      if (!form.role) {
        error.value = 'Пожалуйста, выберите роль'
        isLoading.value = false
        return
      }

      const result = await registerWithEmail(
        form.email,
        form.password,
        form.displayName,
        form.role,
        form.school || undefined,
        form.grade || undefined,
        form.subjects || undefined
      )
      
      if (result.error) {
        throw result.error
      }
      
      if (result.user) {
        emit('loginSuccess')
        emit('close')
        resetForm()
      }
    } else {
      const result = await loginWithEmail(form.email, form.password)
      
      if (result.error) {
        throw result.error
      }
      
      if (result.user) {
        emit('loginSuccess')
        emit('close')
        resetForm()
      }
    }
  } catch (err: any) {
    error.value = getAuthErrorMessage(err)
  } finally {
    isLoading.value = false
  }
}

const handleGoogleLogin = async () => {
  isLoading.value = true
  error.value = null
  
  try {
    const result = await loginWithGoogle()
    
    if (result.error) {
      throw result.error
    }
    
    if (result.user) {
      emit('loginSuccess')
      emit('close')
    }
  } catch (err: any) {
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

const resetForm = () => {
  Object.assign(form, {
    email: '',
    password: '',
    displayName: '',
    role: '',
    school: '',
    grade: '',
    subjects: ''
  })
}
</script>

<style scoped>
/* Добавляем новые стили для единого ползунка */

.auth-switch.single-mode {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  position: relative;
}

.switch-track {
  position: relative;
  width: 120px;
  height: 30px;
  background: #e2e8f0;
  border-radius: 15px;
  margin-top: 0.75rem;
  overflow: hidden;
}

.switch-slider {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 54px;
  height: 24px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.switch-slider.toRegister {
  left: calc(100% - 57px);
}

.switch-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  color: #64748b;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-align: center;
}

.switch-btn:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

.switch-btn.active {
  color: #3b82f6;
}

/* Остальные стили остаются без изменений */

.auth-modal {
  background: white;
  border-radius: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  max-width: 750px;
  width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  margin: 1rem auto;
}

.modal-header {
  background: linear-gradient(135deg, #4077ac 0%, #26a59f 100%);
  color: white;
  padding: 2.5rem;
  position: relative;
}

.header-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.logo-placeholder {
  margin-bottom: 1.5rem;
}

.logo-icon {
  font-size: 3.5rem;
  display: block;
}

.modal-header h2 {
  margin: 0 0 0.75rem 0;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.3;
}

.header-subtitle {
  margin: 0;
  opacity: 0.9;
  font-size: 1.1rem;
  line-height: 1.5;
}

.close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.auth-content {
  padding: 0;
}

.auth-form {
  padding: 2.5rem;
  max-width: 700px;
  margin: 0 auto;
}

.form-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #f1f5f9;
}

.form-row {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: #374151;
  font-weight: 500;
  font-size: 0.95rem;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1.25rem;
  z-index: 10;
  font-size: 1.2rem;
}

.modern-input {
  width: 100%;
  padding: 1rem 1.25rem 1rem 3.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  box-sizing: border-box;
}

.modern-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.password-hint,
.field-hint {
  font-size: 0.85rem;
  color: #6b7280;
  margin-top: 0.5rem;
  line-height: 1.4;
}

.role-selection {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.role-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.role-card:hover {
  border-color: #3b82f6;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.role-card.active {
  border-color: #10b981;
  background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%);
  box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.1);
}

.role-card.recommended::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50px 50px 0;
  border-color: transparent #10b981 transparent transparent;
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.role-icon {
  font-size: 2.75rem;
}

.role-badge {
  background: #10b981;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.role-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.role-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.role-description {
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.role-features {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.role-features li {
  color: #475569;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1.4;
}

.role-check {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
}

.check-circle {
  width: 28px;
  height: 28px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.check-circle.checked {
  background: #10b981;
  border-color: #10b981;
  color: white;
}

.additional-fields {
  background: #f8fafc;
  padding: 1.75rem;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.modern-select {
  width: 100%;
  padding: 1rem 1.25rem 1rem 3.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
  appearance: none;
  cursor: pointer;
  box-sizing: border-box;
}

.modern-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.select-arrow {
  position: absolute;
  right: 1.25rem;
  pointer-events: none;
  color: #6b7280;
  font-size: 0.8rem;
}

.info-message {
  display: flex;
  gap: 1.25rem;
  background: #eff6ff;
  padding: 1.25rem;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
}

.info-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.info-content p {
  margin: 0;
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.6;
}

.submit-btn {
  width: 100%;
  padding: 1.25rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 2rem 0 1.5rem 0;
}

.submit-btn.primary {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
}

.submit-btn.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.4);
}

.submit-btn.primary:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-btn.large {
  padding: 1.5rem 2rem;
  font-size: 1.2rem;
}

.btn-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid transparent;
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.divider {
  text-align: center;
  margin: 2rem 0;
  color: #6b7280;
  position: relative;
  font-size: 0.95rem;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #e5e7eb;
}

.divider span {
  background: white;
  padding: 0 1.5rem;
  position: relative;
}

.social-btn {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.social-btn.google:hover {
  border-color: #3b82f6;
  background: #f8fafc;
  transform: translateY(-1px);
}

.social-icon {
  display: flex;
  align-items: center;
}

.auth-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

.auth-footer p {
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
}

.auth-footer a {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.auth-footer a:hover {
  text-decoration: underline;
  color: #1d4ed8;
}

.error-message {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
  padding: 1.25rem;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.error-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.error-content {
  color: #dc2626;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .auth-modal {
    margin: 0.5rem;
    width: calc(100% - 1rem);
    max-height: 98vh;
  }
  
  .modal-header {
    padding: 2rem 1.5rem;
  }
  
  .auth-form {
    padding: 2rem 1.5rem;
  }
  
  .auth-switch.single-mode {
    padding: 1rem;
  }
  
  .switch-btn {
    font-size: 0.95rem;
    padding: 0.5rem 0.75rem;
  }
  
  .role-selection {
    grid-template-columns: 1fr;
  }
  
  .role-card {
    padding: 1.5rem;
    min-height: auto;
  }
  
  .modern-input,
  .modern-select {
    padding: 0.875rem 1rem 0.875rem 3rem;
  }
  
  .input-icon {
    left: 1rem;
  }
}

@media (max-width: 480px) {
  .modal-header h2 {
    font-size: 1.5rem;
  }
  
  .header-subtitle {
    font-size: 1rem;
  }
  
  .auth-form {
    padding: 1.5rem 1rem;
  }
  
  .switch-btn {
    font-size: 0.9rem;
  }
  
  .switch-track {
    width: 100px;
    height: 26px;
  }
  
  .switch-slider {
    width: 46px;
    height: 20px;
  }
  
  .switch-slider.toRegister {
    left: calc(100% - 49px);
  }
}
</style>