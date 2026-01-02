<template>
  <div class="forum-topic-page">
    <!-- Хлебные крошки -->
    <nav class="breadcrumbs">
      <router-link to="/forum">Форум</router-link>
      <span>›</span>
      <router-link :to="`/forum?category=${topic?.categoryId}`">
        {{ getCategoryName(topic?.categoryId) }}
      </router-link>
      <span>›</span>
      <span>Тема</span>
    </nav>

    <!-- Заголовок темы -->
    <div class="topic-header">
      <h1>{{ topic?.title }}</h1>
      <div class="topic-meta">
        <div class="author-info">
          <div class="author-avatar" v-if="topic?.authorPhoto">
            <img :src="topic.authorPhoto" :alt="topic.authorName" />
          </div>
          <div class="author-details">
            <span class="author-name">{{ topic?.authorName }}</span>
            <span class="topic-date">{{ formatDate(topic?.createdAt) }}</span>
          </div>
        </div>
        <div class="topic-stats">
          <span class="stat">
            <span class="stat-value">{{ topic?.views || 0 }}</span>
            <span class="stat-label">просмотров</span>
          </span>
          <span class="stat">
            <span class="stat-value">{{ topic?.commentCount || 0 }}</span>
            <span class="stat-label">комментариев</span>
          </span>
        </div>
      </div>
      <!-- ИСПРАВЛЕНО: Добавлена проверка на существование tags -->
      <div class="topic-tags" v-if="topic?.tags && topic.tags.length > 0">
        <span 
          v-for="tag in (topic?.tags || [])" 
          :key="tag" 
          class="topic-tag"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Контент темы -->
    <div class="topic-content">
      <div class="content-container" v-html="renderMarkdown(topic?.content || '')"></div>
    </div>

    <!-- Комментарии -->
    <div class="comments-section">
      <div class="comments-header">
        <h2>Комментарии ({{ comments.length }})</h2>
        <button 
          v-if="isAuthenticated && !topic?.isClosed" 
          class="add-comment-btn" 
          @click="showCommentForm = true"
        >
          + Добавить комментарий
        </button>
        <div v-else-if="topic?.isClosed" class="topic-closed">
          📌 Тема закрыта для комментариев
        </div>
      </div>

      <!-- Форма комментария -->
      <div v-if="showCommentForm && isAuthenticated" class="comment-form">
        <div class="form-header">
          <h3>Ваш комментарий</h3>
          <button class="close-form-btn" @click="showCommentForm = false">×</button>
        </div>
        <textarea 
          v-model="newComment.content" 
          placeholder="Напишите ваш комментарий..." 
          rows="4"
          class="comment-textarea"
        ></textarea>
        <div class="form-actions">
          <button type="button" class="btn-secondary" @click="showCommentForm = false">
            Отмена
          </button>
          <button 
            type="submit" 
            class="btn-primary" 
            @click="submitComment"
            :disabled="!newComment.content.trim() || isSubmitting"
          >
            <span v-if="isSubmitting" class="spinner-small"></span>
            {{ isSubmitting ? 'Отправка...' : 'Отправить' }}
          </button>
        </div>
      </div>

      <!-- Список комментариев -->
      <div v-if="loadingComments" class="loading-comments">
        <div class="spinner"></div>
        <p>Загрузка комментариев...</p>
      </div>

      <div v-else-if="comments.length === 0" class="no-comments">
        <p>Пока нет комментариев. Будьте первым!</p>
      </div>

      <div v-else class="comments-list">
        <div 
          v-for="comment in comments" 
          :key="comment.id" 
          class="comment-item"
          :class="{ 'is-author': comment.authorId === topic?.authorId }"
        >
          <div class="comment-header">
            <div class="comment-author">
              <div class="author-avatar" v-if="comment.authorPhoto">
                <img :src="comment.authorPhoto" :alt="comment.authorName" />
              </div>
              <div class="author-info">
                <span class="author-name">{{ comment.authorName }}</span>
                <span class="author-role" v-if="comment.authorRole">
                  {{ getRoleText(comment.authorRole) }}
                </span>
                <span class="comment-date">{{ formatRelativeTime(comment.createdAt) }}</span>
                <span v-if="comment.isEdited" class="edited-label">(изменено)</span>
              </div>
            </div>
            <div class="comment-actions" v-if="isAuthenticated">
              <button 
                class="like-btn" 
                @click="toggleLike(comment)"
                :class="{ liked: comment.likes?.includes(user?.uid || '') }"
              >
                <span class="like-icon">♥</span>
                <span class="like-count">{{ comment.likes?.length || 0 }}</span>
              </button>
              <button 
                v-if="canEditComment(comment)" 
                class="edit-btn" 
                @click="editComment(comment)"
              >
                ✎
              </button>
            </div>
          </div>
          
          <div class="comment-content">
            <div v-if="editingCommentId === comment.id" class="edit-comment-form">
              <textarea 
                v-model="editingCommentContent" 
                rows="3"
                class="edit-textarea"
              ></textarea>
              <div class="edit-actions">
                <button type="button" class="btn-secondary" @click="cancelEdit">
                  Отмена
                </button>
                <button 
                  type="button" 
                  class="btn-primary" 
                  @click="saveEdit(comment)"
                  :disabled="!editingCommentContent.trim()"
                >
                  Сохранить
                </button>
              </div>
            </div>
            <div v-else v-html="renderMarkdown(comment.content)"></div>
          </div>
        </div>
      </div>

      <!-- Пагинация комментариев -->
      <div v-if="hasMoreComments" class="load-more-comments">
        <button 
          class="load-more-btn" 
          @click="loadMoreComments"
          :disabled="loadingMoreComments"
        >
          <span v-if="loadingMoreComments" class="spinner-small"></span>
          {{ loadingMoreComments ? 'Загрузка...' : 'Загрузить ещё комментарии' }}
        </button>
      </div>
    </div>

    <!-- Кнопка входа для неавторизованных -->
    <div v-if="!isAuthenticated" class="auth-required-comments">
      <p>Чтобы оставлять комментарии, пожалуйста <a @click="openAuthModal">войдите</a></p>
    </div>

    <!-- Модальное окно авторизации -->
    <div v-if="showAuthModal" class="modal-overlay" @click.self="showAuthModal = false">
      <div class="modal-content auth-modal" @click.stop>
        <AuthModal @close="showAuthModal = false" @loginSuccess="handleLoginSuccess" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import AuthModal from '@/components/AuthModal.vue'
