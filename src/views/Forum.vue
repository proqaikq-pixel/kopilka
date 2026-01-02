<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import AuthModal from '@/components/AuthModal.vue'
import { 
  getCategories,
  createTopic,
  getTopicsByCategory,
  searchTopics,
  forumCategories
} from '@/firebase/forumService'
import type { ForumCategory, ForumTopic } from '@/firebase/types'

const router = useRouter()
const { user, isAuthenticated, isLoading, hasCheckedAuth, isAuthChecked } = useAuth()

// Реактивные данные
const categories = ref<ForumCategory[]>([])
const openedCategories = ref<string[]>([])
const searchQuery = ref('')
const searchMode = ref(false)
const searchResults = ref<ForumTopic[]>([])
const sortBy = ref('newest')
const showCreateTopic = ref(false)
const showAuthModal = ref(false)
const isSubmitting = ref(false)
const categoriesLoading = ref(false)
const forumInitialized = ref(false) // Исправлено: было initialLoad, стало forumInitialized

// Данные для загрузки тем
const topicsByCategory = ref<Record<string, ForumTopic[]>>({})
const lastVisibleByCategory = ref<Record<string, any>>({})
const loadingTopics = ref<Record<string, boolean>>({})
const loadingMore = ref<Record<string, boolean>>({})
const hasMoreTopics = ref<Record<string, boolean>>({})

// Форма новой темы
const newTopic = reactive({
  categoryId: '',
  title: '',
  content: '',
  tagsInput: ''
})

// Компьютед свойство для проверки, нужно ли показывать индикатор загрузки авторизации
const authLoading = computed(() => {
  return isLoading.value && !forumInitialized.value // Исправлено: forumInitialized вместо initialLoad
})

// Загрузка данных форума
const loadForumData = async () => {
  if (forumInitialized.value) return // Исправлено: forumInitialized вместо initialLoad
  
  forumInitialized.value = true // Исправлено: forumInitialized вместо initialLoad
  await loadCategories()
}

// Отслеживаем изменения состояния авторизации
watch(() => hasCheckedAuth.value, (hasChecked) => {
  if (hasChecked && !forumInitialized.value) { // Исправлено: forumInitialized вместо initialLoad
    loadForumData()
  }
})

// Проверяем при монтировании, была ли уже проверка авторизации
onMounted(() => {
  // Если авторизация уже была проверена в этой сессии, сразу загружаем данные
  if (isAuthChecked() && !forumInitialized.value) { // Исправлено: forumInitialized вместо initialLoad
    loadForumData()
  }
})

// Компьютед свойство для статистики категорий
const categoryStats = computed(() => {
  return categories.value.map(category => {
    const topics = topicsByCategory.value[category.id] || []
    const totalTopics = topics.length
    const totalComments = topics.reduce((sum, topic) => sum + topic.commentCount, 0)
    
    return {
      ...category,
      topicCount: totalTopics,
      commentCount: totalComments
    }
  })
})

// Загрузка категорий
const loadCategories = async () => {
  if (authLoading.value) return
  
  categoriesLoading.value = true
  try {
    const loadedCategories = await getCategories()
    if (loadedCategories.length === 0) {
      categories.value = forumCategories.map((cat, index) => ({
        id: cat.id,
        name: cat.name,
        description: cat.description,
        icon: cat.icon,
        order: cat.order,
        createdAt: new Date(),
        createdBy: 'system'
      }))
    } else {
      categories.value = loadedCategories
    }
    
    // Открываем первую категорию по умолчанию
    if (categories.value.length > 0) {
      openedCategories.value = [categories.value[0].id]
      await loadCategoryTopics(categories.value[0].id)
    }
  } catch (error) {
    console.error('Ошибка загрузки категорий:', error)
  } finally {
    categoriesLoading.value = false
  }
}

