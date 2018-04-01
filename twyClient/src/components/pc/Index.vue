<template>
	<div class="" id="pc-index">
		<div class="maincontent">
			<div class="bg-top">
				<div class="bg-start"></div>
			</div>
			<div class="bg-layout">
				<p class="en-title">Tian  Wei Art School</p>
				<div class="wraps">
					<img src="../../assets/pc/logo.png" alt="">
					<p class="mainTitle">宁波天唯艺星教育</p>
					<p class="mainDesc">“我们这一代人注定要在马背上从事军事与政治，为了让我们儿子一代人从事科学与技术，让我们孙子一代人从事文化与艺术。我们正是这一历史链条的传递者，也可以说是幸运儿。”</p>
					<p class="main-author">托马斯·杰斐逊（1743年-1826年）<br />美利坚合众国第三任总统</p>

					<div class="content">
						<div class="left">
							<div class="best-box">
								<img class="best-img" src="../../assets/pc/index_content_left.png" alt="">
							</div>
							<div class="best-text">
								<p>做最专业的艺术基础教育</p>
								<p class="second">让艺术为孩子成长助航</p>
							</div>
							<img class="bestart" src="../../assets/pc/bestatr.jpg" alt="">
							<div class="school-desc">
								<p>天唯艺星教育沿用上海小荧星32年沉淀的初、中、高级艺术专业教材，所有专职教师均通过上海小荧星教材教法上岗培训和不断进修，学校定期由上海专家来校指导，并将邀请宁波市著名歌、舞、演艺术家进班授课。</p>
								<p class='desc-sec'>我们承诺竭力推进宁波“一人一艺”全民艺术普及工程而不懈努力！</p>
								<p class='line'></p>
							</div>
							<router-link :to="{path: '/summary'}"><div class="pinao" :style="'background-image: url('+ pinao + ')'"></div></router-link>
						</div>
						<div class="right">
							<div class="recommand">
								<div class="item" v-for="(item, index) in recommand" @click="handleToMorePage(item.type)" :key="index">
									<div class="img" :style="'background-image: url('+ item.url +')'">
										<div class="bgc"></div>
										<div class="pic-desc">
											<p class="name" v-if="item.name">{{item.name}}</p>
											<p class="nick" v-if="item.nick">{{item.nick}}</p>
										</div>
									</div>
									<div class="info">
										<p class="tips" :class="{'teachers':item.type === 'Teacher', 'news-tips': item.type === 'News', 'acts': item.type === 'Activity'}">{{item.tips}}</p>
										<p class="title">{{item.title}}</p>
										<p class="desc">{{item.desc}}</p>
									</div>
									<div class="navigate" >
										<img class='icon' :src="item.icon" alt="">
										<span class="cate">{{item.cate}}</span>
										<span class="type">{{item.type}}</span>
										<img class="arrow" src="../../assets/pc/arrow.png" alt="">
									</div>
								</div>
							</div>

							<!-- special -->
							<div class="special">
								<div class="content">
									<div class="leftbar">
										<ul class="menu">
											<li class="menu-item" v-for="(item, index) in special" @click="changeSpecial(item.id)" :key="index">
												<span class="activited" v-if="activited === item.id"></span>
												<span class="menu-title">{{item.title}}</span>
											</li>
										</ul>
									</div>
									<div class="rightbar" :style="'background-image: url('+ selectItem.bgc + ')'">
										<div class="desc">
											<p>{{selectItem.tips}}</p>
											<p>{{selectItem.class_time}}</p>
											<p>{{selectItem.point}}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- apply -->
					<div class="apply" :style="'background-image: url('+ apply + ')'"></div>
				</div>

				<div class="footer">
					<div class="box">
						<div class="flogo">
							<img src="../../assets/pc/footer_qrcode.jpg">
						</div>
						<div class="box">
							<div class="left">
								<p class="name">宁波天唯艺星教育</p>
								<p class="name">备案号 fag939300r</p>
								<p class="name">学校电话 0574-88269588</p>
								<p class="name">官方微信 17367232260</p>
							</div>
							<!-- <div class="right">
								<img src="../../assets/pc/footer_qrcode.png" alt="">
							</div> -->
						</div>
					</div>
				</div>

				<div class="bg-color"></div>
			</div>
		</div>

		
	</div>
