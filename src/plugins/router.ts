import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue')
    }
  ]
})
