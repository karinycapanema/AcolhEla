import { createRouter, createWebHistory } from 'vue-router'
import Violencia from '@/components/EntenderViolencia/Violencia.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/entender',
      name: 'entender',
      component: Violencia,
    },

   
  ],
})

export default router