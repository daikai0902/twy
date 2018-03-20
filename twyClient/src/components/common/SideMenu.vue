<template>
  <div class="sidemenu-wrap">
    <div class="topbar">
      <div class="goback" @click="goback" v-if="isGoback"></div>
      <router-link :to="{name: 'order'}" class="order-link">预约报名</router-link>
      <div class="btn-sidemenu" @click="sideMenu = true">
        <img class="img-sidemenu" src="../../assets/btn_sidemenu.png" />
      </div>
    </div>
    <div v-transfer-dom>
      <popup v-model="sideMenu" class="popup-smenu" position="left" width="100%">
        <div class="side-menu">
          <span class="vux-close" @click="sideMenu = false"></span>

          <router-link :to="{name: 'home'}" class="home-link">HOME</router-link>
          <div classs="menu-wrap">
            <router-link v-for="(item, index) in menuList" :key="index" :to="{name: item.pathname}" class="menu-link">{{item.name}}</router-link>
          </div>
        </div>
      </popup>
    </div>
  </div>
</template>

<script>
import { TransferDom, Popup } from 'vux'
export default {
  name: 'SideMenu',
  directives: {
    TransferDom
  },
  components: {
    Popup
  },
  data () {
    return {
      sideMenu: false,
      menuList: [
        {
          name: '学校简介',
          pathname: 'school'
        },
        {
          name: '新闻·公告',
          pathname: 'news'
        },
        {
          name: '精彩活动',
          pathname: 'activity'
        },
        {
          name: '课程介绍',
          pathname: 'introduce'
        },
        {
          name: '名师团队',
          pathname: 'teachers'
        },
        {
          name: '孩子成长艺星之路',
          pathname: 'growth'
        },
        {
          name: '网点布局',
          pathname: 'org'
        },
        {
          name: '如何报名',
          pathname: 'help'
        },
        {
          name: '预约报名',
          pathname: 'order'
        }
      ]
    }
  },
  props: ['isGoback'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .sidemenu-wrap{
    width: 100%;
    display: inline-block;
    vertical-align: top;
    z-index: 19;
    position: relative;
  }
  .topbar{
    position: relative;
    z-index: 10;
    margin-top: 15px;
    margin-right: 20px;
    text-align: right;
  }
  .goback{
    position: absolute;
    left: 20px;
    top: 0;
    background: url('~/src/assets/goback.png') no-repeat center center;
    background-size: cover;
    width:12px;
    height:22px;
  }
  .order-link{
    width: 76px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    color: #fff;
    font-size:14px;
    background:#525759;
    border-radius:100px;
  }
  .btn-sidemenu{
    width: 30px;
    height: 30px;
    background:#525759;
    border-radius:50%;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    margin-left: 8px;
  }
  .img-sidemenu{
    width:16px;
    height:12px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .side-menu{
    height: 100%;
    background: url('~/src/assets/bg_menu.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
  }
  .vux-close{
    background: url('~/src/assets/close.png') no-repeat center center;
    background-size: cover;
    width: 24px;
    height: 24px;
    position: absolute;
    right: 20px;
    top: 15px;
  }
  .home-link{
    font-size:36px;
    color:#ffffff;
    display: block;
    padding-left: 50px;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding-top: 130px;
  }
  .menu-link{
    color:#fff;
    display: block;
    margin-top: 10px;
    font-size: 16px;
    padding-left: 50px;
    box-sizing: border-box;
  }
</style>


