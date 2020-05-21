import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue')
    }, {
      path: '/wiki',
      name: 'Wiki',
      component: () => import('@/views/Wiki.vue')
    }, {
      path: '/guidelines',
      name: 'Guidelines',
      component: () => import('@/views/Guidelines.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue')
    }
  ]
})
