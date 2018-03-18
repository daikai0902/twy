<template>
  <div class="activity-wrap">
    <side-menu isGoback="true"></side-menu>

    <div class="ac-wrap">
      <div class="ac-item" v-for="(item, index) in activityList" :key="index" :class="['ac-item'+index % 5, item.type == 'img' ? 'ac-item-img': '']" :style="{height: itemHeight +'px'}">
        <div class="title" v-if="item.type != 'img'">{{item.title}}</div>
        <div class="desc" v-if="item.type != 'img'">{{item.desc}}</div>
        <img class="img" v-if="item.type == 'img'" :src="'src/assets/'+item.imgName">
      </div>
    </div>

    <img class="bg-black">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'Activity',
  components: {
    SideMenu
  },
  data () {
    return {
      itemHeight: 0,
      activityList: [
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          type: 'img',
          imgName: 'active1.jpg' 
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          type: 'img',
          imgName: 'active2.jpg' 
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        },
        {
          title: '活动标题',
          desc: '活动内容活动内容活动内容活动内容活动内容活动内容活动内容'
        }
      ]
    }
  },
  created () {
    this.itemHeight =  parseInt(window.innerWidth * 0.94 * 0.48)
  }
}
</script>

<style scoped>
  .ac-wrap{
    position: relative;
    z-index: 10;
    color: #fff;
    width: 94%;
    margin: 20px auto;
  }
  .ac-item{
    width: 48%;
    background-color: blueviolet;
    border-radius:12px;
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
  }
  .ac-item .desc{
    font-size: 13px;
    position: absolute;
    bottom: 20px;
  }
  .ac-item .img{
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  .ac-item0{
    background:#0074cd;
  }
  .ac-item1{
    background:#0074cd;
  }
  .ac-item2{
    background:#ffd93d;
    color: #000;
  }
  .ac-item3{
    background:#fff;
    color: #000;
  }
  .ac-item4{
    background:#989da5;
    width: 100%;
  }
</style>

