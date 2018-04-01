// pc
// 首页
const PcIndex = resolve => { require(['@/components/pc/Index'], resolve) }
// 简介
const Summary = resolve => { require(['@/components/pc/Summary'], resolve) }
// 新闻公告
const News = resolve => { require(['@/components/pc/News'], resolve) }
// 精彩活动
const Activity = resolve => { require(['@/components/pc/Activity'], resolve) }
// 精彩活动
const Team = resolve => { require(['@/components/pc/Team'], resolve) }
const NotFound = resolve => { require(['@/components/pc/NotFound'], resolve) }

const routes = [
  {
    path: '*',
    name: '404',
    redirect: '/',
    component: NotFound
  },
  {
    path: '/',
    name: 'pcIndex',
    component: PcIndex
  }, {
    path: '/summary',
    name: 'summary',
    component: Summary
  }, {
    path: '/news',
    name: 'news',
    component: News
  }, {
    path: '/activity',
    name: 'activity',
    component: Activity
  }, {
    path: '/team',
    name: 'team',
    component: Team
  }
]
export default routes
