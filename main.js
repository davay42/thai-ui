import { createApp } from 'vue'
import App from './App.vue'
import router from './views'


import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'unfonts.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
