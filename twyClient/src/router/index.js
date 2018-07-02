import Vue from 'vue'
import Router from 'vue-router'
import mroutes from '@/router/m_router'
// import proutes from '@/router/p_router'

// 判断是手机还是pc
const Agent = (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))

Vue.use(Router)
let routes

if (!Agent) {
  window.location.href = 'http://www.twyxedu.com/'
} else {
  routes = mroutes
}

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
