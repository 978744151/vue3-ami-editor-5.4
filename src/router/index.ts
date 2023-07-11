import { createRouter, createWebHistory } from 'vue-router'
import type { Component } from 'vue'
import utils from '@/utils'
import editor from '@/views/editor.vue'
const modules = import.meta.glob('/src/views/**/**.tsx')
const components: { [key: string]: Component } = utils.mapping(modules)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        // keepAlive:true,
      },
      component: components['home']
    },
    {
      path: '/editor',
      name: 'editor',
      meta:{
        // keepAlive:true,
      },
      component:  editor
    }
  ]
})

export default router
