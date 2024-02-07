import { createRouter, createWebHistory } from 'vue-router'
import Vowels from './Vowels.vue'
import Consonants from './Consonants.vue'
import AboutView from './AboutView.vue'
import Tones from './Tones.vue'
import MaiMuan from './MaiMuan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ]
})

export default router