import { 
  getTopic, 
  getCommentsByTopic, 
  createComment, 
  toggleLikeComment,
  updateComment
} from '@/firebase/forumService'
import type { ForumTopic, ForumComment } from '@/firebase/types'
import DOMPurify from 'dompurify'

const route = useRoute()
const router = useRouter()
const { user, isAuthenticated } = useAuth()

// Безопасные computed свойства для пользователя
const currentUserId = computed(() => user.value?.uid || '')
const currentUserRole = computed(() => (user.value as any)?.role || 'user')
const currentUserName = computed(() => 
  user.value?.displayName || user.value?.email || 'Аноним'
)
const currentUserPhoto = computed(() => user.value?.photoURL || undefined)

const topic = ref<ForumTopic | null>(null)
const comments = ref<ForumComment[]>([])
const loadingTopic = ref(true)
const loadingComments = ref(true)
const loadingMoreComments = ref(false)
const showCommentForm = ref(false)
const showAuthModal = ref(false)
const isSubmitting = ref(false)
const editingCommentId = ref<string | null>(null)
const editingCommentContent = ref('')

// Пагинация
const lastVisibleComment = ref<any>(null)
const hasMoreComments = ref(true)

// Новый комментарий
const newComment = reactive({
  content: ''
})

onMounted(() => {
  loadTopic()
  loadComments()
})

const topicId = computed(() => route.params.id as string)

// Загрузка темы
const loadTopic = async () => {
  try {
    loadingTopic.value = true
    const loadedTopic = await getTopic(topicId.value)
    
    if (!loadedTopic) {
      router.push('/forum')
      return
    }
    
    topic.value = loadedTopic
  } catch (error) {
    console.error('Ошибка загрузки темы:', error)
    router.push('/forum')
  } finally {
    loadingTopic.value = false
  }
}

