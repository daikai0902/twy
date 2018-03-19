import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Qrcode from '@/components/Qrcode'
import PianoSucc from '@/components/PianoSucc'
import ChoirSucc from '@/components/ChoirSucc'
import Introduce from '@/components/Introduce'
import Home from '@/components/Home'
import News from '@/components/News'
import Order from '@/components/Order'
import Activity from '@/components/Activity'
import Teachers from '@/components/Teachers'
import Help from '@/components/Help'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: Qrcode
    },
    {
      path: '/choirSucc',
      name: 'choirSucc',
      component: ChoirSucc
    },
    {
      path: '/pianoSucc',
      name: 'pianoSucc',
      component: PianoSucc
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    }

  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
