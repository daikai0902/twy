<template>
  <div class="signup-wrap">
    <div class="signup-header">
      <img class="bg-top" src="../assets/sign_bg.jpg">
      <div class="sh-txt">
        <p class="p-name">宁波天唯艺星教育</p>
        <p class="p-slogan">让艺术为孩子成长助航</p>
        <p class="p-keyword">
          <label class="p-zhaozheng">春季招生</label>
          <label class="p-baoming">火热报名中</label>
        </p>
      </div>
    </div>
    <group class="signup-bd">
      <div class="sut">
        <label class="su-tip">亲，请填写报名信息！</label>
        <div class="require-tip">
          <img class="star" src="../assets/star.png"> 必填
        </div>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <x-input  v-model="name" placeholder="孩子姓名"></x-input>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <x-input  v-model="age" placeholder="年龄" type="number"></x-input>
      </div>
      <!-- <x-input  v-model="sex" placeholder="性别"></x-input> -->
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <popup-radio :options="sexOptions" v-model="sex"></popup-radio>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <x-input  v-model="clothsize" placeholder="衣尺码" type="number"></x-input>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <x-input  v-model="shoessize" placeholder="鞋尺码" type="number" ></x-input>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <x-input  v-model="momname" placeholder="妈妈姓名"></x-input>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <x-input  v-model="momphone" placeholder="手机" type="tel" keyboard="number" is-type="china-mobile"></x-input>
      </div>
      <x-input  v-model="dadname" placeholder="爸爸姓名"></x-input>
      <x-input  v-model="dadphone" placeholder="手机" type="tel" keyboard="number" is-type="china-mobile"></x-input>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <popup-radio :options="orgOptions" v-model="groupId" placeholder="选网点" required @on-hide="orgOptionChange"></popup-radio>
      </div>
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <popup-radio :options="courseOptions" v-model="courseId" placeholder="选课程" required @on-hide="courseOptionChange"></popup-radio>
      </div>
      <x-input  v-model="nursery" placeholder="现就读的幼儿园"></x-input>
      <x-input  v-model="address" placeholder="家庭住址"></x-input>
      <x-textarea v-model="remark" :max="50" placeholder="备注"></x-textarea>

      <p class="payment-tip" v-if="freeType == 1">支付方式</p>
      <ul class="payment-list" v-if="freeType == 1">
        <li :class="{'active': ptype == 1}" @click="ptype = 1">
          <img src="../assets/icon_weixin.png" class="pimg">
          <img src="../assets/icon_weixin_active.png" class="pimg-active">
          <span>微信</span>
        </li>
        <li :class="{'active': ptype == 2}"  @click="ptype = 2">
          <img src="../assets/icon_zhifubao.png" class="pimg">
          <img src="../assets/icon_zhifubao_active.png" class="pimg-active">
          <span>支付宝</span>
        </li>
        <li :class="{'active': ptype == 3}"  @click="ptype = 3">
          <img src="../assets/icon_card.png" class="pimg">
          <img src="../assets/icon_card_active.png" class="pimg-active">
          <span>银行卡</span>
        </li>
        <li :class="{'active': ptype == 4}"  @click="ptype = 4">
          <img src="../assets/icon_money.png" class="pimg">
          <img src="../assets/icon_money_active.png" class="pimg-active">
          <span>现金</span>
        </li>
      </ul>

      <x-button type="primary" class="btn-save" @click.native="bindSignup">填写完成，提交</x-button>
      <img class="bg-ft" src="../assets/bg_ft.png">
      <img class="bg-ft-mask" src="../assets/bg_ft_mask.png">
    </group>
  </div>
</template>

