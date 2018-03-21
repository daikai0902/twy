<template>
  <div class="activity-wrap">
    <side-menu isGoback="true"></side-menu>
    <div class="growth-wrap">
      <div class="gw-header">
        <img src="../assets/school2.png" class="gw-logo">
        <p class="gw-txt">孩子成长艺星之路</p>
      </div>
      <div class="sc7-title">
        <div class="sc7-dot"></div>
      </div>
      <div class="gw-item gw1">
        <img src="../assets/gw1.jpg" class="gw-img">
        <p class="gw1-txt">艺星启蒙班 <span class="">2.5-4.5周岁</span><p>
        <div class="gw-cont">
          <p class="gw-desc">通过歌舞、律动、表演模仿等方式亲近艺术</p>
          <p class="gw-desc">引领孩子感知、体验、初尝丰富的艺术世界</p>
        </div>
      </div>
      <div class="gw1-2">
        <p class="gw1-txt">基础学制 <br/><span class="">4-12周岁</span></p>
      </div>
      <div class="gw-item gw2">
        <img src="../assets/gw2.jpg" class="gw-img">
        <div class="gw-lab">
          <div>
            <p class="gl1">兴趣培养</p>
          </div>
          <p class="gl2">艺校一年级</p>
        </div>
        <div class="gw-cont">
          <p class="gw-desc">教授声乐、舞蹈、表演等基础技能</p>
          <p class="gw-desc">感受自我潜力，获得“我能”的快乐</p>
        </div>
      </div>
      <div class="gw-item gw3">
        <div class="gw-lab">
          <div>
            <p class="gl1">初识舞台</p>
          </div>
          <p class="gl2">艺校二年级</p>
        </div>
        <img src="../assets/gw3.jpg" class="gw-img">
        <div class="gw-cont">
          <p class="gw-desc">鼓励孩子登上舞台展示学习成果</p>
          <p class="gw-desc">克服登台恐惧，获得“我敢”的快乐</p>
        </div>
      </div>
      <div class="gw-item gw4">
        <img src="../assets/gw4.jpg" class="gw-img">
        <div class="gw-lab">
          <div>
            <p class="gl1">专业技能</p>
          </div>
          <p class="gl2">艺校三年级</p>
        </div>
        <div class="gw-cont">
          <p class="gw-desc">指导孩子在各种演出机会中灵活运用基础技能</p>
          <p class="gw-desc">享受舞台表演，获得“我享”的快乐</p>
        </div>
      </div>
      <div class="gw-item gw5">
        <img src="../assets/gw5.jpg" class="gw-img">
        <div class="gw-cont">
          <p class="gw-desc">在娴熟的技能运用基础上，帮助孩子完善舞台表现力</p>
          <p class="gw-desc">全面掌控舞台，达到“我乐”的境界</p>
        </div>
        <div class="gw-lab">
          <div>
            <p class="gl1">艺星蜕变</p>
          </div>
          <p class="gl2">艺校四年级</p>
        </div>
      </div>
      <div class="gw-item gw6">
        <div class="gw-lab">
          <div>
            <p class="gl1">艺星社团</p>
          </div>
          <p class="gl2">个性创造</p>
        </div>
        <img src="../assets/gw6.jpg" class="gw-img">
        <div class="gw-cont">
          <p class="gw-desc">深入培养赏专业兴趣向导</p>
          <p class="gw-desc">充实个人的艺术修养</p>
        </div>
      </div>
      <div class="gw-item gw7">
        <img src="../assets/gw7.jpg" class="gw-img">
        <div class="gw-lab">
          <div>
            <p class="gl1">天唯艺星艺术团</p>
          </div>
          <p class="gl2">高端演绎</p>
        </div>
        <div class="gw-cont">
          <p class="gw-desc">顶级少儿艺术团体在舞台实践中学习精进</p>
          <p class="gw-desc">登上更高更专业的成长平台</p>
        </div>
      </div>
      <div class="sc7-title yuyue-wrap">
        <router-link :to="{name: 'order'}"  class="sc7-dot btn-yuyue">预约报名</router-link>
        <p class="p1">做最专业的艺术基础教育</p>
        <p class="p2">让艺术为孩子成长助航</p>
      </div>
    </div>
     <img class="bg-black">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'Growth',
  components: {
    SideMenu
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .growth-wrap{
    position: relative;
    z-index: 10;
    overflow: hidden;
  }
  .gw-header .gw-logo{
    width:44px;
    height:44px;
    border-radius:100%;
    display: block;
    margin: 0 auto;
  }
  .gw-header .gw-txt{
    font-size:16px;
    color: #fff;
    text-align: center;
    margin: 10px auto;
  }
  .gw-img{
    width:241px;
    height:122px;
  }
  .gw-desc{
    font-size:14px;
    color:#fff;
  }
  .sc7-title{
    height: 35px;
  }
  .sc7-dot{
    background:#fff;
    width:7px;
    height:7px;
    border-radius:100%;
    margin: 0 auto;
    position: relative;
  }
  .sc7-dot::before,
  .sc7-dot::after{
    content: '';
    background: url('../assets/gw_dot.png') no-repeat center center;
    background-size: cover;
    width:149px;
    height:4px;
    position: absolute;
    top: 2px;
  }

  .sc7-dot::before{
    left: 20px;
  }
  .sc7-dot::after{
    right: 20px;
  }

  .gw1{
    background: url('../assets/gw1_border.png') no-repeat center center;
    background-size: cover;
    width: 308px;
    height: 285px;
    margin: 0 auto;
    position: relative;
  }
  .gw1 .gw-img{
    position: absolute;
    left: -20px;
    width:303px;
    height:144px;
    bottom: 87px;
  }
  .gw1 .gw-cont{
    position: absolute;
    left: -20px;
    border:1px solid #fff;
    width:301px;
    height:75px;
    bottom: 10px;
    padding: 14px;
    box-sizing: border-box;
  }
  .gw1-txt{
    color: #fff;
    font-size: 18px;
    padding-top: 28px;
    margin-left: 50px;
    text-align: center;
  }
  .gw1-txt span{
    font-size: 14px;
    margin-left: 20px;
    display: inline-block;
  }
  .gw1-2 .gw1-txt{
    margin-left: 0;
  }
  .gw1-2 .gw1-txt span{
    margin-left: 0;
  }
  .gw2{
    background: url('../assets/gw2_border.png') no-repeat center center;
    background-size: cover;
    width:313px;
    height:314px;
    margin: 0 20px 0 auto;
    position: relative;
  }

  .gw-lab .gl1{
    background:#ffd93d;
    height: 40px;
    font-size:20px;
    padding: 4px 10px;
    display: inline-block;
    color: #000;
    box-sizing: border-box;
  }
  .gw-lab .gl2{
    border:1px solid #ffd93d;
    padding: 1px 10px;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    border-top: 0;
  }
  .gw2 .gw-img{
    position: absolute;
    right: -20px;
    top: 50px;
  }
  .gw2 .gw-lab{
    position: absolute;
    right: -20px;
    top: 172px;
  }
  .gw2 .gw-lab .gl2{
    margin-left: 15px;
  }
  .gw2 .gw-cont{
    position: absolute;
    right: 0px;
    top: 250px;
    text-align: right;
  }

  .gw3{
    background: url('../assets/gw3_border.png') no-repeat top right;
    background-size: contain;
    width:313px;
    height:339px;
    margin: 0 auto;
    position: relative;
    padding-top: 60px;
    box-sizing: border-box;
  }
  .gw3 .gw-lab{
    text-align: center;
  }
  .gw3 .gw-cont{
    border:1px solid #fff;
    width:242px;
    height:60px;
    padding: 5px;
    text-align: center;
    box-sizing: border-box;
  }
  .gw4{
    background: url('../assets/gw4_border.png') no-repeat center center;
    background-size: cover;
    width:266px;
    height:247px;
    margin: 30px auto 0 80px;
    position: relative;
    box-sizing: border-box;
  }
  .gw4 .gw-img{
    position: absolute;
    left: -80px;
    top: -10px;
  }
  .gw4 .gw-lab{
    position: absolute;
    left: -80px;
    top: 112px;
  }
  .gw4 .gw-cont{
    position: absolute;
    left: -60px;
    top: 182px;
  }
  .gw5{
    background: url('../assets/gw5_border.png') no-repeat top left;
    background-size: contain;
    height: 276px;
    margin: 10px 0 0 30px;
    position: relative;
    box-sizing: border-box;
  }
  .gw5 .gw-img{
    position: absolute;
    right: 0;
    top: 40px;
  }
  .gw5 .gw-lab{
    position: absolute;
    right: 0;
    top: 162px;
  }
  .gw5 .gw-cont{
    width: 190px;
    position: absolute;
    right: 120px;
    top: 162px;
    text-align: right;
  }
  .gw6{
    background: url('../assets/gw6_border.png') no-repeat center center;
    background-size: cover;
    width:275px;
    height:313px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
  }
  .gw6 .gw-lab{
    padding-top: 60px;
  }
  .gw7{
    background: url('../assets/gw7_border.png') no-repeat top right;
    background-size: contain;
    height:276px;
    margin: 0 20% 0 auto;
    position: relative;
    box-sizing: border-box;
  }
  .gw7 .gw-img{
    position: absolute;
    left: 0;
    top: 10px;
  }
  .gw7 .gw-lab{
    position: absolute;
    left: 0;
    top: 132px;
  }
  .gw7 .gw-cont{
    position: absolute;
    left: 20px;
    top: 210px;
  }
  .yuyue-wrap{
    margin: 30px auto;
  }
  .btn-yuyue{
    background:rgba(255,255,255,0.30);
    border-radius:100px;
    width:76px;
    height:30px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    display: block;
  }
  .btn-yuyue::before,
  .btn-yuyue::after{
    top: 14px;
    z-index: -1;
  }
  .yuyue-wrap{
    text-align: center;
    color:#fff;
    font-size: 14px;
    line-height: 32px;
    padding-bottom: 80px;
  }
  .yuyue-wrap .p1{
    font-size:18px;
    font-weight: 600;
    margin-top: 20px;
  }
</style>