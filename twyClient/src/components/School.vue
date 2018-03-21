<template>
  <div class="sc-wrap">
    <!-- <side-menu></side-menu> -->
    <div class="school-wrap">
      <div class="sc-item sc-header">
        <p class="sc-name">天唯艺星</p>
        <p class="sc-ename">TIAN WEI</p>
        <img src="../assets/school.jpg" class="sch-bg" />
        <div class="sch-block"></div>
        <img src="../assets/school2.png" class="sch-logo" />
      </div>
      <div class="sc-cont">
        <div class="sc-item sc1">
          <p class="sc-title">“一人·一艺”</p>
          <p class="sc-num">01</p>
          <div class="sc1-desc">
            <p class="sc-desc">有专业的初、中、高级艺术专业教材，所有专职教师均通过上海小荧星教材教法培训才能上岗，并每年不断进行专业研修</p>
            <img src="../assets/school5.jpg" />
          </div>
        </div>
        <div class="sc-item sc2">
          <p class="sc-num">02</p>
          <div class="sc2-desc">
            <img src="../assets/school7.jpg" />
            <p class="sc-desc">学校定期由上海专家来校指导，并将邀请宁波市著名歌、舞、演艺术家进班授课</p>
          </div>
        </div>
        <div class="sc-item sc3">
          <p class="sc-desc">学校寒、暑假设有专业考级、国内夏令营、国外游学等活动，让学生在夏令营及国外游学活动中增加与全国各地乃至国际上艺术爱好的少儿互动</p>
          <div class="sc3-desc">
            <p class="sc-num">03</p>
            <img src="../assets/school3.jpg"  class="sc3-img"/>
            <img src="../assets/school9.png" class="sc3-left"/>
            <img src="../assets/school9.png" class="sc3-right"/>
          </div>
        </div>
        <div class="sc-item sc4">
          <img src="../assets/school6.jpg" class="sc4-img"/>
          <div class="sc4-desc">
            <p class="sc-desc">学校携手上海小荧星为少儿多渠道提供地方、省、国家及国际表演、比赛的机会，并直接与专业院校对接，为少儿规划艺术人生。</p>
            <p class="sc-num">04</p>
          </div>
        </div>
        <div class="sc-item sc5">
          <p class="sc-num">05</p>
          <p class="sc-desc">上海小荧星将定期组织全国各地战略合作伙伴单位以地方文化传承节目为特色作全国巡回演出</p>
          <img src="../assets/school10.jpg" class="sc5-img"/>
        </div>

        <div class="sc-item sc6">
          <div class="sc6-txt">
            <p class="sc61">天唯艺星</p>
            <p class="sc62">教学特色</p>
            <p class="sc63">Teaching Characteristics</p>
          </div>
          <div class="sc6-desc">
            <img src="../assets/school4.jpg" class="sc6-img"/>
            <img src="../assets/school9.png" class="sc6-left"/>
            <img src="../assets/school9.png" class="sc6-right"/>
          </div>
          <ul class="intro-list">
            <li v-for="(item, index) in introList" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="sc-item sc7">
          <div class="sc7-title">
            <div class="sc7-dot"></div>
          </div>
          <p class="sc71">做最专业的艺术基础教育</p>
          <p class="sc72">让艺术为孩子成长助航</p>
        </div>
      </div>  
    </div>
    <img class="bg-black bg-gray">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'School',
  components: {
    SideMenu
  },
  data () {
    return {
      introList: [
        {name: '分龄、分阶段、因材施教的教学理念'},
        {name: '强大的教学研发团队，系统权威的教学体系与教材'},
        {name: '150分钟大时段专业教学'},
        {name: '2+1+1演出级师资配备专业教授'},
        {name: '公开课、汇报演出、毕业演出、国家级（市级）演出、国际比赛'},
        {name: '广播、电视、电影、广告、新媒体等360度全媒体展示平台'}
      ]
    }
  }
}
</script>

