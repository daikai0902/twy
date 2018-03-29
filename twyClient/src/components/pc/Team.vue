<template>
	<div class="" id="team">
		<div class="maincontent" :style="'background-image: url('+ bgc + ')'">
      <div class="wrap">
        <div class="topbar">
          <img class="back" src="../../assets/pc/team/back.png" alt="">
          <div class="logo-info">
            <img src="../../assets/pc/news/top_logo.png" alt="">
            <div class="name">
              <p class='web-name-cn'>宁波天唯艺星教育</p>
              <p class='web-name-en'>Tian Wei Art School</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script>
import bgc from '@/assets/pc/team/bgc.png'
export default{
  name: 'team',
  data: () => ({
    bgc: bgc
  }),
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
#team{
  .maincontent{
    width: 100%;
    min-height: calc(100vh);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .wrap{
    width: 1020px;
    margin: 0 auto;
    .topbar{
      width: 100%;
      text-align: center;
      display: inline-flex;
      // justify-content: center;
      align-items: center;
      margin-top: 57px;
      .back{
        float: left;
      }
      .logo-info{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        img{
          display: inline-block;
          vertical-align: middle;
          margin-right: 15px;
        }
        .name{
          display: inline-block;
          font-family:PingFangSC-Semibold;
          font-size:12px;
          color:#fff;
          letter-spacing:0;
          text-align:left;
          .web-name-en{
            // font-weight: bold;
          }
          .web-name-en{
            font-family:PingFangSC-Regular;
          }
        }
      }
    }
  }
}
</style>