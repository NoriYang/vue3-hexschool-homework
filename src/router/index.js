import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/Products')
      },
      {
        path: 'orders',
        component: () => import('@/views/Orders')
      },
      {
        path: 'coupons',
        component: () => import('@/views/Coupons')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