<script>
import { Group, Cell, XInput, XTextarea, XButton, PopupRadio, AlertModule } from 'vux'
import api from '../api/index.js'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XTextarea,
    XButton,
    PopupRadio,
    AlertModule
  },
  data () {
    return {
      sexOptions: ['男孩', '女孩'],
      groupId: null,
      readonly: true,
      orgOptions: [],
      courseId: null,
      courseOptions: [],
      name: '',
      age: '',
      sex: '男孩',
      clothsize: '',
      shoessize: '',
      momname: '',
      momphone: '',
      dadname: '',
      dadphone: '',
      nursery: '',
      address: '',
      course: '',
      remark: '',
      payList: ['微信', '支付宝', '刷卡', '现金'],
      payMethod: '微信',
      ptype: 1,
      freeType: 1,
      courseList: [],
      courseItem: null,
      code: null
    }
  },
  created () {
    let _querystring = this.parseQueryString(window.location.href)

    if (!_querystring.code) {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx959b4c6d0334b80c&redirect_uri=http%3A%2F%2Fwww.twyxedu.com%2Fsignup&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
    } else {
      this.code = _querystring.code
    }

    this.getOrgList()
  },
  methods: {
    getCourseList (groupId) {
      api.orgCourse({groupId: groupId, isOrder: false}).then(res => {
        if (res.data.array.length > 0) {
          this.readonly = false
        } else {
          this.readonly = true
        }
        this.courseList = res.data.array
        res.data.array.forEach((item, index) => {
          this.courseOptions.push({ value: item.name, key: item.id })
        })
      })
    },
    getOrgList () {
      api.orgPubList().then(res => {
        res.data.array.forEach((item, index) => {
          this.orgOptions.push({ value: item.name, key: item.groupId })
        })
      })
    },

    parseQueryString (url) {
      var arr = []
      var res = {}
      url = url.split('#')[0]
      arr = url.split('?')
      arr.shift()
      var queryStr = arr.join('?')
      if (queryStr.trim().length === 0) {
        return res
      }

      arr = queryStr.split('&')
      for (var i = 0; i < arr.length; i++) {
        var itemArr = arr[i].split('=')
        var name = itemArr.shift()
        var value = itemArr.join('=')
        res[name] = value
      }
      return res
    },
    bindSignup () {
      let that = this
      console.log(that.$wechat)

      if (!this.name && !this.age && !this.clothsize && !this.shoessize && !this.momname && !this.momphone && !this.course) {
        AlertModule.show({
          content: '您好，带星号的信息是必填的哦，请务必认真填写！'
        })
        return false
      } else if (!this.name) {
        AlertModule.show({
          content: '您好，请填写孩子姓名再提交付款！'
        })
        return false
      } else if (!this.age) {
        AlertModule.show({
          content: '您好，请填写年龄再提交付款！'
        })
        return false
      } else if (!this.clothsize) {
        AlertModule.show({
          content: '您好，请填写衣尺码再提交付款！'
        })
        return false
      } else if (!this.shoessize) {
        AlertModule.show({
          content: '您好，请填写鞋尺码再提交付款！'
        })
        return false
      } else if (!this.momname) {
        AlertModule.show({
          content: '您好，请填写妈妈姓名再提交付款！'
        })
        return false
      } else if (!this.momphone) {
        AlertModule.show({
          content: '您好，请填写妈妈手机再提交付款！'
        })
        return false
      } else if (!this.groupId) {
        AlertModule.show({
          content: '您好，请填写选网点再提交付款！'
        })
        return false
      } else if (!this.courseId) {
        AlertModule.show({
          content: '您好，请填写选课程再提交付款！'
        })
        return false
      }

      this.payMethod = this.payList[this.ptype - 1]
      let _data = {
        name: this.name,
        age: this.age,
        sex: this.sex,
        clothsize: this.clothsize,
        shoessize: this.shoessize,
        momname: this.momname,
        momphone: this.momphone,
        dadname: this.dadname,
        dadphone: this.dadphone,
        nursery: this.nursery,
        address: this.address,
        courseId: this.courseId,
        remark: this.remark,
        payMethod: this.payMethod
      }
      api.siginUp(_data).then((res) => {
        if (res.status === 'fail') {
          AlertModule.show({
            content: res.message
          })
        } else {
          if (that.courseId === 7) {
            that.$router.push({ name: 'pianoSucc', query: {type: 'signup'} })
          } else if (that.courseId === 6) {
            that.$router.push({ name: 'choirSucc' })
          } else if (that.payMethod === '微信') {
            api.getOpenId({code: that.code}).then(wxres => {
              console.log(wxres)
              if (wxres.status === 'succ') {
                that.openId = wxres.data.openId
                api.getUnifieOrder({courseStudentId: res.data.id, currentUrl: 'http://www.twyxedu.com/signup', openId: wxres.data.openId}).then(res2 => {
                  console.log(res2)
                  that.$wechat.chooseWXPay({
                    "appId": res2.data.appid,
                    "timestamp": res2.data.timestatm, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                    "nonceStr": res2.data.noceStr, // 支付签名随机串，不长于 32 位
                    "package": 'prepay_id=' + res2.data.prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
                    "signType": 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                    "paySign": res2.data.paySign, // 支付签名
                    success: function (res3) {
                      that.$router.push({ name: 'wepaySucc', query: {n: that.name} })
                    }
                  })
                })
              }
            })
            // that.$router.push({ name: 'wepaySucc', query: {n: that.name} })
          } else {
            that.$router.push({ name: 'otherpaySucc', query: {n: that.name} })
          }
          // if (that.course === '钢琴课') {
          //   that.$router.push({ name: 'pianoSucc', query: {type: 'signup'} })
          // } else if (that.course === '少儿合唱团') {
          //   that.$router.push({ name: 'choirSucc' })
          // } else {
          //   that.$router.push({ name: 'qrcode' })
          // }
        }
      })
    },
    orgOptionChange () {
      this.getCourseList(this.groupId)
    },
    courseOptionChange () {
      this.courseList.forEach((item, index) => {
        if (item.id === this.courseId) {
          this.courseItem = item
          this.freeType = item.feeType
        }
      })
    }
  }
}
</script>

