import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

let user = sessionStorage.getItem('user')
if (user) {
  user = JSON.parse(user)
}
const service = function (url, data, method = 'GET', headers = {}) {
  return new Promise((resolve, reject) => {
    let options = {
      'method': method,
      // 'url': 'http://121.196.208.151:9100' + process.env.BASE_API + url,
      'url': process.env.BASE_API + url,
      'headers': headers && typeof headers === 'object' ? headers : {}
    }
    options.headers['X-Requested-Page'] = 'json'
    options[method === 'GET' ? 'params' : 'data'] = data
    axios(options).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      // Message({
      //   message: error.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      console.log(error.message)
      reject(error)
    })
  })
}

export default service
