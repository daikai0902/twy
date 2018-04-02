<template>
  <div class="intro-wrap">
    <img class="intro-bg" src="../assets/bg_intro.jpg">
    <swiper class="swiper-wrap" dots-class="intro-dot" dots-position="center" :style="{height: h + 'px', 'padding-top': pt + 'px'}">
      <swiper-item class="intro-item" style="background-color:#fff;" :style="{height: h + 'px'}">
        <img class="item-bg item-bg1" src="../assets/bg_intro21.jpg" style="top:0;">
        <p class="intro-title fadeInUp animated txt-center" style="font-size:20px;margin-bottom:20px;margin-bottom: 20px;margin-top: 220px;color: #220521;">培训学校课程</p>
        <div class="intro-desc txt-center ">
          针对零基础以上儿童<br/>分为初级、中级、高级课程<br/>每班 <span style="font-size:20px;">2</span> 位专业教师 <span style="font-size:20px;">1</span> 位生活教师
        </div>
      </swiper-item>
      <swiper-item class="intro-item c-white" style="background-color:#242735;" :style="{height: h + 'px'}">
        <img class="item-bg item-bg2" src="../assets/bg_intro2.jpg">
        <p class="intro-title fadeInUp animated txt-right pr45" style="margin-top:30px">声乐歌舞</p>
        <div class="intro-desc1 txt-right pr45">
          4-8周岁儿童<br/>每学期16周次，每次150分钟
        </div>
        <div class="intro-desc2 txt-right pr45">
          发挥儿童歌舞表演天性，全面塑造舞台艺术表现力
        </div>
      </swiper-item>
      <swiper-item class="intro-item c-white"  style="background-color:#362505;" :style="{height: h + 'px'}">
        <img class="item-bg" src="../assets/bg_intro3.jpg">
        <p class="intro-title fadeInUp animated" style="margin-top:30px">影视表演</p>
        <div class="intro-desc1">
          4-8周岁儿童<br/>每学期16周次，每次150分钟
        </div>
        <div class="intro-desc2">
          学在教室，用在生活<br/>培养观察和理解力，提高表现能力<br/>与沟通能力
        </div>
      </swiper-item>
      <swiper-item class="intro-item" :style="{height: h + 'px'}">
        <img class="item-bg" src="../assets/bg_intro4.jpg">
        <p class="intro-title fadeInUp animated txt-right pr45" style="margin-top:40px;margin-bottom:20px;">民族舞</p>
        <div class="intro-desc1 txt-right pr45">
          4-8周岁儿童<br/>每学期16周次，每次150分钟
        </div>
        <div class="intro-desc2 txt-right pr45">
          学习民族舞精髓，体验民族舞风情
        </div>
      </swiper-item>
      <swiper-item class="intro-item c-white" :style="{height: h + 'px'}">
        <img class="item-bg" src="../assets/bg_intro5.jpg">
        <p class="intro-title fadeInUp animated" style="margin-top:240px;">涂鸦创想课</p>
        <div class="intro-desc1">
          4-8周岁儿童<br/>滚动开班，每周1次，每次90分钟
        </div>
        <div class="intro-desc2">
          培养美术兴趣，玩与学结合，发掘<br/>孩子艺术天赋
        </div>
      </swiper-item>
      <swiper-item class="intro-item" :style="{height: h + 'px'}">
        <img class="item-bg" src="../assets/bg_intro6.jpg">
        <p class="intro-title fadeInUp animated txt-right pr45" style="margin-top:90px;">素描课</p>
        <div class="intro-desc1 txt-right pr45">
          9岁以上零基础孩子<br/>滚动开班，每周1次，每次150分钟
        </div>
        <div class="intro-desc2 txt-right pr45">
          感受艺术的美感，培养孩子的观察力、造型能力与表现能力
        </div>
      </swiper-item>
      <swiper-item class="intro-item c-white" :style="{height: h + 'px'}">
        <img class="item-bg" src="../assets/bg_intro7.jpg">
        <p class="intro-title fadeInUp animated txt-right pr45" style="margin-top:20px;">少儿合唱团</p>
        <div class="intro-desc1 txt-right pr45">
          5-9周岁儿童<br/>每学期16周次，每次150分钟
        </div>
        <div class="intro-desc2 txt-right pr45">
          开发儿童智力，培养专注力与团队<br/>合作能力
        </div>
      </swiper-item>
      <swiper-item class="intro-item c-white" :style="{height: h + 'px'}">
        <img class="item-bg" src="../assets/bg_intro8.jpg">
        <p class="intro-title fadeInUp animated txt-right pr45" style="margin-top:155px;">钢琴课</p>
        <div class="intro-desc1 txt-right pr45">
          4岁以上儿童，一对一教学<br/>每周一次，每次45分钟
        </div>
        <div class="intro-desc2 txt-right pr45">
          专业院校师资，感受古典音乐的<br/>魅力，打造孩子的贵族气质
        </div>
        <router-link :to="{name: 'pianoSucc', query: { 'type': 'intro' }}" class="txt-right pr45 piano-link">查看详细入学报名细则</router-link>
      </swiper-item>
    </swiper>
    <router-link :to="{name: 'signUp'}" class="signUp-link">立即报名</router-link>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