// Загрузка комментариев
const loadComments = async (loadMore = false) => {
  try {
    if (!loadMore) {
      loadingComments.value = true
      comments.value = []
    } else {
      loadingMoreComments.value = true
    }

    const { comments: loadedComments, lastVisible } = await getCommentsByTopic(
      topicId.value,
      20,
      loadMore ? lastVisibleComment.value : undefined
    )

    if (loadMore) {
      comments.value = [...comments.value, ...loadedComments]
    } else {
      comments.value = loadedComments
    }

    lastVisibleComment.value = lastVisible
    hasMoreComments.value = loadedComments.length === 20
  } catch (error) {
    console.error('Ошибка загрузки комментариев:', error)
  } finally {
    loadingComments.value = false
    loadingMoreComments.value = false
  }
}

const loadMoreComments = () => {
  loadComments(true)
}

// Проверка лайков
const isCommentLiked = (comment: ForumComment) => {
  if (!currentUserId.value || !comment.likes) return false
  return comment.likes.includes(currentUserId.value)
}

// Отправка комментария
const submitComment = async () => {
  if (!isAuthenticated.value || !topic.value || !newComment.content.trim()) {
    openAuthModal()
    return
  }
  
  isSubmitting.value = true
  try {
    const commentId = await createComment(
      topicId.value,
      newComment.content,
      currentUserId.value,
      currentUserName.value,
      currentUserPhoto.value,
      currentUserRole.value
    )
    
    if (commentId) {
      await loadComments()
      newComment.content = ''
      showCommentForm.value = false
    }
  } catch (error) {
    console.error('Ошибка отправки комментария:', error)
    alert('Не удалось отправить комментарий. Попробуйте снова.')
  } finally {
    isSubmitting.value = false
  }
}

// Лайк комментария
const toggleLike = async (comment: ForumComment) => {
  if (!isAuthenticated.value || !currentUserId.value) {
    openAuthModal()
    return
  }

  try {
    const liked = await toggleLikeComment(comment.id, currentUserId.value)
    
    const commentIndex = comments.value.findIndex(c => c.id === comment.id)
    if (commentIndex !== -1) {
      const currentLikes = comment.likes || []
      comments.value[commentIndex].likes = liked
        ? [...currentLikes, currentUserId.value]
        : currentLikes.filter(id => id !== currentUserId.value)
    }
  } catch (error) {
    console.error('Ошибка лайка:', error)
  }
}

// Редактирование комментария
const editComment = (comment: ForumComment) => {
  if (!canEditComment(comment)) return
  
  editingCommentId.value = comment.id
  editingCommentContent.value = comment.content
}

const saveEdit = async (comment: ForumComment) => {
  if (!editingCommentContent.value.trim()) return
  
  try {
    await updateComment(comment.id, editingCommentContent.value)
    
    const commentIndex = comments.value.findIndex(c => c.id === comment.id)
    if (commentIndex !== -1) {
      comments.value[commentIndex].content = editingCommentContent.value
      comments.value[commentIndex].isEdited = true
      comments.value[commentIndex].updatedAt = new Date()
    }
    
    cancelEdit()
  } catch (error) {
    console.error('Ошибка редактирования:', error)
    alert('Не удалось сохранить изменения')
  }
}

const cancelEdit = () => {
  editingCommentId.value = null
  editingCommentContent.value = ''
}

// Проверка прав на редактирование
const canEditComment = (comment: ForumComment) => {
  if (!isAuthenticated.value || !currentUserId.value) return false
  return comment.authorId === currentUserId.value || currentUserRole.value === 'admin'
}

// Вспомогательные функции
const getCategoryName = (categoryId?: string) => {
  const categories: Record<string, string> = {
    'methodology': 'Методические вопросы',
    'programs': 'Рабочие программы',
    'extracurricular': 'Внеурочная деятельность',
    'exams': 'Подготовка к ОГЭ/ЕГЭ',
    'inclusive': 'Инклюзивное образование',
    'digital': 'Цифровые технологии'
  }
  return categoryId ? categories[categoryId] || 'Неизвестная категория' : ''
}

const getRoleText = (role?: string) => {
  const roles: Record<string, string> = {
    'teacher': 'Учитель',
    'student': 'Ученик',
    'user': 'Пользователь',
    'admin': 'Администратор'
  }
  return role ? roles[role] || role : ''
}

const formatDate = (date?: Date | string) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
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