// Загрузка тем категории
const loadCategoryTopics = async (categoryId: string, loadMore = false) => {
  try {
    if (!loadMore) {
      loadingTopics.value[categoryId] = true
      topicsByCategory.value[categoryId] = []
    } else {
      loadingMore.value[categoryId] = true
    }

    const { topics, lastVisible } = await getTopicsByCategory(
      categoryId,
      10,
      loadMore ? lastVisibleByCategory.value[categoryId] : undefined
    )

    if (loadMore) {
      topicsByCategory.value[categoryId] = [
        ...(topicsByCategory.value[categoryId] || []),
        ...topics
      ]
    } else {
      topicsByCategory.value[categoryId] = topics
    }

    lastVisibleByCategory.value[categoryId] = lastVisible
    hasMoreTopics.value[categoryId] = topics.length === 10
  } catch (error) {
    console.error('Ошибка загрузки тем:', error)
  } finally {
    loadingTopics.value[categoryId] = false
    loadingMore.value[categoryId] = false
  }
}

// Получение тем для категории (с сортировкой)
const getTopicsForCategory = (categoryId: string): ForumTopic[] => {
  const topics = topicsByCategory.value[categoryId] || []
  
  if (sortBy.value === 'popular') {
    return [...topics].sort((a, b) => b.views - a.views)
  } else if (sortBy.value === 'commented') {
    return [...topics].sort((a, b) => b.commentCount - a.commentCount)
  } else {
    return [...topics].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }
}

// Загрузка дополнительных тем
const loadMoreTopics = (categoryId: string) => {
  loadCategoryTopics(categoryId, true)
}

// Переключение категории
const toggleCategory = async (categoryId: string) => {
  if (openedCategories.value.includes(categoryId)) {
    // Закрываем категорию
    openedCategories.value = openedCategories.value.filter(id => id !== categoryId)
  } else {
    // Открываем категорию
    openedCategories.value.push(categoryId)
    // Если темы еще не загружены, загружаем их
    if (!topicsByCategory.value[categoryId]) {
      await loadCategoryTopics(categoryId)
    }
  }
}

const isCategoryOpened = (categoryId: string) => {
  return openedCategories.value.includes(categoryId)
}

// Получение названия категории
const getCategoryName = (categoryId: string) => {
  const category = categories.value.find(c => c.id === categoryId)
  return category ? category.name : 'Неизвестная категория'
}

// Статистика категории
const getCategoryTopicCount = (categoryId: string) => {
  const topics = topicsByCategory.value[categoryId]
  return topics ? topics.length : 0
}

const getCategoryCommentCount = (categoryId: string) => {
  const topics = topicsByCategory.value[categoryId]
  return topics ? topics.reduce((sum, topic) => sum + topic.commentCount, 0) : 0
}

// Поиск тем
const performSearch = async () => {
  if (!searchQuery.value.trim()) return
  
  searchMode.value = true
  try {
    searchResults.value = await searchTopics(searchQuery.value)
  } catch (error) {
    console.error('Ошибка поиска:', error)
  }
}

const clearSearch = () => {
  searchMode.value = false
  searchQuery.value = ''
  searchResults.value = []
}

// Открытие темы
const openTopic = (topicId: string) => {
  router.push(`/forum/topic/${topicId}`)
}

// Создание темы
const createNewTopic = async () => {
  if (!isValidTopic.value || !user.value) return
  
  isSubmitting.value = true
  try {
    const tags = newTopic.tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
    
    const topicId = await createTopic(
      newTopic.title,
      newTopic.content,
      newTopic.categoryId,
      user.value.uid,
      user.value.displayName || user.value.email || 'Аноним',
      user.value.photoURL || undefined,
      tags
    )
    
    if (topicId) {
      // Обновляем список тем
      await loadCategoryTopics(newTopic.categoryId)
      // Очищаем форму
      resetTopicForm()
      showCreateTopic.value = false
      // Открываем созданную тему
      router.push(`/forum/topic/${topicId}`)
    }
  } catch (error) {
    console.error('Ошибка создания темы:', error)
    alert('Не удалось создать тему. Пожалуйста, попробуйте снова.')
  } finally {
    isSubmitting.value = false
  }
}

