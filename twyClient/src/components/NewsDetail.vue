<template>
  <div class="news-wrap">
    <side-menu isGoback="true"></side-menu>

    <div class="news-wrap">
      <p class="title">{{title}}</p>
      <div class="info">
        <p class="time">{{time}}</p>
        <p class="org">{{org}}</p>
      </div>
      <div class="news-cont">
        <p class="desc">{{desc}}</p>
        <img src="../assets/detail1.jpg" />
      </div>
    </div>

    <!-- <img class="bg-black"> -->
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'ActivityDetail',
  components: {
    SideMenu
  },
  data () {
    return {
      title: '第二次体验课预约开始啦',
      time: '2018年03月20日 14:00 ',
      org: '宁波天唯艺星教育',
      desc: '3月10日下午，经过天唯艺星教育老师们的共同努力，成功举办了首次家长会及体验课。'
    }
  }
}
</script>

<style scoped>
  .news-wrap{
    position: relative;
    z-index: 10;
    width: 90%;
    margin: 20px auto;
  }
  .news-wrap .title{
    font-size: 18px;
    margin-bottom:10px;
    text-align: center;
  }
  .news-wrap .info{
    text-align: center;
  }
  .news-wrap .time,
  .news-wrap .org{
    font-size: 12px;
    color:#8a8a8f;
    display: inline-block;
  }
  .news-wrap .time{
    margin-right: 10px;
  }
  .news-wrap .news-cont{
    font-size:14px;
    color:#4a4a4a;
    margin-top: 30px;
  }
  .news-wrap .news-cont p{
    margin: 5px 0;
  }
  .news-wrap .news-cont img{
    width: 100%;
  }
</style>
