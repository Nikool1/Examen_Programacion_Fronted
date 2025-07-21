import { createRouter, createWebHistory } from 'vue-router'
import Carrito from '../views/Carrito.vue'

const routes = [
  {
    path: '/',
    name: 'Carrito',
    component: Carrito
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
