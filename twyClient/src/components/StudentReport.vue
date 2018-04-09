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
          <span>{{sReport.clazzName}}</span>
        </p>
        <p class="user-name">
          <span>{{sReport.studentName}}</span>
          <span>{{sReport.studentNum}}</span>
        </p>
      </div>
      
      <div class="sr-comment">
        <div class="tname">老师评语</div>
        <div class="sr-cont">{{sReport.comment}}</div>
      </div>
      <div class="sr-evaluate">
        <div class="tname">评价</div>
        <div class="">
          {{sReport.starComment}}
        </div>
      </div>

      <div class="sr-imgs">
        <div class="tname">成长印记</div>
        <div class="img-wrap">
          <div class="img-item" v-for="(item, idx) in sReport.imgUrls" :key="idx" >
            <div class="sr-img" >
              <img :src="item">
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-black bg-report"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'Report',
  data () {
    return {
      sid: null,
      sReport: {
        clazzName: null,
        studentName: null,
        studentNum: null,
        comment:
          '该生性格外向，喜欢微笑，身为班级英语科代表不仅自己学习态度端正，还能想办法让大家提高英语成绩，为班级英语成绩的提高做出了很大贡献。此外，还能与老师，同学相处的十分融洽，积极参加班集体活动和学校组织的各项活动，展示自己的各方面才能，希望能再接再厉，继续努力，做一个更优秀的自己！',
        starComment: null,
        imgUrls: [
          'http://p1.img.cctvpic.com/uploadimg/2018/04/08/1523166444950856.gif',
          'http://p1.img.cctvpic.com/uploadimg/2018/04/08/1523166444950856.gif',
          'http://p1.img.cctvpic.com/uploadimg/2018/04/08/1523166444950856.gif',
          'http://p1.img.cctvpic.com/uploadimg/2018/04/08/1523166444950856.gif'
        ]
      }
    }
  },
  created () {
    this.sid = this.$route.query.sid
    this.getStudentReport()
  },
  methods: {
    getStudentReport () {
      api.studentReport({ studentId: this.sid }).then(res => {
        if (res.status === 'succ') {
          // this.sReport = res.data
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
  height: 250px;
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
</style>