export default {
  name: 'Introduce',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      pt: 50,
      h: 450,
      w: 320
    }
  },
  created () {
    let _w = window.innerWidth * 0.9
    let _h = window.innerHeight
    if (_w > 320) {
      this.w = 320
      this.h = 450
    } else {
      this.w = _w
      this.h = parseInt(_w * 450 / 320)
    }
    this.pt = parseInt((_h - this.h - 77) / 2)
  }
}
</script>

<style>
.swiper-wrap > .vux-indicator{
  bottom: -28px !important;
  box-sizing: border-box;
  right: inherit !important;
}
.swiper-wrap > .vux-swiper{
  height: 100% !important;
}
.swiper-wrap > .vux-swiper > .vux-swiper-item{
  width: 90% !important;
  max-width: 320px !important;
  max-height: 564px !important;
  border-radius: 30px;
  left: calc((100% - 320px) / 2) !important;
  overflow: hidden;
}
.swiper-wrap > .vux-indicator > a > .vux-icon-dot{
  background:rgba(255,255,255,.18) !important;;
  box-shadow:0 2px 3px 0 rgba(0,0,0,0.08) !important;
  width:9px !important;
  height:9px !important;
  border-radius:100% !important;
  margin-right: 8px !important;
}
.swiper-wrap > .vux-indicator > a > .vux-icon-dot.active{
  background:#fff !important;
}
</style>

<style scoped>
.intro-bg{
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.swiper-wrap{
  margin: 0 auto;
  /* padding-top: 10%; */
  border-radius: 28px;
  overflow: inherit;
}
.intro-item{
  position: relative;
}
.item-bg{
  width: 100%;
  border-radius: 28px;
  position: absolute;
  z-index: -1;
  bottom: 0;
}
.item-bg2{
  bottom: 0;
}
.intro-title{
  font-size:34px;
  width: 256px;
  margin: 0 auto
}
.intro-desc{
  font-size:14px;
  line-height:39px;
}
.intro-desc1{
  font-size:16px;
  line-height:32px;
  width: 256px;
  margin: 0 auto 5px;
  /* font-weight: lighter; */
}
.intro-desc2{
  width: 256px;
  margin: 0 auto;
  font-size:16px;
  line-height:26px;
  /* font-weight: lighter; */
}
.txt-right{
  text-align: right;
}
.txt-center{
  text-align: center;
}
.c-white{
  color: #fff;
}
.pr45{
  padding-right: 5%;
}
.piano-link{
  width:256px !important;
  display:block;
  margin:5px auto 0;
  font-size:14px;
  color:#fff;
  text-decoration: underline;
}
.signUp-link{
  font-size:16px;
  color:#fff;
  display: block;
  border-radius:100px;
  background-image: linear-gradient(38deg, rgba(131,33,87,.68) 0%, rgba(200,40,127,.68) 100%);
  margin:45px auto 0;
  width: 170px;
  height: 40px;
  position: relative;
  z-index: 1;
  text-align: center;
  line-height: 40px;
}
.item-bg1{
  border-radius: 0;
}
</style>
