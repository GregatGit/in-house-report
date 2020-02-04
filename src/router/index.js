import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Greeting from '../views/Greeting.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'greeting',
    component: Greeting
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '*',
    redirect: '/'
  }
  
]

const router = new VueRouter({
  routes
})

export default router
