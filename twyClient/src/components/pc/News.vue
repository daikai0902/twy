<template>
  <div class="" id="news">
    <div class="maincontent">
      <div class="wrap">
        <div class="left">
          <div class="content">
            <div class="topbar">
              <img class="back" src="../../assets/pc/news/back.png" alt="">
              <div class="logo-info">
                <img src="../../assets/pc/news/top_logo.png" alt="">
                <div class="name">
                  <p class='web-name-cn'>宁波天唯艺星教育</p>
                  <p class='web-name-en'>Tian Wei Art School</p>
                </div>
              </div>
            </div>
            <p class="title">{{activityItem.title}}</p>
            <p class="detail">{{activityItem.content}}</p>
          </div>
        </div>
        <div class="right">
          <div class="shadow">
          </div>
            <div class="menu">
              <div class="box">
                <div class="news-type">
                  <span class="type-item" :class="{'actType':actType === item.type}" v-for="(item ,index) in tab">{{item.label}}</span>
                </div>
                <div class="menu-list">
                  <ul>
                    <li v-for="(item, index) in news" :class="{'actNews':actNews === item.id}" @click="showNewsDetail(item.id)">
                      <span class="news-title">{{item.title}}</span><span class="news-time">{{item.time}}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'news',
  data: () => ({
    tab: [
      {
        type: 1,
        label: '新闻'
      }, {
        type: 2,
        label: '公告'
      }
    ],
    actType: 1,
    news: [
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
    activityItem: {
      id: 1,
      title: '天唯艺星教育学习',
      time: '昨天',
      content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容'
    }
  }),
  mounted () {

  },
  methods: {
    showNewsDetail (id) {
      let news = this.news
      if (id) {
        let temp = news.filter(p => {
          if (p.id === id) {
            return p
          }
          return false
        })
        this.actNews = id
        this.activityItem = temp[0]
      }
    }
  }
}
</script>
<style lang='less' scoped>
#news{
  max-width: 1400px;
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
    width: 100%;
    min-height: calc(100vh);
    margin: 0 auto;
    background-color: #fff;
    .left{
      display: inline-block;
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
        }
        .logo-info{
          display: inline-flex;
          justify-content: center;
          align-items: center;
          float: right;
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
          text-align:center;
          font-weight: bold;       
        }
        .detail{
          font-family:PingFangSC-Regular;
          font-size:16px;
          color:#4e4e4e;
          letter-spacing:-0.26px;
          line-height:30px;
          text-align:left;
        }
      }
    }
    .right{
      display: inline-block;
      position: absolute;
      right: 0;
      width: 490px;
      min-height: calc(100vh);
      background: url('../../assets/pc/news/bgc.png') no-repeat center center;
      background-size: cover;
      .shadow{
        opacity:0.51;
        background-image:linear-gradient(55deg, #5f3b53 0%, #240520 100%);
        width:490px;
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
                  width: 60px;
                }
              }
              li:hover span{
                color: #fff !important;
                font-size: 16px !important;
              }
            }
          }
        }
    }
  }
}
</style>