webpackJsonp([7],{"2f9C":function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.vux-tab-ink-bar{\r\n  height: 0 !important;\r\n  display: none !important;\n}\r\n",""])},Cagy:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-cell:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: ".";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.weui-cell_access {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  color: inherit;\n}\n.weui-cell_access:active {\n  background-color: #ECECEC;\n}\n.weui-cell_access .weui-cell__ft {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access .weui-cell__ft:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 2px;\n}\n.weui-cell_link {\n  color: #586C94;\n  font-size: 14px;\n}\n.weui-cell_link:first-child:before {\n  display: block;\n}\n.weui-cell_access.vux-cell-box {\n  padding-right: 13px;\n  position: relative;\n}\n.weui-cell_access.vux-cell-box:after {\n  content: " ";\n  display: inline-block;\n  height: 6px;\n  width: 6px;\n  border-width: 2px 2px 0 0;\n  border-color: #C8C8CD;\n  border-style: solid;\n  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n  position: relative;\n  top: -2px;\n  position: absolute;\n  top: 50%;\n  margin-top: -4px;\n  right: 17px;\n}\n.weui-panel {\n  background-color: #FFFFFF;\n  margin-top: 10px;\n  position: relative;\n  overflow: hidden;\n}\n.weui-panel:first-child {\n  margin-top: 0;\n}\n.weui-panel:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-panel:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-panel__hd {\n  padding: 14px 15px 10px;\n  color: #999999;\n  font-size: 13px;\n  position: relative;\n}\n.weui-panel__hd:after {\n  content: " ";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-media-box {\n  padding: 15px;\n  position: relative;\n}\n.weui-media-box:before {\n  content: " ";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #E5E5E5;\n  color: #E5E5E5;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-media-box:first-child:before {\n  display: none;\n}\na.weui-media-box {\n  color: #000000;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\na.weui-media-box:active {\n  background-color: #ECECEC;\n}\n.weui-media-box__title {\n  font-weight: 400;\n  font-size: 17px;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.weui-media-box__desc {\n  color: #999999;\n  font-size: 13px;\n  line-height: 1.2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.weui-media-box__info {\n  margin-top: 15px;\n  padding-bottom: 5px;\n  font-size: 13px;\n  color: #CECECE;\n  line-height: 1em;\n  list-style: none;\n  overflow: hidden;\n}\n.weui-media-box__info__meta {\n  float: left;\n  padding-right: 1em;\n}\n.weui-media-box__info__meta_extra {\n  padding-left: 1em;\n  border-left: 1px solid #CECECE;\n}\n.weui-media-box_text .weui-media-box__title {\n  margin-bottom: 8px;\n}\n.weui-media-box_appmsg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-media-box_appmsg .weui-media-box__hd {\n  margin-right: .8em;\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  text-align: center;\n}\n.weui-media-box_appmsg .weui-media-box__thumb {\n  width: 100%;\n  max-height: 100%;\n  vertical-align: top;\n}\n.weui-media-box_appmsg .weui-media-box__bd {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 0;\n}\n.weui-media-box_small-appmsg {\n  padding: 0;\n}\n.weui-media-box_small-appmsg .weui-cells {\n  margin-top: 0;\n}\n.weui-media-box_small-appmsg .weui-cells:before {\n  display: none;\n}\n',""])},EZvQ:function(n,t,e){"use strict";function i(n){e("sYKz")}function a(n){e("spFm")}function o(n){e("rjHF"),e("LULg")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("0FxO"),s={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var n=this.$children,t=0;t<n.length;t++)n[t].currentIndex=t,n[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(n,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),n>-1&&this.$children[n]&&(this.$children[n].currentSelected=!0),this.$emit("input",n),this.$emit("on-index-change",n,t)},index:function(n){this.currentIndex=n},value:function(n){this.index=n}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},l={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.updateIndex()})},methods:{onItemClick:function(n){var t=this;if(this.$parent.preventDefault)return void this.$parent.$emit("on-before-index-change",this.currentIndex);void 0!==this.disabled&&!1!==this.disabled||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),!0===n&&Object(r.b)(this.link,this.$router)}},watch:{currentSelected:function(n){n&&(this.$parent.index=this.currentIndex)},selected:function(n){this.currentSelected=n}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}},c=(Number,String,String,String,String,Boolean,Function,String,Boolean,{name:"tab",mixins:[s],mounted:function(){var n=this;this.$nextTick(function(){setTimeout(function(){n.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var n={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?n.backgroundColor="transparent":n.backgroundColor=this.barActiveColor||this.activeColor,n},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(n,t){this.direction=n>t?"forward":"backward",this.$emit("on-index-change",n,t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}),d=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!n.animate}},[n._t("default"),n._v(" "),n.animate?e("div",{staticClass:"vux-tab-ink-bar",class:n.barClass,style:n.barStyle},[n.customBarWidth?e("span",{staticClass:"vux-tab-bar-inner",style:n.innerBarStyle}):n._e()]):n._e()],2)},p=[],u={render:d,staticRenderFns:p},b=u,h=e("VU/8"),f=i,x=h(c,b,!1,f,null,null),m=x.exports,g=(String,Boolean,String,String,String,{name:"tab-item",mixins:[l],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),v=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-tab-item",class:[n.currentSelected?n.activeClass:"",{"vux-tab-selected":n.currentSelected,"vux-tab-disabled":n.disabled}],style:n.style,on:{click:n.onItemClick}},[n._t("default"),n._v(" "),void 0!==n.badgeLabel&&""!==n.badgeLabel?e("span",{staticClass:"vux-tab-item-badge",style:{background:n.badgeBackground,color:n.badgeColor}},[n._v("\n  "+n._s(n.badgeLabel))]):n._e()],2)},_=[],w={render:v,staticRenderFns:_},k=w,C=e("VU/8"),y=C(g,k,!1,null,null,null),S=y.exports,L=e("fBcm"),z=e("b+jt"),E=e("mvHQ"),I=e.n(E),$=(String,Object,Array,String,{name:"panel",props:{header:String,footer:Object,list:Array,type:{type:String,default:"1"}},methods:{onImgError:function(n,t){this.$emit("on-img-error",JSON.parse(I()(n)),t),n.fallbackSrc&&(t.target.src=n.fallbackSrc)},getUrl:function(n){return Object(r.a)(n,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),Object(r.b)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(n){this.$emit("on-click-item",n),Object(r.b)(n.url,this.$router)}}}),D=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"weui-panel weui-panel_access"},[n.header?e("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:n._s(n.header)},on:{click:n.onClickHeader}},[n._t("header")],2):n._e(),n._v(" "),e("div",{staticClass:"weui-panel__bd"},[n._t("body",["1"===n.type?n._l(n.list,function(t){return e("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:n.getUrl(t.url)},on:{click:function(e){e.preventDefault(),n.onItemClick(t)}}},[t.src?e("div",{staticClass:"weui-media-box__hd"},[e("img",{staticClass:"weui-media-box__thumb",attrs:{src:t.src,alt:""},on:{error:function(e){n.onImgError(t,e)}}})]):n._e(),n._v(" "),e("div",{staticClass:"weui-media-box__bd"},[e("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:n._s(t.desc)}})])])}):n._e(),n._v(" "),"2"===n.type?n._l(n.list,function(t){return e("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(e){e.preventDefault(),n.onItemClick(t)}}},[e("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:n._s(t.desc)}})])}):n._e(),n._v(" "),"3"===n.type?[e("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[e("div",{staticClass:"weui-cells"},n._l(n.list,function(t){return e("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:n.getUrl(t.url)},on:{click:function(e){e.preventDefault(),n.onItemClick(t)}}},[e("div",{staticClass:"weui-cell__hd"},[e("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:t.src,alt:""},on:{error:function(e){n.onImgError(t,e)}}})]),n._v(" "),e("div",{staticClass:"weui-cell__bd"},[e("p",{domProps:{innerHTML:n._s(t.title)}})]),n._v(" "),e("span",{staticClass:"weui-cell__ft"})])}))])]:n._e(),n._v(" "),"4"===n.type?n._l(n.list,function(t){return e("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(e){e.preventDefault(),n.onItemClick(t)}}},[e("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:n._s(t.desc)}}),n._v(" "),t.meta?e("ul",{staticClass:"weui-media-box__info"},[e("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:n._s(t.meta.source)}}),n._v(" "),e("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:n._s(t.meta.date)}}),n._v(" "),e("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:n._s(t.meta.other)}})]):n._e()])}):n._e(),n._v(" "),"5"===n.type?n._l(n.list,function(t){return e("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(e){e.preventDefault(),n.onItemClick(t)}}},[e("div",{staticClass:"weui-media-box_appmsg"},[t.src?e("div",{staticClass:"weui-media-box__hd"},[e("img",{staticClass:"weui-media-box__thumb",attrs:{src:t.src,alt:""},on:{error:function(e){n.onImgError(t,e)}}})]):n._e(),n._v(" "),e("div",{staticClass:"weui-media-box__bd"},[e("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:n._s(t.title)}}),n._v(" "),e("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:n._s(t.desc)}})])]),n._v(" "),t.meta?e("ul",{staticClass:"weui-media-box__info"},[e("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:n._s(t.meta.source)}}),n._v(" "),e("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:n._s(t.meta.date)}}),n._v(" "),e("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:n._s(t.meta.other)}})]):n._e()])}):n._e()])],2),n._v(" "),e("div",{staticClass:"weui-panel__ft"},[n.footer&&n.footer.title&&"3"!==n.type?e("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:n.getUrl(n.footer.url)},on:{click:function(t){return t.preventDefault(),n.onClickFooter(t)}}},[e("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:n._s(n.footer.title)}})]):n._e()])])},F=[],B={render:D,staticRenderFns:F},T=B,j=e("VU/8"),H=a,P=j($,T,!1,H,null,null),M=P.exports,Y=e("gyMJ"),U=(L.a,z.a,{name:"News",components:{Tab:m,TabItem:S,Swiper:L.a,SwiperItem:z.a,Panel:M},data:function(){return{newsList:[],tabIndex:0,activityList:[],openList:[],scrollerStatus:{pullupStatus:"default"},isbounce:!1,showUp:!0,upobj:{content:"请上拉刷新数据",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"请上拉刷新数据",upContent:"请上拉刷新数据",loadingContent:"加载中...",clsPrefix:"xs-plugin-pullup-"},page1:0,page2:0,page3:0,pageSize:4}},created:function(){},methods:{getNewsList:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.page1=t,this.newsList=1===this.page1?[]:this.newsList,Y.a.newsList({page:this.page1,pageSize:this.pageSize}).then(function(t){if("succ"===t.status){if(t.data.array<n.pageSize)return n.page1--,void(e&&e(!0));e&&e(),n.newsList=n.newsList.concat(t.data.array)}})},getActivityList:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.page2=t,this.activityList=1===this.page2?[]:this.activityList,Y.a.activityList({page:this.page2,pageSize:this.pageSize}).then(function(t){if("succ"===t.status){if(t.data.array<n.pageSize)return n.page2--,void(e&&e(!0));e&&e(),n.activityList=n.activityList.concat(t.data.array)}})},getOpenList:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.page3=t,this.openList=1===this.page3?[]:this.openList,Y.a.openList({page:this.page3,pageSize:this.pageSize}).then(function(t){if("succ"===t.status){if(t.data.array<n.pageSize)return n.page3--,void(e&&e(!0));e&&e(),n.openList=n.openList.concat(t.data.array)}})},gotoNewsDetail:function(n){"1"===n.type?this.$router.push({name:"newsDetail",query:{id:n.id}}):"2"===n.type&&window.open(n.link)},gotoActivityDetail:function(n){"1"===n.type?this.$router.push({name:"activityDetail",query:{id:n.id}}):"2"===n.type&&window.open(n.link)},gotoOpenDetail:function(n){"1"===n.type?this.$router.push({name:"openDetail",query:{id:n.id}}):"2"===n.type&&window.open(n.link)},onItemClick:function(n){this.tabIndex=n,0===this.tabIndex?(this.page1++,this.getNewsList(this.page1)):1===this.tabIndex?(this.page2++,this.getActivityList(this.page2)):2===this.tabIndex&&(this.page3++,this.getOpenList(this.page3))},goSchool:function(){this.$router.push({name:"school"})},infinite:function(n){0===this.tabIndex?(this.page1++,this.getNewsList(this.page1,n)):1===this.tabIndex?(this.page2++,this.getActivityList(this.page2,n)):2===this.tabIndex&&(this.page3++,this.getOpenList(this.page3,n))}}}),O=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"news-wrap"},[i("scroller",{ref:"my_scroller",staticStyle:{"z-index":"10"},attrs:{"on-infinite":n.infinite}},[i("div",{staticStyle:{height:"1px"}}),n._v(" "),i("div",{staticClass:"tabs"},[i("div",{staticClass:"news-top",on:{click:n.goSchool}},[i("img",{staticClass:"img-news-top",attrs:{src:e("xn7j")}}),n._v(" "),i("div",{staticClass:"nt-desc"},[i("p",{staticClass:"nt-title"},[n._v("我们给孩子：")]),n._v(" "),i("p",{staticClass:"nt-title"},[n._v("不仅是专业艺术基础教育，")]),n._v(" "),i("p",{staticClass:"nt-title"},[n._v("还有广阔的艺术展示平台")])])])]),n._v(" "),i("tab",{staticClass:"v-tabs"},[i("tab-item",{attrs:{selected:""},on:{"on-item-click":function(t){n.onItemClick(0)}}},[n._v("新闻公告")]),n._v(" "),i("tab-item",{on:{"on-item-click":function(t){n.onItemClick(1)}}},[n._v("艺星之路")]),n._v(" "),i("tab-item",{on:{"on-item-click":function(t){n.onItemClick(2)}}},[n._v("公开课")])],1),n._v(" "),i("div",{staticClass:"v-tabs"},[0==n.tabIndex?i("div",{staticClass:"tab-cont"},[i("div",{},n._l(n.newsList,function(t,e){return i("div",{key:e,staticClass:"nl-item",on:{click:function(e){n.gotoNewsDetail(t)}}},[i("div",{staticClass:"ns-panel"},[i("div",{staticClass:"ns-img-wrap",style:"background-image: url("+t.imgUrl+")"}),n._v(" "),i("div",{staticClass:"ns-info"},[i("h4",{staticClass:"ns-title"},[n._v(n._s(t.name))]),n._v(" "),i("p",{staticClass:"ns-desc"},[n._v(n._s(t.remark))]),n._v(" "),i("p",{staticClass:"ns-time"},[n._v(n._s(t.createTime))])])])])}))]):1==n.tabIndex?i("div",{staticClass:"tab-cont"},n._l(n.activityList,function(t,e){return i("div",{key:e,staticClass:"nl-item",on:{click:function(e){n.gotoActivityDetail(t)}}},[i("div",{staticClass:"ns-panel"},[i("div",{staticClass:"ns-img-wrap",style:"background-image: url("+t.imgUrl+")"}),n._v(" "),i("div",{staticClass:"ns-info"},[i("h4",{staticClass:"ns-title"},[n._v(n._s(t.name))]),n._v(" "),i("p",{staticClass:"ns-desc"},[n._v(n._s(t.remark))]),n._v(" "),i("p",{staticClass:"ns-time"},[n._v(n._s(t.time))])])])])})):2==n.tabIndex?i("div",{staticClass:"tab-cont"},n._l(n.openList,function(t,e){return i("div",{key:e,staticClass:"nl-item",on:{click:function(e){n.gotoOpenDetail(t)}}},[i("div",{staticClass:"ns-panel"},[i("div",{staticClass:"ns-img-wrap",style:"background-image: url("+t.imgUrl+")"}),n._v(" "),i("div",{staticClass:"ns-info"},[i("h4",{staticClass:"ns-title"},[n._v(n._s(t.name))]),n._v(" "),i("p",{staticClass:"ns-desc"},[n._v(n._s(t.remark))]),n._v(" "),i("p",{staticClass:"ns-time"},[n._v(n._s(t.time))])])])])})):n._e()])],1),n._v(" "),i("div",{staticClass:"bg-black"})],1)},R=[],W={render:O,staticRenderFns:R},A=W,N=e("VU/8"),J=o,Z=N(U,A,!1,J,"data-v-9601a7fe",null);t.default=Z.exports},Jm4E:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #04BE02;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background: -webkit-gradient(linear, left top, left bottom, from(#e5e5e5), color-stop(#e5e5e5), to(rgba(229, 229, 229, 0))) bottom left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #04BE02;\n  border-bottom: 3px solid #04BE02;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #04BE02;\n  margin: auto;\n  height: 100%;\n  -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab-item-badge {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  height: 18px;\n  min-width: 18px;\n  padding: 0 4px;\n  border-radius: 30px;\n  margin: auto 0 auto 4px;\n  line-height: 18px;\n  font-size: 11px;\n  background-clip: padding-box;\n  vertical-align: middle;\n}\n",""])},LULg:function(n,t,e){var i=e("2f9C");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("0b67c55e",i,!0,{})},WKce:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.tabs[data-v-9601a7fe]{\r\n  position: relative;\r\n  z-index: 10;\n}\n.tabs[data-v-9601a7fe]{\r\n  position: relative;\r\n  height: 156px;\n}\n.icon-tab[data-v-9601a7fe]{\r\n  position: absolute;\r\n  right: 15px;\r\n  bottom: 17px;\r\n  width: 18px;\r\n  height: 18px;\n}\n.icon-news[data-v-9601a7fe]{\r\n  right: 10px;\n}\n.tabs .tabs-news[data-v-9601a7fe]{\r\n  width: 22%;\r\n  height: 162px;\r\n  margin-right: 8px;\r\n  border-radius:12px;\r\n  background-color: #0074cd;\r\n  color: #fff;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  overflow: hidden;\n}\n.tabs .tabs-news .p1[data-v-9601a7fe]{\r\n  opacity:0.17;\r\n  font-size:36px;\r\n  color:#fff;\r\n  margin-left: -15px;\n}\n.tabs .tabs-news .p2[data-v-9601a7fe]{\r\n  font-size:14px;\r\n  position: absolute;\r\n  bottom: 15px;\r\n  left: 10px;\n}\n.tabs .news-top[data-v-9601a7fe]{\r\n  height: 156px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\n}\n.tabs .news-top .img-news-top[data-v-9601a7fe]{\r\n  width: 100%;\r\n  height: 100%;\n}\n.tabs .tabs-notify[data-v-9601a7fe]{\r\n  width: 75%;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ffd93d;\r\n  color: #fff;\r\n  border-radius: 12px;\n}\n.tabs .tabs-notify .p1[data-v-9601a7fe]{\r\n  font-size:14px;\r\n  color:#000;\r\n  line-height: 50px;\r\n  padding-left: 15px;\n}\n.cont-wrap[data-v-9601a7fe]{\r\n  position: relative;\r\n  z-index: 10;\r\n  color: #fff;\r\n  width: 90%;\r\n  margin: 0 auto;\n}\n.nl-item[data-v-9601a7fe]{\r\n  position: relative;\r\n  display: block;\r\n  padding: 15px 0;\r\n  margin: 0 10px;\r\n  border-bottom: 1px solid #ddd;\n}\n.nl-item[data-v-9601a7fe]::before{\r\n  content: '';\r\n  background:#fff;\r\n  width:6px;\r\n  height:6px;\r\n  border-radius:50%;\r\n  position: absolute;\r\n  left: 3px;\r\n  top: 15px;\n}\n.nl-item .nl-title[data-v-9601a7fe]{\r\n  font-size: 14px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\n}\n.nl-item .nl-time[data-v-9601a7fe]{\r\n  position: absolute;\r\n  font-size: 12px;\r\n  right: 3px;\r\n  top: 10px;\n}\n.nt-title[data-v-9601a7fe]{\r\n  font-size:18px;\r\n  color:#fff;\r\n  text-align:left;\r\n  line-height:26px;\n}\n.nt-desc[data-v-9601a7fe]{\r\n  width: 75%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 12.5%;\r\n  color: #fff;\r\n  padding-top: 40px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\n}\n.nt-sub[data-v-9601a7fe]{\r\n  font-size:14px;\r\n  color:#fff;\r\n  text-align:center;\r\n  line-height:28px;\n}\n.v-tabs[data-v-9601a7fe]{\r\n  position: relative;\r\n  z-index: 10;\n}\n.vux-tab[data-v-9601a7fe]{\r\n  background:#ecf0f1;\n}\n.vux-tab .vux-tab-item.vux-tab-selected[data-v-9601a7fe]{\r\n  color:#c09050;\r\n  position: relative;\n}\n.vux-tab .vux-tab-item.vux-tab-selected[data-v-9601a7fe]:before{\r\n  content: '';\r\n  background:#c09050;\r\n  width:5px;\r\n  height:5px;\r\n  border-radius:100%;\r\n  position: absolute;\r\n  left: 15%;\r\n  top: 45%;\n}\n.vux-tab .vux-tab-item[data-v-9601a7fe]{\r\n  color: #000;\n}\n.ns-panel[data-v-9601a7fe]{position: relative;padding-left: 140px;height: 85px;\n}\n.ns-img-wrap[data-v-9601a7fe]{\r\n  position: absolute;\r\n  left:0;\r\n  background-size: 128px 85px;\r\n  width: 128px;\r\n  height: 85px;\n}\n.ns-info[data-v-9601a7fe]{position: relative;height: 100%;\n}\n.ns-title[data-v-9601a7fe]{\r\n  font-size:16px; \r\n  color:#000000;\r\n  text-align:left;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  font-weight: 400;\n}\n.ns-desc[data-v-9601a7fe]{\r\n  font-size:14px;\r\n  color:#8a8a8f;\r\n  line-height: 18px;\r\n  overflow:hidden; \r\n  text-overflow:ellipsis;\r\n  display:-webkit-box; \r\n  -webkit-box-orient:vertical;\r\n  -webkit-line-clamp:2;\r\n  margin: 4px auto;\r\n  height: 36px;\n}\n.ns-time[data-v-9601a7fe]{\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  font-size:12px;\r\n  color:#8a8a8f;\r\n  line-height: 18px;\n}\r\n",""])},rjHF:function(n,t,e){var i=e("WKce");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("8cf4774a",i,!0,{})},sYKz:function(n,t,e){var i=e("Jm4E");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("6998144c",i,!0,{})},spFm:function(n,t,e){var i=e("Cagy");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("7e4a5ab7",i,!0,{})},xn7j:function(n,t,e){n.exports=e.p+"static/img/news_top.752aad5.jpg"}});