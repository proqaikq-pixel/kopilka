export interface UserProfile {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  role?: UserRole
}

export interface EduUser extends UserProfile {
  role: UserRole
  school?: string
  grade?: string
  subjects?: string[]
  createdAt: Date
}

export type UserRole = 'teacher' | 'student' | 'user' | 'admin'

// Типы для форума
export interface ForumCategory {
  id: string
  name: string
  description: string
  icon: string
  order: number
  createdAt: Date
  createdBy: string
  topicCount?: number
}

export interface ForumTopic {
  id: string
  title: string
  content: string
  authorId: string
  authorName: string
  authorPhoto?: string
  categoryId: string
  views: number
  commentCount: number
  lastCommentAt?: Date
  lastCommentBy?: string
  isPinned: boolean
  isClosed: boolean
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface ForumComment {
  id: string
  topicId: string
  content: string
  authorId: string
  authorName: string
  authorPhoto?: string
  authorRole?: UserRole
  createdAt: Date
  updatedAt: Date
  likes: string[] // array of user IDs who liked the comment
  isEdited: boolean
}