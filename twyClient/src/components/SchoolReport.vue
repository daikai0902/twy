<template>
  <div class="index-wrap">
    <div class="report-wrap">
      <div class="report-title">
        <img src="../assets/teacher_top.jpg" class="teacher-top">
        <div class="rt-text">
          <div class="t-txt">小朋友的课程课时与成绩单</div>
          <!-- <router-link :to="{name: 'parentLogin'}" class="parent-login-link">添加学号</router-link> -->
          <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx959b4c6d0334b80c&redirect_uri=http%3A%2F%2Fm.twyxedu.com%2FparentLogin&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect" class="parent-login-link">添加学号</a>
          <img v-if="clazzStudentVOS.length == 0 && isComplete" src="../assets/commet.png" class="commet-img">
        </div>
      </div>
      <div class="" v-if="clazzStudentVOS.length > 0 && isComplete">
        <div class="report-item" v-for="(item, index) in clazzStudentVOS" :key="index">
          <div class="report-info">
            <p class="p1">{{item.courseName}} {{item.clazzName}}</p>
            <p class="p1 p2">{{item.number}}</p>
            <p class="p1 p2">{{item.name}}</p>
          </div>
          <div class="report-course clearfix" v-if="item.arriveList">
            <div class="rc-item" v-for="(item2, idx) in item.arriveList" :key="idx" :class="[item2 == '1' ? 'succ': '', item2 == '0' ? 'err': '']">{{idx + 1}}</div>
          </div>
          <div class="report-nodata" v-else>未开课</div>
          <div class="report-view">
            <img src="../assets/icon_report.jpg">
            <a href="javascript:;" class="view-link" @click="viewReport(item.reportStatus, item.studentId)">查看成绩单</a>
            <!-- <router-link :to="{name: 'studentReport', query:{sid: item.studentId}}" class="view-link" >查看成绩单</router-link> -->
          </div>
        </div>
      </div>
      <div class="no-report" v-else-if="isComplete">
        <p>您好，目前暂无课时</p>
        <p>如报名成功获取到学号</p>
        <p>可点击 <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx959b4c6d0334b80c&redirect_uri=http%3A%2F%2Fm.twyxedu.com%2FparentLogin&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect"  class="parent-login-link2">添加学号</a></p>
        <p>查看孩子的点到情况和成绩单</p>
      </div>
    </div>
    <div class="bg-black  bg-sreport"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
import { Loading } from 'vux'
export default {
  name: 'Report',
  components: {
    Loading
  },
  data () {
    return {
      clazzStudentVOS: [],
      code: null,
      isComplete: false
    }
  },
  created () {
    this.$vux.loading.show()
    let _querystring = this.parseQueryString(window.location.href)
    if (!_querystring.code) {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx959b4c6d0334b80c&redirect_uri=http%3A%2F%2Fm.twyxedu.com%2FschoolReport&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect'
    } else {
      this.code = _querystring.code
    }

    this.getStudentArriveInfo()
  },
  mounted () {
    window.addEventListener('popstate', function (e) {
      // window.WeixinJSBridge.call('closeWindow')
    }, false)
  },
  methods: {
    viewReport (reportStatus, studentId) {
      if (reportStatus === '已完成') {
        this.$router.push({name: 'studentReport', query: {sid: studentId}})
      } else {
        alert('暂无成绩单')
      }
    },
    getStudentArriveInfo () {
      api.getOpenId({code: this.code}).then(wxres => {
        if (wxres.status === 'succ' && wxres.data.clazzStudentVOS) {
          // this.clazzStudentVOS = wxres.data.clazzStudentVOS
          this.clazzStudentVOS = wxres.data.clazzStudentVOS.map((item, index) => {
            let times = item.arrive.split('/')[1]
            let _item = item
            _item.arriveList = _item.arriveDetail ? _item.arriveDetail.split('') : []
            let arrLen = _item.arriveDetail ? _item.arriveDetail.length : 0
            for (let i = arrLen; i < times; i++) {
              _item.arriveList.push('')
            }
            return _item
          })
          this.$vux.loading.hide()
          this.isComplete = true
        } else {
          this.$vux.loading.hide()
          this.isComplete = true
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
.bg-sreport{
  background-color: #f0f0f0;
}
.index-wrap .bg-home{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.report-wrap{
  width: 100%;
  margin: auto;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 10;
}
.report-title{
  width: 100%;
  height: 148px;
  position: relative;
  top: 0;
  z-index: 10;
}
.report-title .teacher-top{
  width: 100%;
  height: 100%;
}
.report-title .rt-text{
  position: absolute;
  bottom: 60px;
  width: 100%;
}
.report-title .commet-img{
  position: absolute;
  width: 98px;
  height: 105px;
  bottom: -120px;
  right: 20%;
}
.report-title .t-txt{
  color: #fff;
  font-size: 16px;
  letter-spacing: .42px;
  padding-right: 20px;
  box-sizing: border-box;
  display: inline-block;
}
.report-title .parent-login-link{
  font-size:14px;
  color:#fff;
  background-color: rgba(255,255,255, .5);
  padding: 5px 15px;
  border-radius: 100px;
}
.report-item{
  background:#ffffff;
  box-shadow:0 0 8px 0 rgba(0,0,0,0.08);
  border-radius:19px;
  width:90%;
  margin: 30px auto;
}
.report-item.over{
  background:rgba(255,255,255,0.52);
}
.report-item .p1{
  color: #000;
  font-size:18px;
  line-height: 36px;
}
.report-item .p2{
  letter-spacing:3px;
}
.report-item.over .p1{
  color: #fff;
}
.report-info{
  padding: 30px 0;
}
.report-course{
  width: 280px;
  margin: 0 auto 30px;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.rc-item{
  background:#e1e1e1;
  border-radius:6px;
  width:34px;
  height:34px;
  line-height: 34px;
  float: left;
  margin-right: 15px;
  margin-bottom: 15px;
  color:#8a8a8f;
}
.rc-item.succ{
  background:#0e971e;
  color: #fff;
}
.rc-item.err{
  background:#d2474d;
  color: #fff;
}
.rc-item:nth-child(6n){
  margin-right: 0;
}
.report-view{
  background:#e3dee1;
  box-shadow:0 0 8px 0 rgba(0,0,0,0.08);
  border-radius:0 0 19px 19px;
  width:100%;
  text-align: center;
  padding: 20px 0;
  position: relative;
  border-top: 1px dashed #8f8f8f;
}
.report-view::before{
  content: '';
  width:20px;
  height:20px;
  border-radius: 50%;
  background:#f0f0f0;
  position: absolute;
  left: -10px;
  top: -10px;
}
.report-view::after{
  content: '';
  width:20px;
  height:20px;
  border-radius:50%;
  background:#f0f0f0;
  position: absolute;
  right: -10px;
  top: -10px;
}
.view-link{
  display: block;
  font-size:14px;
  color:#0086e4;
  text-decoration: underline;
}
.report-time{
  font-size:12px;
  color:#8a8a8f;
  margin-top: 10px;
}
.no-report{
  width: 100%;
  text-align: center;
  color: #000;
  line-height: 1.5em;
  margin-top: 80px;
}
.parent-login-link2{
  color:#5bbfd7;
  text-decoration: underline;
}
.report-nodata{
  color:#000;
  margin: 0 auto 30px;
}
</style>
