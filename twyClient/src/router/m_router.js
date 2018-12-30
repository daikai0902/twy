// import SignUp from '@/components/SignUp'
// import Qrcode from '@/components/Qrcode'
// import PianoSucc from '@/components/PianoSucc'
// import ChoirSucc from '@/components/ChoirSucc'
// import Introduce from '@/components/Introduce'
// import Home from '@/components/Home'
// import NewsDetail from '@/components/NewsDetail'
// import Order from '@/components/Order'
// import Activity from '@/components/Activity'
// import ActivityDetail from '@/components/ActivityDetail'
// import OpenDetail from '@/components/OpenDetail'
// import Teachers from '@/components/Teachers'
// import TeacherDetail from '@/components/TeacherDetail'
// import Help from '@/components/Help'
// import Org from '@/components/Org'
// import School from '@/components/School'
// import Growth from '@/components/Growth'
// import Open from '@/components/Open'
// import OrderSucc from '@/components/OrderSucc'
// import WepaySucc from '@/components/WepaySucc'
// import OtherpaySucc from '@/components/OtherpaySucc'
// import ParentLogin from '@/components/ParentLogin'
// import SchoolReport from '@/components/SchoolReport'
// import StudentReport from '@/components/StudentReport'

const SignUp = resolve => { require(['@/components/SignUp'], resolve) }
const Qrcode = resolve => { require(['@/components/Qrcode'], resolve) }
const News = resolve => { require(['@/components/News'], resolve) }
const PianoSucc = resolve => { require(['@/components/PianoSucc'], resolve) }
const ChoirSucc = resolve => { require(['@/components/ChoirSucc'], resolve) }
const Introduce = resolve => { require(['@/components/Introduce'], resolve) }
const Classify = resolve => { require(['@/components/Classify'], resolve) }
const Home = resolve => { require(['@/components/Home'], resolve) }
const NewsDetail = resolve => { require(['@/components/NewsDetail'], resolve) }
const Order = resolve => { require(['@/components/Order'], resolve) }
const Activity = resolve => { require(['@/components/Activity'], resolve) }
const ActivityDetail = resolve => { require(['@/components/ActivityDetail'], resolve) }
const OpenDetail = resolve => { require(['@/components/OpenDetail'], resolve) }
const Teachers = resolve => { require(['@/components/Teachers'], resolve) }
const TeacherDetail = resolve => { require(['@/components/TeacherDetail'], resolve) }
const Help = resolve => { require(['@/components/Help'], resolve) }
const Org = resolve => { require(['@/components/Org'], resolve) }
const School = resolve => { require(['@/components/School'], resolve) }
const Growth = resolve => { require(['@/components/Growth'], resolve) }
const Open = resolve => { require(['@/components/Open'], resolve) }
const OrderSucc = resolve => { require(['@/components/OrderSucc'], resolve) }
const WepaySucc = resolve => { require(['@/components/WepaySucc'], resolve) }
const OtherpaySucc = resolve => { require(['@/components/OtherpaySucc'], resolve) }
const ParentLogin = resolve => { require(['@/components/ParentLogin'], resolve) }
const SchoolReport = resolve => { require(['@/components/SchoolReport'], resolve) }
const StudentReport = resolve => { require(['@/components/StudentReport'], resolve) }
const Rebate = resolve => { require(['@/components/Rebate'], resolve) }

let routes = [
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
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
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: Introduce
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify,
    meta: {
      title: '学校课程'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/news/detail',
    name: 'newsDetail',
    component: NewsDetail
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/ordersucc',
    name: 'orderSucc',
    component: OrderSucc
  },
  {
    path: '/wepaysucc',
    name: 'wepaySucc',
    component: WepaySucc
  },
  {
    path: '/otherpaysucc',
    name: 'otherpaySucc',
    component: OtherpaySucc
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  },
  {
    path: '/activity/detail',
    name: 'activityDetail',
    component: ActivityDetail
  },
  {
    path: '/open/detail',
    name: 'openDetail',
    component: OpenDetail
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers
  },
  {
    path: '/teachers/detail',
    name: 'teacherDetail',
    component: TeacherDetail
  },
  {
    path: '/help',
    name: 'help',
    component: Help
  },
  {
    path: '/org',
    name: 'org',
    component: Org
  },
  {
    path: '/school',
    name: 'school',
    component: School
  },
  {
    path: '/growth',
    name: 'growth',
    component: Growth
  },
  {
    path: '/open',
    name: 'open',
    component: Open
  },
  {
    path: '/parentlogin',
    name: 'parentLogin',
    component: ParentLogin
  },
  {
    path: '/schoolReport',
    name: 'schoolReport',
    component: SchoolReport
  },
  {
    path: '/studentReport',
    name: 'studentReport',
    component: StudentReport
  },
  {
    path: '/rebate',
    name: 'Rebate',
    component: Rebate
  }
]
export default routes
