import { createRouter, createWebHistory } from 'vue-router'

import DenunciaView from '@/views/DenunciaView.vue'
import DenunciaSucesso from '@/components/Denuncia/DenunciaSucesso.vue'
import DenunciaRevisao from '@/components/Denuncia/DenunciaRevisao.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'denuncia',
      component: DenunciaView
    },
    {
      path: '/revisar-denuncia',
      name: 'denuncia-revisao',
      component: DenunciaRevisao
  },
    {
      path: '/denuncia-enviada',
      name: 'denuncia-sucesso',
      component: DenunciaSucesso
    }
  ]
})

export default router