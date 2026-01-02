// main.ts
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseApp } from '@/firebase/config' // Теперь этот импорт будет работать

console.log('Firebase initialized:', firebaseApp.name)

const app = createApp(App)
app.use(router)
app.mount('#app')