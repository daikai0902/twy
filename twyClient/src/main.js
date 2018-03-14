// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Qcode'

import { WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(VueRouter)
// Vue.use(AlertPlugin)
// Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

console.log(Vue.wechat)
console.log(Vue.http)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
