<template>
  <div class="">
    <side-menu isGoback="true"></side-menu>
    <div class="help-wrap">
      <div class="step-item step1">
        <div class="st-num">第一步</div>
        <div class="st-name">关注我们</div>
        <img src="">
        <div class="st-desc">扫二维码关注公众号<br/>“宁波天唯艺星教育”</div>
      </div>
      <div class="step-item step1">
        <div class="st-num">第二步</div>
        <div class="st-name">报名入口</div>
        <img src="">
        <div class="st-desc">打开公众号<br/>点击“入学申请”</div>
      </div>
      <div class="step-item step1">
        <div class="st-num">第三步</div>
        <div class="st-name">填写信息</div>
        <img src="">
      </div>
      <div class="step-item step1">
        <div class="st-num">第四步</div>
        <div class="st-name">付款</div>
        <img src="../assets/wepay.png" style="width:40px;height:37px;">
        <div class="st-desc">微信支付，支付成功后，报名即可成功</div>
      </div>

      <router-link :to="{name: 'order'}" class="horder-link">预约报名</router-link>
    </div>
    <div class="bg-black"></div>
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'Help',
  components: {
    SideMenu
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .help-wrap{
    position: relative;
    z-index: 10;
    color: #fff;
    width: 94%;
    margin: 20px auto;
  }
  .step-item{
    text-align: center;
  }
  .st-num{
    font-size:12px;
    color:#989da5;
  }
  .st-name{
    font-size:18px;
    color:#fff;
    position: relative;
    margin-bottom: 20px;
  }
  .st-name::after{
    content: '';
    width: 20px;
    height: 1px;
    position: absolute;
    bottom: -6px;
    left: calc(50% - 10px);;
    background-color: #fff;
  }
  .step-item img{
    margin: 10px 0;
  }
  .st-desc{
    font-size:14px;
    color:#fff;
  }
  .horder-link{
    background:rgba(255,255,255,0.30);
    border-radius:100px;
    width:250px;
    height:48px;
    font-size:16px;
    color:#fff;
    text-align: center;
    line-height: 48px;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 50px;
  }
</style>