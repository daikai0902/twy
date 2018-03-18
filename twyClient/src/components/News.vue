<template>
  <div class="news-wrap">
    <div class="topbar">
      <router-link :to="{name: 'order'}" class="order-link">预约报名</router-link>
      <side-menu></side-menu>
    </div>

    <div class="tabs">
      <div class="tabs-news" @click="type = 'news'">
        <p class="p1">NEWS</p>
        <p class="p2">新闻</p>
        <img src="../assets/download_white.png" class="icon-tab icon-news" v-if="type == 'news'">
      </div>
      <div class="news-top">
        <img class="img-news-top" src="../assets/news_top.jpg">
      </div>
      <div class="tabs-notify" @click="type = 'notify'">
        <p class="p1">公告</p>
        <img src="../assets/download_black.png" class="icon-tab icon-notify" v-if="type == 'notify'">
      </div>
    </div> 

    <div class="cont-wrap">
      <div class="news-list" v-if="type == 'news'">
        <a hrer="/" class="nl-item" v-for="(item, index) in newsList" :key="index">
          <p class="nl-title">{{item.title}}</p>
          <p class="nl-time">{{item.time}}</p>
        </a>
      </div>
      <div class="notify-list" v-if="type == 'notify'">
        <a hrer="/" class="nl-item" v-for="(item, index) in notifyList" :key="index">
          <p class="nl-title">{{item.title}}</p>
          <p class="nl-time">{{item.time}}</p>
        </a>
      </div>
    </div>
    <img class="bg-news">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'News',
  components: {
    SideMenu
  },
  data () {
    return {
      type: 'news',
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
      ],
      notifyList: [
        {
          title: 'What Makes A Hotel Notify',
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.news-wrap .bg-news{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;
}
.tabs{
  position: relative;
  z-index: 10;
}
.tabs{
  width: 94%;
  margin: 15px auto 30px;
  position: relative;
  height: 162px;
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
  width: 75%;
  height: 108px;
  position: absolute;
  right: 0;
  top: 0;
}
.tabs .news-top .img-news-top{
  width: 100%;
  height: 100%;
  border-radius: 13px;
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
</style>
