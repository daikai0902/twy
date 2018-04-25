<template>
  <div class="index-wrap">
    <div class="open-wrap">
      <p class="op1">宁波天唯艺星教育</p>
      <p class="op2">让艺术为孩子成长助航</p>
      <p class="op3">输入学号就可查询小朋友课程课时和成绩</p>
      <input type="text" v-model="number" placeholder="请输入小朋友的学号" class="ipt-login">
      <a href="javascript:;" class="btn-parent-login" @click="bindParentLogin">查询</a>
    </div>
    <img class="bg-home" src="../assets/bg_home.jpg">
    <div class="home-wrap"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'Open',
  data () {
    return {
      code: null,
      number: null,
      openId: null
    }
  },
  created () {
    let _querystring = this.parseQueryString(window.location.href)

    if (!_querystring.code) {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx959b4c6d0334b80c&redirect_uri=http%3A%2F%2Fm.twyxedu.com%2FparentLogin&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect'
    } else {
      this.code = _querystring.code
    }
  },
  methods: {
    bindParentLogin () {
      let that = this
      api.getOpenId({code: that.code}).then(wxres => {
        if (wxres.status === 'succ') {
          that.openId = wxres.data.openId
          api.bindStudent({openId: that.openId, number: this.number}).then(res => {
            // api.studentReport({studentId: '11'}).then(res3 => {
            //   console.log(res3)
            // })
            if (res.status === 'succ') {
              that.$router.push({ name: 'schoolReport', query: {sid: res.data.studentId} })
            } else {
              alert(res.message)
            }
          })
        }
      })
    },
    parseQueryString (url) {
      var arr = []
      var res = {}
      url = url.split('#')[0]
      arr = url.split('?')
      arr.shift()
      var queryStr = arr.join('?')
      if (queryStr.trim().length === 0) {
        return res
      }

      arr = queryStr.split('&')
      for (var i = 0; i < arr.length; i++) {
        var itemArr = arr[i].split('=')
        var name = itemArr.shift()
        var value = itemArr.join('=')
        res[name] = value
      }
      return res
    }
  }
}
</script>

<style scoped>
.index-wrap .bg-home{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.open-wrap{
  width: 100%;
  margin: 30% auto;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 10;
}
.open-wrap .open-funnel{
  width:31px;
  height:40px;
}
.open-wrap .op1{
  font-size:24px;
  color:#ffffff;
  letter-spacing:0.69px;
  text-align:center;
  text-shadow:0 2px 4px rgba(0,0,0,0.25);
}
.open-wrap .op2{
  font-size:24px;
  color:#FFFFFF;;
  text-align:center;
  margin-bottom: 40px;
}
.open-wrap .op3{
  font-size:14px;
  color:#ffffff;
  text-align:center;
  margin: 30px;
}
.ipt-login{
  background:rgba(255,255,255,0.11);
  border:2px solid #ffffff;
  border-radius:100px;
  width:284px;
  height:54px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.btn-parent-login{
  background:#80225a;
  display: block;
  border-radius:100px;
  width:286px;
  height:48px;
  line-height:48px;
  font-size:18px;
  color:#fff;
  text-align: center;
  margin: 80px auto 0;
}
</style>
