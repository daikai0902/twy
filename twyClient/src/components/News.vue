<template>
  <div class="news-wrap">
    <div class="tabs">
      <!-- <div class="tabs-news" @click="type = 'news'">
        <p class="p1">NEWS</p>
        <p class="p2">新闻</p>
        <img src="../assets/download_white.png" class="icon-tab icon-news" v-if="type == 'news'">
      </div> -->
      <div class="news-top">
        <img class="img-news-top" src="../assets/news_top.jpg">
        <p class="nt-title">新闻公告</p>
      </div>
      <!-- <div class="tabs-notify" @click="type = 'notify'">
        <p class="p1">公告</p>
        <img src="../assets/download_black.png" class="icon-tab icon-notify" v-if="type == 'notify'">
      </div> -->
    </div> 

    <div class="cont-wrap">
      <div class="news-list">
        <div class="nl-item" v-for="(item, index) in newsList" :key="index" @click="gotoNewsDetail">
          <p class="nl-title">{{item.title}}</p>
          <p class="nl-time">{{item.time}}</p>
        </div>
      </div>
    </div>
    <img class="bg-black">
  </div>
</template>

<script>
export default {
  name: 'News',
  data () {
    return {
      newsList: [
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        },
        {
          title: 'Do A Sporting Stag Do In Hotel Boutiqu',
          time: '20 May 2018'
        },
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        },
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        },
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        },
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        },
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        },
        {
          title: 'What Makes A Hotel Boutique',
          time: '20 May 2018'
        }
      ]
    }
  },
  methods: {
    gotoNewsDetail () {
      this.$router.push({name: 'newsDetail'})
    }
  }
}
</script>

<style scoped>
.tabs{
  position: relative;
  z-index: 10;
}
.tabs{
  position: relative;
  height: 135px;
}
.icon-tab{
  position: absolute;
  right: 15px;
  bottom: 17px;
  width: 18px;
  height: 18px;
}
.icon-news{
  right: 10px;
}
.tabs .tabs-news{
  width: 22%;
  height: 162px;
  margin-right: 8px;
  border-radius:12px;
  background-color: #0074cd;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.tabs .tabs-news .p1{
  opacity:0.17;
  font-size:36px;
  color:#fff;
  margin-left: -15px;
}
.tabs .tabs-news .p2{
  font-size:14px;
  position: absolute;
  bottom: 15px;
  left: 10px;
}
.tabs .news-top{
  height: 120px;
  position: absolute;
  right: 0;
  top: 0;
}
.tabs .news-top .img-news-top{
  width: 100%;
  height: 100%;
}
.tabs .tabs-notify{
  width: 75%;
  height: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: #ffd93d;
  color: #fff;
  border-radius: 12px;
}
.tabs .tabs-notify .p1{
  font-size:14px;
  color:#000;
  line-height: 50px;
  padding-left: 15px;
}

.cont-wrap{
  position: relative;
  z-index: 10;
  color: #fff;
  width: 90%;
  margin: 0 auto;
}
.nl-item{
  position: relative;
  display: block;
  padding: 6px 25% 6px 18px;
}
.nl-item::before{
  content: '';
  background:#fff;
  width:6px;
  height:6px;
  border-radius:50%;
  position: absolute;
  left: 3px;
  top: 15px;
}
.nl-item .nl-title{
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.nl-item .nl-time{
  position: absolute;
  font-size: 12px;
  right: 3px;
  top: 10px;
}
.nt-title{
  position: absolute;
  z-index: 12;
  color: #fff;
  right: 40px;
  bottom: 14px;
  font-size: 22px;
}
</style>
