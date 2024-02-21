import { createRouter, createWebHashHistory } from 'vue-router'
import Vowels from './Vowels.vue'
import Consonants from './Consonants.vue'
import AboutView from './AboutView.vue'
import Tones from './Tones.vue'
import MaiMuan from './MaiMuan.vue'
import Time from './Time.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/vowels/',
      name: 'vowels',
      component: Vowels
    },
    {
      path: '/consonants/',
      name: 'consonants',
      component: Consonants
    },
    {
      path: '/tones/',
      name: 'tones',
      component: Tones
    },
    {
      path: '/mai-muan/',
      name: 'mai-muan',
      component: MaiMuan
    },
    {
      path: '/time/',
      name: 'time',
      component: Time
    },
  ]
})

export default router
