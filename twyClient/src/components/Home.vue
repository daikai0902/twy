<template>
  <div class="index-wrap">
    <div class="index-room"></div>
    <div class="topbar">
      <router-link :to="{name: 'order'}" class="txt-right pr45 order-link">预约报名</router-link>
    </div>
    <div class="index-intro">
      <div class="intro-title">天唯艺星教育</div>
      <div class="intro-desc">宁波天唯艺星教育是上海小荧星核心战略合作伙伴，由上海戏剧学院徐明德教授和27年资深教育管理者带领，携手各艺术领域专家教师，志在做最专业的艺术基础教育。</div>
      <div class="intro-link">学校简介  ></div>
    </div>
    <img class="bg-home" src="../assets/bg_home.jpg">
  </div>
</template>

<script>
export default {
  name: 'Home'
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
</style>