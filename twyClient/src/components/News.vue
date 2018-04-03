<template>
  <div class="news-wrap">
    <div class="tabs">
      <div class="news-top" @click="goSchool">
        <img class="img-news-top" src="../assets/news_top.jpg">
        <div class="nt-desc">
          <p class="nt-title">做最专业的艺术基础教育</p>
          <p class="nt-sub">让艺术为孩子成长助航</p>
        </div>
      </div>
    </div>

    <tab class="v-tabs">
      <tab-item selected @on-item-click="onItemClick(0)">新闻公告</tab-item>
      <tab-item @on-item-click="onItemClick(1)">艺星之路</tab-item>
    </tab>

    <div class="v-tabs">
      <div class="tab-cont" v-if="tabIndex == 0">
        <div class="nl-item" v-for="(item, index) in newsList" :key="index" @click="gotoNewsDetail(item)">
          <div class="ns-panel">
            <div class="ns-img-wrap" :style="'background-image: url(' + item.imgUrl + ')'"> </div>
            <div class="ns-info">
              <h4 class="ns-title">{{item.name}}</h4>
              <p class="ns-desc">{{item.remark}}</p>
              <p class="ns-time">{{item.createTime}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-cont" v-else-if="tabIndex == 1">
        <div class="nl-item" v-for="(item, index) in activityList" :key="index" @click="gotoActivityDetail(item)">
          <div class="ns-panel">
            <div class="ns-img-wrap" :style="'background-image: url(' + item.imgUrl + ')'"> </div>
            <div class="ns-info">
              <h4 class="ns-title">{{item.name}}</h4>
              <p class="ns-desc">{{item.remark}}</p>
              <p class="ns-time">{{item.time}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black"></div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Panel } from 'vux'
import api from '../api/index.js'
export default {
  name: 'News',
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Panel
  },
  data () {
    return {
      newsList: [],
      tabIndex: 0,
      activityList: []
    }
  },
  created () {
    api.newsList().then(res => {
      if (res.status === 'succ') {
        this.newsList = res.data.array
      }
    })
    api.activityList().then(res => {
      if (res.status === 'succ') {
        this.activityList = res.data.array
      }
    })
  },
  methods: {
    gotoNewsDetail (item) {
      if (item.type === '1') {
        this.$router.push({name: 'newsDetail', query: {id: item.id}})
      } else if (item.type === '2') {
        window.open(item.link)
      }
    },
    gotoActivityDetail (item) {
      if (item.type === '1') {
        this.$router.push({name: 'activityDetail', query: {id: item.id}})
      } else if (item.type === '2') {
        window.open(item.link)
      }
    },
    onItemClick (idx) {
      this.tabIndex = idx
    },
    goSchool () {
      this.$router.push({name: 'school'})
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
  height: 156px;
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
  height: 156px;
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
  padding: 15px 0;
  margin: 0 10px;
  border-bottom: 1px solid #ddd;
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
  font-size:22px;
  color:#fff;
  text-align:center;
  line-height:28px;
}
.nt-desc{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  padding-top: 60px;
  box-sizing: border-box;
}
.nt-sub{
  font-size:14px;
  color:#fff;
  text-align:center;
  line-height:28px;
}
.v-tabs{
  position: relative;
  z-index: 10;
}
.vux-tab{
  background:#ecf0f1;
}
.vux-tab .vux-tab-item.vux-tab-selected{
  color:#c09050;
  position: relative;
}
.vux-tab .vux-tab-item.vux-tab-selected:before{
  content: '';
  background:#c09050;
  width:5px;
  height:5px;
  border-radius:100%;
  position: absolute;
  left: 28%;
  top: 45%;
}
.vux-tab .vux-tab-item{
  color: #000;
}
.ns-panel{position: relative;padding-left: 140px;height: 85px;}
.ns-img-wrap{
  position: absolute;
  left:0;
  background-size: 128px 85px;
  width: 128px;
  height: 85px;
}
.ns-info{position: relative;height: 100%;}
.ns-title{
  font-size:16px; 
  color:#000000;
  text-align:left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
}
.ns-desc{
  font-size:14px;
  color:#8a8a8f;
  line-height: 18px;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  margin: 4px auto;
  height: 36px;
}
.ns-time{
  position: absolute;
  bottom: 0;
  left: 0;
  font-size:12px;
  color:#8a8a8f;
  line-height: 18px;
}
</style>
<style>
.vux-tab-ink-bar{
  height: 0 !important;
  display: none !important;
}
</style>

