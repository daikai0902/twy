webpackJsonp([20],{"4nrw":function(t,e,a){var n=a("sKMS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("7cbce6b3",n,!0,{})},ZDC4:function(t,e,a){"use strict";function n(t){a("4nrw")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("gyMJ"),s=a("fBcm"),r=a("b+jt"),c=a("Bfwr"),o=a("63CM"),d=(o.a,s.a,r.a,c.a,{name:"Teacher",directives:{TransferDom:o.a},components:{Swiper:s.a,SwiperItem:r.a,Loading:c.a},data:function(){return{curr:1,total:1,show1:!1,text1:"Processing",swiperItemIndex:1,teacherList:[],nodeList:null}},created:function(){this.getTeacherList(),this.swiperItemIndex=parseInt(this.$route.query.id)},methods:{getTeacherList:function(){var t=this;i.a.teacherList().then(function(e){t.teacherList=e.data.array,t.total=e.data.array.length,t.$nextTick(function(){t.nodeList=document.querySelectorAll(".vux-swiper-item"),t.$refs.swiper.xheight=t.nodeList[t.curr-1].offsetHeight+60+"px"})})},swiperChange:function(t){var e=this;this.curr=t+1,this.$nextTick(function(){e.nodeList&&(e.$refs.swiper.xheight=e.nodeList[t].offsetHeight+60+"px")})}}}),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"news-wrap"},[a("div",{staticClass:"teacher-wrap"},[a("swiper",{ref:"swiper",attrs:{"show-dots":!1,height:"1300px",duration:50},on:{"on-index-change":t.swiperChange},model:{value:t.swiperItemIndex,callback:function(e){t.swiperItemIndex=e},expression:"swiperItemIndex"}},t._l(t.teacherList,function(e,n){return a("swiper-item",{key:n,staticClass:"black t-item"},[a("img",{staticClass:"t-img",attrs:{src:e.imgUrl}}),t._v(" "),a("p",{staticClass:"t-name"},[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"t-title"},[t._v(t._s(e.job))]),t._v(" "),a("p",{staticClass:"t-desc"},[t._v(t._s(e.intro))])])}))],1),t._v(" "),a("div",{staticClass:"paging-wrap"},[t._v(t._s(t.curr)+"/"+t._s(t.total))]),t._v(" "),a("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[a("loading",{attrs:{show:t.show1,text:t.text1}})],1),t._v(" "),a("div",{staticClass:"bg-black bg-teacher-detail"})])},f=[],l={render:p,staticRenderFns:f},h=l,u=a("VU/8"),v=n,x=u(d,h,!1,v,"data-v-af7ca51e",null);e.default=x.exports},sKMS:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,"\n.teacher-wrap[data-v-af7ca51e]{\n  position: relative;\n  z-index: 10;\n  width: 100%;\n}\n.t-item[data-v-af7ca51e]{\n  color: #fff;\n}\n.t-img[data-v-af7ca51e]{\n  position: absolute;\n  width: 100%;\n  z-index: -1;\n}\n.t-name[data-v-af7ca51e],\n.t-title[data-v-af7ca51e],\n.t-desc[data-v-af7ca51e]{\n  width: 300px;\n  margin: 0 auto;\n}\n.t-name[data-v-af7ca51e]{\n  font-size:56px;\n  padding-top: 460px;\n}\n.t-title[data-v-af7ca51e]{\n  font-size:20px;\n  margin-bottom: 15px;\n  text-align: justify;\n}\n.t-desc[data-v-af7ca51e]{\n  font-size:14px;\n  line-height:32px;\n  text-align: justify;\n}\n.paging-wrap[data-v-af7ca51e]{\n  position: absolute;\n  font-size:14px;\n  color:#989da5;\n  right: 30px;\n  top: 580px;\n  z-index: 15;\n}\n.vux-swiper-item[data-v-af7ca51e]{\n  height: auto !important;\n}\n",""])}});