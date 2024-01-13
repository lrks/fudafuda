import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/fudafuda/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fudafuda/akizukimini',
    component: () => import(/* webpackChunkName: "akizukimini" */ '../views/AkizukiMini.vue')
  },
  {
    path: '/fudafuda/akizukibig',
    component: () => import(/* webpackChunkName: "akizukibig" */ '../views/AkizukiBig.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
