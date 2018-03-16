<template>
  <div class="piano-room">
    <div class="piano-wrap">
      <p v-if="type == 'signup'"><img class="wepay-succ" src="../assets/wepay_succ_black.png"></p>
      <p v-if="type == 'signup'" class="p1">报名成功</p>
      <p class="p2">钢琴课程（一对一）</p>
      <p class="p3">请家长联系客服，预约试听课程</p>
      <p class="p4">教师级别与收费</p>


      <div class="piano-item pi1">
        <div class="piano-title">A级专业教师</div>
        <div class="piano-desc">毕业于国内专业院校钢琴表演专业、音乐教育专业，获取教师资格证。并获得省级以上专业表演比赛（独奏）三等奖以上。</div>
        <flexbox>
          <flexbox-item><div class="flex-demo">初级（零基础-3级）</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">260元/45分钟</div></flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item><div class="flex-demo">中级（4-6级）</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">320元/45分钟</div></flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item><div class="flex-demo">高级（7-10级）</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">380元/45分钟</div></flexbox-item>
        </flexbox>
      </div>

      <div class="piano-item">
        <div class="piano-title">特级专业教师</div>
        <div class="piano-desc">毕业于国内十一所独立设置的高等音乐院校钢琴系、键盘系。获得省级专业钢琴比赛（独奏）第一名；国家级专业钢琴比赛（独奏）一等奖、三等奖以上。</div>
        <flexbox>
          <flexbox-item><div class="flex-demo">初级</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">320元/45分钟</div></flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item><div class="flex-demo">中级</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">380元/45分钟</div></flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item><div class="flex-demo">高级</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">450元/45分钟</div></flexbox-item>
        </flexbox>
      </div>

      <div class="piano-item">
        <div class="piano-title">预约类教师</div>
        <div class="piano-desc">毕业于国内十一所独立设置的高等音乐院校钢琴系或全球排名前60名音乐院校钢琴系。获得国际钢琴专业比赛（独奏）一等奖、三等奖以上。</div>
        <flexbox>
          <flexbox-item><div class="flex-demo">初级（零基础-3级）</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">380元/45分钟</div></flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item><div class="flex-demo">中级（4-6级）</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">480元/45分钟</div></flexbox-item>
        </flexbox>
        <flexbox>
          <flexbox-item><div class="flex-demo">高级（7-10级）</div></flexbox-item>
          <flexbox-item><div class="flex-demo txt-right">580元/45分钟</div></flexbox-item>
        </flexbox>
      </div>

      <p class="piano-contact pc1">学校电话 0574-88269588</p>
      <p class="piano-contact">官方微信 17367232260</p>


    </div>
    <img class="bg-piano" src="../assets/bg_piano.jpg">    
    <img class="bg-piano-mask" src="../assets/bg_piano_mask.png">    
  </div>
</template>
  
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
  name: 'PianoSucc',
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {
      type: 'intro'
    }
  },
  created () {
    this.type = this.$route.query.type
  }
}
</script>

<style scoped>
.piano-room{
  background-color: #ededed;
  position: relative;
  z-index: 0;
}
.piano-wrap{
  width: 300px;
  padding-top: 60px;
  padding-bottom: 30px;
  margin: 0 auto;
  z-index: 9;
  position: relative;
}
.wepay-succ{
  width: 25px;
  height: 25px;
}
.p1{
  font-size:20px;
  margin-bottom: 20px;
}
.p2{
  font-size:24px;
}
.p3{
  font-size:16px;
}
.p4{
  font-size:16px;
  margin-top: 30px;
}


.piano-item{
  margin-top: 25px;
}
.piano-title{
  font-size: 14px;
  font-weight: bold;
  position: relative;
}
.piano-title::before{
  content: '';
  width: 38px;
  height: 1px;
  background-color: #979797;
  position: absolute;
  left: -45px;
  top: 10px;
}
.piano-desc{
  font-size: 14px;
  margin: 10px auto 5px;
}
.flex-demo{
  font-size: 14px;
  line-height: 36px;
}
.txt-right{
  text-align: right;
}
.pc1{
  margin-top: 50px;
}
.piano-contact{
  font-size:16px;
  text-align:center;
  line-height:38px;
  text-shadow:0 2px 4px rgba(0,0,0,0.50);
}
.bg-piano{
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.bg-piano-mask{
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
}
.pi1{
  margin-top: 15px;
}
</style>