<template>
  <div class="qcode-wrap">
    <div class="qcode-room"></div>
    <div class="qcode-header">
      <img class="qcode-bg" src="../assets/qcode_bg.jpg">
      <img class="qcode-mask" src="../assets/qcode_mask.png">
    </div>
    <div class="qcode-bd">
      <p class="q-name">宁波天唯艺星教育</p>
      <p class="q-slogan">让艺术为孩子成长助航</p>
      <div class="qcode-cont">
        <img src="../assets/qcode.jpg" class="qcode-img">
      </div>
      <p class="qcode-tip">长按二维码，付款时备注小朋友姓名</p>
      <p class="qcode-ft">
        <img src="../assets/wepay.png" class="wepay">
        支持微信支付
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qcode'
}
</script>

<style scoped>
.qcode-room{
  background-color: #bcbeca;
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
}
.qcode-wrap{
  background-color: #bcbeca;
  position: relative;
  min-height: 100%;
}
.qcode-header{
  background-image:linear-gradient(-180deg, rgba(255,255,255,0.00) 29%, #bcbeca 100%);
  position: relative;
}
.qcode-bg {
  width: 100%;
}
.qcode-mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  z-index: 1;
}
.qcode-bd{
  position: relative;
  width: 100%;
  margin-top: -140px;
  z-index: 9;
}
.q-name{
  font-size:14px;
  color:#A4897E;
  text-align: right;
  text-shadow:0 2px 4px rgba(0,0,0,0.25);
  width: 280px;
  padding-right:2%;
  margin: 0 auto;
  font-weight: bold;
}
.q-slogan{
  font-size:24px;
  color:#A4897E;
  text-align: right;
  width: 280px;
  padding-right:2%;
  margin: 0 auto;
}
.qcode-cont{
  background:#ffffff;
  box-shadow:0 0 24px 0 rgba(0,0,0,0.08);
  border-radius:15px;
  width:281px;
  height:281px;
  margin: 10px auto 5px;
  padding: 17px;
  box-sizing: border-box;
}
.qcode-img{
  width: 246px;
  height: 246px;
}
.qcode-tip{
  font-size:16px;
  color:#d2474d;
  text-align:center;
}
.qcode-ft{
  text-align:center;
  font-size:15px;
  color:#4a4a4a;
  margin-top:40px;
  margin-bottom: 40px;
}
.wepay{
  width: 30px;
  height: 28px;
  vertical-align: middle;
}
</style>
