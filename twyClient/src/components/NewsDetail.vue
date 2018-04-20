<template>
  <div class="news">
    <div class="news-wrap">
      <p class="title">{{title}}</p>
      <div class="info">
        <p class="org">{{org}}</p>
        <p class="time">{{time}}</p>
      </div>
      <div class="vdo-cont"></div>
      <div class="news-cont"></div>
    </div>

    <div class="bg-black bg-gray"></div>
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
      org: '宁波天唯艺星教育',
      desc: null
    }
  },
  created () {
    this.id = this.$route.query.id
    this.getNewsDetail()
  },
  methods: {
    getNewsDetail () {
      api.newsDetail({newsId: this.id}).then(res => {
        if (res.status === 'succ') {
          this.title = res.data.name
          this.address = res.data.address
          this.time = res.data.createTime
          document.querySelector('.news-cont').innerHTML = res.data.content
          var imgList = document.querySelectorAll('img')
          for (var key in imgList) {
            imgList[key].style.maxWidth = '100%'
          }
          if (res.data.videoUrl) {
            document.querySelector('.vdo-cont').innerHTML = res.data.videoUrl
            document.querySelector('.vdo-cont iframe').width = '100%'
            document.querySelector('.vdo-cont iframe').height = 'auto'
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .news{
    background-color: #fbf9fe;
  }
  .news-wrap{
    position: relative;
    z-index: 10;
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
  }
  .news-wrap .title{
    font-size: 18px;
    margin-bottom:10px;
    text-align: center;
  }
  .news-wrap .info{
    text-align: left;
  }
  .news-wrap .time,
  .news-wrap .org{
    font-size: 12px;
    color:#8a8a8f;
  }
  .news-wrap .time{
    margin-right: 10px;
  }
  .news-wrap .news-cont{
    font-size:14px;
    color:#4a4a4a;
  }
  .news-wrap .news-cont p{
    margin: 5px 0;
  }
  .news-wrap .news-cont img{
    width: 100%;
  }
  .vdo-cont{
    margin: 20px auto;
  }
  .ac-cont img{
    max-width: 100%;
    margin: 10px auto;
  }
  
</style>
