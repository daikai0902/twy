<template>
  <div class="news-wrap">
    <side-menu isGoback="true"></side-menu>

    <div class="teacher-wrap">
      <div class="t-item" v-for="(item, index) in teacherList" :key="index" @click="gotoTeacherDetail">
        <p class="t-team" v-if="item.img == 'TEAM'">{{item.img}}</p>
        <img class="t-img" v-else :src="'/static/'+item.img" >
        <p class="t-name">{{item.name}}</p>
      </div>
    </div>
    <img class="bg-black">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'Teacher',
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
          name: '名师团队',
          img: 'TEAM'
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
  },
  methods: {
    gotoTeacherDetail () {
      this.$router.push({name: 'teacherDetail'})
    }
  }
}
</script>

<style scoped>
  .teacher-wrap{
    position: relative;
    z-index: 10;
    width: 94%;
    margin: 25px auto;
  }
  .t-item{
    width: 32%;
    border-radius:12px;
    position: relative;
    float: left;
    margin-right: 2%;
    margin-bottom: 10px;
  }
  .t-item:nth-child(3n+4){
    margin-right: 0;
  }
  .t-item .t-img{
    width: 100%;
    border-radius:12px;
  }
  .t-item .t-name{
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #fff;
    font-size: 16px;
  }
  .t-item:nth-child(1){
    width: 71%;
  }
  .t-item:nth-child(2),
  .t-item:nth-child(3),
  .t-item:nth-child(4){
    width: 27%;
    margin-right: 0;
  } 
  .t-item:nth-child(2){
    margin-right: 0;
    height: 80px;
    background:#0074cd;
    font-size: 14px;
    overflow: hidden;
  }
  .t-item:nth-child(2) .t-team{
    opacity:0.17;
    font-size:36px;
    color:#fff;
    position: absolute;
    top: -8px;
    left: 12px;
  }
  .t-item:nth-child(2) .t-name{
    font-size: 14px;
    bottom: 10px;
    left: 10px;
  }
</style>