const renderMarkdown = (text: string) => {
  if (!text) return ''
  
  let html = DOMPurify.sanitize(text)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> (.*$)/gm, '<blockquote>$1</blockquote>')
    .replace(/\n/g, '<br>')
  
  return html
}

const openAuthModal = () => {
  showAuthModal.value = true
}

const handleLoginSuccess = () => {
  showAuthModal.value = false
}
</script>

<style scoped>
.forum-topic-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.breadcrumbs a {
  color: #42b883;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}

.breadcrumbs span:not(:last-child) {
  color: #6c757d;
}

.topic-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e9ecef;
}

.topic-header h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.3;
}

.topic-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: #2c3e50;
}

.topic-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.topic-stats {
  display: flex;
  gap: 1.5rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.stat-value {
  font-weight: 600;
  color: #42b883;
  font-size: 1.1rem;
}

.stat-label {
  color: #6c757d;
  font-size: 0.8rem;
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
  font-size: 0.9rem;
}

.topic-content {
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 2px solid #e9ecef;
}

.content-container {
  line-height: 1.6;
  color: #2c3e50;
}

.content-container :deep(strong) {
  color: #2c3e50;
}

.content-container :deep(em) {
  color: #495057;
}

.content-container :deep(blockquote) {
  border-left: 4px solid #42b883;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #6c757d;
  font-style: italic;
}

.comments-section {
  margin-top: 3rem;
}

.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e9ecef;
}

.comments-header h2 {
  color: #2c3e50;
  margin: 0;
}

.add-comment-btn {
  padding: 0.75rem 1.5rem;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
}

.add-comment-btn:hover {
  background: #369c6f;
}

.topic-closed {
  padding: 0.75rem 1.5rem;
  background: #fff3cd;
  color: #856404;
  border-radius: 8px;
  font-weight: 500;
}

.comment-form {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.form-header h3 {
  margin: 0;
  color: #2c3e50;
}

.close-form-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6c757d;
  cursor: pointer;
  line-height: 1;
}

.comment-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.comment-textarea:focus {
  outline: none;
  border-color: #42b883;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 0.75rem 1.5rem;
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

.loading-comments {
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

.no-comments {
  text-align: center;
  padding: 3rem;
  background: #f8f9fa;
  border-radius: 12px;
  color: #6c757d;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment-item {
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.3s;
}

.comment-item:hover {
  border-color: #42b883;
}

.comment-item.is-author {
  border-left: 4px solid #42b883;
  background: #f8fff8;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.comment-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.comment-author .author-avatar {
  width: 40px;
  height: 40px;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: #2c3e50;
}

.author-role {
  font-size: 0.8rem;
  color: #42b883;
  font-weight: 500;
}

.comment-date, .edited-label {
  color: #6c757d;
  font-size: 0.8rem;
}

.comment-actions {
  display: flex;
  gap: 0.5rem;
}

.like-btn, .edit-btn {
  background: none;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s;
}

.like-btn:hover {
  border-color: #ff6b6b;
}

.like-btn.liked {
  background: #ff6b6b;
  border-color: #ff6b6b;
  color: white;
}

.like-icon {
  font-size: 0.9rem;
}

.like-count {
  font-size: 0.8rem;
}

.edit-btn:hover {
  border-color: #42b883;
  color: #42b883;
}

.comment-content {
  line-height: 1.6;
  color: #2c3e50;
}

.edit-comment-form {
  margin-top: 1rem;
}

.edit-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.edit-textarea:focus {
  outline: none;
  border-color: #42b883;
}

.edit-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.load-more-comments {
  text-align: center;
  margin-top: 2rem;
}

.load-more-btn {
  padding: 0.75rem 1.5rem;
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

.auth-required-comments {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}

.auth-required-comments a {
  color: #42b883;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
}

.auth-required-comments a:hover {
  text-decoration: underline;
}

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

.modal-content.auth-modal {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .forum-topic-page {
    padding: 1rem;
  }
  
  .topic-header h1 {
    font-size: 1.5rem;
  }
  
  .topic-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .topic-stats {
    width: 100%;
    justify-content: space-around;
  }
  
  .comments-header {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .comment-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .comment-actions {
    align-self: flex-end;
  }
}
</style>