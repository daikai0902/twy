import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Qrcode from '@/components/Qrcode'
import PianoSucc from '@/components/PianoSucc'
import ChoirSucc from '@/components/ChoirSucc'
import Introduce from '@/components/Introduce'

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
    }
  ]
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
