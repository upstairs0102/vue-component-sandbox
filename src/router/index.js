import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from '@/views/demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'demo',
    component: demo,
    children: [
      {
        path: '/basic',
        name: 'demo-basic',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/basic.vue')
      },
      {
        path: '/prop-sync',
        name: 'demo-prop-sync',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/propSync.vue')
      },
      {
        path: '/demo-full-screen-block',
        name: 'demo-full-screen-block',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/fullScreenBlock.vue')
      },
      {
        path: '/prop-callback',
        name: 'demo-prop-callback',
        component: () => import(/* webpackChunkName: "callback" */ '@/views/demo/propCallback.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