<style scoped>
.school-wrap{
  position: relative;
  z-index: 10;
}
.sc-header{
  height: 302px;
  margin-top: -45px;
}
.sc-header .sc-name{
  position: absolute;
  font-size:36px;
  color:#fff;
  position: absolute;
  top: 70px;
  left: 90px;
}
.sc-header .sc-ename{
  transform:rotate(90deg);
  font-size:30px;
  color:#fff;
  writing-mode: tb-lr;
  position: absolute;
  top: 185px;
  left: -30px;
  font-weight: bold;
}
.sc-header .sch-bg{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.sc-header .sch-logo{
  position: absolute;
  width:129px;
  height:129px;
  border-radius:100%;
  right: 25px;
  bottom: -15px;
}
.sc-header .sch-block{
  background:#efefef;
  width:336px;
  height:85px;
  opacity:0.38;
  right:0;
  position: absolute;
  bottom: 0;

}
.sc-item,
.sc-header{
  position: relative;
}
.sc-num{
  font-size:56px;
  color:#d3d3d3;
  position: absolute;
}
.sc-desc{
  font-size:14px;
  color:#54545a;
  line-height:25px;
}
.sc1{
  padding-top: 120px;
}
.sc-title{
  font-size:24px;
  color:#000;
  top: 20px;
  left: 16%;
  font-weight: bold;
  position: absolute;
}
.sc1 .sc-num{
  position: absolute;
  right: 15px;
  top: 35px;
}
.sc1 .sc1-desc{
  width: 290px;
  margin:0 15px 0 auto;
}
.sc1 .sc-desc{
  font-size:14px;
  color:#54545a;
  line-height:25px;
  margin-bottom: 10px;
}
.sc1 .sc1-desc img{
  width: 100%;
}
.sc2 .sc-num{
  position: absolute;
  left: 50px;
  top: 5px;
}
.sc2 .sc2-desc{
  width: 290px;
  margin:0 15px 0 auto;
  position: relative;
  padding-left: 155px;
  height: 220px;
  padding-top: 80px;
  box-sizing: border-box;
}
.sc2 img{
  width:131px;
  height:131px;
  border-radius:100%;
  position: absolute;
  left: 0;
}
.sc2 .sc-desc{
  padding-top: 25px;
  border-top: 2px solid #a3a3a3;
  margin-top: -10px;
}
.sc3 .sc-desc{
  width: 315px;
  margin: 10px auto;
}
.sc3 .sc3-img{
  position: absolute;
  width:153px;
  height:153px;
  top: 0;
  left: 35%;
  z-index: 12;
}
.sc3 .sc3-desc{
  height: 153px;
  position: relative;
}
.sc3 .sc-num{
  right: 20px;
  top: -20px;
  z-index: 15;
}
.sc3 .sc3-left{
  position: absolute;
  width:154px;
  height:91px;
  left: 0;
}
.sc3 .sc3-right{
  position: absolute;
  bottom: 0;
  right: 0;
  width:124px;
  height:90px;
}
.sc4-img{
  width:315px;
  height:160px;
  margin: 40px auto 10px;
  display: block;
}
.sc4-desc{
  position: relative;
  height: 100px;
  padding-right: 267px;
}
.sc4-desc .sc-desc{
  position: absolute;
  right: 0;
  bottom: 0;
  background:rgba(255,255,255,0.54);
  width:267px;
  height:132px;
  padding: 30px 10px 10px 10px;
  box-sizing: border-box;
}
.sc4-desc .sc-num{
  left: 8%;
  top: 0;
}
.sc5{
  overflow: hidden;
}
.sc5 .sc-num{
  position: absolute;
  right: 50px;
  top: 5px;
}
.sc5 .sc-desc{
  width: 315px;
  margin: 80px auto 10px 15px;
}
.sc5-img{
  width:336px;
  height:143px;
  display: block;
  margin: 0 0 10px auto;
}
.sc6-desc{
  width: 100%;
  margin: 10px auto;
  position: relative;
  height: 132px;;
}
.sc6-desc .sc6-img{
  border-radius:12px;
  width:251px;
  height:132px;
  left: 22%;
  position: absolute;
}
.sc6-desc .sc6-left,
.sc6-desc .sc6-right{
  width:124px;
  height:132px;
}
.sc6-desc .sc6-left{
  position: absolute;
  left: 0;
  top: 0;
}
.sc6-desc .sc6-right{
  position: absolute;
  right: 0;
  top: 0;
}
.sc6-txt{
  position: relative;
  height: 50px;
}
.sc6 .sc61,
.sc6 .sc62{
  position: absolute;
  font-size:24px;
  color:#000;
  width: 24px;
  line-height: 32px;
}
.sc6 .sc61{
  left: 15px;
}
.sc6 .sc62{
  left: 50px;
  top: 60px;
}
.sc6 .sc63{
  position: absolute;
  right: 25px;
  bottom: 0;
}

.sc7{
  text-align: center;
  color:#000;
  font-size: 14px;
  line-height: 32px;
  padding-bottom: 30px;
}
.sc7 .sc71{
  font-size:18px;
  font-weight: 600;
}
.intro-list{
  width: 320px;
  margin: 10px auto;
  font-size:14px;
  color:#54545a;
  
  list-style: none;
}
.intro-list li{
  position: relative;
  line-height:26px;
  padding: 4px 0 4px 20px;
}
.intro-list li::before{
  content: '/';
  position: absolute;
  left:0;
  top: 4px;
}
.sc7-title{
  height: 35px;
}
.sc7-dot{
  background:#a3a3a3;
  width:10px;
  height:10px;
  border-radius:100%;
  margin: 0 auto;
  position: relative;
}
.sc7-dot::before,
.sc7-dot::after{
  content: '';
  background: url('../assets/school8.png') no-repeat center center;
  background-size: cover;
  width:149px;
  height:4px;
  position: absolute;
  top: 3px;
}

.sc7-dot::before{
  left: 20px;
}
.sc7-dot::after{
  right: 20px;
}
</style>