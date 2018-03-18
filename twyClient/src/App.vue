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
}
body {
  background-color: #fbf9fe;
}
.topbar{
  position: relative;
  z-index: 10;
  margin-top: 15px;
  margin-right: 20px;
  text-align: right;
}
.order-link{
  width: 76px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size:14px;
  background:rgba(255,255,255,0.30);
  border-radius:100px;
}
.popup-smenu{
  width: 100% !important;
  left: 0 !important;
  overflow: hidden;
}
</style>
