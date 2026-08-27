import { createRouter, createWebHistory } from 'vue-router'

import VoluntarioView from '../views/voluntario/VoluntarioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/voluntario'
    },
    {
      path: '/voluntario',
      name: 'VoluntarioView',
      component: VoluntarioView
    }
  ]
})

export default router