import { createRouter, createWebHashHistory } from 'vue-router'
import demo from '@/views/demo.vue'

const routes = [
  {
    path: '/',
    name: 'demo',
    component: demo,
    children: [
      {
        path: '/demo/basic',
        name: 'demo-basic',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/basic.vue')
      },
      {
        path: '/demo/prop-sync',
        name: 'demo-prop-sync',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/propSync.vue')
      },
      {
        path: '/demo/demo-full-screen-block',
        name: 'demo-full-screen-block',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/fullScreenBlock.vue')
      },
      {
        path: '/demo/prop-callback',
        name: 'demo-prop-callback',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/propCallback.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
