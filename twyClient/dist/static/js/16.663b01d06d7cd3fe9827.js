webpackJsonp([16],{"+ww2":function(n,t,e){var r=e("fSqt");"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e("rjj0")("6d47cfce",r,!0,{})},OHy8:function(n,t,e){n.exports=e.p+"static/img/plogin.5f2d455.jpg"},fSqt:function(n,t,e){t=n.exports=e("FZ+f")(!1),t.push([n.i,"\n.index-wrap .bg-home[data-v-0f189ec9]{\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\n}\n.open-wrap[data-v-0f189ec9]{\r\n  width: 100%;\r\n  margin: 30% auto;\r\n  text-align: center;\r\n  color: #fff;\r\n  position: relative;\r\n  z-index: 10;\n}\n.open-wrap .open-funnel[data-v-0f189ec9]{\r\n  width:31px;\r\n  height:40px;\n}\n.open-wrap .op1[data-v-0f189ec9]{\r\n  font-size:24px;\r\n  color:#ffffff;\r\n  letter-spacing:0.69px;\r\n  text-align:center;\r\n  text-shadow:0 2px 4px rgba(0,0,0,0.25);\n}\n.open-wrap .op2[data-v-0f189ec9]{\r\n  font-size:24px;\r\n  color:#FFFFFF;;\r\n  text-align:center;\r\n  margin-bottom: 40px;\n}\n.open-wrap .op3[data-v-0f189ec9]{\r\n  font-size:14px;\r\n  color:#ffffff;\r\n  text-align:center;\r\n  margin: 30px;\n}\n.ipt-login[data-v-0f189ec9]{\r\n  background:rgba(255,255,255,0.11);\r\n  border:2px solid #ffffff;\r\n  border-radius:100px;\r\n  width:284px;\r\n  height:54px;\r\n  text-align: center;\r\n  color: #fff;\r\n  font-size: 14px;\n}\n.btn-parent-login[data-v-0f189ec9]{\r\n  background:#fccf74;\r\n  display: block;\r\n  border-radius:100px;\r\n  width:286px;\r\n  height:48px;\r\n  line-height:48px;\r\n  font-size:18px;\r\n  color:#fff;\r\n  text-align: center;\r\n  margin: 80px auto 0;\n}\ninput[data-v-0f189ec9]::-webkit-input-placeholder{\r\n  color: rgba(255,255,255, .8);\n}\ninput[data-v-0f189ec9]::-moz-placeholder{   /* Mozilla Firefox 19+ */\r\n  color: rgba(255,255,255, .8);\n}\ninput[data-v-0f189ec9]:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */\r\n  color: rgba(255,255,255, .8);\n}\ninput[data-v-0f189ec9]:-ms-input-placeholder{  /* Internet Explorer 10-11 */ \r\n  color: rgba(255,255,255, .8);\n}\r\n",""])},oX5U:function(n,t,e){"use strict";function r(n){e("+ww2")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("gyMJ"),a=e("Bfwr"),i=(a.a,{name:"Open",components:{Loading:a.a},data:function(){return{code:null,number:null,openId:null}},created:function(){this.$vux.loading.show();var n=this.parseQueryString(window.location.href);n.code?this.code=n.code:window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx959b4c6d0334b80c&redirect_uri=http%3A%2F%2Fm.twyxedu.com%2FparentLogin&response_type=code&scope=snsapi_base&state=123&connect_redirect=1#wechat_redirect"},mounted:function(){this.$vux.loading.hide(),window.addEventListener("popstate",function(n){window.location.href="/schoolReport"},!1)},methods:{bindParentLogin:function(){var n=this,t=this;o.a.getOpenId({code:t.code}).then(function(e){"succ"===e.status&&(t.openId=e.data.openId,o.a.bindStudent({openId:t.openId,number:n.number}).then(function(n){"succ"===n.status?t.$router.push({name:"schoolReport",query:{sid:n.data.studentId}}):alert(n.message)}))})},parseQueryString:function(n){var t=[],e={};n=n.split("#")[0],t=n.split("?"),t.shift();var r=t.join("?");if(0===r.trim().length)return e;t=r.split("&");for(var o=0;o<t.length;o++){var a=t[o].split("="),i=a.shift(),p=a.join("=");e[i]=p}return e}}}),p=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"index-wrap"},[r("div",{staticClass:"open-wrap"},[r("p",{staticClass:"op1"},[n._v("宁波天唯艺星教育")]),n._v(" "),r("p",{staticClass:"op2"},[n._v("让艺术为孩子成长助航")]),n._v(" "),r("p",{staticClass:"op3"},[n._v("输入学号就可查询小朋友课程课时和成绩")]),n._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:n.number,expression:"number"}],staticClass:"ipt-login",attrs:{type:"text",placeholder:"请输入小朋友的学号"},domProps:{value:n.number},on:{input:function(t){t.target.composing||(n.number=t.target.value)}}}),n._v(" "),r("a",{staticClass:"btn-parent-login",attrs:{href:"javascript:;"},on:{click:n.bindParentLogin}},[n._v("查询")])]),n._v(" "),r("img",{staticClass:"bg-home",attrs:{src:e("OHy8")}}),n._v(" "),r("div",{staticClass:"home-wrap"})])},c=[],s={render:p,staticRenderFns:c},d=s,l=e("VU/8"),f=r,u=l(i,d,!1,f,"data-v-0f189ec9",null);t.default=u.exports}});