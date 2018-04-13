// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import router from './router'
import App from './App'
import { AjaxPlugin, WechatPlugin } from 'vux'
// vue滑块
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.min.css'
import VueScroller from 'vue-scroller'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)
Vue.use(WechatPlugin)
Vue.use(VueScroller)
// Vue.use(VueAwesomeSwiper)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
