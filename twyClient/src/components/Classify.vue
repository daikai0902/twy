<template>
  <div class="classify-wrap">
    <img class="classify-bg" src="../assets/bg_intro.jpg">
    <div class="classify-list">
      <div class="classify-item" v-for="(item, index) in classifyList" :key="index" @click="handleClassify(item.id, item.courseNum)">
        <div class="ci-img">
          <img src="../assets/course_img.png">
        </div>
        <div class="ci-info">
          <div class="ci-name">{{item.name}}</div>
          <div class="ci-num">开设课程: {{item.courseNum}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/index.js'
import { AlertModule } from 'vux'
export default {
  name: 'Classify',
  data () {
    return {
      classifyList: []
    }
  },
  created () {
    this.getCouresesClassifyList()
  },
  methods: {
    getCouresesClassifyList () {
      api.courseClassifyList().then(res => {
        if (res.status === 'succ') {
          this.classifyList = res.data.array
        }
      })
    },
    handleClassify (cid, courseNum) {
      if (courseNum === 0) {
        AlertModule.show({
          content: '该分类还没有课程'
        })
      } else {
        this.$router.push({name: 'introduce', query: {'cid': cid}})
      }
    }
  }
}
</script>

<style scoped>
.classify-bg{
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.classify-list{
  position: relative;
  z-index: 10;
  margin-top: 50px;
}
.classify-item{
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 30px;
  padding-left: 80px;
  box-sizing: border-box;
  height: 80px;
  position: relative;
}
.classify-item .ci-img{
  position: absolute;
  left: -15px;
  top: -15px;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px 0 rgba(0,0,0,.3);
}
.classify-item .ci-img img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.classify-item .ci-name{
  font-size: 16px;
  padding-top: 10px;
}
.classify-item .ci-num{
  font-size: 14px;
  color: #666;
  padding-top: 5px;
}
</style>
