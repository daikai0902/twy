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
  }
}
