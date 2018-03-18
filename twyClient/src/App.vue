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
</style>
