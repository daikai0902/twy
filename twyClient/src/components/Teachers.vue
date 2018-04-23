<template>
  <div class="news-wrap">
    <div class="t-header">
      <img src="../assets/teacher_top.jpg" class="teacher-top">
      <div class="t-txt">天唯：打造一个全优的明星教师团队</div>
    </div>
    <div class="teacher-wrap">
      <div class="t-item" v-for="(item, index) in teacherList" :key="index" @click="gotoTeacherDetail(index)">
        <p class="t-team" v-if="item.title == 'TEAM'">{{item.title}}</p>
        <img class="t-img" v-else :src="item.listimgUrl" >
        <div class="t-info">
          <p class="t-name">{{item.name}}</p>
          <p class="t-title">{{item.job.split(',')[0]}}</p>
        </div>
      </div>
    </div>
    <div class="bg-black"></div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'Teacher',
  data () {
    return {
      teacherList: []
    }
  },
  created () {
    this.getTeacherList()
  },
  methods: {
    getTeacherList () {
      api.teacherList().then(res => {
        this.teacherList = res.data.array
      })
    },
    gotoTeacherDetail (num) {
      this.$router.push({name: 'teacherDetail', query: {id: num}})
    }
  }
}
</script>

<style scoped>
  .teacher-wrap{
    position: relative;
    z-index: 10;
    width: 94%;
    margin: 158px auto 0;
  }
  .t-item{
    width: 32%;
    border-radius:12px;
    position: relative;
    float: left;
    margin-right: 2%;
    margin-bottom: 10px;
  }
  .t-item:nth-child(3n+5){
    margin-right: 0;
  }
  .t-item .t-img{
    width: 100%;
    border-radius:12px;
  }
  .t-item .t-info{
    position: absolute;
    bottom: 15px;
    left: 6px;
  }
  .t-item .t-name{
    color: #fff;
    font-size: 16px;
    margin-bottom: 3px;
  }
  .t-item .t-title{
    font-size:14px;
    color:#fff;
    line-height: 18px;
  }
  .t-item:nth-child(1),
  .t-item:nth-child(2){
    width: 100%;
    height: 162px;
    background: #5d504c;
  }
  .t-item:nth-child(1) .t-name,
  .t-item:nth-child(2) .t-name{
    font-size: 24px;
  }
  .t-item:nth-child(1) .t-info{
    left: 165px;
  }
  .t-item:nth-child(2) .t-info{
    left: 15px;
  }
  .t-item:nth-child(1) .t-img,
  .t-item:nth-child(2) .t-img{
    height: 100%;
    width: initial;
  }
  .t-item:nth-child(1) .t-img{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .t-item:nth-child(2) .t-img{
    position: absolute;
    right: 0;
    top: 0;
  }
  .t-header{
    width:100%;
    height:148px;
    position: absolute;
    top: 0;
    z-index: 10;
  }
  .t-header img{
    width: 100%;
    height: 100%;
  }
  .t-header .t-team{
    opacity:0.33;
    font-size:24px;
    color:#0b0b0b;;
    position: absolute;
    top: 0;
    left: 12px;
  }
  .t-header .t-name{
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size:20px;
    color:#000;
  }
  .t-header .t-info{
    background: rgba(255,255,255,0.41);
    border-radius: 12px 12px 0 0;
    width: 147px;
    height: 90px;
    position: absolute;
    bottom: 0;
    right: 30px;
  }
  .t-txt{
    position: absolute;
    bottom: 10px;
    color:#fff;
    font-size:16px;
    letter-spacing:0.42px;
    text-align: center;
    width: 100%;
  }
</style>
