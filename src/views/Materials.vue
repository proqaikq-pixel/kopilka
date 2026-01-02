<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { useAuth } from '@/composables/useAuth' // Изменено: используем существующий useAuth
import { useRouter } from 'vue-router'

const router = useRouter()

// Инициализация Supabase клиента
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey)

// Используем композейбл для аутентификации - ИЗМЕНЕНО
const { user, isAuthenticated, signOut, isLoading: authLoading } = useAuth()

interface Material {
  id: number
  title: string
  description: string
  type: string
  subject: string
  grade: string
  author: string
  fileSize: string
  fileName: string
  fileUrl: string
  uploadDate: string
  views: number
  downloads: number
  rating: number
  ratingCount: number
  tags: string[]
  fileFormat?: string
  duration?: string
  pages?: number
}

interface UploadMaterialData {
  title: string
  description: string
  type: string
  subject: string
  grade: string
  author: string
  file: File | null
}

// Реактивные данные
const searchQuery = ref('')
const selectedCategory = ref('')
const selectedSubject = ref('')
const selectedGrade = ref('')
const showUploadModal = ref(false)
const showViewModal = ref(false)
const showAdvancedFilters = ref(false)
const isLoading = ref(false)
const isUploading = ref(false)
const currentPage = ref(1)
const itemsPerPage = ref(12)
const currentViewMaterial = ref<Material | null>(null)

// Уведомления
const notification = ref<{
  type: 'success' | 'error' | 'info'
  message: string
  show: boolean
}>({
  type: 'info',
  message: '',
  show: false
})

// Данные для новой загрузки
const newMaterial: Ref<UploadMaterialData> = ref({
  title: '',
  description: '',
  type: '',
  subject: '',
  grade: '',
  author: '',
  file: null
})

const formErrors = ref<Record<string, string>>({})

// Данные материалов
const materials: Ref<Material[]> = ref([])

// Вычисляемые свойства
const filteredMaterials = computed(() => {
  const filtered = materials.value.filter(material => {
    const matchesSearch = searchQuery.value === '' || 
      material.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      material.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      material.tags?.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    const matchesCategory = !selectedCategory.value || material.type === selectedCategory.value
    const matchesSubject = !selectedSubject.value || material.subject === selectedSubject.value
    const matchesGrade = !selectedGrade.value || material.grade === selectedGrade.value
    
    return matchesSearch && matchesCategory && matchesSubject && matchesGrade
  })
  
  return filtered
})

const paginatedMaterials = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredMaterials.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredMaterials.value.length / itemsPerPage.value)
})

const popularMaterials = computed(() => {
  return [...materials.value]
    .sort((a, b) => b.views - a.views)
    .slice(0, 3)
})

// Вспомогательные функции
const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
  notification.value = { type, message, show: true }
  setTimeout(() => {
    notification.value.show = false
  }, 3000)
}

const getTypeLabel = (type: string) => {
  const typeLabels: Record<string, string> = {
    'lesson-plans': '📝 План урока',
    'presentations': '📊 Презентация',
    'worksheets': '📄 Рабочий лист',
    'methodology': '📚 Методичка',
    'assessment': '📝 Контрольная',
    'video': '🎬 Видеоурок'
  }
  return typeLabels[type] || type
}

const getFileIcon = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase()
  const icons: Record<string, string> = {
    pdf: '📕',
    doc: '📘',
    docx: '📘',
    ppt: '📊',
    pptx: '📊',
    xls: '📈',
    xlsx: '📈',
    txt: '📃',
    mp4: '🎬',
    mp3: '🎧',
    zip: '📦',
    rar: '📦'
  }
  return icons[ext || ''] || '📎'
}

const getFileFormat = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toUpperCase()
  return ext || 'ФАЙЛ'
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
}

const formatDateTime = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Б'
  const k = 1024
  const sizes = ['Б', 'КБ', 'МБ', 'ГБ']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const validateForm = (): boolean => {
  formErrors.value = {}
  
  if (!newMaterial.value.title.trim()) {
    formErrors.value.title = 'Введите название материала'
  }
  
  if (!newMaterial.value.type) {
    formErrors.value.type = 'Выберите тип материала'
  }
  
  if (!newMaterial.value.subject) {
    formErrors.value.subject = 'Выберите предмет'
  }
  
  if (!newMaterial.value.file) {
    formErrors.value.file = 'Выберите файл для загрузки'
  } else {
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (newMaterial.value.file.size > maxSize) {
      formErrors.value.file = 'Файл слишком большой (макс. 50MB)'
    }
  }
  
  return Object.keys(formErrors.value).length === 0
}

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    newMaterial.value.file = target.files[0]
    formErrors.value.file = ''
  }
}

// Обработчик клика по кнопке загрузки с проверкой аутентификации
const handleUploadClick = () => {
  if (!isAuthenticated.value) {
    showNotification('info', 'Для загрузки материалов необходимо войти в систему')
    // Вместо перехода на страницу входа, показываем модальное окно в App.vue
    // Нужно эмитнуть событие или использовать глобальное состояние
    // Пока просто показываем уведомление
    showNotification('info', 'Пожалуйста, войдите в систему через кнопку входа в верхней панели')
    return
  }
  showUploadModal.value = true
  
  // Автоматически заполняем имя автора, если пользователь авторизован
  if (user.value && user.value.displayName) {
    newMaterial.value.author = user.value.displayName
  } else if (user.value && user.value.email) {
    newMaterial.value.author = user.value.email.split('@')[0]
  }
}

