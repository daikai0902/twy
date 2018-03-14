import Vue from 'vue'
import Router from 'vue-router'
import Qcode from '@/components/Qcode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Qcode',
      component: Qcode
    }
  ]
})
