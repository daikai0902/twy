<template>
  <div class="" id="news">
    <div class="maincontent">
      <div class="wrap">
        <div class="left">
          <div class="content">
            <div class="topbar">
              <img class="back" src="../../assets/pc/news/back.png" alt="" @click="goback">
              <div class="logo-info" @click="goIndex">
                <img src="../../assets/pc/news/top_logo.png" alt="">
                <div class="name">
                  <p class='web-name-cn'>宁波天唯艺星教育</p>
                  <p class='web-name-en'>Tian Wei Art School</p>
                </div>
              </div>
            </div>
            <p class="title">{{title}}</p>
            <div class="detail"></div>
          </div>
        </div>
      </div>
        <div class="right" :style="'width: ' + bgcwidth + 'px'">
          <div class="shadow">
          </div>
            <div class="menu">
              <div class="box">
                <div class="news-type">
                  <span class="type-item" :class="{'actType':actType === item.type}" v-for="(item ,index) in tab" :key="index">{{item.label}}</span>
                </div>
                <div class="menu-list">
                  <ul>
                    <li v-for="(item, index) in newsList" :class="{'actNews':actNews === item.id}" @click="showNewsDetail(item.id)" :key="index">
                      <span class="news-title">{{item.name}}</span><span class="news-time">{{item.createTime.substring(5, 12)}}</span>
                    </li>
                  </ul>
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
  name: 'news',
  data: () => ({
    tab: [
      {
        type: 1,
        label: '新闻公告'
      }
    ],
    actType: 1,
    newsList: [
      {
        id: 1,
        title: '天唯艺星教育学习',
        time: '昨天',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 2,
        title: '上海小荧星儿童艺术教育领跑者',
        time: '03-15',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 3,
        title: '宁波天唯艺星少儿合唱团',
        time: '3-12',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 4,
        title: '声乐教学',
        time: '3-10',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 5,
        title: '天唯艺星网点布局',
        time: '3-02',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 6,
        title: '小荧星高规格的舞台实践',
        time: '3-01',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 7,
        title: '宁波天唯艺星教育开班...',
        time: '3-10',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 8,
        title: '天唯艺星教育学习',
        time: '3-12',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 9,
        title: '上海小荧星儿童艺术教育领跑者',
        time: '3-10',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 10,
        title: '宁波天唯艺星少儿合唱团',
        time: '03-02',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 11,
        title: '声乐教学',
        time: '3-01',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }, {
        id: 12,
        title: '天唯艺星网点布局',
        time: '3-10',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
      }
    ],
    actNews: 1,
    title: null,
    right: 0,
    bgcwidth: 0
  }),
  created () {
    api.newsList().then(res => {
      if (res.status === 'succ') {
        this.newsList = res.data.array
      }
    })
    this.showNewsDetail(this.newsList[0].id)
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
    showNewsDetail (id) {
      api.newsDetail({newsId: this.id}).then(res => {
        if (res.status === 'succ') {
          this.title = res.data.name
          this.address = res.data.address
          this.time = res.data.createTime
          document.querySelector('.detail').innerHTML = res.data.content
        }
      })
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
<style lang='less' scoped>
#news{
  // max-width: 1000px;
  width: 100%;
  min-height: calc(100vh);
  margin: 0 auto;
  .actNews span{
    color: #fff !important;
    font-size: 16px !important;
  }
  .actType{
    font-size:18px !important;
    color:#ffffff !important;
  }
  .wrap{
    position: relative;
    width: 1000px;
    min-height: calc(100vh);
    margin: 0 auto;
    background-color: #fff;
    .left{
      display: inline-block;
      width: 555px;
      .content{
        .topbar{
          width: 100%;
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
          margin-left: 20px;
          font-family:PingFangSC-Semibold;
          font-size:20px;
          color:#000000;
          letter-spacing:-0.32px;
          text-align:center;
          font-weight: bold;
        }
        .detail{
          font-family:PingFangSC-Regular;
          font-size:16px;
          margin-left: 20px;
          color:#4e4e4e;
          letter-spacing:-0.26px;
          line-height:30px;
          text-align:left;
        }
      }
    }
  }
    .right{
      display: inline-block;
      position: fixed;
      right: 0;
      top: 0;
      min-height: calc(100vh);
      background: url('../../assets/pc/news/bgc.png') no-repeat center center;
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
            padding: 134px 140px 159px 65px;
            position: relative;
            z-index: 11;
            .menu-list{
              margin-top: 30px;
              width: 290px;
              height: 450px;
              overflow-y: auto;
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
                  width: 196px;
                  margin-right: 28px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .news-time{
                  display: inline-block;
                  vertical-align: top;
                  width: 66px;
                  font-size: 12px !important;
                }
              }
              li:hover span{
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
}
</style>