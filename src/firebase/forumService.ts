import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter,  // Добавляем этот импорт
  serverTimestamp,
  increment,
  Timestamp
} from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { 
  ForumCategory, 
  ForumTopic, 
  ForumComment,
  UserRole 
} from '@/firebase/types'

// Категории форума
export const forumCategories = [
  {
    id: 'methodology',
    name: 'Методические вопросы',
    description: 'Обсуждение методик преподавания и образовательных технологий',
    icon: '📚',
    order: 1
  },
  {
    id: 'programs',
    name: 'Рабочие программы',
    description: 'Обмен рабочими программами и календарно-тематическим планированием',
    icon: '📅',
    order: 2
  },
  {
    id: 'extracurricular',
    name: 'Внеурочная деятельность',
    description: 'Кружки, мероприятия, проектная деятельность',
    icon: '🌟',
    order: 3
  },
  {
    id: 'exams',
    name: 'Подготовка к ОГЭ/ЕГЭ',
    description: 'Материалы и советы по подготовке к экзаменам',
    icon: '🎯',
    order: 4
  },
  {
    id: 'inclusive',
    name: 'Инклюзивное образование',
    description: 'Работа с детьми с ОВЗ, адаптированные программы',
    icon: '❤️',
    order: 5
  },
  {
    id: 'digital',
    name: 'Цифровые технологии',
    description: 'Использование ИКТ в образовательном процессе',
    icon: '💻',
    order: 6
  }
]

// Инициализация категорий (выполнить один раз)
export const initializeCategories = async () => {
  try {
    const categoriesRef = collection(db, 'forum_categories')
    const snapshot = await getDocs(categoriesRef)
    
    if (snapshot.empty) {
      for (const category of forumCategories) {
        await addDoc(categoriesRef, {
          ...category,
          createdAt: serverTimestamp(),
          createdBy: 'system'
        })
      }
      console.log('Категории форума инициализированы')
    }
  } catch (error) {
    console.error('Ошибка инициализации категорий:', error)
  }
}

// Получение всех категорий
export const getCategories = async (): Promise<ForumCategory[]> => {
  try {
    const categoriesRef = collection(db, 'forum_categories')
    const q = query(categoriesRef, orderBy('order'))
    const snapshot = await getDocs(q)
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    })) as ForumCategory[]
  } catch (error) {
    console.error('Ошибка получения категорий:', error)
    return []
  }
}

// Создание новой темы
export const createTopic = async (
  title: string,
  content: string,
  categoryId: string,
  authorId: string,
  authorName: string,
  authorPhoto?: string,
  tags: string[] = []
): Promise<string | null> => {
  try {
    const topicsRef = collection(db, 'forum_topics')
    const now = Timestamp.now()
    
    const topicData = {
      title,
      content,
      categoryId,
      authorId,
      authorName,
      authorPhoto,
      views: 0,
      commentCount: 0,
      isPinned: false,
      isClosed: false,
      tags,
      createdAt: now,
      updatedAt: now
    }
    
    const docRef = await addDoc(topicsRef, topicData)
    
    // Обновляем счетчик тем в категории
    const categoryRef = doc(db, 'forum_categories', categoryId)
    await updateDoc(categoryRef, {
      topicCount: increment(1)
    })
    
    return docRef.id
  } catch (error) {
    console.error('Ошибка создания темы:', error)
    return null
  }
}

// Получение тем по категории
export const getTopicsByCategory = async (
  categoryId: string, 
  limitCount: number = 20,
  lastVisible?: any
): Promise<{ topics: ForumTopic[], lastVisible: any }> => {
  try {
    const topicsRef = collection(db, 'forum_topics')
    let q = query(
      topicsRef,
      where('categoryId', '==', categoryId),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    
    if (lastVisible) {
      q = query(
        topicsRef,
        where('categoryId', '==', categoryId),
        orderBy('createdAt', 'desc'),
        startAfter(lastVisible),
        limit(limitCount)
      )
    }
    
    const snapshot = await getDocs(q)
    const lastDoc = snapshot.docs[snapshot.docs.length - 1]
    
    const topics = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      lastCommentAt: doc.data().lastCommentAt?.toDate()
    })) as ForumTopic[]
    
    return { topics, lastVisible: lastDoc }
  } catch (error) {
    console.error('Ошибка получения тем:', error)
    return { topics: [], lastVisible: null }
  }
}

// Получение темы по ID
export const getTopic = async (topicId: string): Promise<ForumTopic | null> => {
  try {
    const topicRef = doc(db, 'forum_topics', topicId)
    const topicDoc = await getDoc(topicRef)
    
    if (topicDoc.exists()) {
      // Увеличиваем счетчик просмотров
      await updateDoc(topicRef, {
        views: increment(1)
      })
      
      return {
        id: topicDoc.id,
        ...topicDoc.data(),
        createdAt: topicDoc.data().createdAt?.toDate() || new Date(),
        updatedAt: topicDoc.data().updatedAt?.toDate() || new Date(),
        lastCommentAt: topicDoc.data().lastCommentAt?.toDate()
      } as ForumTopic
    }
    
    return null
  } catch (error) {
    console.error('Ошибка получения темы:', error)
    return null
  }
}

