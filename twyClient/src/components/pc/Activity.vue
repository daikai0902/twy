<template>
	<div class="" id="activity">
    <div class="maincontent">
      <div class="wrap">
        <div class="left" :style="'width: ' + bgcwidth + 'px'">
          <div class="shadow"></div>
            <div class="menu">
              <div class="box">
                <div class="menu-list">
                <img class="back" src="../../assets/pc/activity/back.png" alt="" @click="goback"> 
                  <ul>
                    <li v-for="(item, index) in activityList" :class="{'actNews':actActivity === index}" @click="showActivityDetail(item, index)" :key="index">
                      <span class="news-title">{{item.name}}</span><span class="news-time">{{item.time}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="topbar">
              <div class="logo-info">
                <img @click="goIndex" src="../../assets/pc/news/top_logo.png" alt="">
                <div class="name">
                  <p class='web-name-cn'>宁波天唯艺星教育</p>
                  <p class='web-name-en'>Tian Wei Art School</p>
                </div>
              </div>
            </div>
            <p class="title">{{activityItem.title}}</p>

            <div class="activity-detail">
              <div class="video-box" v-if="activityItem.videoUrl"></div>
              <div class="detail"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import api from '../../api/index.js'
export default{
  name: 'activity',
  data: () => ({
    activityList: [],
    actActivity: 0,
    activityItem: {
      title: null,
      time: null,
      content: null,
      videoUrl: null
    },
    bgcwidth: 0
  }),
  created () {
    api.activityList().then(res => {
      if (res.status === 'succ') {
        this.activityList = res.data.array
        this.showActivityDetail(this.activityList[0], this.actActivity)
      }
    })
  },
  mounted () {
    let _this = this
    let width = window.innerWidth
    let s = (width - 1000) - 555 - 45 + 490
    if (s < 490) {
      s = 490
    }
    this.bgcwidth = s
    window.onresize = function () {
      let w = document.body.clientWidth
      let t = (w - 1000) - 555 - 45 + 490
      if (w <= 1000) {
        t = 490
      }
      if (t < 490) {
        t = 490
      }
      _this.bgcwidth = t
    }
  },
  methods: {
    showActivityDetail (item, idx) {
      console.log(item, idx)
      if (item.type === '2') {
        window.open(item.link)
      } else {
        this.actActivity = idx
        api.activityDetail({activityId: item.id}).then(res => {
          if (res.status === 'succ') {
            this.activityItem = {
              title: res.data.name,
              address: res.data.address,
              time: res.data.time,
              videoUrl: res.data.videoUrl
            }
            document.querySelector('.detail').innerHTML = res.data.content
            document.querySelector('.video-box').innerHTML = res.data.c
          }
        })
      }
    },
    goIndex () {
      this.$router.push({path: '/'})
    },
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
#activity{
  .actNews span{
    color: #fff !important;
    font-size: 16px !important;
  }
  .maincontent{
    // max-width: 1400px;
    width: 1000px;
    min-height: calc(100vh);
    margin: 0 auto;
    .wrap{
      position: relative;
      width: 100%;
      min-height: calc(100vh);
      margin: 0 auto;
      background-color: #fff;
      .left{
        display: inline-block;
        position: fixed;
        left: 0;
        top: 0;
        min-height: calc(100vh);
        background: url('../../assets/pc/activity/bgc.png') no-repeat center center;
        background-size: cover;
        .shadow{
          opacity:0.51;
          background-image:linear-gradient(55deg, #5f3b53 0%, #240520 100%);
          width:100%;
          min-height: calc(100vh);
        }
        .menu{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          min-height: calc(100vh);
          .news-type{
            span{
              font-family:PingFangSC-Regular;
              font-size:14px;
              color:#9c9c9c;
              letter-spacing:-0.22px;
              text-align:left;
              margin-right: 40px;
            }
          }
          .box{
            padding: 47px 140px 159px 65px;
            position: relative;
            z-index: 11;

            .menu-list{
              margin-top: 30px;
              padding-top: 155px;
              width: 290px;
              height: 450px;
              overflow-y: auto;
              float: right;
              .back{
                position: absolute;
                top: 79px;
                cursor: pointer;
              }
              ul{
                list-style-type: none;
              }
              li{
                list-style-type: none;
                cursor: pointer;
                span{
                  font-family:PingFangSC-Regular;
                  font-size:14px;
                  color:#6b6b6b;
                  letter-spacing:0;
                  line-height:31px;
                  text-align:left;                
                }
                .news-title{
                  display: inline-block;
                  width: 188px;
                  margin-right: 15px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .news-time{
                  display: inline-block;
                  vertical-align: top;
                  width: 86px;
                  font-size: 12px !important;
                }
              }
              li:hover .news-title{
                color: #fff !important;
                font-size: 16px !important;
              }
            }
            .menu-list::-webkit-scrollbar {width:2px; height:2px; background-color:transparent;} /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
            .menu-list::-webkit-scrollbar-track {background-color:#ccc; border-radius:10px; -webkit-box-shadow:inset 0 0 6px rgba(64,43,58,0.3);} /*定义滚动条轨道 内阴影+圆角*/
            .menu-list::-webkit-scrollbar-thumb {background-color:#555; border-radius:10px; -webkit-box-shadow:inset 0 0 6px rgba(64,43,58,0.3);} /*定义滑块 内阴影+圆角*/
          }
        }
      }
      .right{
        width: 555px;
        margin-left: 445px;
        .content{
          .topbar{
            width: 790px;
            padding-top: 69px;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
          }
          .back{
            display: inline-block;
            cursor: pointer;
          }
          .logo-info{
            display: inline-flex;
            justify-content: center;
            align-items: center;
            float: right;
            cursor: pointer;
            img{
              display: inline-block;
              vertical-align: middle;
              margin-right: 15px;
            }
            .name{
              display: inline-block;
              font-family:PingFangSC-Semibold;
              font-size:12px;
              color:#000000;
              letter-spacing:0;
              text-align:left;
              .web-name-en{
                font-weight: bold;
              }
              .web-name-en{
                font-family:PingFangSC-Regular;
              }
            }
          }
          .title{
            padding-top: 34px;
            font-family:PingFangSC-Semibold;
            font-size:20px;
            color:#000000;
            letter-spacing:-0.32px;
            text-align:left;
            font-weight: bold;       
          }
          .detail{
            padding-top: 58px;
            font-family:PingFangSC-Regular;
            font-size:16px;
            color:#4e4e4e;
            letter-spacing:-0.26px;
            line-height:30px;
            text-align:left;
          }
        }
      }
    }
  }
  .video-box{
    width: 100%;
    margin: 30px auto 10px;
  }
  .activity-detail{
    margin-bottom: 50px;
  }
}
</style>