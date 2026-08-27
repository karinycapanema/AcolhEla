import { createRouter, createWebHistory } from 'vue-router'
import ViolenciaView from '../views/violencia/ViolenciaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'entender',
      component: ViolenciaView,
    },

   
  ],
})

export default router