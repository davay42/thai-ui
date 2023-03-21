import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'unfonts.css'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
