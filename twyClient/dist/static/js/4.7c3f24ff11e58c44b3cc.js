webpackJsonp([4],{"0tFJ":function(n,t,e){var i=e("dYya");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("ee1c2242",i,!0,{})},PGrV:function(n,t,e){"use strict";function i(n){e("0tFJ")}Object.defineProperty(t,"__esModule",{value:!0});var a=e("gyMJ"),s={name:"news",data:function(){return{tab:[{type:1,label:"新闻公告"}],actType:1,newsList:[{id:1,title:"天唯艺星教育学习",time:"昨天",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:2,title:"上海小荧星儿童艺术教育领跑者",time:"03-15",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:3,title:"宁波天唯艺星少儿合唱团",time:"3-12",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:4,title:"声乐教学",time:"3-10",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:5,title:"天唯艺星网点布局",time:"3-02",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:6,title:"小荧星高规格的舞台实践",time:"3-01",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:7,title:"宁波天唯艺星教育开班...",time:"3-10",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:8,title:"天唯艺星教育学习",time:"3-12",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:9,title:"上海小荧星儿童艺术教育领跑者",time:"3-10",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:10,title:"宁波天唯艺星少儿合唱团",time:"03-02",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:11,title:"声乐教学",time:"3-01",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"},{id:12,title:"天唯艺星网点布局",time:"3-10",content:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容"}],actNews:0,title:null,videoUrl:null,right:0,bgcwidth:0}},created:function(){var n=this;a.a.newsList().then(function(t){"succ"===t.status&&(n.newsList=t.data.array,n.showNewsDetail(n.newsList[0],0))})},mounted:function(){var n=this,t=window.innerWidth,e=t-1e3-555-45+490;e<490&&(e=490),this.bgcwidth=e,window.onresize=function(){var t=document.body.clientWidth,e=t-1e3-555-45+490;t<=1e3&&(e=490),e<490&&(e=490),n.bgcwidth=e}},methods:{showNewsDetail:function(n,t){var e=this;"2"===n.type?window.open(n.link):(this.actNews=t,a.a.newsDetail({newsId:n.id}).then(function(n){"succ"===n.status&&(e.title=n.data.name,e.address=n.data.address,e.time=n.data.createTime,e.videoUrl=n.data.videoUrl,document.querySelector(".detail").innerHTML=n.data.content,n.data.videoUrl&&(document.querySelector(".video-box").innerHTML=n.data.videoUrl))}))},goIndex:function(){this.$router.push({path:"/"})},goback:function(){this.$router.go(-1)}}},o=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{attrs:{id:"news"}},[i("div",{staticClass:"maincontent"},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"left"},[i("div",{staticClass:"content"},[i("div",{staticClass:"topbar"},[i("img",{staticClass:"back",attrs:{src:e("ShNK"),alt:""},on:{click:n.goback}}),n._v(" "),i("div",{staticClass:"logo-info",on:{click:n.goIndex}},[i("img",{attrs:{src:e("k9Z6"),alt:""}}),n._v(" "),n._m(0)])]),n._v(" "),i("p",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),n._m(1)])])]),n._v(" "),i("div",{staticClass:"right",style:"width: "+n.bgcwidth+"px"},[i("div",{staticClass:"shadow"}),n._v(" "),i("div",{staticClass:"menu"},[i("div",{staticClass:"box"},[i("div",{staticClass:"news-type"},n._l(n.tab,function(t,e){return i("span",{key:e,staticClass:"type-item",class:{actType:n.actType===t.type}},[n._v(n._s(t.label))])})),n._v(" "),i("div",{staticClass:"menu-list"},[i("ul",n._l(n.newsList,function(t,e){return i("li",{key:e,class:{actNews:n.actNews===e},on:{click:function(i){n.showNewsDetail(t,e)}}},[i("span",{staticClass:"news-title"},[n._v(n._s(t.name))]),i("span",{staticClass:"news-time"},[n._v(n._s(t.createTime.substring(5,12)))])])}))])])])])])])},l=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"name"},[e("p",{staticClass:"web-name-cn"},[n._v("宁波天唯艺星教育")]),n._v(" "),e("p",{staticClass:"web-name-en"},[n._v("Tian Wei Art School")])])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"activity-detail"},[e("div",{staticClass:"video-box",attrs:{c:""}}),n._v(" "),e("div",{staticClass:"detail"})])}],c={render:o,staticRenderFns:l},r=c,d=e("VU/8"),p=i,b=d(s,r,!1,p,"data-v-58056bc7",null);t.default=b.exports},ShNK:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAXCAYAAAAyet74AAAABGdBTUEAALGPC/xhBQAAAM9JREFUKBWdkj8LQVEYh/1LlG6yWCyUyeYDKNmtPoAMJrtRVpPZbFWSUkajCWWxyKBIKXfmecsZ7+/KW0/nnPs83eHcG4mET51kF5aVCO7QUWEGaW8aqyiKnMEaEiocIk+QU1EL+YSKiqrIFzRVlEeeoa+iJHIDUxWZm8AW0nYImh7iCoWgwD2/sBm4g1obSB9qKnKuy+YGRfdArfZN9+CpyFwcVrCAGMjJYo8wktVXllkf0P4l/usm7C8PHbuJA3j2J6uxm1iCbxs1b+QcUh/O9yGFjlp4xgAAAABJRU5ErkJggg=="},"a+MF":function(n,t,e){n.exports=e.p+"static/img/bgc.835622c.png"},dYya:function(n,t,e){var i=e("kxFB");t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n#news[data-v-58056bc7] {\n  width: 100%;\n  min-height: calc(100vh);\n  margin: 0 auto;\n}\n#news .actNews span[data-v-58056bc7] {\n  color: #fff !important;\n  font-size: 16px !important;\n}\n#news .actType[data-v-58056bc7] {\n  font-size: 18px !important;\n  color: #ffffff !important;\n}\n#news .wrap[data-v-58056bc7] {\n  position: relative;\n  width: 1000px;\n  min-height: calc(100vh);\n  margin: 0 auto;\n  background-color: #fff;\n}\n#news .wrap .left[data-v-58056bc7] {\n  display: inline-block;\n  width: 555px;\n}\n#news .wrap .left .content .topbar[data-v-58056bc7] {\n  width: 100%;\n  padding-top: 69px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n#news .wrap .left .content .back[data-v-58056bc7] {\n  display: inline-block;\n  cursor: pointer;\n}\n#news .wrap .left .content .logo-info[data-v-58056bc7] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  float: right;\n  cursor: pointer;\n}\n#news .wrap .left .content .logo-info img[data-v-58056bc7] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 15px;\n}\n#news .wrap .left .content .logo-info .name[data-v-58056bc7] {\n  display: inline-block;\n  font-family: PingFangSC-Semibold;\n  font-size: 12px;\n  color: #000000;\n  letter-spacing: 0;\n  text-align: left;\n}\n#news .wrap .left .content .logo-info .name .web-name-en[data-v-58056bc7] {\n  font-weight: bold;\n}\n#news .wrap .left .content .logo-info .name .web-name-en[data-v-58056bc7] {\n  font-family: PingFangSC-Regular;\n}\n#news .wrap .left .content .title[data-v-58056bc7] {\n  padding-top: 34px;\n  margin-left: 20px;\n  font-family: PingFangSC-Semibold;\n  font-size: 20px;\n  color: #000000;\n  letter-spacing: -0.32px;\n  text-align: center;\n  font-weight: bold;\n}\n#news .wrap .left .content .detail[data-v-58056bc7] {\n  font-family: PingFangSC-Regular;\n  font-size: 16px;\n  margin-left: 20px;\n  color: #4e4e4e;\n  letter-spacing: -0.26px;\n  line-height: 30px;\n  text-align: left;\n}\n#news .right[data-v-58056bc7] {\n  display: inline-block;\n  position: fixed;\n  right: 0;\n  top: 0;\n  min-height: calc(100vh);\n  background: url("+i(e("a+MF"))+") no-repeat center center;\n  background-size: cover;\n}\n#news .right .shadow[data-v-58056bc7] {\n  opacity: 0.51;\n  background-image: linear-gradient(55deg, #5f3b53 0%, #240520 100%);\n  width: 100%;\n  min-height: calc(100vh);\n}\n#news .right .menu[data-v-58056bc7] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: calc(100vh);\n}\n#news .right .menu .news-type span[data-v-58056bc7] {\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #9c9c9c;\n  letter-spacing: -0.22px;\n  text-align: left;\n  margin-right: 40px;\n}\n#news .right .menu .box[data-v-58056bc7] {\n  padding: 134px 140px 159px 65px;\n  position: relative;\n  z-index: 11;\n  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/\n  /*定义滚动条轨道 内阴影+圆角*/\n  /*定义滑块 内阴影+圆角*/\n}\n#news .right .menu .box .menu-list[data-v-58056bc7] {\n  margin-top: 30px;\n  width: 290px;\n  height: 450px;\n  overflow-y: auto;\n}\n#news .right .menu .box .menu-list ul[data-v-58056bc7] {\n  list-style-type: none;\n}\n#news .right .menu .box .menu-list li[data-v-58056bc7] {\n  list-style-type: none;\n  cursor: pointer;\n}\n#news .right .menu .box .menu-list li span[data-v-58056bc7] {\n  font-family: PingFangSC-Regular;\n  font-size: 14px;\n  color: #6b6b6b;\n  letter-spacing: 0;\n  line-height: 31px;\n  text-align: left;\n}\n#news .right .menu .box .menu-list li .news-title[data-v-58056bc7] {\n  display: inline-block;\n  width: 196px;\n  margin-right: 28px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n#news .right .menu .box .menu-list li .news-time[data-v-58056bc7] {\n  display: inline-block;\n  vertical-align: top;\n  width: 66px;\n  font-size: 12px !important;\n}\n#news .right .menu .box .menu-list li:hover .news-title[data-v-58056bc7] {\n  color: #fff !important;\n  font-size: 16px !important;\n}\n#news .right .menu .box .menu-list li:hover .news-time[data-v-58056bc7] {\n  color: #fff !important;\n}\n#news .right .menu .box .menu-list[data-v-58056bc7]::-webkit-scrollbar {\n  width: 2px;\n  height: 2px;\n  background-color: transparent;\n}\n#news .right .menu .box .menu-list[data-v-58056bc7]::-webkit-scrollbar-track {\n  background-color: #ccc;\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(64, 43, 58, 0.3);\n}\n#news .right .menu .box .menu-list[data-v-58056bc7]::-webkit-scrollbar-thumb {\n  background-color: #555;\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(64, 43, 58, 0.3);\n}\n#news .video-box[data-v-58056bc7] {\n  width: 100%;\n  margin: 30px auto 10px;\n}\n#news .activity-detail[data-v-58056bc7] {\n  margin-bottom: 50px;\n}\n",""])}});