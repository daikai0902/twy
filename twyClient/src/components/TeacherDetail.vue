<template>
  <div class="news-wrap">

    <div class="teacher-wrap">
      <swiper ref="swiper" :show-dots="false" @on-index-change="swiperChange" height="1300px" :duration=50 v-model="swiperItemIndex">
        <swiper-item class="black t-item" v-for="(item, index) in teacherList" :key="index">
          <img class="t-img" :src="item.imgUrl">
          <p class="t-name">{{item.name}}</p>
          <p class="t-title">{{item.job}}</p>
          <p class="t-desc">{{item.intro}}</p>
        </swiper-item>
      </swiper>
    </div>

    <div class="paging-wrap">{{curr}}/{{total}}</div>

    <div v-transfer-dom>
      <loading :show="show1" :text="text1"></loading>
    </div>

    <div class="bg-black bg-teacher-detail"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
import { Swiper, SwiperItem, Loading, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: 'Teacher',
  directives: {
    TransferDom
  },
  components: {
    Swiper,
    SwiperItem,
    Loading
  },
  data () {
    return {
      curr: 1,
      total: 1,
      show1: false,
      text1: 'Processing',
      swiperItemIndex: 1,
      teacherList: [],
      nodeList: null
      // h: [1100, 850, 1250, 1250, 1100, 1000, 1100, 1000, 1100, 1350, 750, 750, 750, 750]
    }
  },
  created () {
    this.getTeacherList()
    this.swiperItemIndex = parseInt(this.$route.query.id)
  },
  // mounted () {
  //   this.$nextTick(() => {
  //     this.nodeList = document.querySelectorAll('.vux-swiper-item')
  //   })
  // },
  methods: {
    getTeacherList () {
      api.teacherList().then(res => {
        this.teacherList = res.data.array
        this.total = res.data.array.length
        this.$nextTick(() => {
          this.nodeList = document.querySelectorAll('.vux-swiper-item')
          this.$refs.swiper.xheight = this.nodeList[this.curr - 1].offsetHeight + 60 + 'px'
        })
      })
    },
    swiperChange (currentIndex) {
      this.curr = currentIndex + 1
      this.$nextTick(() => {
        if (this.nodeList) {
          this.$refs.swiper.xheight = this.nodeList[currentIndex].offsetHeight + 60 + 'px'
        }
      })
    }
  }
}
</script>

<style scoped>
  .teacher-wrap{
    position: relative;
    z-index: 10;
    width: 100%;
  }
  .t-item{
    color: #fff;
  }
  .t-img{
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .t-name,
  .t-title,
  .t-desc{
    width: 300px;
    margin: 0 auto;
  }
  .t-name{
    font-size:56px;
    padding-top: 460px;
  }
  .t-title{
    font-size:20px;
    margin-bottom: 15px;
    text-align: justify;
  }
  .t-desc{
    font-size:14px;
    line-height:32px;
    text-align: justify;
  }
  .paging-wrap{
    position: absolute;
    font-size:14px;
    color:#989da5;
    right: 30px;
    top: 580px;
    z-index: 15;
  }
  .vux-swiper-item{
    height: auto !important;
  }
</style>
