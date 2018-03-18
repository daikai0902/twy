<template>
  <div class="news-wrap">
    <side-menu isGoback="true"></side-menu>

    <div class="teacher-wrap">
      <div class="t-item" v-for="(item, index) in teacherList" :key="index">
        <img :src="'src/assets/'+item.img">
        <p class="t-name">{{item.name}}</p>
      </div>
    </div>
    <img class="bg-black">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'Activity',
  components: {
    SideMenu
  },
  data () {
    return {
      teacherList: [
        {
          name: '徐明德',
          img: 'teachers/1.jpg'
        },
        {
          name: '严建红',
          img: 'teachers/2.jpg'
        },
        {
          name: '汪平',
          img: 'teachers/3.jpg'
        },
        {
          name: '姚皓',
          img: 'teachers/4.jpg'
        },
        {
          name: '王舵',
          img: 'teachers/5.jpg'
        },
        {
          name: '陆倩雯',
          img: 'teachers/6.jpg'
        },
        {
          name: '周臻',
          img: 'teachers/7.jpg'
        },
        {
          name: '黄纯纯',
          img: 'teachers/8.jpg'
        },
        {
          name: '罗明',
          img: 'teachers/9.jpg'
        },
        {
          name: '董姬麟',
          img: 'teachers/10.jpg'
        },
        {
          name: '陈艳',
          img: 'teachers/11.jpg'
        },
        {
          name: '俞磊',
          img: 'teachers/12.jpg'
        },
        {
          name: '吴悦',
          img: 'teachers/13.jpg'
        },
        {
          name: '吴建峰',
          img: 'teachers/14.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .teacher-wrap{
    position: relative;
    z-index: 10;
  }
</style>
