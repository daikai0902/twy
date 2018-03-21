<template>
  <div class="news-wrap">
    <div class="teacher-wrap">
      <div class="t-item" v-for="(item, index) in teacherList" :key="index" @click="gotoTeacherDetail(index)">
        <p class="t-team" v-if="item.title == 'TEAM'">{{item.title}}</p>
        <img class="t-img" v-else :src="'/static/'+item.img" >
        <div class="t-info">
          <p class="t-name">{{item.name}}</p>
          <p class="t-title" v-if="item.title !== 'TEAM'">{{item.title}}</p>
        </div>
      </div>
    </div>
    <img class="bg-black">
  </div>
</template>

<script>
export default {
  name: 'Teacher',
  data () {
    return {
      teacherList: [
        {
          name: '徐明德',
          img: 'teachers/1.jpg',
          title: '宁波天唯艺星教育名誉校长'
        },
        {
          name: '名师团队',
          img: '',
          title: 'TEAM'
        },
        {
          name: '严建红',
          img: 'teachers/2.jpg',
          title: '宁波天唯艺星教育董事长'
        },
        {
          name: '汪平',
          img: 'teachers/3.jpg',
          title: '常驻专家顾问'
        },
        {
          name: '姚皓',
          img: 'teachers/4.jpg',
          title: '总部培训学校负责人'
        },
        {
          name: '王舵',
          img: 'teachers/5.jpg',
          title: '教学主任，播音主持、影视表演主课教师'
        },
        {
          name: '陆倩雯',
          img: 'teachers/6.jpg',
          title: '舞蹈教师'
        },
        {
          name: '周臻',
          img: 'teachers/7.jpg',
          title: '声乐教师'
        },
        {
          name: '黄纯纯',
          img: 'teachers/8.jpg',
          title: '舞蹈教师'
        },
        {
          name: '罗明',
          img: 'teachers/9.jpg',
          title: '声乐教师'
        },
        {
          name: '董姬麟',
          img: 'teachers/10.jpg',
          title: '声乐教师'
        },
        {
          name: '陈艳',
          img: 'teachers/11.jpg',
          title: '负责学校内部管理工作'
        },
        {
          name: '俞磊',
          img: 'teachers/12.jpg',
          title: '负责学校工程、拓展等工作'
        },
        {
          name: '吴悦',
          img: 'teachers/13.jpg',
          title: '责学校宣传、活动策划、拓展等工作'
        },
        {
          name: '吴建峰',
          img: 'teachers/14.jpg',
          title: '负责学校网络管理等工作'
        }
      ]
    }
  },
  methods: {
    gotoTeacherDetail (num) {
      if (num !== 1) {
        this.$router.push({name: 'teacherDetail', query: {id: num > 0 ? num - 1 : 0}})
      }
    }
  }
}
</script>

<style scoped>
  .teacher-wrap{
    position: relative;
    z-index: 10;
    width: 94%;
    margin: 25px auto;
  }
  .t-item{
    width: 32%;
    border-radius:12px;
    position: relative;
    float: left;
    margin-right: 2%;
    margin-bottom: 10px;
  }
  .t-item:nth-child(3n+4){
    margin-right: 0;
  }
  .t-item .t-img{
    width: 100%;
    border-radius:12px;
  }
  .t-item .t-info{
    position: absolute;
    bottom: 6px;
    left: 6px;
  }
  .t-item .t-name{
    color: #fff;
    font-size: 16px;
    margin-top: 5px;
  }
  .t-item .t-title{
    font-size:14px;
    color:#fff;
    line-height: 18px;
  }
  .t-item:nth-child(1){
    width: 71%;
  }
  .t-item:nth-child(2),
  .t-item:nth-child(3),
  .t-item:nth-child(4){
    width: 27%;
    margin-right: 0;
  } 
  .t-item:nth-child(2){
    margin-right: 0;
    height: 80px;
    background:#881c21;
    font-size: 14px;
    overflow: hidden;
  }
  .t-item:nth-child(2) .t-team{
    opacity:0.17;
    font-size:36px;
    color:#fff;
    position: absolute;
    top: -8px;
    left: 12px;
  }
  .t-item:nth-child(2) .t-name{
    font-size: 14px;
    bottom: 10px;
    left: 10px;
  }
</style>
