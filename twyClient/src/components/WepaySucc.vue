<template>
  <div class="choir-wrap">
   
    <div class="choir-text">
      <p><img class="wepay-succ" src="../assets/wepay_succ.png"></p>
      <p class="p3">报名成功</p>
      <p class="p3">您好, {{name}}小朋友</p>
      <p class="p3">报名成功后等待学校安排班级和上课时间，具体细节请联系客服！</p>
      <p class="p3 pt50">学校电话 0574-88269588</p>
      <p class="p3">官方微信 17367232260</p>
    </div>
    <div class="choir-box">
    </div>
  </div>
</template>

<script>
export default {
  name: 'WepaySucc',
  data () {
    return {
      name: '张三'
    }
  },
  created () {
    this.name = this.$route.query.n
  }
}
</script>

<style scoped>
.chior-room{
  background-color: #000;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  top: 0;
}
.choir-box{
  opacity:0.6;
  background-image:linear-gradient(-147deg, #003e4f 0%, rgba(92,80,73,0.78) 29%, rgba(65,55,49,0.46) 100%);
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
}
.wepay-succ{
  width: 25px;
  height: 25px;
}
.choir-wrap .bg-choir{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 370px;
  z-index: 1;
}
.choir-text{
  color: #fff;
  width: 300px;
  padding-top: 120px;
  margin: 0 auto;
  z-index: 10;
  position: relative;
}
.choir-text .p1{
  font-size:20px;
}
.choir-text .p2{
  margin-top: 40px;
  font-size:24px;
}
.choir-text .p3{
  font-size:16px;
  line-height:36px;
}
.pt20{
  margin-top: 20px;
}
.pt50{
  margin-top: 50px;
}
</style>


