import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/SignUp'
import Qcode from '@/components/Qcode'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'qcode',
      component: Qcode
    }
  ]
})
