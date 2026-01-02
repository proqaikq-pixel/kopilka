import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Forum from '../views/Forum.vue'
import ForumTopic from '../views/ForumTopic.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/forum',
      name: 'forum',
      component: Forum
    },
    {
      path: '/forum/topic/:id',
      name: 'forum-topic',
      component: ForumTopic,
      props: true
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('../views/Materials.vue')
    }
  ]
})

export default router