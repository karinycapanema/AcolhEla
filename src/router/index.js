import { createRouter, createWebHistory } from 'vue-router'
import VoluntarioView from '../views/VoluntarioView.vue'
import Violencia from '@/components/EntenderViolencia/Violencia.vue'
import HomeView from '../views/HomeView.vue'
import CadastroUsuarioView from '@/views/CadastroUsuarioView.vue'
import LoginView from '@/views/LoginView.vue'
import DenunciaView from '@/views/DenunciaView.vue'
import DenunciaSucesso from '@/components/Denuncia/DenunciaSucesso.vue'
import DenunciaRevisao from '@/components/Denuncia/DenunciaRevisao.vue'
import ComoAcolherView from '@/views/ComoAcolherView.vue'
import CapacitacaoView from '@/views/CapacitacaoView.vue'
import ValoresView from '@/components/SobreNos/ValoresView.vue'
import HistoriaView from '@/components/SobreNos/HistoriaView.vue'
import SobreView from '@/components/SobreNos/SobreView.vue'
import EquipeView from '@/components/SobreNos/EquipeView.vue'
import EntenderView from '@/views/EntenderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
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
      path: "/capacitacao",
      name: "capacitacao",
      component: CapacitacaoView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    },
    {
      path: '/historia',
      name: 'historia',
      component: HistoriaView
    },
    {
      path: '/valores',
      name: 'valores',
      component: ValoresView
    },
    {
      path: '/equipe',
      name: 'equipe',
      component: EquipeView
    },
    {
      path: '/cadastro-acolher',
      name: 'VoluntarioView',
      component: VoluntarioView
    },
    {
      path: '/violencia',
      name: 'EntenderViolencia',
      component: EntenderView
    }
  ]
})

export default router
