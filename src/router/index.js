import { createRouter, createWebHistory } from 'vue-router'
import Violencia from '@/components/EntenderViolencia/Violencia.vue'

import HomeView from '../views/HomeView.vue'
import CadastroUsuarioView from '@/views/CadastroUsuarioView.vue'
import LoginView from '@/views/LoginView.vue'
import DenunciaView from '@/views/DenunciaView.vue'
import DenunciaSucesso from '@/components/Denuncia/DenunciaSucesso.vue'
import DenunciaRevisao from '@/components/Denuncia/DenunciaRevisao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      path: '/cadastro',
      name: 'CadastroUsuarioView.vue',
      component: CadastroUsuarioView,
    },
    {
      path:'/login',
      name: 'LoginView.vue',
      component: LoginView,
    },
    {
      path: '/denuncia',
      name: 'denunciaView.vue',
      component: DenunciaView,
    },
    {
      path: '/revisar-denuncia',
      name: 'denuncia-revisao.vue',
      component: DenunciaRevisao,
    },
    {
      path: '/denuncia-enviada',
      name: 'denuncia-sucesso.vue',
      component: DenunciaSucesso,
    },
  ]
})

export default router