<template>
  <header>
    <img alt="Логотип Кабинета Методиста" class="logo" src="@/assets/Logo m&k.png" width="260px" height="200px" />

    <div class="wrapper">
      <h1 class="app-title">Кабинет Методиста</h1>

      <!-- Индикатор загрузки с таймаутом -->
      <div v-if="isLoading && showLoading" class="loading-section">
        <div class="loading-spinner"></div>
        <p>Загрузка данных...</p>
        <button v-if="loadingTimeout" @click="forceStopLoading" class="skip-loading-btn">
          Пропустить загрузку
        </button>
      </div>

      <!-- Блок пользователя -->
      <div class="user-section" v-else-if="isAuthenticated && user">
        <div class="user-info">
          <div class="user-avatar" :class="{ 'has-photo': user.photoURL }">
            <img v-if="user.photoURL" :src="user.photoURL" alt="Аватар" />
            <span v-else class="avatar-placeholder">
              {{ user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U' }}
            </span>
          </div>
          <div class="user-details">
            <div class="user-name">{{ user.displayName || 'Пользователь' }}</div>
            <div class="user-email">{{ user.email }}</div>
            <!-- Отображаем роль пользователя -->
            <div class="user-role" v-if="user.role">
              <span class="role-badge" :class="user.role">
                {{ getRoleText(user.role) }}
              </span>
            </div>
          </div>
        </div>
        <button class="logout-btn" @click="signOut">
          Выйти
        </button>
      </div>

      <!-- Кнопка входа для неавторизованных -->
      <div class="auth-section" v-else-if="!isLoading">
        <button class="auth-btn" @click="showAuthModal = true">
          <span class="auth-icon">🔐</span>
          Войти / Регистрация
        </button>
      </div>

      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/about">О проекте</RouterLink>
        <RouterLink to="/forum">Педагогический форум</RouterLink>
        <RouterLink to="/materials">Банк методических материалов</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <!-- Модальное окно авторизации -->
  <div v-if="showAuthModal" class="modal-overlay" @click="showAuthModal = false">
    <div class="modal-content auth-modal" @click.stop>
      <AuthModal @close="showAuthModal = false" @loginSuccess="handleLoginSuccess" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuth } from '@/composables/useAuth'
import AuthModal from '@/components/AuthModal.vue'

const { user, isAuthenticated, signOut, isLoading, stopLoading } = useAuth()
const showAuthModal = ref(false)
const showLoading = ref(true)
const loadingTimeout = ref(false)

// Таймаут для индикатора загрузки
let loadingTimer: ReturnType<typeof setTimeout> | null = null

const getRoleText = (role: string) => {
  const roles: { [key: string]: string } = {
    teacher: 'Учитель',
    student: 'Ученик',
    user: 'Пользователь',
    admin: 'Администратор'
  }
  return roles[role] || 'Пользователь'
}

// Обработчик успешного входа
const handleLoginSuccess = () => {
  showAuthModal.value = false
}

// Закрытие модального окна при нажатии ESC
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    showAuthModal.value = false
  }
}

// Принудительная остановка загрузки
const forceStopLoading = () => {
  stopLoading()
  showLoading.value = false
  loadingTimeout.value = false
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  
  // Устанавливаем таймаут для индикатора загрузки
  loadingTimer = setTimeout(() => {
    if (isLoading.value) {
      console.warn('Loading timeout reached')
      loadingTimeout.value = true
    }
  }, 5000) // 5 секунд таймаут
})

