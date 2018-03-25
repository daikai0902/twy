<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html{
  position: relative;
  min-height: 100%;
  background: url('./assets/bg_home.jpg') no-repeat center center;
  background-size: cover;
}
.vux-popup-dialog.popup-smenu{
  width: 100% !important;
  left: 0 !important;
  overflow: hidden;
}
.bg-black{
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #220521;
}
.bg-gray{
  background-color: #fff !important;
}
.bg-teacher{
  background-color: #232c3c !important;
}
.bg-teacher-detail{
  background-color: #000 !important;
}
.home-wrap{
  opacity:0.66;
  background-image:linear-gradient(-141deg, #470c45 0%, rgba(34,5,33,0.00) 100%);
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>
