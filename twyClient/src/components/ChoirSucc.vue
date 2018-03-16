<template>
  <div class="choir-wrap">
    <div class="chior-room"></div>
    <div class="choir-text">
      <p><img class="wepay-succ" src="../assets/wepay_succ.png"></p>
      <p class="p1">报名成功</p>
      <p class="p2">少儿合唱团</p>
      <p class="p3">需要面试考核才能正式成为合唱团成员，具体细节请联系客服！</p>
      <p class="p3 pt20">学校电话 0574-88269588</p>
      <p class="p3">官方微信 17367232260</p>
    </div>
    <img class="bg-choir" src="../assets/bg_choir.jpg">
  </div>
</template>

<script>
export default {
  name: 'ChoirSucc'
}
</script>

<style scoped>
.chior-room{
  background-color: #000;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
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
</style>


