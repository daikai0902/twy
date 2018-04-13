import SignUp from '@/components/SignUp'
import Qrcode from '@/components/Qrcode'
import PianoSucc from '@/components/PianoSucc'
import ChoirSucc from '@/components/ChoirSucc'
import Introduce from '@/components/Introduce'
import Home from '@/components/Home'
import News from '@/components/News'
import NewsDetail from '@/components/NewsDetail'
import Order from '@/components/Order'
import Activity from '@/components/Activity'
import ActivityDetail from '@/components/ActivityDetail'
import OpenDetail from '@/components/OpenDetail'
import Teachers from '@/components/Teachers'
import TeacherDetail from '@/components/TeacherDetail'
import Help from '@/components/Help'
import Org from '@/components/Org'
import School from '@/components/School'
import Growth from '@/components/Growth'
import Open from '@/components/Open'
import OrderSucc from '@/components/OrderSucc'
import WepaySucc from '@/components/WepaySucc'
import OtherpaySucc from '@/components/OtherpaySucc'
import ParentLogin from '@/components/ParentLogin'
import SchoolReport from '@/components/SchoolReport'
import StudentReport from '@/components/StudentReport'

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
    path: '/StudentReport',
    name: 'studentReport',
    component: StudentReport
  }
]
export default routes
