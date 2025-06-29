import { createRouter, createWebHistory } from 'vue-router'

import inicio from '../components/inicio.vue'
import acceder from '../components/acceder.vue'
import registro from '../components/registro.vue'
import calculadora from '../components/calculadora.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: inicio
  },
    {
    path: '/acceder',
    name: 'acceder',
    component: acceder
  },
  {
    path: '/calculadora',
    name: 'calculadora',
    component: calculadora
  },
   {
    path: '/registro',
    name: 'registro',
    component: registro
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
