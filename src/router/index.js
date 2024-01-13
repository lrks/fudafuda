import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/akizukimini',
    component: () => import(/* webpackChunkName: "akizukimini" */ '../views/AkizukiMini.vue')
  },
  {
    path: '/akizukibig',
    component: () => import(/* webpackChunkName: "akizukibig" */ '../views/AkizukiBig.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
