import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUserClock,
  faEnvelope,
  faPhone,
  faLock,
  faUnlock
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserClock,
  faEnvelope,
  faPhone,
  faLock,
  faUnlock
)

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

app.mount('#app')