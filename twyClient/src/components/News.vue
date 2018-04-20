<template>
  <div class="news-wrap">
    <scroller style="z-index:10;" :on-infinite="infinite"  ref="my_scroller">
      <div style="height: 1px;"></div>
      <div class="tabs">
        <div class="news-top" @click="goSchool">
          <img class="img-news-top" src="../assets/news_top.jpg">
          <div class="nt-desc">
            <p class="nt-title">我们给孩子：</p>
            <p class="nt-title">不仅是专业艺术基础教育，</p>
            <p class="nt-title">还有广阔的艺术展示平台</p>
          </div>
        </div>
      </div>

      <tab class="v-tabs">
        <tab-item selected @on-item-click="onItemClick(0)">新闻公告</tab-item>
        <tab-item @on-item-click="onItemClick(1)">艺星之路</tab-item>
        <tab-item @on-item-click="onItemClick(2)">公开课</tab-item>
      </tab>

      <div class="v-tabs">
        <div class="tab-cont" v-if="tabIndex == 0">
          <div class="">
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
        <div class="tab-cont" v-else-if="tabIndex == 2">
          <div class="nl-item" v-for="(item, index) in openList" :key="index" @click="gotoOpenDetail(item)">
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
    </scroller>
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
      activityList: [],
      openList: [],
      scrollerStatus: {
        pullupStatus: 'default'
      },
      isbounce: false,
      showUp: true,
      upobj: {
        content: '请上拉刷新数据',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '请上拉刷新数据',
        upContent: '请上拉刷新数据',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
      },
      page1: 0,
      page2: 0,
      page3: 0,
      pageSize: 4
    }
  },
  created () {},
  methods: {
    getNewsList (page = 1, fn = null) {
      this.page1 = page
      this.newsList = this.page1 === 1 ? [] : this.newsList
      api.newsList({page: this.page1, pageSize: this.pageSize}).then(res => {
        if (res.status === 'succ') {
          if (res.data.array < this.pageSize) {
            this.page1--
            if (fn) fn(true)
            return
          } else {
            if (fn) fn()
          }
          this.newsList = this.newsList.concat(res.data.array)
        }
      })
    },
    getActivityList (page = 1, fn = null) {
      this.page2 = page
      this.activityList = this.page2 === 1 ? [] : this.activityList
      api.activityList({page: this.page2, pageSize: this.pageSize}).then(res => {
        if (res.status === 'succ') {
          if (res.data.array < this.pageSize) {
            this.page2--
            if (fn) fn(true)
            return
          } else {
            if (fn) fn()
          }
          this.activityList = this.activityList.concat(res.data.array)
        }
      })
    },
    getOpenList (page = 1, fn = null) {
      this.page3 = page
      this.openList = this.page3 === 1 ? [] : this.openList
      api.openList({page: this.page3, pageSize: this.pageSize}).then(res => {
        if (res.status === 'succ') {
          if (res.data.array < this.pageSize) {
            this.page3--
            if (fn) fn(true)
            return
          } else {
            if (fn) fn()
          }
          this.openList = this.openList.concat(res.data.array)
        }
      })
    },
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
    gotoOpenDetail (item) {
      if (item.type === '1') {
        this.$router.push({name: 'openDetail', query: {id: item.id}})
      } else if (item.type === '2') {
        window.open(item.link)
      }
    },
    onItemClick (idx) {
      this.tabIndex = idx
      if (this.tabIndex === 0) {
        this.page1++
        this.getNewsList(this.page1)
      } else if (this.tabIndex === 1) {
        this.page2++
        this.getActivityList(this.page2)
      } else if (this.tabIndex === 2) {
        this.page3++
        this.getOpenList(this.page3)
      }
    },
    goSchool () {
      this.$router.push({name: 'school'})
    },

    infinite (done) {
      if (this.tabIndex === 0) {
        this.page1++
        this.getNewsList(this.page1, done)
      } else if (this.tabIndex === 1) {
        this.page2++
        this.getActivityList(this.page2, done)
      } else if (this.tabIndex === 2) {
        this.page3++
        this.getOpenList(this.page3, done)
      }
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
  font-size:18px;
  color:#fff;
  text-align:left;
  line-height:26px;
}
.nt-desc{
  width: 75%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 12.5%;
  color: #fff;
  padding-top: 40px;
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
  left: 15%;
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

