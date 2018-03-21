<template>
  <div class="activity-wrap">
    <div class="ac-wrap">
      <p class="title">{{title}}</p>
      <p class="time">{{time}}</p>
      <p class="address">{{address}}</p>
      <div class="ac-cont">
        <p class="desc">{{desc}}</p>
        <img src="../assets/detail1.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivityDetail',
  data () {
    return {
      title: '第二次体验课预约开始啦',
      time: '2018年03月20日 14:00 ',
      address: '鄞州中心区泰安中路508号，创意设计大厦三楼',
      desc: '3月10日下午，经过天唯艺星教育老师们的共同努力，成功举办了首次家长会及体验课。'
    }
  }
}
</script>

<style scoped>
  .activity-wrap{
    background-color: #fbf9fe;
  }
  .ac-wrap{
    position: relative;
    z-index: 10;
    width: 90%;
    margin: auto;
    padding: 20px 0;
  }
  .ac-wrap .title{
    font-size: 36px;
    margin-bottom:10px;
  }
  .ac-wrap .time,
  .ac-wrap .address{
    font-size: 18px;
    color:#4a4a4a;
  }
  .ac-wrap .ac-cont{
    font-size:14px;
    color:#4a4a4a;
    margin-top: 50px;
  }
  .ac-wrap .ac-cont p{
    margin: 5px 0;
  }
  .ac-wrap .ac-cont img{
    width: 100%;
  }
</style>
