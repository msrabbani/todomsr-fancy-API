import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/Sign'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