<style>
.signup-wrap {
  background-color: #403431;
  position: relative;
}
.signup-header {
  background-image: linear-gradient(
    -180deg,
    rgba(238, 238, 238, 0) 32%,
    #403431 100%
  );
  position: relative;
  height: 390px;
  overflow: hidden;
}
.bg-top {
  width: 100%;
}
.bg-top-mask {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
}
.signup-bd {
  background: #f1f1f3;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.13);
  border-radius: 16px;
  width: 315px;
  margin: 0 auto;
  position: relative;
  top: -115px;
}
.weui-cell{
  padding: 10px !important;
}
.vux-x-input,
.vux-tap-active {
  width: 270px;
  height: 36px;
  box-sizing: border-box;
  margin:20px auto 0;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background-color: #fff;
}
.vux-tap-active .weui-cell__ft{
  text-align: left;
  width: 100%;
}
.vux-tap-active .weui-cell__ft::after{
  content: " ";
  border: none !important
}
.vux-tap-active .vux-cell-value,
.vux-tap-active .vux-cell-placeholder,
.weui-input{
  font-size: 14px !important;
  color:#886d67 !important;
}
.weui-cells {
  border-radius: 16px;
  background: #f1f1f3 !important;
}
::-webkit-input-placeholder {
  color: #886d67;
}
:-moz-placeholder {
  color: #886d67;
}

::-moz-placeholder {
  color: #886d67;
}
:-ms-input-placeholder {
  color: #886d67;
}
.weui-input,
.weui-textarea{
  font-size: 14px !important;
  background-color: #fff;
}
.weui-cell:before{
  border-top: none !important;
}
.vux-x-textarea{
  width: 270px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  box-sizing: border-box;
  margin: 30px auto 0;
  z-index: 9;
  background-color: #fff;
}
.btn-save{
  background-color:#5BBFD7 !important;
  box-shadow:0 0 24px 0 rgba(0,0,0,0.13);
  border-radius:16px  !important;
  width:254px !important;
  height:48px;
  font-size:16px !important;
  margin: 50px auto 40px;
  z-index: 9;
}
.bg-ft{
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 0;
}
.bg-ft-mask{
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
}

.sh-txt{
  position: relative;
  width: 310px;
  top: -281px;
  margin: 0 auto;
}
.p-name{
  font-size:24px;
  color:#fff ;
  text-align: right;
  text-shadow:0 2px 4px rgba(0,0,0,0.25);
  font-weight: bold;
}
.p-slogan{
  font-size:24px;
  color:#fff;
  letter-spacing:0.69px;
  text-align: right;
  line-height: 56px;
}
.p-keyword{
  font-size:24px;
  color:#fff;
  text-align:right;
}
.p-baoming{
  font-size:24px;
  color:#ce1427;
  text-align:right;
  font-weight: bold;
}
.sut{
  width: 270px;
  margin: 20px auto;
  position: relative;
  padding-right: 50px;
  box-sizing: border-box;
  top: 3px;
}
.su-tip{
  font-size:18px;
  color:#634c49;
}
.require-tip{
  position: absolute;
  right: 0;
  font-size:12px;
  color:#634c49;
  top: 3px;
}
.star{
  width:10px;
  height:9px;
  vertical-align: middle;
}
.su-cell{
  position: relative;
}
.su-cell .star{
  position: absolute;
  left: 8px;
  top: 13px;
}
.vux-x-textarea .weui-textarea-counter{
  font-size: 14px;
}
.vux-popup-dialog{
  left: 10% !important;
  bottom: 45% !important;
  width: 80% !important;
  border-radius: 5px;
}
.vux-popup-dialog .weui-cell{
  padding: 10px 15px;
}
.vux-radio-label{
  color: #000;
}
.payment-tip{
  width: 270px;
  margin: 10px auto;
  font-size: 14px;
  color:#6f5144;
  position: relative;
  z-index: 11;
}
.payment-list{
  width: 270px;
  margin: 10px auto;
  position: relative;
  z-index: 11;
}
.payment-list li{
  width: 48px;
  height: 48px;
  margin-right: 18px;
  list-style: none;
  display: inline-block;
}
.payment-list li:last-child{
  margin-right: 0;
}
.payment-list li img{
  width: 100%;
  height: 100%;
}
.payment-list li span{
  font-size: 14px;
  color:#6f5144;
  text-align: center;
  width: 100%;
  display: block;
}
.payment-list li .pimg{
  display: block;
}
.payment-list li .pimg-active{
  display: none;
}
.payment-list li.active .pimg{
  display: none;
}
.payment-list li.active .pimg-active{
  display: block;
}
</style>