onUnmounted(() => {
  if (loadingTimer) {
    clearTimeout(loadingTimer)
  }
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Базовые стили */
.skip-loading-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background 0.3s;
}

.skip-loading-btn:hover {
  background: #545b62;
}

/* Основной контейнер шапки */
header {
  line-height: 1.5;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.app-title {
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 1rem 0;
}

/* === ОБЩИЕ СТИЛИ ДЛЯ ВСЕХ УСТРОЙСТВ === */

/* Навигация - размещаем ПОД кнопкой входа/пользователя */
nav {
  width: 100%;
  font-size: 16px;
  margin-top: 1rem; /* Отступ сверху от кнопки входа/пользователя */
}

nav a {
  display: block;
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin: 0.25rem 0;
  border-left: 4px solid transparent;
  text-align: left;
}

nav a:hover {
  background-color: #e9ecef;
}

nav a.router-link-active {
  color: #00bcd4;
  font-weight: bold;
  background-color: #e3f2fd;
  border-left-color: #42b883;
}

/* Стили для секции пользователя и авторизации */
.user-section,
.auth-section,
.loading-section {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #e9ecef;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
  overflow: hidden;
}

.user-avatar:not(.has-photo) {
  background: #42b883;
}

.user-avatar.has-photo {
  background: transparent;
  border: none;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.user-details {
  flex: 1;
  min-width: 0;
}

.user-name {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-email {
  color: #6c757d;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.logout-btn {
  width: 100%;
  padding: 0.5rem;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: #c82333;
}

/* Стили для индикатора загрузки */
.loading-section {
  text-align: center;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #42b883;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-section p {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0;
}

/* Стили для кнопки авторизации */
.auth-btn {
  width: 100%;
  padding: 0.75rem 1rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.auth-btn:hover {
  background: #369c6f;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(66, 184, 131, 0.3);
}

.auth-icon {
  font-size: 1.1rem;
}

/* Стили для ролей пользователей */
.user-role {
  margin-top: 0.5rem;
}

.role-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.role-badge.teacher {
  background: #10b981;
  color: white;
}

.role-badge.student {
  background: #3b82f6;
  color: white;
}

.role-badge.user {
  background: #6b7280;
  color: white;
}

.role-badge.admin {
  background: #8b5cf6;
  color: white;
}

/* Модальное окно */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.auth-modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
}

/* === АДАПТИВНЫЕ БРЕЙКПОИНТЫ === */

/* 1. Мобильные телефоны (до 768px) */
@media (max-width: 767px) {
  body {
    min-height: 100vh;
    margin: 0;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  header {
    padding: 0.5rem 1rem;
    border-right: none;
    border-bottom: 1px solid #e9ecef;
    max-width: 100%;
    position: relative;
  }
  
  .logo {
    width: 180px !important;
    height: 140px !important;
    margin: 0 auto 0.5rem;
  }
  
  .app-title {
    font-size: 1.3rem;
    margin: 0.5rem 0;
  }
  
  .user-section,
  .auth-section,
  .loading-section {
    margin: 0.5rem 0;
    padding: 0.75rem;
  }
  
  .user-info {
    flex-direction: row;
    text-align: left;
    gap: 0.75rem;
  }
  
  /* Навигация на мобильных - вертикальная под кнопкой */
  nav {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  
  nav a {
    padding: 0.75rem 1rem;
    margin: 0.25rem 0;
    font-size: 0.9rem;
    border-left: 4px solid transparent;
    text-align: center;
    width: 100%;
  }
  
  nav a.router-link-active {
    border-left-color: #42b883;
  }
  
  .auth-btn {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
  
  .modal-content.auth-modal {
    width: 95%;
    margin: 0.5rem;
  }
  
  main {
    padding: 1rem;
  }
}

/* 2. Планшеты (768px - 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  body {
    min-height: 100vh;
    margin: 0;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }
  
  header {
    width: 220px;
    height: 100vh;
    position: sticky;
    top: 0;
    padding: 1rem;
    border-right: 1px solid #e9ecef;
    display: flex;
    flex-direction: column;
  }
  
  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .logo {
    width: 180px !important;
    height: 140px !important;
  }
  
  .app-title {
    font-size: 1.3rem;
  }
  
  /* Навигация под кнопкой входа/пользователя */
  nav {
    margin-top: 1rem;
    margin-bottom: auto; /* Пушим остальное пространство вниз */
  }
  
  nav a {
    margin: 0.5rem 0;
    border-left: 4px solid transparent;
    text-align: left;
    padding: 0.75rem 1rem;
  }
  
  nav a.router-link-active {
    border-left-color: #42b883;
  }
  
  main {
    flex: 1;
    padding: 1.5rem;
    overflow-y: auto;
  }
}

/* 3. Ноутбуки и десктопы (1024px и выше) */
@media (min-width: 1024px) {
  body {
    min-height: 100vh;
    margin: 0;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  header {
    width: 280px;
    height: 100vh;
    position: sticky;
    top: 0;
    padding: 1.5rem;
    flex-shrink: 0;
    border-right: 1px solid #e9ecef;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .logo {
    width: 220px !important;
    height: 170px !important;
  }
  
  .app-title {
    font-size: 1.4rem;
  }
  
  /* Навигация под кнопкой входа/пользователя */
  nav {
    margin-top: 1rem;
    margin-bottom: auto; /* Пушим остальное пространство вниз */
  }
  
  nav a {
    margin: 0.5rem 0;
    border-left: 4px solid transparent;
    text-align: left;
    padding: 0.75rem 1rem;
  }
  
  nav a.router-link-active {
    border-left-color: #42b883;
  }
  
  main {
    flex: 1;
    padding: 2rem;
    overflow-y: auto;
  }
}

/* 4. Большие мониторы (1440px и выше) */
@media (min-width: 1440px) {
  header {
    width: 300px;
    padding: 2rem;
  }
  
  .logo {
    width: 240px !important;
    height: 185px !important;
  }
  
  .app-title {
    font-size: 1.6rem;
  }
  
  nav a {
    padding: 0.85rem 1.2rem;
    font-size: 1rem;
  }
}

/* Улучшение для тач-устройств */
@media (hover: none) and (pointer: coarse) {
  nav a,
  .auth-btn,
  .logout-btn,
  .skip-loading-btn {
    min-height: 44px; /* Минимальная высота для удобного тапа */
    touch-action: manipulation;
  }
}

/* Фикс для логотипа */
.logo {
  object-fit: contain;
}
</style>