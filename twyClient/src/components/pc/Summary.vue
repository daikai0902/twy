<template>
	<div class="" id="summarys">
<!--     <div class="maincontent">
      <div class="bg-top">
        <div class="bg-start"></div>
      </div>
      <div class="bg-layout"></div>
    </div> -->
    <img :src="item1" alt="">
    <div class="goback"></div>
		<!-- <div class="block" :style="'background-image: url('+ item1 + ')'"></div> -->
	</div>
</template>
<script>
import item1 from '@/assets/pc/summary/artboard.jpg'
export default{
  name: 'summarys',
  data: () => ({
    item1: item1
  }),
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
#summarys{
  position: relative;
  width: 100%;
  min-height: calc(100vh);
  img{
    width: 100%;
  }
  .goback{
    position: absolute;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 100px;
    cursor: pointer;
  }
}
</style>