<template>
  <div class="index-wrap">
    <div class="report-wrap">
      <div class="report-title">
        <span>小朋友的课程课时与成绩单</span>
        <router-link :to="{name: 'parentLogin'}" class="parent-login-link">+</router-link>
      </div>
      <div class="report-item">
        <div class="report-info">
          <p class="p1">民族舞  太阳班</p>
          <p class="p1 p2">19031400005</p>
          <p class="p1 p2">张小溪</p>
        </div>
        <div class="report-course clearfix">
          <div class="rc-item" v-for="(item, index) in reportList" :key="index" :class="[item == 1 ? 'succ': '', item == 0 ? 'err': '']">{{index + 1}}</div>
        </div>
        <div class="report-view">
          <img src="../assets/icon_report.jpg">
          <router-link :to="{name: 'parentLogin'}" class="view-link">查看成绩单</router-link>
          <p class="report-time">开学日期：2019年3月14日</p>
        </div>
      </div>
      <div class="report-item over">
        <div class="report-info">
          <p class="p1">民族舞  太阳班</p>
          <p class="p1 p2">19031400005</p>
          <p class="p1 p2">张小溪</p>
        </div>
        <div class="report-course clearfix">
          <div class="rc-item" v-for="(item, index) in reportList" :key="index" :class="[item == 1 ? 'succ': '', item == 0 ? 'err': '']">{{index + 1}}</div>
        </div>
        <div class="report-view">
          <img src="../assets/icon_report.jpg">
          <router-link :to="{name: 'parentLogin'}" class="view-link">查看成绩单</router-link>
          <p class="report-time">开学日期：2019年3月14日</p>
        </div>
      </div>
    </div>
    <div class="bg-black"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'Report',
  data () {
    return {
      reportList: [1, 0, 1, 1],
      studentId: null
    }
  },
  created () {
    let _querystring = this.parseQueryString(window.location.href)
    this.studentId = _querystring.sid
    this.getStudentArriveInfo()
  },
  methods: {
    getStudentArriveInfo () {
      api.studentArriveInfo({studentId: this.studentId}).then(res => {
        console.log(res)
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
.report-wrap{
  width: 100%;
  margin: 20px auto;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 10;
}
.report-title{
  width:320px;
  margin: 0 auto;
  text-align: left;
  position: relative;
}
.report-title .parent-login-link{
  font-size:20px;
  color:#fff;
  position: absolute;
  right: 0;
  top: -5px;
}
.report-item{
  background:#ffffff;
  box-shadow:0 0 24px 0 rgba(0,0,0,0.08);
  border-radius:19px;
  width:320px;
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
  box-shadow:0 0 24px 0 rgba(0,0,0,0.08);
  border-radius:0 0 19px 19px;
  width:100%;
  text-align: center;
  padding: 20px 0;
  position: relative;
  border-top: 1px dashed #8f8f8f;
}
.report-view::before{
  content: '';
  width:10px;
  height:20px;
  border-radius: 0 10px 10px 0;
  background:#220521;
  position: absolute;
  left: 0;
  top: -10px;
}
.report-view::after{
  content: '';
  width:10px;
  height:20px;
  border-radius:10px 0 0 10px;
  background:#220521;
  position: absolute;
  right: 0;
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
</style>
