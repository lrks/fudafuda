import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { VueClipboard } from '@soerenmartius/vue3-clipboard'

createApp(App).use(router).use(VueClipboard).mount('#app')
