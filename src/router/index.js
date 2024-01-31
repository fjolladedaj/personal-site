import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CareerView from '../views/CareerView'
import PhotographyView from '../views/PhotographyView.vue'
import ProfileView from '../views/ProfileView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'career',
      component: CareerView
    },
    {
      path: '/',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/',
      name: 'photography',
      component: PhotographyView
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.name) {
      document.getElementById(to.name).scrollIntoView({ behavior: 'smooth' })
    } else {
      return savedPosition || { x: 0, y: 0 }
    }
  }
})
export default router
