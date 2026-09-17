import { createRouter, createWebHistory } from 'vue-router'
import VoluntarioView from '../views/VoluntarioView.vue'
import HomeView from '../views/HomeView.vue'
import CadastroUsuarioView from '@/views/CadastroUsuarioView.vue'
import LoginView from '@/views/LoginView.vue'
import DenunciaView from '@/views/DenunciaView.vue'
import DenunciaSucesso from '@/components/Denuncia/DenunciaSucesso.vue'
import DenunciaRevisao from '@/components/Denuncia/DenunciaRevisao.vue'
import CursoView from '@/components/CursoAcolher/CursoView.vue'
import MapaView from '@/components/MapaAcolhimento/MapaView.vue'
import ComoAcolherView from '@/views/ComoAcolherView.vue'
import CapacitacaoView from '@/views/CapacitacaoView.vue'
import SobreView from '@/views/SobreView.vue'
import EntenderView from '@/views/EntenderView.vue'
import PerfilVitimaView from '@/views/PerfilVitimaView.vue'
import EditarPerfilView from '@/views/EditarPerfilView.vue'
import PerfilVoluntariaView from '@/views/PerfilVoluntariaView.vue'
import MensagensView from '@/views/MensagensView.vue'

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
      name: 'CadastroUsuarioView',
      component: CadastroUsuarioView,
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView,
    },
    {
      path: '/denuncia',
      name: 'denunciaView',
      component: DenunciaView,
    },
    {
      path: '/revisar-denuncia',
      name: 'denuncia-revisao',
      component: DenunciaRevisao,
    },
    {
      path: '/denuncia-enviada',
      name: 'denuncia-sucesso',
      component: DenunciaSucesso,
    },
    {
      path: '/curso',
      name: 'Curso',
      component: CursoView,
    },
    {
      path: '/mapa',
      name: 'Mapa-acolhimento',
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
    },
    {
      path: '/perfil-vitima',
      name: 'perfil-vitima',
      component: PerfilVitimaView
    },
    {
      path: '/perfil-voluntaria',
      name: 'perfil-voluntaria',
      component: PerfilVoluntariaView
    },
    {
      path: '/editar-perfil',
      name: 'editar-perfil',
      component: EditarPerfilView
    },
    {
      path: '/mensagens',
      name: 'mensagens',
      component: MensagensView
    }
   ]
})


export default router