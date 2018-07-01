<template>
  <div class="index-wrap">
    <side-menu></side-menu>
    <div class="index-intro">
      <div class="intro-title">天唯艺星教育</div>
      <div class="intro-desc">宁波天唯艺星教育是上海小荧星核心战略合作伙伴，由上海戏剧学院徐明德教授和27年资深教育管理者带领，携手各艺术领域专家教师，志在做最专业的艺术基础教育。</div>
      <router-link to="school" class="intro-link">学校简介  ></router-link>
    </div>

    <div class="home-menu-wrap">
      <router-link to="news" class="flex-demo flex-item1">
        <img class="m-img" src="../assets/m1.png">
        <p class="m-name">新闻·公告 ></p>
      </router-link>
      <router-link to="activity" class="flex-demo flex-item1">
        <img class="m-img m-img2" src="../assets/m2.png">
        <p class="m-name">精彩活动 ></p>
      </router-link>
      <flexbox>
        <flexbox-item>
          <router-link to="classify" class="flex-demo flex-item2">
            <img class="m-img" src="../assets/m3.png">
            <p class="m-name">课程介绍</p>
            <p class="m-ename">Course</p>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <router-link to="teachers" class="flex-demo flex-item2">
            <img class="m-img" src="../assets/m4.png">
            <p class="m-name">名师团队</p>
            <p class="m-ename">Teacher Team</p>
          </router-link>
        </flexbox-item>
        <flexbox-item>
          <router-link to="open" class="flex-demo flex-item2">
            <img class="m-img" src="../assets/m5.png">
            <p class="m-name">公开课</p>
            <p class="m-ename">Open class</p>
          </router-link>
        </flexbox-item>
      </flexbox>
    </div>

    <div class="home-wrap"></div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import SideMenu from '@/components/common/SideMenu'

export default {
  name: 'Home',
  components: {
    Flexbox,
    FlexboxItem,
    SideMenu
  }
}
</script>

<style scoped>
hmt{
  background: url('../assets/bg_home.jpg') no-repeat center center;
  background-size: cover;
}
.index-wrap .bg-home{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.index-intro{
  z-index: 10;
  position: relative;
  color: #fff;
  width: 94%;
  /* max-width: 320px; */
  margin: 0 auto;
  padding-top: 75px;
  box-sizing: border-box;
}
.index-intro .intro-title{
  font-size:24px;
  margin-bottom: 10px;
  font-weight: 200;
}
.index-intro .intro-desc,
.index-intro .intro-link{
  font-size: 12px;
  color: #fff;
  font-weight: 200;
}
.index-intro .intro-link{
  margin-top: 10px;
}
.home-menu-wrap{
  z-index: 10;
  position: relative;
  width: 94%;
  /* max-width: 320px; */
  margin: 88px auto 30px;
}
.flex-item1{
  background:rgba(255,255,255,0.40);
  border-radius:12px;
  width:198px;
  height:50px;
  font-size: 14px;
  color:#000;
  margin-bottom: 20px;
  position: relative;
  padding-left: 100px;
  box-sizing: border-box;
  display: block;
}
.flex-item1 .m-img{
  width:22px;
  height:18px;
  vertical-align: middle;
  position: absolute;
  left: 15px;
  top: 16px;
}
.flex-item1 .m-img2{
  width:28px;
  height:28px;
  left: 15px;
  top: 12px;
}
.flex-item1 .m-name{
  opacity:0.5;
  text-align: right;
  padding-right: 15px;
  line-height: 50px;
}
.flex-item2{
  background:rgba(255,255,255,0.40);
  border-radius:12px;
  width:100%;
  height:102px;
  font-size:13px;
  color:#000;
  padding-top: 8px;
  padding-left: 6px;
  box-sizing: border-box;
  display: block;
}
.flex-item2 .m-img{
  height: 27px;
  width: initial;
  margin-bottom: 10px;
  margin-top: 5px;
}
.flex-item2 .m-name{
  opacity:0.5;
}
.flex-item2 .m-ename{
  font-size: 10px;
  opacity:0.5;
  white-space: nowrap;
}
</style>