const uploadMaterial = async () => {
  if (!validateForm()) {
    showNotification('error', 'Заполните все обязательные поля правильно')
    return
  }
  
  // Дополнительная проверка аутентификации перед загрузкой
  if (!isAuthenticated.value) {
    showNotification('error', 'Для загрузки материалов необходимо войти в систему')
    return
  }
  
  isUploading.value = true
  
  try {
    const file = newMaterial.value.file!
    
    // 1. Генерируем уникальное имя файла
    const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`
    
    // 2. Загружаем файл в Supabase Storage
    const { data: fileData, error: uploadError } = await supabase.storage
      .from('materials')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })
    
    if (uploadError) {
      console.error('Ошибка загрузки файла:', uploadError)
      throw new Error(`Ошибка загрузки файла: ${uploadError.message}`)
    }
    
    // 3. Получаем публичный URL файла
    const { data: { publicUrl } } = supabase.storage
      .from('materials')
      .getPublicUrl(fileName)
    
    // 4. Определяем дополнительные метаданные с явным указанием типа
    interface AdditionalData {
      duration?: string
      pages?: number
    }
    
    const additionalData: AdditionalData = {}
    
    if (file.type.includes('video')) {
      additionalData.duration = '45 мин'
    }
    
    if (file.type.includes('pdf') || file.type.includes('document')) {
      additionalData.pages = Math.floor(Math.random() * 30) + 10
    }
    
    // 5. Используем данные текущего пользователя для автора
    let authorName = 'Анонимный автор'
    if (user.value) {
      if (user.value.displayName) {
        authorName = user.value.displayName
      } else if (user.value.email) {
        authorName = user.value.email.split('@')[0]
      }
    }
    
    // 6. Подготавливаем данные для базы
    const materialData = {
      title: newMaterial.value.title,
      description: newMaterial.value.description || '',
      type: newMaterial.value.type,
      subject: newMaterial.value.subject,
      grade: newMaterial.value.grade || '',
      author: authorName,
      file_size: formatFileSize(file.size),
      file_name: file.name,
      file_url: publicUrl,
      file_format: getFileFormat(file.name),
      views: 0,
      downloads: 0,
      rating: 0,
      rating_count: 0,
      tags: [],
      upload_date: new Date().toISOString(),
      ...additionalData
    }
    
    // 7. Сохраняем в базу данных
    const { data: dbData, error: dbError } = await supabase
      .from('materials')
      .insert([materialData])
      .select()
    
    if (dbError) {
      console.error('Ошибка сохранения в базу:', dbError)
      throw new Error(`Ошибка сохранения данных: ${dbError.message}`)
    }
    
    // 8. Добавляем в локальное состояние
    if (dbData && dbData[0]) {
      const newMaterialData: Material = {
        id: dbData[0].id,
        title: dbData[0].title,
        description: dbData[0].description,
        type: dbData[0].type,
        subject: dbData[0].subject,
        grade: dbData[0].grade,
        author: dbData[0].author,
        fileSize: dbData[0].file_size,
        fileName: dbData[0].file_name,
        fileUrl: dbData[0].file_url,
        uploadDate: dbData[0].upload_date || new Date().toISOString(),
        views: dbData[0].views,
        downloads: dbData[0].downloads,
        rating: parseFloat(dbData[0].rating) || 0,
        ratingCount: dbData[0].rating_count,
        tags: dbData[0].tags || [],
        fileFormat: dbData[0].file_format,
        duration: dbData[0].duration,
        pages: dbData[0].pages
      }
      
      materials.value.unshift(newMaterialData)
    }
    
    // 9. Сохраняем в localStorage для резервного копирования
    try {
      localStorage.setItem('materials', JSON.stringify(materials.value))
    } catch (storageError) {
      console.warn('Не удалось сохранить в localStorage:', storageError)
    }
    
    showNotification('success', 'Материал успешно загружен!')
    showUploadModal.value = false
    resetUploadForm()
    
  } catch (error: any) {
    console.error('Ошибка при загрузке материала:', error)
    
    let errorMessage = 'Ошибка при загрузке материала'
    if (error.message) {
      errorMessage = error.message
    }
    
    showNotification('error', errorMessage)
    
    // Запасной вариант: сохраняем локально при ошибке
    try {
      // Получаем имя пользователя для локального сохранения
      let authorName = 'Анонимный автор'
      if (user.value) {
        if (user.value.displayName) {
          authorName = user.value.displayName
        } else if (user.value.email) {
          authorName = user.value.email.split('@')[0]
        }
      }
      
      const fallbackMaterial: Material = {
        id: Date.now(),
        title: newMaterial.value.title,
        description: newMaterial.value.description || '',
        type: newMaterial.value.type,
        subject: newMaterial.value.subject,
        grade: newMaterial.value.grade || '',
        author: authorName,
        fileSize: formatFileSize(newMaterial.value.file?.size || 0),
        fileName: newMaterial.value.file?.name || '',
        fileUrl: '',
        uploadDate: new Date().toISOString(),
        views: 0,
        downloads: 0,
        rating: 0,
        ratingCount: 0,
        tags: [],
        fileFormat: getFileFormat(newMaterial.value.file?.name || '')
      }
      
      materials.value.unshift(fallbackMaterial)
      localStorage.setItem('materials', JSON.stringify(materials.value))
      
      showNotification('info', 'Материал сохранен локально (загрузить онлайн не удалось)')
    } catch (fallbackError) {
      console.error('Ошибка резервного сохранения:', fallbackError)
    }
    
  } finally {
    isUploading.value = false
  }
}

const resetUploadForm = () => {
  newMaterial.value = {
    title: '',
    description: '',
    type: '',
    subject: '',
    grade: '',
    author: '',
    file: null
  }
  formErrors.value = {}
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  selectedSubject.value = ''
  selectedGrade.value = ''
  currentPage.value = 1
}

const downloadFile = async (material: Material) => {
  try {
    // 1. Проверяем наличие URL файла
    if (material.fileUrl) {
      // 2. Используем прямой URL для скачивания
      const a = document.createElement('a')
      a.href = material.fileUrl
      a.download = material.fileName
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } else {
      // 3. Если URL нет, создаем временный blob
      const blob = new Blob(['Содержимое файла ' + material.fileName], { 
        type: 'application/octet-stream' 
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = material.fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
    
    // 4. Обновляем счетчик скачиваний в Supabase
    const { error } = await supabase
      .from('materials')
      .update({ downloads: material.downloads + 1 })
      .eq('id', material.id)
    
    if (!error) {
      material.downloads++
      // Обновляем локальное состояние
      const index = materials.value.findIndex(m => m.id === material.id)
      if (index !== -1) {
        materials.value[index] = { ...material }
      }
    }
    
    showNotification('success', `Файл "${material.fileName}" начал скачиваться`)
    
  } catch (error) {
    console.error('Ошибка при скачивании файла:', error)
    showNotification('error', 'Ошибка при скачивании файла')
  }
}

const viewMaterial = async (material: Material) => {
  try {
    // 1. Обновляем счетчик просмотров в Supabase
    const { error } = await supabase
      .from('materials')
      .update({ views: material.views + 1 })
      .eq('id', material.id)
    
    if (!error) {
      material.views++
      // Обновляем локальное состояние
      const index = materials.value.findIndex(m => m.id === material.id)
      if (index !== -1) {
        materials.value[index] = { ...material }
      }
    }
  } catch (error) {
    console.error('Ошибка при обновлении просмотров:', error)
  }
  
  currentViewMaterial.value = material
  showViewModal.value = true
}

const closeViewModal = () => {
  showViewModal.value = false
  currentViewMaterial.value = null
}

const rateMaterial = async (material: Material, rating: number) => {
  try {
    const oldRating = material.rating
    const oldCount = material.ratingCount
    
    const newRatingCount = oldCount + 1
    const newRating = ((oldRating * oldCount) + rating) / newRatingCount
    
    // 1. Обновляем в Supabase
    const { error } = await supabase
      .from('materials')
      .update({ 
        rating: newRating,
        rating_count: newRatingCount
      })
      .eq('id', material.id)
    
    if (error) throw error
    
    // 2. Обновляем локальное состояние
    material.ratingCount = newRatingCount
    material.rating = newRating
    
    // Находим и обновляем материал в массиве
    const index = materials.value.findIndex(m => m.id === material.id)
    if (index !== -1) {
      materials.value[index] = { ...material }
    }
    
    showNotification('success', 'Спасибо за вашу оценку!')
    
  } catch (error) {
    console.error('Ошибка при оценке материала:', error)
    showNotification('error', 'Ошибка при отправке оценки')
  }
}

const loadMaterials = async () => {
  isLoading.value = true
  
  try {
    // 1. Загружаем данные из Supabase
    const { data, error } = await supabase
      .from('materials')
      .select('*')
      .order('upload_date', { ascending: false })
    
    if (error) throw error
    
    // Используем другую переменную, чтобы не конфликтовать с const data выше
    let materialsData = data || []
    
    // 2. Добавляем демо-данные только если база пустая
    if (materialsData.length === 0) {
      const initialMaterials: Material[] = [
        {
          id: 1,
          title: 'Урок математики: Дроби и проценты',
          description: 'Разработка урока для 6 класса с интерактивными заданиями и методическими рекомендациями',
          type: 'lesson-plans',
          subject: 'Математика',
          grade: '6',
          author: 'Иванова А.С.',
          fileSize: '2.4 MB',
          fileName: 'урок-дроби-проценты.docx',
          fileUrl: '',
          uploadDate: '2024-01-15T10:30:00',
          views: 245,
          downloads: 187,
          rating: 4.7,
          ratingCount: 42,
          tags: ['дроби', 'проценты', 'математика', '6 класс', 'упражнения'],
          fileFormat: 'DOCX',
          pages: 15
        },
        {
          id: 2,
          title: 'Презентация: Великая Отечественная война',
          description: 'Интерактивная презентация с хронологией основных событий, картами и фотографиями',
          type: 'presentations',
          subject: 'История',
          grade: '9',
          author: 'Петров В.И.',
          fileSize: '5.1 MB',
          fileName: 'великая-отечественная-война.pptx',
          fileUrl: '',
          uploadDate: '2024-01-14T14:20:00',
          views: 512,
          downloads: 389,
          rating: 4.9,
          ratingCount: 67,
          tags: ['история', 'война', 'презентация', '9 класс', 'хронология'],
          fileFormat: 'PPTX',
          pages: 28
        }
      ]
      
      // 3. Сохраняем демо-данные в Supabase
      for (const material of initialMaterials) {
        await supabase
          .from('materials')
          .insert({
            title: material.title,
            description: material.description,
            type: material.type,
            subject: material.subject,
            grade: material.grade,
            author: material.author,
            file_size: material.fileSize,
            file_name: material.fileName,
            file_url: material.fileUrl,
            file_format: material.fileFormat,
            pages: material.pages,
            views: material.views,
            downloads: material.downloads,
            rating: material.rating,
            rating_count: material.ratingCount,
            tags: material.tags,
            upload_date: material.uploadDate
          })
      }
      
      // 4. Перезагружаем данные
      const { data: newData } = await supabase
        .from('materials')
        .select('*')
        .order('upload_date', { ascending: false })
      
      materialsData = newData || []
    }
    
    // 5. Преобразуем данные из Supabase в наш формат
    materials.value = materialsData.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description || '',
      type: item.type,
      subject: item.subject,
      grade: item.grade || '',
      author: item.author,
      fileSize: item.file_size,
      fileName: item.file_name,
      fileUrl: item.file_url,
      uploadDate: item.upload_date,
      views: item.views,
      downloads: item.downloads,
      rating: parseFloat(item.rating) || 0,
      ratingCount: item.rating_count,
      tags: item.tags || [],
      fileFormat: item.file_format,
      duration: item.duration,
      pages: item.pages
    }))
    
  } catch (error) {
    console.error('Ошибка при загрузке материалов:', error)
    showNotification('error', 'Ошибка при загрузке материалов')
    
    // 6. Запасной вариант: используем localStorage
    const savedMaterials = localStorage.getItem('materials')
    if (savedMaterials) {
      try {
        materials.value = JSON.parse(savedMaterials)
      } catch {
        // Игнорируем ошибку парсинга
      }
    }
  } finally {
    isLoading.value = false
  }
}

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Проверяем аутентификацию при загрузке компонента
onMounted(async () => {
  await loadMaterials()
})
</script>

<template>
  <div class="materials-container">
    <!-- Уведомление -->
    <div v-if="notification.show" class="materials-notification" :class="notification.type">
      {{ notification.message }}
    </div>
    
    <div class="materials-header">
      <h1 class="materials-title">Банк методических материалов</h1>
      <p class="materials-subtitle">База знаний для преподавателей • {{ materials.length }} материалов</p>
    </div>
    
    <!-- Сообщение для неавторизованных пользователей -->
    <div v-if="!isAuthenticated" class="materials-auth-required materials-card">
      <div class="materials-auth-message">
        <h3>🔐 Для загрузки материалов требуется вход</h3>
        <p>Войдите в систему, чтобы добавлять свои методические материалы</p>
        <p class="materials-auth-note">
          <small>Используйте кнопку "Войти / Регистрация" в верхней панели</small>
        </p>
      </div>
    </div>
    
    <div class="materials-content">
      <!-- Фильтры и поиск -->
      <div class="materials-filters materials-card">
        <div class="materials-search-box">
          <div class="materials-search-wrapper">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Поиск по названию, описанию, тегам..." 
              class="materials-search-input"
              @keyup.enter="currentPage = 1"
            />
            <span class="materials-search-icon">🔍</span>
          </div>
          <div class="materials-search-actions">
            <button 
              class="materials-filter-toggle materials-btn" 
              @click="showAdvancedFilters = !showAdvancedFilters"
              :class="{ 'materials-active': showAdvancedFilters }"
            >
              <span class="materials-btn-icon">⚙️</span>
              Расширенный поиск
            </button>
            <!-- Кнопка загрузки с проверкой аутентификации -->
            <button 
              class="materials-upload-btn materials-btn materials-primary" 
              @click="handleUploadClick"
              :disabled="authLoading"
            >
              <span class="materials-btn-icon">📁</span>
              <span v-if="authLoading">Загрузка...</span>
              <span v-else>Добавить материал</span>
            </button>
          </div>
        </div>
        
        <!-- Расширенный поиск -->
        <transition name="materials-slide-fade">
          <div v-if="showAdvancedFilters" class="materials-advanced-filters">
            <div class="materials-filters-grid">
              <div class="materials-filter-group">
                <label class="materials-filter-label">Тип материала</label>
                <select v-model="selectedCategory" class="materials-filter-select">
                  <option value="">Все типы</option>
                  <option value="lesson-plans">📝 План урока</option>
                  <option value="presentations">📊 Презентация</option>
                  <option value="worksheets">📄 Рабочий лист</option>
                  <option value="methodology">📚 Методические рекомендации</option>
                  <option value="assessment">📝 Контрольная работа</option>
                  <option value="video">🎬 Видеоурок</option>
                </select>
              </div>
              
              <div class="materials-filter-group">
                <label class="materials-filter-label">Предмет</label>
                <select v-model="selectedSubject" class="materials-filter-select">
                  <option value="">Все предметы</option>
                  <option value="Математика">Математика</option>
                  <option value="Русский язык">Русский язык</option>
                  <option value="Литература">Литература</option>
                  <option value="История">История</option>
                  <option value="Биология">Биология</option>
                  <option value="Физика">Физика</option>
                  <option value="Химия">Химия</option>
                  <option value="География">География</option>
                  <option value="Английский язык">Английский язык</option>
                  <option value="Общие">Общие</option>
                </select>
              </div>
              
              <div class="materials-filter-group">
                <label class="materials-filter-label">Класс</label>
                <select v-model="selectedGrade" class="materials-filter-select">
                  <option value="">Все классы</option>
                  <option v-for="grade in 11" :key="grade" :value="grade.toString()">
                    {{ grade }} класс
                  </option>
                </select>
              </div>
            </div>
            
            <div class="materials-filter-actions">
              <button class="materials-reset-btn materials-btn materials-secondary" @click="resetFilters">
                <span class="materials-btn-icon">🔄</span>
                Сбросить фильтры
              </button>
              <div class="materials-results-info">
                <span class="materials-results-count">
                  Найдено: <strong>{{ filteredMaterials.length }}</strong> материалов
                </span>
                <span v-if="totalPages > 1" class="materials-results-page">
                  Страница: <strong>{{ currentPage }}</strong> из <strong>{{ totalPages }}</strong>
                </span>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Популярные материалы -->
      <div class="materials-popular-section" v-if="popularMaterials.length > 0 && !searchQuery && !isLoading">
        <h2 class="materials-section-title">🔥 Популярные материалы</h2>
        <div class="materials-popular-grid">
          <div 
            v-for="material in popularMaterials" 
            :key="'popular-' + material.id" 
            class="materials-popular-card"
            @click="viewMaterial(material)"
          >
            <div class="materials-popular-badge">Топ {{ popularMaterials.indexOf(material) + 1 }}</div>
            <div class="materials-popular-content">
              <span class="materials-popular-type">{{ getTypeLabel(material.type) }}</span>
              <h4 class="materials-popular-title">{{ material.title }}</h4>
              <div class="materials-popular-stats">
                <span class="materials-stat">👁️ {{ material.views }}</span>
                <span class="materials-stat">📥 {{ material.downloads }}</span>
                <span class="materials-stat">⭐ {{ material.rating.toFixed(1) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Загрузка -->
      <div v-if="isLoading" class="materials-loading">
        <div class="materials-loader"></div>
        <p>Загрузка материалов...</p>
      </div>

      <!-- Сетка материалов -->
      <template v-else>
        <div v-if="filteredMaterials.length > 0" class="materials-grid">
          <div 
            v-for="material in paginatedMaterials" 
            :key="material.id" 
            class="materials-item materials-card"
          >
            <div class="materials-item-header">
              <div class="materials-meta-left">
                <span class="materials-item-type" :class="material.type">
                  {{ getTypeLabel(material.type) }}
                </span>
                <span class="materials-item-grade">{{ material.grade }} класс</span>
              </div>
              <div class="materials-item-rating" @click.stop="rateMaterial(material, 5)">
                <span class="materials-rating-star">⭐</span>
                <span class="materials-rating-value">{{ material.rating.toFixed(1) }}</span>
                <span class="materials-rating-count">({{ material.ratingCount }})</span>
              </div>
            </div>
            
            <div class="materials-item-content">
              <h3 class="materials-item-title">{{ material.title }}</h3>
              <p class="materials-item-description">{{ material.description }}</p>
              
              <div class="materials-item-tags">
                <span class="materials-item-subject">{{ material.subject }}</span>
                <span v-for="tag in (material.tags || []).slice(0, 3)" :key="tag" class="materials-tag">
                  #{{ tag }}
                </span>
              </div>
              
              <div class="materials-file-info">
                <div class="materials-file-icon-name">
                  <span class="materials-file-icon">{{ getFileIcon(material.fileName) }}</span>
                  <span class="materials-file-name" :title="material.fileName">
                    {{ material.fileName.length > 30 ? material.fileName.substring(0, 30) + '...' : material.fileName }}
                  </span>
                </div>
                <span class="materials-file-size">{{ material.fileSize }}</span>
              </div>
            </div>
            
            <div class="materials-item-footer">
              <div class="materials-author-info">
                <span class="materials-item-author">👤 {{ material.author }}</span>
                <span class="materials-upload-date">📅 {{ formatDate(material.uploadDate) }}</span>
              </div>
              <div class="materials-item-stats">
                <span class="materials-stat" title="Просмотры">👁️ {{ material.views }}</span>
                <span class="materials-stat" title="Скачивания">📥 {{ material.downloads }}</span>
              </div>
              <div class="materials-item-actions">
                <button class="materials-preview-btn materials-btn materials-secondary" @click="viewMaterial(material)">
                  Просмотр
                </button>
                <button class="materials-download-btn materials-btn materials-primary" @click="downloadFile(material)">
                  Скачать
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Пагинация -->
        <div v-if="totalPages > 1" class="materials-pagination">
          <button 
            class="materials-pagination-btn materials-btn" 
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
          >
            ← Назад
          </button>
          
          <div class="materials-pagination-pages">
            <button 
              v-for="page in Math.min(5, totalPages)" 
              :key="page"
              class="materials-page-btn materials-btn" 
              :class="{ 'materials-active': currentPage === page }"
              @click="changePage(page)"
            >
              {{ page }}
            </button>
            
            <span v-if="totalPages > 5" class="materials-page-dots">...</span>
            
            <button 
              v-if="totalPages > 5"
              class="materials-page-btn materials-btn" 
              :class="{ 'materials-active': currentPage === totalPages }"
              @click="changePage(totalPages)"
            >
              {{ totalPages }}
            </button>
          </div>
          
          <button 
            class="materials-pagination-btn materials-btn" 
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            Вперед →
          </button>
        </div>

        <!-- Сообщение, если материалы не найдены -->
        <div v-if="filteredMaterials.length === 0 && !isLoading" class="materials-empty materials-card">
          <div class="materials-empty-content">
            <div class="materials-empty-icon">📚</div>
            <h3>Материалы не найдены</h3>
            <p>Попробуйте изменить параметры поиска или добавить новый материал</p>
            <button class="materials-upload-btn materials-btn materials-primary" @click="handleUploadClick">
              📁 Добавить первый материал
            </button>
          </div>
        </div>
      </template>
    </div>

    <!-- Модальное окно загрузки файла -->
    <div v-if="showUploadModal" class="materials-modal-overlay" @click.self="showUploadModal = false">
      <div class="materials-modal materials-card">
        <div class="materials-modal-header">
          <h3>📤 Добавить методический материал</h3>
          <button class="materials-modal-close" @click="showUploadModal = false">×</button>
        </div>
        
        <form @submit.prevent="uploadMaterial" class="materials-upload-form">
          <div class="materials-form-grid">
            <div class="materials-form-group" :class="{ 'materials-error': formErrors.title }">
              <label class="materials-form-label">Название материала <span class="materials-required">*</span></label>
              <input 
                type="text" 
                v-model="newMaterial.title" 
                placeholder="Введите название материала" 
                :class="{ 'materials-error-input': formErrors.title }"
                class="materials-form-input"
              />
              <span v-if="formErrors.title" class="materials-error-message">{{ formErrors.title }}</span>
            </div>
            
            <div class="materials-form-group" :class="{ 'materials-error': formErrors.type }">
              <label class="materials-form-label">Тип материала <span class="materials-required">*</span></label>
              <select 
                v-model="newMaterial.type" 
                :class="{ 'materials-error-input': formErrors.type }"
                class="materials-form-select"
              >
                <option value="">Выберите тип</option>
                <option value="lesson-plans">📝 План урока</option>
                <option value="presentations">📊 Презентация</option>
                <option value="worksheets">📄 Рабочий лист</option>
                <option value="methodology">📚 Методические рекомендации</option>
                <option value="assessment">📝 Контрольная работа</option>
                <option value="video">🎬 Видеоурок</option>
              </select>
              <span v-if="formErrors.type" class="materials-error-message">{{ formErrors.type }}</span>
            </div>
            
            <div class="materials-form-group" :class="{ 'materials-error': formErrors.subject }">
              <label class="materials-form-label">Предмет <span class="materials-required">*</span></label>
              <select 
                v-model="newMaterial.subject" 
                :class="{ 'materials-error-input': formErrors.subject }"
                class="materials-form-select"
              >
                <option value="">Выберите предмет</option>
                <option value="Математика">Математика</option>
                <option value="Русский язык">Русский язык</option>
                <option value="Литература">Литература</option>
                <option value="История">История</option>
                <option value="Биология">Биология</option>
                <option value="Физика">Физика</option>
                <option value="Химия">Химия</option>
                <option value="География">География</option>
                <option value="Английский язык">Английский язык</option>
                <option value="Общие">Общие</option>
              </select>
              <span v-if="formErrors.subject" class="materials-error-message">{{ formErrors.subject }}</span>
            </div>
            
            <div class="materials-form-group">
              <label class="materials-form-label">Класс</label>
              <select v-model="newMaterial.grade" class="materials-form-select">
                <option value="">Все классы</option>
                <option v-for="grade in 11" :key="grade" :value="grade.toString()">
                  {{ grade }} класс
                </option>
              </select>
            </div>
          </div>

          <div class="materials-form-group">
            <label class="materials-form-label">Описание материала</label>
            <textarea 
              v-model="newMaterial.description" 
              placeholder="Опишите материал, его назначение и особенности..." 
              rows="3"
              class="materials-form-textarea"
            ></textarea>
          </div>

          <div class="materials-form-group">
            <label class="materials-form-label">Автор (автоматически заполняется)</label>
            <input 
              type="text" 
              v-model="newMaterial.author" 
              placeholder="Имя автора будет заполнено автоматически" 
              class="materials-form-input"
              disabled
            />
            <small class="materials-form-help">Имя автора берется из вашего профиля</small>
          </div>

          <div class="materials-form-group" :class="{ 'materials-error': formErrors.file }">
            <label class="materials-form-label">Файл материала <span class="materials-required">*</span></label>
            <div 
              class="materials-file-upload" 
              :class="{ 'materials-has-file': newMaterial.file, 'materials-error-area': formErrors.file }"
            >
              <input 
                type="file" 
                @change="handleFileSelect"
                accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.mp4,.mp3,.zip,.rar"
                style="display: none;"
                ref="fileInput"
              />
              
              <div v-if="newMaterial.file" class="materials-file-selected">
                <div class="materials-file-info-large">
                  <span class="materials-file-icon-large">{{ getFileIcon(newMaterial.file.name) }}</span>
                  <div class="materials-file-details">
                    <div class="materials-file-name-large">{{ newMaterial.file.name }}</div>
                    <div class="materials-file-size-large">{{ formatFileSize(newMaterial.file.size) }}</div>
                  </div>
                </div>
                <button 
                  type="button" 
                  class="materials-remove-file materials-btn"
                  @click.stop="newMaterial.file = null"
                >
                  ✕
                </button>
              </div>
              
              <div v-else class="materials-file-placeholder" @click="($refs.fileInput as HTMLInputElement)?.click()">
                <div class="materials-upload-icon">📁</div>
                <div class="materials-upload-text">
                  <strong>Нажмите для выбора файла</strong>
                  <small>Поддерживаются: PDF, Word, PowerPoint, Excel, видео, аудио</small>
                  <small>Максимальный размер: 50 MB</small>
                </div>
              </div>
            </div>
            <span v-if="formErrors.file" class="materials-error-message">{{ formErrors.file }}</span>
          </div>

          <div class="materials-form-actions">
            <button 
              type="button" 
              @click="showUploadModal = false" 
              class="materials-cancel-btn materials-btn materials-secondary"
              :disabled="isUploading"
            >
              Отмена
            </button>
            <button 
              type="submit" 
              class="materials-submit-btn materials-btn materials-primary" 
              :disabled="isUploading"
            >
              <span v-if="isUploading" class="materials-spinner"></span>
              <span v-else>📁 Загрузить материал</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Модальное окно просмотра материала -->
    <div v-if="showViewModal && currentViewMaterial" class="materials-modal-overlay" @click.self="closeViewModal">
      <div class="materials-modal materials-card materials-view-modal">
        <div class="materials-modal-header">
          <h3>📄 Подробная информация о материале</h3>
          <button class="materials-modal-close" @click="closeViewModal">×</button>
        </div>
        
        <div class="materials-details">
          <div class="materials-details-header">
            <div class="materials-type-large" :class="currentViewMaterial.type">
              {{ getTypeLabel(currentViewMaterial.type) }}
            </div>
            <div class="materials-details-meta">
              <span class="materials-details-subject">{{ currentViewMaterial.subject }}</span>
              <span class="materials-details-grade">{{ currentViewMaterial.grade }} класс</span>
            </div>
          </div>
          
          <h2 class="materials-details-title">{{ currentViewMaterial.title }}</h2>
          
          <p class="materials-details-description">{{ currentViewMaterial.description }}</p>
          
          <div class="materials-details-stats">
            <div class="materials-stat-item">
              <span class="materials-stat-icon">👁️</span>
              <div class="materials-stat-info">
                <span class="materials-stat-value">{{ currentViewMaterial.views }}</span>
                <span class="materials-stat-label">Просмотров</span>
              </div>
            </div>
            <div class="materials-stat-item">
              <span class="materials-stat-icon">📥</span>
              <div class="materials-stat-info">
                <span class="materials-stat-value">{{ currentViewMaterial.downloads }}</span>
                <span class="materials-stat-label">Скачиваний</span>
              </div>
            </div>
            <div class="materials-stat-item">
              <span class="materials-stat-icon">⭐</span>
              <div class="materials-stat-info">
                <span class="materials-stat-value">{{ currentViewMaterial.rating.toFixed(1) }}</span>
                <span class="materials-stat-label">Рейтинг ({{ currentViewMaterial.ratingCount }})</span>
              </div>
            </div>
          </div>
          
          <div class="materials-file-details">
            <h4>Информация о файле</h4>
            <div class="materials-file-details-grid">
              <div class="materials-file-detail">
                <span class="materials-file-detail-label">Название файла:</span>
                <span class="materials-file-detail-value">{{ currentViewMaterial.fileName }}</span>
              </div>
              <div class="materials-file-detail">
                <span class="materials-file-detail-label">Размер:</span>
                <span class="materials-file-detail-value">{{ currentViewMaterial.fileSize }}</span>
              </div>
              <div class="materials-file-detail">
                <span class="materials-file-detail-label">Формат:</span>
                <span class="materials-file-detail-value">{{ currentViewMaterial.fileFormat || getFileFormat(currentViewMaterial.fileName) }}</span>
              </div>
              <div v-if="currentViewMaterial.pages" class="materials-file-detail">
                <span class="materials-file-detail-label">Количество страниц:</span>
                <span class="materials-file-detail-value">{{ currentViewMaterial.pages }}</span>
              </div>
              <div v-if="currentViewMaterial.duration" class="materials-file-detail">
                <span class="materials-file-detail-label">Длительность:</span>
                <span class="materials-file-detail-value">{{ currentViewMaterial.duration }}</span>
              </div>
            </div>
          </div>
          
          <div class="materials-author-details">
            <h4>Информация об авторе</h4>
            <div class="materials-author-info">
              <div class="materials-author-name">
                <span class="materials-author-icon">👤</span>
                {{ currentViewMaterial.author }}
              </div>
              <div class="materials-upload-date-full">
                <span class="materials-date-icon">📅</span>
                Загружен {{ formatDateTime(currentViewMaterial.uploadDate) }}
              </div>
            </div>
          </div>
          
          <div v-if="currentViewMaterial.tags && currentViewMaterial.tags.length > 0" class="materials-tags-details">
            <h4>Теги</h4>
            <div class="materials-tags-list">
              <span v-for="tag in currentViewMaterial.tags" :key="tag" class="materials-tag-detail">
                #{{ tag }}
              </span>
            </div>
          </div>
          
          <div class="materials-preview-placeholder">
            <div class="materials-preview-icon">{{ getFileIcon(currentViewMaterial.fileName) }}</div>
            <p class="materials-preview-text">Здесь будет предпросмотр содержимого файла</p>
            <small class="materials-preview-note">В реальном приложении здесь отображалось бы содержимое файла (PDF, изображение, текст и т.д.)</small>
          </div>
          
          <div class="materials-modal-actions">
            <button class="materials-secondary-btn materials-btn" @click="closeViewModal">
              Закрыть
            </button>
            <button class="materials-primary-btn materials-btn" @click="downloadFile(currentViewMaterial)">
              📥 Скачать файл
            </button>
            <button class="materials-rate-btn materials-btn" @click="rateMaterial(currentViewMaterial, 5)">
              ⭐ Оценить материал
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Добавляем новые стили для сообщения об аутентификации */
.materials-auth-required {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  margin-bottom: 2rem;
  padding: 2rem;
  text-align: center;
}

.materials-auth-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.materials-auth-message h3 {
  color: #92400e;
  margin: 0;
  font-size: 1.5rem;
}

.materials-auth-message p {
  color: #92400e;
  margin: 0;
  opacity: 0.9;
}

.materials-auth-note {
  margin-top: 0.5rem;
}

.materials-auth-note small {
  color: #92400e;
  opacity: 0.7;
  font-style: italic;
}

/* Стили для справки в форме */
.materials-form-help {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.25rem;
}

.materials-form-input:disabled {
  background: #f1f5f9;
  cursor: not-allowed;
  opacity: 0.7;
}

/* Добавляем новые стили для сообщения об аутентификации */
.materials-auth-required {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  margin-bottom: 2rem;
  padding: 2rem;
  text-align: center;
}

.materials-auth-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}

.materials-auth-message h3 {
  color: #92400e;
  margin: 0;
  font-size: 1.5rem;
}

.materials-auth-message p {
  color: #92400e;
  margin: 0;
  opacity: 0.9;
}

.materials-auth-message .materials-btn {
  margin-top: 0.5rem;
  background: #f59e0b;
  color: #92400e;
  border: 2px solid #d97706;
}

.materials-auth-message .materials-btn:hover {
  background: #d97706;
  color: white;
}

/* Стили для справки в форме */
.materials-form-help {
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 0.25rem;
}

.materials-form-input:disabled {
  background: #f1f5f9;
  cursor: not-allowed;
  opacity: 0.7;
}
.materials-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
}

.materials-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  z-index: 10000;
  animation: materials-slide-in 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.materials-notification.success {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.materials-notification.error {
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
}

.materials-notification.info {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
}

@keyframes materials-slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.materials-header {
  text-align: center;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.materials-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.materials-subtitle {
  font-size: 1.1rem;
  color: #64748b;
}

.materials-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.materials-card:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Фильтры */
.materials-filters {
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.materials-search-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.materials-search-wrapper {
  position: relative;
  flex: 1;
}

.materials-search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s;
  background: #f8fafc;
}

.materials-search-input:focus {
  outline: none;
  border-color: #4f46e5;
  background: white;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.materials-search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}

.materials-search-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.materials-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.materials-filter-toggle {
  background: #e2e8f0;
  color: #475569;
}

.materials-filter-toggle:hover {
  background: #cbd5e1;
}

.materials-filter-toggle.materials-active {
  background: #4f46e5;
  color: white;
}

.materials-upload-btn.materials-primary {
  background: #4f46e5;
  color: white;
}

.materials-upload-btn.materials-primary:hover {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

/* Расширенный поиск */
.materials-advanced-filters {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.materials-filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.materials-filter-group {
  display: flex;
  flex-direction: column;
}

.materials-filter-label {
  margin-bottom: 0.5rem;
  color: #475569;
  font-weight: 600;
  font-size: 0.875rem;
}

.materials-filter-select {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: all 0.3s;
}

.materials-filter-select:focus {
  outline: none;
  border-color: #4f46e5;
}

.materials-filter-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.materials-reset-btn.materials-secondary {
  background: #f1f5f9;
  color: #475569;
  border: 2px solid #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.materials-reset-btn.materials-secondary:hover {
  background: #e2e8f0;
}

.materials-results-info {
  display: flex;
  gap: 2rem;
  color: #64748b;
  font-size: 0.875rem;
}

.materials-results-info strong {
  color: #1e293b;
}

/* Популярные материалы */
.materials-popular-section {
  margin-bottom: 2rem;
}

.materials-section-title {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.materials-popular-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.materials-popular-card {
  background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
  border-radius: 10px;
  padding: 1.25rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
}

.materials-popular-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(254, 215, 215, 0.4);
}

.materials-popular-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #dc2626;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.materials-popular-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.materials-popular-type {
  font-size: 0.75rem;
  color: #dc2626;
  font-weight: 600;
}

.materials-popular-title {
  font-size: 1rem;
  color: #1e293b;
  margin: 0;
  line-height: 1.3;
}

.materials-popular-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #64748b;
}

/* Материалы */
.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.materials-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem;
}

.materials-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.materials-meta-left {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.materials-item-type {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
}

.materials-item-type.lesson-plans { background: #10b981; }
.materials-item-type.presentations { background: #f59e0b; }
.materials-item-type.worksheets { background: #3b82f6; }
.materials-item-type.methodology { background: #8b5cf6; }
.materials-item-type.assessment { background: #ef4444; }
.materials-item-type.video { background: #ec4899; }

.materials-item-grade {
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #475569;
}

.materials-item-rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  background: #fef3c7;
  transition: all 0.3s;
}

.materials-item-rating:hover {
  background: #fde68a;
  transform: scale(1.05);
}

.materials-rating-value {
  font-weight: 600;
  color: #d97706;
}

.materials-rating-count {
  font-size: 0.75rem;
  color: #92400e;
}

.materials-item-content {
  flex: 1;
  margin-bottom: 1.5rem;
}

.materials-item-title {
  font-size: 1.25rem;
  color: #1e293b;
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
}

.materials-item-description {
  color: #64748b;
  margin-bottom: 1rem;
  line-height: 1.5;
  font-size: 0.875rem;
}

.materials-item-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.materials-item-subject {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
}

.materials-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.materials-file-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.materials-file-icon-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}

.materials-file-icon {
  font-size: 1.25rem;
}

.materials-file-name {
  font-size: 0.875rem;
  color: #475569;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.materials-file-size {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 600;
}

.materials-item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.materials-author-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.materials-item-author {
  font-size: 0.875rem;
  color: #475569;
}

.materials-upload-date {
  font-size: 0.75rem;
  color: #94a3b8;
}

.materials-item-stats {
  display: flex;
  gap: 1rem;
}

.materials-stat {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #64748b;
}

.materials-item-actions {
  display: flex;
  gap: 0.5rem;
}

.materials-preview-btn.materials-secondary {
  background: #f1f5f9;
  color: #475569;
  border: 2px solid #e2e8f0;
}

.materials-preview-btn.materials-secondary:hover {
  background: #e2e8f0;
}

.materials-download-btn.materials-primary {
  background: #10b981;
  color: white;
}

.materials-download-btn.materials-primary:hover {
  background: #0da271;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

/* Пагинация */
.materials-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.materials-pagination-btn {
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  color: #475569;
}

.materials-pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.materials-pagination-btn:not(:disabled):hover {
  background: #e2e8f0;
}

.materials-pagination-pages {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.materials-page-btn {
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  color: #475569;
}

.materials-page-btn.materials-active {
  background: #4f46e5;
  color: white;
  border-color: #4f46e5;
}

.materials-page-btn:not(.materials-active):hover {
  background: #f1f5f9;
}

.materials-page-dots {
  color: #94a3b8;
  margin: 0 0.25rem;
}

/* Нет материалов */
.materials-empty {
  text-align: center;
  padding: 4rem 2rem;
}

.materials-empty-content {
  max-width: 400px;
  margin: 0 auto;
}

.materials-empty-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.5;
}

.materials-empty h3 {
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.materials-empty p {
  color: #64748b;
  margin-bottom: 1.5rem;
}

/* Модальное окно */
.materials-modal-overlay {
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
  backdrop-filter: blur(4px);
  animation: materials-fade-in 0.3s ease;
}

@keyframes materials-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.materials-modal {
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  animation: materials-slide-up 0.3s ease;
}

.materials-view-modal {
  max-width: 900px;
}

@keyframes materials-slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.materials-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.materials-modal-header h3 {
  margin: 0;
  color: #1e293b;
}

.materials-modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #94a3b8;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: color 0.3s;
}

.materials-modal-close:hover {
  color: #ef4444;
}

/* Форма */
.materials-upload-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.materials-form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.materials-form-group {
  display: flex;
  flex-direction: column;
}

.materials-form-label {
  margin-bottom: 0.5rem;
  color: #475569;
  font-weight: 600;
  font-size: 0.875rem;
}

.materials-required {
  color: #ef4444;
}

.materials-form-input,
.materials-form-select,
.materials-form-textarea {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s;
  background: white;
}

.materials-form-input:focus,
.materials-form-select:focus,
.materials-form-textarea:focus {
  outline: none;
  border-color: #4f46e5;
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.materials-form-textarea {
  resize: vertical;
  min-height: 100px;
}

.materials-form-group.materials-error .materials-form-input,
.materials-form-group.materials-error .materials-form-select,
.materials-form-group.materials-error .materials-form-textarea {
  border-color: #ef4444;
}

.materials-error-input {
  border-color: #ef4444 !important;
}

.materials-error-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

/* Загрузка файла */
.materials-file-upload {
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  background: #f8fafc;
}

.materials-file-upload:hover {
  border-color: #4f46e5;
  background: #f1f5f9;
}

.materials-file-upload.materials-has-file {
  border-style: solid;
  border-color: #10b981;
  background: #f0fdf4;
}

.materials-file-upload.materials-error-area {
  border-color: #ef4444;
  background: #fef2f2;
}

.materials-file-selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.materials-file-info-large {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.materials-file-icon-large {
  font-size: 2.5rem;
}

.materials-file-details {
  display: flex;
  flex-direction: column;
}

.materials-file-name-large {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.25rem;
}

.materials-file-size-large {
  font-size: 0.875rem;
  color: #64748b;
}

.materials-remove-file {
  background: #f1f5f9;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.materials-remove-file:hover {
  background: #fecaca;
  color: #dc2626;
}

.materials-file-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.materials-upload-icon {
  font-size: 3rem;
  color: #94a3b8;
}

.materials-upload-text {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.materials-upload-text strong {
  color: #475569;
}

.materials-upload-text small {
  color: #94a3b8;
  font-size: 0.75rem;
}

/* Действия формы */
.materials-form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.materials-cancel-btn.materials-secondary {
  background: #f1f5f9;
  color: #475569;
  border: 2px solid #e2e8f0;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
}

.materials-cancel-btn.materials-secondary:hover {
  background: #e2e8f0;
}

.materials-submit-btn.materials-primary {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.materials-submit-btn.materials-primary:hover:not(:disabled) {
  background: #4338ca;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
}

.materials-submit-btn.materials-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.materials-spinner {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: materials-spin 1s ease-in-out infinite;
}

@keyframes materials-spin {
  to { transform: rotate(360deg); }
}

/* Загрузка */
.materials-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  color: #64748b;
}

.materials-loader {
  width: 50px;
  height: 50px;
  border: 3px solid #e2e8f0;
  border-radius: 50%;
  border-top-color: #4f46e5;
  animation: materials-spin 1s ease-in-out infinite;
  margin-bottom: 1rem;
}

/* Модальное окно просмотра */
.materials-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.materials-details-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.materials-type-large {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
}

.materials-type-large.lesson-plans { background: #10b981; }
.materials-type-large.presentations { background: #f59e0b; }
.materials-type-large.worksheets { background: #3b82f6; }
.materials-type-large.methodology { background: #8b5cf6; }
.materials-type-large.assessment { background: #ef4444; }
.materials-type-large.video { background: #ec4899; }

.materials-details-meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.materials-details-subject {
  background: #dbeafe;
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
}

.materials-details-grade {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
}

.materials-details-title {
  font-size: 1.75rem;
  color: #1e293b;
  margin: 0;
  line-height: 1.3;
}

.materials-details-description {
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.materials-details-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.materials-stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.materials-stat-icon {
  font-size: 1.5rem;
}

.materials-stat-info {
  display: flex;
  flex-direction: column;
}

.materials-stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
}

.materials-stat-label {
  font-size: 0.875rem;
  color: #64748b;
}

.materials-file-details {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.materials-file-details h4 {
  color: #1e293b;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.materials-file-details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.materials-file-detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.materials-file-detail-label {
  font-size: 0.875rem;
  color: #64748b;
}

.materials-file-detail-value {
  font-size: 1rem;
  color: #1e293b;
  font-weight: 500;
}

.materials-author-details {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.materials-author-details h4 {
  color: #1e293b;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.materials-author-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.materials-author-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #1e293b;
  font-weight: 500;
}

.materials-upload-date-full {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #64748b;
}

.materials-author-icon,
.materials-date-icon {
  font-size: 1.2rem;
}

.materials-tags-details {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.materials-tags-details h4 {
  color: #1e293b;
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
}

.materials-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.materials-tag-detail {
  background: #e2e8f0;
  color: #475569;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  transition: all 0.3s;
}

.materials-tag-detail:hover {
  background: #cbd5e1;
  transform: translateY(-1px);
}

.materials-preview-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 3rem;
  text-align: center;
  margin: 1rem 0;
}

.materials-preview-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #94a3b8;
}

.materials-preview-text {
  font-size: 1.2rem;
  color: #475569;
  margin-bottom: 0.5rem;
}

.materials-preview-note {
  color: #94a3b8;
  font-size: 0.875rem;
}

.materials-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}

.materials-secondary-btn,
.materials-primary-btn,
.materials-rate-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.materials-secondary-btn {
  background: #f1f5f9;
  color: #475569;
  border: 2px solid #e2e8f0;
}

.materials-secondary-btn:hover {
  background: #e2e8f0;
}

.materials-primary-btn {
  background: #10b981;
  color: white;
}

.materials-primary-btn:hover {
  background: #0da271;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
}

.materials-rate-btn {
  background: #f59e0b;
  color: white;
}

.materials-rate-btn:hover {
  background: #d97706;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
}

/* Анимации */
.materials-slide-fade-enter-active {
  transition: all 0.3s ease;
}

.materials-slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.materials-slide-fade-enter-from,
.materials-slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .materials-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  
  .materials-form-grid {
    grid-template-columns: 1fr;
  }
  
  .materials-details-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .materials-container {
    padding: 1rem;
  }
  
  .materials-title {
    font-size: 2rem;
  }
  
  .materials-grid {
    grid-template-columns: 1fr;
  }
  
  .materials-popular-grid {
    grid-template-columns: 1fr;
  }
  
  .materials-search-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .materials-filter-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .materials-results-info {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .materials-item-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .materials-item-actions {
    justify-content: stretch;
  }
  
  .materials-preview-btn,
  .materials-download-btn {
    flex: 1;
  }
  
  .materials-modal {
    margin: 1rem;
    width: calc(100% - 2rem);
  }
  
  .materials-pagination {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .materials-pagination-pages {
    order: -1;
  }
  
  .materials-details-stats {
    grid-template-columns: 1fr;
  }
  
  .materials-modal-actions {
    flex-direction: column;
  }
  
  .materials-secondary-btn,
  .materials-primary-btn,
  .materials-rate-btn {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .materials-title {
    font-size: 1.75rem;
  }
  
  .materials-item-header {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  
  .materials-meta-left {
    justify-content: space-between;
  }
  
  .materials-item-rating {
    align-self: flex-start;
  }
  
  .materials-file-info {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  
  .materials-details-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .materials-details-title {
    font-size: 1.5rem;
  }
}
</style>