import { createRouter, createWebHistory } from 'vue-router'
import CadastroUsuarioView from '@/views/CadastroUsuarioView.vue'
import LoginView from '@/views/LoginView.vue'
import DenunciaView from '@/views/DenunciaView.vue'
import DenunciaSucesso from '@/components/Denuncia/DenunciaSucesso.vue'
import DenunciaRevisao from '@/components/Denuncia/DenunciaRevisao.vue'
import ComoAcolherView from '@/views/ComoAcolherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/cadastro',
      name: 'CadastroUsuarioView.vue',
      component: CadastroUsuarioView,
    },
    {
      path: '/login',
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

    {
      path: '/como-acolher',
      name: 'como-acolher',
      component: ComoAcolherView,
    },
    {
      path: '/capacitacao',
      name: 'capacitacao',
      component: {
        template: '<div></div>',
      },
    },
  ],
})

export default router
