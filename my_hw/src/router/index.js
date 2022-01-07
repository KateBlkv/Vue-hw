import { createRouter, createWebHistory } from 'vue-router'
/*import Home from '../views/Home.vue'*/

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: () => import('../views/Catalog')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart')
  },
  {
    path: '/:id',
    name: 'ItemPage',
    component: () => import('../views/ItemPage')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
