import { createRouter, createWebHistory } from 'vue-router'
import utils from '@/utils'
const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: components['home']
    },
    {
      path: '/editor',
      name: 'editor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/editor.vue')
    }
  ]
})

export default router
