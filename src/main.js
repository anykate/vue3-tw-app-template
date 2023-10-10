import App from '@/App.vue'
import '@/assets/css/style.css'
import { createApp } from 'vue'
import router from './router'

createApp(App).use(router).mount('#app')