// Создание комментария
export const createComment = async (
  topicId: string,
  content: string,
  authorId: string,
  authorName: string,
  authorPhoto?: string,
  authorRole?: UserRole
): Promise<string | null> => {
  try {
    const commentsRef = collection(db, 'forum_comments')
    const now = Timestamp.now()
    
    const commentData = {
      topicId,
      content,
      authorId,
      authorName,
      authorPhoto,
      authorRole,
      createdAt: now,
      updatedAt: now,
      likes: [],
      isEdited: false
    }
    
    const docRef = await addDoc(commentsRef, commentData)
    
    // Обновляем счетчик комментариев в теме
    const topicRef = doc(db, 'forum_topics', topicId)
    await updateDoc(topicRef, {
      commentCount: increment(1),
      lastCommentAt: now,
      lastCommentBy: authorName
    })
    
    return docRef.id
  } catch (error) {
    console.error('Ошибка создания комментария:', error)
    return null
  }
}

// Получение комментариев темы
export const getCommentsByTopic = async (
  topicId: string, 
  limitCount: number = 50,
  lastVisible?: any
): Promise<{ comments: ForumComment[], lastVisible: any }> => {
  try {
    const commentsRef = collection(db, 'forum_comments')
    let q = query(
      commentsRef,
      where('topicId', '==', topicId),
      orderBy('createdAt', 'asc'),
      limit(limitCount)
    )
    
    if (lastVisible) {
      q = query(
        commentsRef,
        where('topicId', '==', topicId),
        orderBy('createdAt', 'asc'),
        startAfter(lastVisible),
        limit(limitCount)
      )
    }
    
    const snapshot = await getDocs(q)
    const lastDoc = snapshot.docs[snapshot.docs.length - 1]
    
    const comments = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    })) as ForumComment[]
    
    return { comments, lastVisible: lastDoc }
  } catch (error) {
    console.error('Ошибка получения комментариев:', error)
    return { comments: [], lastVisible: null }
  }
}

// Лайк комментария
export const toggleLikeComment = async (
  commentId: string,
  userId: string
): Promise<boolean> => {
  try {
    const commentRef = doc(db, 'forum_comments', commentId)
    const commentDoc = await getDoc(commentRef)
    
    if (!commentDoc.exists()) return false
    
    const commentData = commentDoc.data()
    const likes = commentData.likes || []
    
    if (likes.includes(userId)) {
      // Убираем лайк
      await updateDoc(commentRef, {
        likes: likes.filter((id: string) => id !== userId)  // Добавлен тип string
      })
      return false
    } else {
      // Добавляем лайк
      await updateDoc(commentRef, {
        likes: [...likes, userId]
      })
      return true
    }
  } catch (error) {
    console.error('Ошибка лайка комментария:', error)
    return false
  }
}

// Обновление комментария
export const updateComment = async (commentId: string, content: string): Promise<boolean> => {
  try {
    const commentRef = doc(db, 'forum_comments', commentId)
    await updateDoc(commentRef, {
      content,
      isEdited: true,
      updatedAt: serverTimestamp()
    })
    return true
  } catch (error) {
    console.error('Ошибка обновления комментария:', error)
    return false
  }
}

// Поиск тем
export const searchTopics = async (
  searchQuery: string,
  categoryId?: string,
  limitCount: number = 20
): Promise<ForumTopic[]> => {
  try {
    const topicsRef = collection(db, 'forum_topics')
    let constraints = []
    
    if (categoryId) {
      constraints.push(where('categoryId', '==', categoryId))
    }
    
    // Note: Firestore не поддерживает полнотекстовый поиск
    // Для production нужно использовать Algolia или Elasticsearch
    // Здесь просто ищем по названию
    const q = query(
      topicsRef,
      ...constraints,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    
    const snapshot = await getDocs(q)
    const topics = snapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date()
      })) as ForumTopic[]
    
    // Фильтрация на клиенте (временное решение)
    const queryLower = searchQuery.toLowerCase()
    return topics.filter(topic => 
      topic.title.toLowerCase().includes(queryLower) ||
      topic.content.toLowerCase().includes(queryLower)
    )
  } catch (error) {
    console.error('Ошибка поиска тем:', error)
    return []
  }
}

// Получение популярных тем
export const getPopularTopics = async (limitCount: number = 10): Promise<ForumTopic[]> => {
  try {
    const topicsRef = collection(db, 'forum_topics')
    const q = query(
      topicsRef,
      orderBy('views', 'desc'),
      limit(limitCount)
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    })) as ForumTopic[]
  } catch (error) {
    console.error('Ошибка получения популярных тем:', error)
    return []
  }
}

// Получение последних тем
export const getRecentTopics = async (limitCount: number = 10): Promise<ForumTopic[]> => {
  try {
    const topicsRef = collection(db, 'forum_topics')
    const q = query(
      topicsRef,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date()
    })) as ForumTopic[]
  } catch (error) {
    console.error('Ошибка получения последних тем:', error)
    return []
  }
}