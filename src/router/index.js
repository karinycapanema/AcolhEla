import { createRouter, createWebHistory } from 'vue-router'

import VoluntarioView from '../views/VoluntarioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/voluntario',
      name: 'VoluntarioView',
      component: VoluntarioView
    }
  ]
})

export default router