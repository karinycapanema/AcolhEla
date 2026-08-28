import { createRouter, createWebHistory } from 'vue-router'
import VoluntarioView from '../views/VoluntarioView.vue'
import HomeView from '../views/HomeView.vue'
import CadastroUsuarioView from '@/views/CadastroUsuarioView.vue'
import LoginView from '@/views/LoginView.vue'
import DenunciaView from '@/views/DenunciaView.vue'
import DenunciaSucesso from '@/components/Denuncia/DenunciaSucesso.vue'
import DenunciaRevisao from '@/components/Denuncia/DenunciaRevisao.vue'
import MapaView from '@/components/MapaAcolhimento/MapaView.vue'
import ComoAcolherView from '@/views/ComoAcolherView.vue'
import CapacitacaoView from '@/views/CapacitacaoView.vue'
import SobreView from '@/views/SobreView.vue'
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
      path: '/MapaAcolhimento',
      name: 'Mapa-acolhimento.vue',
      component: MapaView,
    },

    {
      path: '/como-acolher',
      name: 'como-acolher',
      component: ComoAcolherView,
    },
    {
      path: "/capacitar",
      name: "capacitacao",
      component: CapacitacaoView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
    },
    {
      path: '/cadastro-acolher',
      name: 'VoluntarioView',
      component: VoluntarioView
    },
    {
      path: '/violencia',
      name: 'EntenderView',
      component: EntenderView
    }
  ]
})

export default router
