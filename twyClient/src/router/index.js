import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/SignUp'
import Qrcode from '@/components/Qrcode'
import PianoSucc from '@/components/PianoSucc'
import ChoirSucc from '@/components/ChoirSucc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
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
    }
  ]
})