// Валидация темы
const isValidTopic = computed(() => {
  return (
    newTopic.categoryId &&
    newTopic.title.length >= 10 &&
    newTopic.content.length >= 30
  )
})

const resetTopicForm = () => {
  newTopic.categoryId = ''
  newTopic.title = ''
  newTopic.content = ''
  newTopic.tagsInput = ''
}

// Вспомогательные функции
const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const formatDate = (date: Date | string) => {
  const d = new Date(date)
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const formatRelativeTime = (date: Date | string) => {
  const d = new Date(date)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)
  
  if (diffMins < 60) {
    return `${diffMins} минут назад`
  } else if (diffHours < 24) {
    return `${diffHours} часов назад`
  } else if (diffDays < 7) {
    return `${diffDays} дней назад`
  } else {
    return formatDate(d)
  }
}

// Вставка текста в редактор
const insertText = (type: string) => {
  const textarea = document.querySelector('.form-textarea') as HTMLTextAreaElement
  if (!textarea) return
  
  const start = textarea.selectionStart
  const end = textarea.selectionEnd
  const selectedText = newTopic.content.substring(start, end)
  
  let newText = ''
  switch (type) {
    case 'bold':
      newText = `**${selectedText || 'жирный текст'}**`
      break
    case 'italic':
      newText = `*${selectedText || 'курсив'}*`
      break
    case 'quote':
      newText = `> ${selectedText || 'цитата'}`
      break
    case 'list':
      newText = `\n• ${selectedText || 'пункт списка'}`
      break
  }
  
  const before = newTopic.content.substring(0, start)
  const after = newTopic.content.substring(end)
  newTopic.content = before + newText + after
  
  // Фокус на textarea
  setTimeout(() => {
    textarea.focus()
    const newPosition = start + newText.length
    textarea.setSelectionRange(newPosition, newPosition)
  }, 0)
}

// Начать создание темы в определенной категории
const startTopicInCategory = (category: ForumCategory) => {
  if (!isAuthenticated) {
    openAuthModal()
    return
  }
  
  newTopic.categoryId = category.id
  showCreateTopic.value = true
}

// Открытие модального окна авторизации
const openAuthModal = () => {
  showAuthModal.value = true
}

const handleLoginSuccess = () => {
  showAuthModal.value = false
}
</script>>

