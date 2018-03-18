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
.vux-popup-dialog.popup-smenu{
  width: 100% !important;
  left: 0 !important;
  overflow: hidden;
}
.bg-black{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;
}
</style>
