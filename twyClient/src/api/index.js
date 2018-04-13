import qs from 'qs'
import service from './fetch.js'

export const typewww = 'application/x-www-form-urlencoded'

export default {
  siginUp (params) {
    return service(`/api/signup`, qs.stringify(params), 'POST', { 'Content-Type': typewww })
  },
  order (params) {
    return service(`/api/order`, qs.stringify(params), 'POST', { 'Content-Type': typewww })
  },
  orgCourse (params) {
    return service(`/api/org/courses`, qs.stringify(params), 'POST', { 'Content-Type': typewww })
  },
  orgPubList (params) {
    return service(`/api/org/pub/list`, params, 'GET')
  },

  activityList (params) {
    return service(`/api/activity/list`, params, 'GET')
  },
  activityDetail (params) {
    return service(`/api/activity/detail`, params, 'GET')
  },
  newsList (params) {
    return service(`/api/news/list`, params, 'GET')
  },
  newsDetail (params) {
    return service(`/api/news/detail`, params, 'GET')
  },
  openList (params) {
    return service(`/api/show/clazz/list`, params, 'GET')
  },
  openDetail (params) {
    return service(`/api/show/clazz/detail`, params, 'GET')
  },
  getOpenId (params) {
    return service(`/wx/openid`, params, 'GET')
  },
  getUnifieOrder (params) {
    return service(`/wx/unifieOrder`, params, 'GET')
  },
  bindStudent (params) {
    return service(`/wx/bind/student`, qs.stringify(params), 'POST', { 'Content-Type': typewww })
  },
  studentReport (params) {
    return service(`/api/student/report`, qs.stringify(params), 'POST', { 'Content-Type': typewww })
  }
  // wxStudents (params) {
  //   return service(`/wx/students`, qs.stringify(params), 'POST', { 'Content-Type': typewww })
  // }
}