<template>
  <div class="forum-page">
    <!-- Заголовок с навигацией -->
    <div class="forum-header">
      <h1>Педагогический форум</h1>
      <div class="forum-nav">
        <router-link to="/forum" class="nav-link" :class="{ active: $route.path === '/forum' }">
          Все категории
        </router-link>
        <router-link v-if="user" to="/forum/my-topics" class="nav-link">
          Мои темы
        </router-link>
        <router-link v-if="user" to="/forum/my-comments" class="nav-link">
          Мои комментарии
        </router-link>
      </div>
    </div>

    <!-- Индикатор загрузки ПРИМЕНИМО ТОЛЬКО ПРИ ПЕРВОМ ПОСЕЩЕНИИ -->
    <!-- ИСПРАВЛЕНО: было (authLoading && !initialLoad), стало authLoading -->
    <div v-if="authLoading" class="loading-section">
      <div class="loading-spinner"></div>
      <p>Проверка авторизации...</p>
    </div>

    <!-- Основной контент (показывается всегда, если не первая загрузка) -->
    <!-- ИСПРАВЛЕНО: было v-else, теперь нужно явное условие -->
    <div v-else-if="!authLoading">
      <!-- Блок поиска и создания темы -->
      <div v-if="isAuthenticated" class="forum-actions">
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchQuery" 
            @keyup.enter="performSearch"
            placeholder="Поиск по форуму..." 
            class="search-input"
          />
          <button class="search-btn" @click="performSearch">Найти</button>
        </div>
        <button class="create-topic-btn" @click="showCreateTopic = true">
          <span class="plus-icon">+</span>
          Новая тема
        </button>
      </div>
      <div v-else class="auth-required">
        <p>Чтобы создавать темы и участвовать в обсуждениях, пожалуйста <a @click="openAuthModal">войдите</a></p>
      </div>

      <!-- Режим поиска -->
      <div v-if="searchMode" class="search-results">
        <!-- ... остальное содержимое без изменений ... -->
      </div>

      <!-- Основной контент: категории и темы -->
      <div v-else class="forum-content">
        <!-- Индикатор загрузки при загрузке категорий -->
        <div v-if="categoriesLoading" class="loading-section">
          <div class="loading-spinner"></div>
          <p>Загрузка категорий...</p>
        </div>

        <!-- Категории -->
        <div v-else class="categories-section">
          <h2>Категории обсуждений</h2>
          <div class="categories-grid">
            <div 
              v-for="category in categories" 
              :key="category.id" 
              class="category-card"
              @click="toggleCategory(category.id)"
            >
              <div class="category-icon">
                <span>{{ category.icon }}</span>
              </div>
              <div class="category-content">
                <h3>{{ category.name }}</h3>
                <p>{{ category.description }}</p>
                <div class="category-stats">
                  <span class="topic-count">
                    <strong>{{ getCategoryTopicCount(category.id) }}</strong> тем
                  </span>
                  <span class="comment-count">
                    <strong>{{ getCategoryCommentCount(category.id) }}</strong> сообщений
                  </span>
                </div>
              </div>
              <div class="category-arrow" :class="{ rotated: isCategoryOpened(category.id) }">
                ▼
              </div>
            </div>
          </div>
        </div>

        <!-- Темы категории -->
        <div v-for="category in categories" :key="category.id">
          <div v-if="isCategoryOpened(category.id)" class="category-topics">
            <!-- ... остальное содержимое без изменений ... -->
          </div>
        </div>
      </div>
    </div>

    <!-- Модальное окно создания темы -->
    <div v-if="showCreateTopic" class="modal-overlay" @click.self="showCreateTopic = false">
      <!-- ... содержимое модального окна ... -->
    </div>

    <!-- Модальное окно авторизации -->
    <div v-if="showAuthModal" class="modal-overlay" @click.self="showAuthModal = false">
      <div class="modal-content auth-modal" @click.stop>
        <AuthModal @close="showAuthModal = false" @loginSuccess="handleLoginSuccess" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили остаются без изменений */
.forum-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.forum-header {
  margin-bottom: 2rem;
}

.forum-header h1 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2.5rem;
}

.forum-nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: #e9ecef;
  border-color: #dee2e6;
}

.nav-link.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

