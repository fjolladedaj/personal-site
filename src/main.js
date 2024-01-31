import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'

library.add(faBars)
library.add(faGraduationCap)
library.add(faChalkboardUser)
library.add(faCode)
library.add(faEnvelope)
library.add(faPhone)
library.add(faThumbtack)
library.add(faHashtag)
library.add(faLinkedinIn)
library.add(faCodeBranch)
library.add(faChevronLeft)
library.add(faChevronRight)
library.add(faCircleInfo)
library.add(faXmark)

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
