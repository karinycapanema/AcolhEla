import './assets/main.css'

import '@fortawesome/fontawesome-free/css/all.min.css'

import { createApp } from 'vue'

import App from './App.vue'

import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUser,
  faBars,
  faXmark,
  faChevronUp,
  faChevronDown,
  faUserClock,
  faEnvelope,
  faPhone,
  faLock,
  faUnlock,
  faChevronRight,
  faArrowLeft,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'


library.add(
  faUser,
  faBars,
  faXmark,
  faChevronUp,
  faChevronDown,
  faUserClock,
  faEnvelope,
  faPhone,
  faLock,
  faUnlock,
  faChevronRight,
  faArrowLeft,
  faPaperPlane
)

const app = createApp(App)

app.component(
  'FontAwesomeIcon',
  FontAwesomeIcon
)

app.use(router)

app.mount('#app')