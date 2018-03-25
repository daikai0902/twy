<template>
  <div class="index-wrap">
    <div class="open-wrap">
      <p class="op1">宁波天唯艺星教育</p>
      <p class="op2">让艺术为孩子成长助航</p>
      <p class="op3">输入学号就可查询小朋友课程课时和成绩</p>
      <input type="text" placeholder="请输入小朋友的学号" class="ipt-login">
      <a href="javascript:;" class="btn-parent-login">查询</a>
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
  margin: 30% auto;
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
  font-size:24px;
  color:#ffffff;
  letter-spacing:0.69px;
  text-align:center;
  text-shadow:0 2px 4px rgba(0,0,0,0.25);
}
.open-wrap .op2{
  font-size:24px;
  color:#FFFFFF;;
  text-align:center;
  margin-bottom: 40px;
}
.open-wrap .op3{
  font-size:14px;
  color:#ffffff;
  text-align:center;
  margin: 30px;
}
.ipt-login{
  background:rgba(255,255,255,0.11);
  border:2px solid #ffffff;
  border-radius:100px;
  width:284px;
  height:54px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.btn-parent-login{
  background:#80225a;
  display: block;
  border-radius:100px;
  width:286px;
  height:48px;
  line-height:48px;
  font-size:18px;
  color:#fff;
  text-align: center;
  margin: 80px auto 0;
}
</style>
