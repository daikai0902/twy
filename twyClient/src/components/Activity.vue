<template>
  <div class="activity-wrap">
    <div class="ac-wrap">
      <div class="ac-item" v-for="(item, index) in activityList" :key="index" :class="['ac-item'+index % 5, item.type == 'img' ? 'ac-item-img': '']" :style="{height: itemHeight +'px'}" @click="gotoActivityDetail(item)">
        <div class="title" v-if="item.type != 'img'">{{item.name}}</div>
        <div class="desc" v-if="item.type != 'img'">{{item.content}}</div>
        <img class="img" v-if="item.type == 'img'" :src="item.imgName">
      </div>
    </div>

    <div class="bg-black"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'Activity',
  data () {
    return {
      itemHeight: 0,
      activityList: []
    }
  },
  created () {
    this.itemHeight = parseInt(window.innerWidth * 0.94 * 0.48)
    api.activityList().then(res => {
      if (res.status === 'succ') {
        this.activityList = res.data.array
        this.setActivityImg()
      }
    })
  },
  methods: {
    gotoActivityDetail (item) {
      if (item.type === '1') {
        this.$router.push({name: 'activityDetail', query: {id: item.id}})
      } else if (item.type === '2') {
        window.open(item.link)
      }
    },
    setActivityImg () {
      let ids = [1, 7, 13, 15, 21, 27, 33, 35]
      let len = this.activityList.length + this.activityList.length / 5
      for (let i = 0; i < len; i++) {
        let idx = ids.indexOf(i % 40)
        if (idx >= 0) {
          this.activityList.splice(ids[idx] + (parseInt(i / 40)) * 40, 0, {
            type: 'img',
            imgName: `/static/activity/av${idx}.jpg`
          })
        }
      }
    }
  }
}
</script>

<style scoped>
  .ac-wrap{
    position: relative;
    z-index: 10;
    color: #fff;
    width: 94%;
    margin: 30px auto;
  }
  .ac-item{
    width: 48%;
    background-color: blueviolet;
    border-radius:14px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 15px;
    margin-right: 4%;
    float: left;
    position: relative;
  }
  .ac-item-img{
    padding: 0;
  }
  .ac-item:nth-child(5n + 2),
  .ac-item:nth-child(5n + 4){
    margin-right: 0;
  }
  .ac-item .title{
    font-size:18px;
    word-wrap: break-word;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2; 
  }
  .ac-item .desc{
    font-size: 13px;
    position: absolute;
    bottom: 20px;
    word-wrap: break-word;
    width: 90%;
    overflow:hidden; 
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    text-align: justify;
  }
  .ac-item .img{
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
  .ac-item4{
    background:#989da5;
    width: 100%;
  }

  .ac-item:nth-child(20n + 1),
  .ac-item:nth-child(20n + 6),
  .ac-item:nth-child(20n + 12),
  .ac-item:nth-child(20n + 17){
    background:#644256;;
  }
  .ac-item:nth-child(20n + 3),
  .ac-item:nth-child(20n + 7),
  .ac-item:nth-child(20n + 13),
  .ac-item:nth-child(20n + 18){
    background:#c09050;
  }
  .ac-item:nth-child(20n + 4),
  .ac-item:nth-child(20n + 9),
  .ac-item:nth-child(20n + 11),
  .ac-item:nth-child(20n + 19){
    background:#fff;
    color: #000;
  }
</style>

