// pc
// 首页
const PcIndex = resolve => { require(['@/components/pc/Index'], resolve) }
const NotFound = resolve => { require(['@/components/pc/NotFound'], resolve) }

const routes = [
  {
    path: '*',
    name: '404',
    component: NotFound
  },
  {
    path: '/',
    name: 'pcIndex',
    component: PcIndex
  }
]
export default routes
