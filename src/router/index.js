import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'

const routes = [
  //{
  //  path: '/',
  //  name: 'Home',
  //  component: Home
  //},
  {
    path: '/',
    component: () => import(/* webpackChunkName: "akizukimini" */ '../views/AkizukiMini.vue')
  },

  {
    path: '/akizukimini',
    component: () => import(/* webpackChunkName: "akizukimini" */ '../views/AkizukiMini.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
