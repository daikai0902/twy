<template>
  <div class="index-wrap">
    <div class="open-wrap">
      <img src="../assets/funnel.png" class="open-funnel">
      <p class="op1">各类公开课<br />老师们正在紧锣密鼓的准备中</p>
      <p class="op2">敬请期待</p>
    </div>
    <img class="bg-home" src="../assets/bg_home.jpg">
    <div class="home-wrap"></div>
  </div>
</template>

<script>
export default {
  name: 'Open'
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
.open-wrap{
  width: 100%;
  margin: 50% auto;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 10;
}
.open-wrap .open-funnel{
  width:31px;
  height:40px;
}
.open-wrap .op1{
  font-size:16px;
  line-height:30px;
  margin: 10px;
}
.open-wrap .op2{
  font-size:20px;
}
</style>