</template>
<script>
import leader from '@/assets/pc/leader.png'
import news from '@/assets/pc/news.png'
import act from '@/assets/pc/act.png'
import user from '@/assets/pc/user.png'
import laba from '@/assets/pc/laba.png'
import airboll from '@/assets/pc/airboll.png'
import c001 from '@/assets/pc/index/c001.png'
import c002 from '@/assets/pc/index/c002.png'
import c003 from '@/assets/pc/index/c003.png'
import c004 from '@/assets/pc/index/c004.png'
import c005 from '@/assets/pc/index/c005.png'
import c006 from '@/assets/pc/index/c006.png'
import c007 from '@/assets/pc/index/c007.png'
import pinao from '@/assets/pc/pinao.jpg'
import apply from '@/assets/pc/class.jpg'
export default{
  name: 'PcPndex',
  data: () => ({
    pinao: pinao,
    apply: apply,
    c001: c001,
    c002: c002,
    c003: c003,
    c004: c004,
    c005: c005,
    c006: c006,
    c007: c007,
    recommand: [
      {
        id: 1,
        tips: 'Elite Team',
        url: leader,
        name: '徐明德',
        nick: '宁波天唯艺星教育名誉校长',
        type: 'Teacher',
        title: '名师团队',
        desc: '由上海戏剧学院徐明德教授和27年资深教育管理者带领，携手各艺术领域专家教师，志在做最专业的艺术基础教育。',
        icon: user,
        cate: '名师团队'
      }, {
        id: 2,
        tips: '04-08 04:50AM',
        url: news,
        name: '',
        nick: '',
        type: 'News',
        title: '新闻公告标题新闻公告标题',
        desc: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内…',
        icon: laba,
        cate: '新闻活动'
      }, {
        id: 1,
        tips: '04-08 01:08PM',
        url: act,
        name: '',
        nick: '',
        type: 'Activity',
        title: '精彩活动标题精彩活动标题',
        desc: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内…',
        icon: airboll,
        cate: '艺星之路'
      }
    ],
    special: [
      {
        id: 1,
        title: '声乐歌舞',
        tips: '4-8周岁儿童',
        class_time: '150分钟/16周次/一学期每次150分钟',
        point: ' 发挥儿童歌舞表演天性，全面塑造舞台艺术表现力',
        bgc: c001
      }, {
        id: 2,
        title: '影视表演',
        tips: '4-8周岁儿童',
        class_time: '每学期16周次，每次150分钟',
        point: ' 学在教室，用在生活，培养观察和理解力，提高表现能力与沟通能力',
        bgc: c002
      }, {
        id: 3,
        title: '民族舞',
        tips: '4-8周岁儿童',
        class_time: '每学期16周次，每次150分钟',
        point: '学习民族舞精髓，体验民族舞风情 ',
        bgc: c003
      }, {
        id: 4,
        title: '涂鸦创想课',
        tips: '4-8周岁儿童',
        class_time: '滚动开班，每周一次，每次90分钟',
        point: '培养美术兴趣，玩与学结合，发掘孩子艺术天赋 ',
        bgc: c004
      }, {
        id: 5,
        title: '素描课',
        tips: '9岁以上零基础孩子',
        class_time: '滚动开班，每周一次，一次150分钟 ',
        point: '感受艺术的美感，培养孩子的观察力、造型能力与表现能力 ',
        bgc: c005
      }, {
        id: 6,
        title: '少儿合唱团',
        tips: '4-8周岁儿童',
        class_time: '每学期16周次，每次150分钟',
        point: '开发儿童智力，培养专注力与团队合作能力',
        bgc: c006
      }, {
        id: 7,
        title: '钢琴课',
        tips: '4岁以上儿童',
        class_time: '一对一教学，每周一次，每次45分钟',
        point: '专业院校师资，感受古典音乐的魅力，打造孩子的贵族气质 ',
        bgc: c007
      }
    ],
    activited: 1,
    selectItem: {
      id: 1,
      title: '声乐歌舞',
      tips: '4-8周岁儿童',
      class_time: '150分钟/16周次/一学期每次150分钟',
      point: ' 发挥儿童歌舞表演天性，全面塑造舞台艺术表现力',
      bgc: c001
    }
  }),
  mounted () {

  },
  methods: {
    handleToMorePage (type) {
      let url = type === 'Teacher' ? '/team' : type === 'News' ? '/news' : '/activity'
      this.$router.push({path: url})
    },
    changeSpecial (id) {
      let special = this.special
      if (id) {
        let temp = special.filter(p => {
          if (p.id === id) {
            return p
          }
          return false
        })
        this.selectItem = temp[0]
        this.activited = id
      }
    }
  }
}
</script>
<style lang='less' scoped>
.bg-color{
	// background-color: #2d2d2e;
	background-image: linear-gradient(90deg, #141414 0%, #4d4d4f 100%);
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: -1;
	min-height: calc(100vh);
	top:0;
	left: 0;
}	
#pc-index{
	box-sizing: border-box;
	.bg-top{
		width: 100%;
		height: 720px;
		background: url('./../../assets/pc/bg_top.png') no-repeat 70% center;
		background-size: contain;
		.bg-start{
			width: 100%;
			height: calc(100vh);
			background: url('./../../assets/pc/bgc_start.png') no-repeat center center;
			background-size: cover;
		}
	}
	.bg-layout{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: calc(100vh);
		background: url('./../../assets/pc/bg_index.png') no-repeat center center;
		background-size: cover;
	}
	.en-title{
		width: 1187px;
		margin:  auto;
		opacity:0.24;
		font-family:Arial-BoldMT;
		font-size:122px;
		color:#676869;
		letter-spacing:0;
		text-align:left;			
	}
	.wraps{
		max-width: 1020px;
		margin: 0 auto;
		// padding-top: 204px;
		.mainTitle{
			margin: 21px 0 18px 0;
			font-family:PingFangSC-Semibold;
			font-size:32px;
			color:#ffffff;
			letter-spacing:0;
			text-align:left;	
		}
		.mainDesc{
			font-family:PingFangSC-Regular;
			font-size:18px;
			color:#f0f0f0;
			letter-spacing:0.1px;
			line-height:32px;
			text-align:left;
			font-weight: 100;	
		}
		.main-author{
			margin: 10px 0 0 auto;
			text-align: left;
			color:#f0f0f0;
			width: 286px;
			position: relative;
			font-weight: 100;
			font-size: 18px;
		}
		.main-author:after{
			content: '';
			position: absolute;
			background-color: #f0f0f0;
			height: 1px;
			width: 50px;
			left: -65px;
			top: 13px;
		}
	}
	.content{
		margin-top: 120px;
		.left{
			position: relative;
			display: inline-block;
			width: 275px;
			background-color: #fff;
			.best-box{
				margin: 0 auto;
				margin-top: 50px;
				padding-top: 15px;
				border:3px solid #cea35f;
				width:172px;
				height:238px;
				text-align: center;
			}
			.best-text{
				position: absolute;
				width: 235px;
				left: 50%;
				top: 219px;
				margin-left: -115px;
				font-family:.SFNSDisplay;
				font-size:22px;
				color:#a98342;
				letter-spacing:-1.01px;
				text-align:center;
				line-height:23px;
				background-color: #fff;
				.second{
					font-family:.AppleSystemUIFont;
					font-size:14px;			
				}
			}
			.bestart{
				margin-top: 48px;
				width: 100%;
			}
			.school-desc{
				width: 198px;
				margin: 0 auto;
				margin-top: -7px;
				padding-bottom: 28px;
				border: 1px solid #f9f9f9;
				border-bottom-color: #999;
				// box-shadow: 0px 1px 1px 1px #f0f0f0;
				padding: 28px 20px 28px 20px;
				p{
					font-family:PingFangSC-Regular;
					font-size:14px;
					color:#7a7a7a;
					text-align:justify;
					line-height:23px;
				}
				.desc-sec{
					margin-top: 23px;
				}
				.line{
					background:#000000;
					width:26px;
					height:3px;
					margin-top: 15px;
				}
			}
			.pinao{
				width: 275px;
				height: 116px;
				margin-top: 5px;
				background-position: center;
				background-repeat: no-repeat;
				background-size: contain;
			}
		}
		.right{
			display: inline-block;
			margin-left: 24px !important;
			vertical-align: top;
			float: right;
			.recommand{
				vertical-align: top;
				.item{
					width: 225px;
					display: inline-block;
					margin-right: 23px;
					font-size: 0;
					vertical-align: top;
					cursor: pointer;
					.img{
						position: relative;
						width: 100%;
						height: 200px;
						background-position: center;
						background-repeat: no-repeat;
						background-size: cover;
						vertical-align: top;
						.bgc{
							position: absolute;
							bottom: 0;
							left: 0;
							background-image:linear-gradient(-179deg, rgba(0,0,0,0.00) 0%, #000000 100%);
							width:225px;
							height:100px;
						}
					}
					.pic-desc{
						position: absolute;
						bottom: 14px;
						left: 0;
					}
					.name{
						font-family:PingFangSC-Semibold;
						font-size:16px;
						color:#ffffff;
						letter-spacing:0;
						text-align:left;
						padding: 0px 26px 0 31px;
					}
					.nick{
						padding: 0px 26px 0 31px;
						font-family:PingFangSC-Regular;
						font-size:14px;
						color:#ffffff;
						letter-spacing:0;
						text-align:left;
					}
					.info{
						background-color: #fff;
						padding: 20px 26px 5px 31px;
						.tips{
							font-family:PingFangSC-Semibold;
							font-size: 12px;
						}
						.teachers{
							color:#a98342;
						}
						.news-tips{
							color:#b44778;
						}
						.acts{
							color:#8a9632;
						}
						.title{
							padding-top: 9px;
							font-family:PingFangSC-Semibold;
							font-size:20px;
							color:#4e4e4e;
							letter-spacing:-0.32px;
							text-align:left;
							font-weight: bold;
							height: 56px;
						}
						.desc{
							font-family:PingFangSC-Regular;
							font-size:12px;
							color:#9b9b9b;
							letter-spacing:-0.19px;
							line-height:22px;
							text-align:left;
							margin-top: 32px;
							padding-bottom: 25px;
						}
					}
					.navigate{
						width: 225px;
						height: 63px;
						display: inline-flex;
						align-items: center;
						background-image:linear-gradient(-235deg, #613060 0%, #9c4775 100%);
						.cate{
							font-family:PingFangSC-Semibold;
							font-size:14px;
							color:#ffffff;
							letter-spacing:-0.22px;
							text-align:left;
							margin-right: 24px;
						}
						.type{
							font-family:PingFangSC-Regular;
							font-size:10px;
							color:#ffffff;
							letter-spacing:-0.16px;
							text-align:right;
							margin-right: 10px;
						}
						.icon{
							margin: 0 11px 0 35px;
						}
					}
				}
				.item:last-child{
					margin-right: 0;
				}
				.item:first-child .info .desc{
							margin-top: 10px;
				}
			}
			.special{
				width: 721px;
				font-size: 0;
				.content{
					margin-top: 22px;
				}
				.leftbar{
					display: inline-block;
					width: 162px;
					height: 392px;
					opacity:0.68;
					background-image:linear-gradient(-138deg, #6c1472 0%, #e12c8d 100%);
					box-sizing: border-box;
					padding: 77px 41px 63px 41px;
					ul{
						li{
							position: relative;
							display: inline-block;
							.activited{
								position: absolute;
								left: -19px;
								top: 50%;
								margin-top: -1px;
								opacity:0.62;
								background:#ffffff;
								width:10px;
								height:2px;
								cursor: pointer;
							}
							span{
								font-family:PingFangSC-Regular;
								font-size:16px;
								color:#ffffff;
								letter-spacing:0;
								line-height:36px;
								text-align:left;
								cursor: pointer;
							}
						}
					}
				}
				.rightbar{
					position: relative;
					display: inline-block;
					width: 559px;
					height: 392px;
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					vertical-align: top;
					.desc{
						position: absolute;
						right: 33px;
						bottom: 63px;
						p{
							font-family:PingFangSC-Regular;
							font-size:18px;
							color:#ffffff;
							text-align:right;
							line-height:32px;					
						}
					}
				}
			}
		}
	}
	.apply{
		width: 100%;
		height: 461px;
		margin-top: 23px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.footer{
		position: relative;
		width: 100%;
		background:#5c4358;
		height: 250px;
		margin-top: 170px;
		display: inline-flex;
		align-items: center;
		justify-content: space-around;
		.box{
			padding: 38px 0 0 0;
			width: 1020px;
			margin: 0 auto;
			.flogo{
				position: absolute;
				left: 50%;
				top: -95px;
				margin-left: -95px;
				width: 190px;
				height: 190px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.left{
        // display: inline-block;
				p{
					font-family:PingFangSC-Regular;
					font-size:14px;
					color:#ffffff;
					letter-spacing:0.4px;
					line-height:26px;
					text-align:left;
					text-align: center;
				}
			}
			.right{
				display: inline-block;
				float: right;
			}
		}
	}
}
</style>