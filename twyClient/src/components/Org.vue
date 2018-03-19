<template>
  <div>
    <side-menu isGoback="true"></side-menu>
      <div class="org-wrap">
        <div class="org-card card card1">
          <p class="p1">市教育局服务中心总部艺术团</p>
          <p class="p2">鄞州中心区文苑路462号，宁波市教育服务管理<br/>中心三号楼3楼</p>
        </div>
        <div class="org-card card card2">
          <p class="p1">鄞州区教育培训学校</p>
          <p class="p2">鄞州中心区泰安中路508号，创意设计大厦三楼</p>
        </div>
        <div class="org-card card3" style="background-color: #fff;">
          <router-link :to="{name: 'order'}" class="org-order-link">预约报名</router-link>
          <div class="card-info">
            <p>联系人：陈老师</p>
            <p>咨询热线：13819837773</p>
          </div>
          <img src="../assets/help_qrcode.jpg" class="org-qrcode">
        </div>
        <div class="org-card card4">
          <img src="../assets/funnel.png" class="org-funnel">
          <p class="p1">待开设</p>
          <p class="p2">海曙、江北、高新区、慈溪、奉化、余姚等</p>
        </div>
      </div>
    <img class="bg-black">
  </div>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  name: 'Org',
  components: {
    SideMenu
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .org-wrap{
    position: relative;
    z-index: 10;
    color: #fff;
    width: 94%;
    margin: 20px auto;
  }
  .org-card{
    width: 100%;
    height: 162px;
    border-radius:12px;
    background-color: #989da5;
    margin-bottom: 10px;
    text-align: center;
  }
  .card1, .card2{
    background: url('~/src/assets/org1.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
  }
  .card2{
    background-image: url('~/src/assets/org2.jpg')
  }
  .card .p1{
    font-size: 18px;
    padding-top: 50px;
    padding-bottom: 10px;
  }
  .card .p2{
    font-size: 14px;
  }
  .card1 .p1{
    padding-top: 40px;
  }
  .card3 {
    position: relative;
    padding-right: 164px;
    box-sizing: border-box;
    color: #000;
  }
  .card3 .org-qrcode{
    width: 128px;
    height: 128px;
    position: absolute;
    top: 18px;
    right: 18px;
  }
  .card3 .card-info{
    position: absolute;
    bottom: 18px;
    text-align: left;
    font-size: 14px;
    padding-left: 15px;
  }
  .org-funnel{
    width: 25px;
    height: 36px;
    padding-top: 25px;
    padding-bottom: 5px;
  }
  .card4{
    font-size: 14px;
  }
  .card4 .p1{
    font-size: 18px;
  }
  .org-order-link{
    position: absolute;
    left: 15px;
    top: 15px;
    background:#060606;
    border-radius:100px;
    width:76px;
    height:30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
  }
</style>
