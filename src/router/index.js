import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bienvenido from '../views/Bienvenido.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bienvenido',
    name: 'Bienvenido',
    component: Bienvenido
  }
]

const router = new VueRouter({
  routes
})

export default router
