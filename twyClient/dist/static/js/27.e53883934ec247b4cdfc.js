webpackJsonp([27],{"5F/P":function(t,a,e){var n=e("6BCk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("04a43b40",n,!0,{})},"6BCk":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,"\n.activity-wrap[data-v-01e5536e] {\r\n  background-color: #fbf9fe;\n}\n.ac-wrap[data-v-01e5536e] {\r\n  position: relative;\r\n  z-index: 10;\r\n  width: 90%;\r\n  margin: auto;\r\n  padding: 20px 0;\n}\n.ac-wrap .title[data-v-01e5536e] {\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\n}\n.ac-wrap .time[data-v-01e5536e],\r\n.ac-wrap .address[data-v-01e5536e] {\r\n  font-size: 12px;\r\n  color: #8a8a8f;\n}\n.ac-wrap .ac-cont[data-v-01e5536e] {\r\n  font-size: 14px;\r\n  color: #4a4a4a;\n}\n.ac-wrap .ac-cont p[data-v-01e5536e] {\r\n  margin: 5px 0;\n}\n.ac-wrap .ac-cont img[data-v-01e5536e] {\r\n  max-width: 100% !important;\r\n  margin: 10px auto;\n}\n.vdo-cont[data-v-01e5536e] {\r\n  margin: 20px auto;\n}\r\n\r\n",""])},bcW6:function(t,a,e){"use strict";function n(t){e("5F/P")}Object.defineProperty(a,"__esModule",{value:!0});var i=e("gyMJ"),r={name:"ActivityDetail",data:function(){return{id:null,title:null,time:null,address:null,desc:null}},created:function(){this.id=this.$route.query.id,this.getActivityDetail()},methods:{getActivityDetail:function(){var t=this;i.a.activityDetail({activityId:this.id}).then(function(a){if("succ"===a.status){t.title=a.data.name,t.address=a.data.address,t.time=a.data.time,document.querySelector(".ac-cont").innerHTML=a.data.content,a.data.videoUrl&&(document.querySelector(".vdo-cont").innerHTML=a.data.videoUrl,document.querySelector(".vdo-cont iframe").width="100%",document.querySelector(".vdo-cont iframe").height="auto");var e=document.querySelectorAll(".ac-cont img");for(var n in e)e[n].style.maxWidth="100%"}})}}},c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"activity-wrap"},[e("div",{staticClass:"ac-wrap"},[e("p",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(t.time)+"  宁波天唯艺星教育")]),t._v(" "),e("div",{staticClass:"vdo-cont"}),t._v(" "),e("div",{staticClass:"ac-cont"})]),t._v(" "),e("div",{staticClass:"bg-black bg-white"})])},o=[],d={render:c,staticRenderFns:o},s=d,l=e("VU/8"),v=n,u=l(r,s,!1,v,"data-v-01e5536e",null);a.default=u.exports}});