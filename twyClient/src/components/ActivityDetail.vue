<template>
  <div class="activity-wrap">
    <div class="ac-wrap">
      <p class="title">{{title}}</p>
      <p class="time">{{time}}</p>
      <p class="address">{{address}}</p>
      <div class="ac-cont"></div>
    </div>

    <div class="bg-black bg-white"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'ActivityDetail',
  data () {
    return {
      id: null,
      title: null,
      time: null,
      address: null,
      desc: null
    }
  },
  created () {
    this.id = this.$route.query.id
    this.getActivityDetail()
  },
  methods: {
    getActivityDetail () {
      api.activityDetail({activityId: this.id}).then(res => {
        if (res.status === 'succ') {
          this.title = res.data.name
          this.address = res.data.address
          this.time = res.data.time
          document.querySelector('.ac-cont').innerHTML = res.data.content
        }
      })
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