/* Индикатор загрузки */
.loading-section {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
  border: 1px solid #e9ecef;
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

.loading-section p {
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
}

.forum-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.search-box {
  flex: 1;
  display: flex;
  gap: 0.5rem;
  max-width: 500px;
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #42b883;
}

.search-btn, .create-topic-btn {
  padding: 0.75rem 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s;
}

.search-btn:hover, .create-topic-btn:hover {
  background: #369c6f;
}

.plus-icon {
  font-size: 1.2rem;
}

.auth-required {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.auth-required a {
  color: #42b883;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
}

.auth-required a:hover {
  text-decoration: underline;
}

/* Категории */
.categories-section {
  margin-bottom: 3rem;
}

.categories-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.category-card {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.category-card:hover {
  border-color: #42b883;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.category-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.category-content {
  flex: 1;
}

.category-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.category-content p {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.4;
  font-size: 0.95rem;
}

.category-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.category-stats strong {
  color: #42b883;
  font-weight: 600;
}

.category-arrow {
  color: #6c757d;
  transition: transform 0.3s ease;
  padding-top: 0.25rem;
}

.category-arrow.rotated {
  transform: rotate(180deg);
}

/* Темы */
.category-topics {
  margin: 2rem 0;
}

.topics-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.topics-header h3 {
  color: #2c3e50;
  margin: 0;
}

.sort-select {
  padding: 0.5rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  background: white;
  font-size: 0.9rem;
}

.loading-topics {
  text-align: center;
  padding: 3rem;
}

.spinner {
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

.topics-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.topic-card {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;
}

.topic-card:hover {
  border-color: #42b883;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.1);
}

.topic-card.pinned {
  border-left: 4px solid #ffd700;
  background: #fffef0;
}

.topic-main {
  flex: 1;
  cursor: pointer;
}

.topic-header {
  margin-bottom: 1rem;
}

.pin-icon {
  color: #ffd700;
  margin-right: 0.5rem;
}

.topic-title {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

.topic-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.topic-tag {
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.topic-content-preview {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.topic-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.topic-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.9rem;
}

.topic-date {
  color: #6c757d;
  font-size: 0.8rem;
}

.topic-stats {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  min-width: 150px;
  cursor: pointer;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  min-width: 80px;
}

.stat-value {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1rem;
}

.stat-label {
  color: #6c757d;
  font-size: 0.8rem;
}

.last-activity {
  text-align: right;
  font-size: 0.85rem;
  color: #6c757d;
}

.activity-label {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.load-more-wrapper {
  text-align: center;
  margin-top: 2rem;
}

.load-more-btn {
  padding: 0.75rem 2rem;
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  color: #495057;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.load-more-btn:hover:not(:disabled) {
  background: #e9ecef;
  border-color: #dee2e6;
}

.load-more-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner-small {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #42b883;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

.no-topics {
  text-align: center;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 12px;
}

.create-first-topic-btn {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

/* Поиск */
.search-results {
  margin-bottom: 3rem;
}

.search-results h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.back-btn {
  background: none;
  border: none;
  color: #42b883;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  padding: 0;
}

.back-btn:hover {
  text-decoration: underline;
}

.search-results-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-result-item {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.search-result-item:hover {
  border-color: #42b883;
  transform: translateY(-2px);
}

.result-category {
  display: inline-block;
  background: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}

.result-title {
  color: #2c3e50;
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
}

.result-preview {
  color: #6c757d;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.result-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #6c757d;
  flex-wrap: wrap;
}

.result-author {
  font-weight: 500;
}

.no-results {
  text-align: center;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 12px;
}

/* Модальные окна */
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

.modal-content {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 2px solid #e9ecef;
}

.modal-header h3 {
  margin: 0;
  color: #2c3e50;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: #6c757d;
  cursor: pointer;
  line-height: 1;
}

.topic-form {
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  box-sizing: border-box;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #42b883;
}

.form-textarea {
  resize: vertical;
}

.form-hint {
  font-size: 0.85rem;
  color: #6c757d;
  margin-top: 0.5rem;
}

.editor-toolbar {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.editor-toolbar button {
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.editor-toolbar button:hover {
  background: #e9ecef;
}

.editor-preview {
  margin-top: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.preview-label {
  font-weight: 500;
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.preview-content {
  line-height: 1.5;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #42b883;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #369c6f;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #5a6268;
}

@media (max-width: 768px) {
  .forum-page {
    padding: 1rem;
  }
  
  .forum-header h1 {
    font-size: 2rem;
  }
  
  .forum-nav {
    flex-direction: column;
    align-items: stretch;
  }
  
  .forum-actions {
    flex-direction: column;
  }
  
  .search-box {
    max-width: none;
  }
  
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .topic-card {
    flex-direction: column;
    gap: 1rem;
  }
  
  .topic-stats {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  
  .modal-content {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
}
</style>