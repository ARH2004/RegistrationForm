import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/MainPage.vue'
import Login from '@/views/Routerlogin.vue'
import Reg from '@/views/RouterReg.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: Reg
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
