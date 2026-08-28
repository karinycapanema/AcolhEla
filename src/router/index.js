import { createRouter, createWebHistory } from 'vue-router'
import CadastroUsuarioView from '@/views/CadastroUsuarioView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/cadastro',
      name: 'CadastroUsuarioView.vue',
      component: CadastroUsuarioView,
    },
    {
      path:'/login',
      name: 'LoginView.vue',
      component: LoginView,
    }
  ],
})

export default router