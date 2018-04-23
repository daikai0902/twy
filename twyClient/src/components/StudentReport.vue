<template>
  <div class="index-wrap">
    <div class="report-wrap">
      <div class="title">
        <img src="../assets/school2.png" class="logo">
        天唯印记<br />艺星素养发展评价报告
      </div>
      <div class="user-info">
        <p class="clazz-name">
          <span>{{sReport.clazzName}}</span>
          <!-- <span>{{sReport.clazzName}}</span> -->
        </p>
        <p class="user-name">
          <span>{{sReport.studentName}}</span>
          <span>{{sReport.studentNum}}</span>
        </p>
      </div>
      
      <div class="sr-comment">
        <div class="tname">老师评语</div>
        <div class="sr-cont" v-if="sReport.comment">{{sReport.comment}}</div>
        <div class="sr-cont no-data" v-else> 未填写 </div>
      </div>
      <div class="sr-evaluate">
        <div class="tname">评价</div>
        <div class="star-com" v-if="sReport.starComment">
          <div class="star-item" v-for="(item, index) in sReport.starComment" :key="index">
            <div class="lab">{{item.split('+')[0]}}</div>
            <rater v-model="starCom[index]" disable active-color="#FF9900" :margin="4"></rater>
          </div>
        </div>
        <div class="no-data" v-else>
          未填写
        </div>
      </div>

      <div class="sr-imgs">
        <div class="tname">成长印记</div>
        <div class="img-wrap" v-if="sReport.imgUrls && sReport.imgUrls.length > 0">
          <div class="img-item" v-for="(item, idx) in sReport.imgUrls" :key="idx" >
            <div class="sr-img" >
              <img :src="item">
            </div>
          </div>
        </div>
        <div class="no-data" v-else>
          未填写
        </div>
      </div>
    </div>
    
    <div class="bg-black bg-report"></div>
  </div>
</template>

<script>
import { Rater } from 'vux'
import api from '../api/index.js'
export default {
  name: 'Report',
  components: {
    Rater
  },
  data () {
    return {
      sid: null,
      sReport: {
        clazzName: null,
        studentName: null,
        studentNum: null,
        comment: null,
        starComment: null,
        imgUrls: []
      },
      starCom: []
    }
  },
  created () {
    this.sid = this.$route.query.sid
    this.getStudentReport()
  },
  mounted () {
    window.addEventListener('popstate', function (e) {
      window.location = '/schoolReport'
    }, false)
  },
  methods: {
    getStudentReport () {
      api.studentReport({ studentId: this.sid }).then(res => {
        if (res.status === 'succ') {
          this.sReport = res.data
          this.sReport.starComment = res.data.starComment.split('=')
          this.sReport.imgUrls = res.data.imgUrls.split(',')

          this.sReport.starComment.shift(1)
          this.sReport.starComment.forEach((item, idx) => {
            this.starCom[idx] = parseInt(item.split('+')[1])
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.index-wrap .bg-home {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.report-wrap {
  width: 100%;
  margin: 20px auto;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 10;
}
.report-wrap .title {
  position: relative;
  /* background: rgba(255, 255, 255, 0.32); */
  width: 300px;
  height: 136px;
  margin: 60px auto 0;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 2.56px;
  text-align: center;
  line-height: 46px;
  padding: 20px 5px;
  box-sizing: border-box;
}
.report-wrap .title:after{
  content: '';
  height: 100%;
  border-top: 136px solid rgba(255, 255, 255, 0.32);; 
  border-left: 15px solid transparent; 
  border-right: 8px solid transparent; 
  height: 0; 
  width: 100%; 
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  z-index: -1;
}
.report-wrap .logo {
  width: 66px;
  height: 66px;
  position: absolute;
  left: 20px;
  top: -33px;
}
.report-wrap .user-info {
  margin-top: 20px;
  position: relative;
  padding-bottom: 10px;
}
.report-wrap .user-info:before{
  content: '';
  position: absolute;
  width: 100%;
  background-image: url('../assets/report_bg1.png');
  background-position: center;
  background-size: cover;
  height: 165px;
  left: 0;
  top: -150%;
  z-index: -1;
}
.user-info .clazz-name {
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 3px;
  text-align: center;
}
.user-info .clazz-name span:first-child {
  margin-right: 15px;
}
.user-info .user-name {
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.38px;
  text-align: center;
}
.user-info .user-name span:first-child {
  margin-right: 15px;
}
.report-wrap .user-info:after {
  content: "";
  width: 262px;
  height: 1px;
  border-top: 1px dashed #fff;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -131px;
}

.sr-comment {
  position: relative;
  margin-top: 20px;
  padding-left: 80px;
  padding-right: 30px;
  min-height: 180px;
}

.sr-comment .tname {
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.47px;
  line-height: 35px;
  text-align: left;
  width: 50px;
  padding: 20px 0 20px 20px;
  box-sizing: border-box;
  background-color: #a97c43;
  position: absolute;
  left: 0;
}
.sr-comment .tname:after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  right: -8px;
  top: -8px;
}
.sr-comment .sr-cont {
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 28px;
  text-align: left;
}
.sr-evaluate,
.sr-imgs {
  margin-top: 20px;
  margin-bottom: 40px;
}

.sr-evaluate .tname,
.sr-imgs .tname {
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0.47px;
  line-height: 34px;
  display: inline-block;
  text-align: left;
  height: 34px;
  padding: 0 20px 10px;
  background-color: #a97c43;
  position: relative;
}
.sr-evaluate {
  text-align: right;
  position: relative;
}
.sr-evaluate:after{
  content: '';
  position: absolute;
  width: 100%;
  background-image: url('../assets/report_bg2.png');
  background-position: center;
  width: 100%;
  background-size: cover;
  height: 226px;
  left: 0;
  top: 0;
  z-index: -1;
}
.sr-evaluate .tname:after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  left: -8px;
  top: -8px;
}
.sr-imgs {
  text-align: left;
}
.sr-imgs .tname:after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  right: -8px;
  top: -8px;
}

.img-wrap {
  /* width: 310px; */
  margin: 20px auto;
}
.img-wrap .sr-img {
  width: 310px;
  width: 260px;
  height: 260px;
  margin: 20px auto;
  background-size: cover;
  background-origin: center;
  background-repeat: none;
  border: 1px dashed #fff;
  padding: 10px;
  border-radius:10px;
  margin-bottom: 40px;
  position: relative;
}
.img-wrap .sr-img:after{
  content: '';
  position: absolute;
}
.img-wrap .sr-img img{
  width: 100%;
  height: 100%;
  border-radius:10px;
}
.img-wrap .img-item:nth-child(odd){
  margin-right: -20px;
}
.img-wrap .img-item:nth-child(even){
  margin-left: -20px;
}
.img-wrap .img-item{
  position: relative;
}
.img-wrap .img-item:nth-child(odd):after{
  content: '';
  position: absolute;
  background-image: url('../assets/report_bg3.png');
  background-position: center;
  width: 100%;
  background-size: cover;
  height: 278px;
  left: 0;
  bottom: -50%;
  z-index: -1;
}
.img-wrap .img-item:nth-child(even):after{
  content: '';
  position: absolute;
  background-image: url('../assets/report_bg4.png');
  background-position: center;
  width: 100%;
  background-size: cover;
  height: 190px;
  left: 0;
  bottom: -20%;
  z-index: -1;
}
.no-data{
  text-align: center !important;
  padding-top: 50px;
  padding-bottom: 30px;
  box-sizing: border-box;
}
.star-com{
  width: 80%;
  margin: 0 auto;
  text-align: left;
  margin-top: 20px;
}
.star-com .star-item{
  margin-bottom: 6px;
}
.star-com .lab{
  width: 120px;
  display: inline-block;
  text-align: right;
  margin-right: 10px;
  vertical-align: middle;
}
.star-com .vux-rater{
  vertical-align: middle;
}
</style>
