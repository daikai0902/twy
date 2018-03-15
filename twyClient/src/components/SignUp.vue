<template>
  <div class="signup-wrap">
    <div class="signup-header">
      <img class="bg-top" src="../assets/bg_top.jpg">
      <img class="bg-top-mask" src="../assets/bg_top_mask.png">
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
      <x-input  v-model="nursery" placeholder="现就读的幼儿园"></x-input>
      <x-input  v-model="address" placeholder="家庭住址"></x-input>
      <!-- <x-input  v-model="course" placeholder="选课程"></x-input> -->
      <div class="su-cell">
        <img class="star" src="../assets/star.png">
        <popup-radio :options="courseOptions" v-model="course" placeholder="选课程" required></popup-radio>
      </div>
      <x-textarea v-model="remark" :max="50" placeholder="备注"></x-textarea>
      <x-button type="primary" class="btn-save" @click.native="bindSignup">填写完成，提交</x-button>
      <img class="bg-ft" src="../assets/bg_ft.png">
      <img class="bg-ft-mask" src="../assets/bg_ft_mask.png">
    </group>

    <!-- <actionsheet v-model="course" :menus="courseOptions" theme="android" @on-click-menu="click"></actionsheet> -->
  </div>
</template>

<script>
import { Group, Cell, XInput, XTextarea, XButton, PopupRadio, AlertModule, Actionsheet } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XTextarea,
    XButton,
    PopupRadio,
    AlertModule,
    Actionsheet
  },
  data () {
    return {
      sexOptions: ['男孩', '女孩'],
      courseOptions: ['民族舞', '影视表演', '声乐歌舞', '涂鸦创想班', '素描班', '幼儿合唱团', '钢琴班'],
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
      remark: ''
    }
  },
  methods: {
    bindSignup () {
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
      } else if (!this.course) {
        AlertModule.show({
          content: '您好，请填写选课程再提交付款！'
        })
        return false
      }

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
        course: this.course,
        remark: this.remark
      }
      let that = this
      // this.$http.get('localapi/api/signup?' + this.serializeQuery(_data)).then((res) => {
      this.$http.get('http://twyapi.joy-read.com/api/signup?' + this.serializeQuery(_data)).then((res) => {
        if (res.status === 'fail') {
          AlertModule.show({
            content: res.message
          })
        } else {
          if (that.course === '钢琴班') {
            that.$router.push({ name: 'pianoSucc' })
          } else if (that.course === '幼儿合唱团') {
            that.$router.push({ name: 'choirSucc' })
          } else {
            that.$router.push({ name: 'qrcode' })
          }
        }
      })
    },

    serializeQuery (params, prefix) {
      const query = Object.keys(params).map((key) => {
        const value = params[key]

        if (params.constructor === Array) {
          key = `${prefix}[${key}]`
        } else if (params.constructor === Object) {
          key = (prefix ? `${prefix}.${key}` : key)
        }

        if (typeof value === 'object') {
          return this.serializeQuery(value, key)
        } else {
          return `${key}=${encodeURIComponent(value)}`
        }
      })

      return [].concat.apply([], query).join('&')
    }
  }
}
</script>

<style>
.signup-wrap {
  background-color: #bcbeca;
  /* padding-bottom: 67px; */
  position: relative;
}
.signup-header {
  background-image: linear-gradient(
    -180deg,
    rgba(238, 238, 238, 0) 32%,
    #bcbeca 100%
  );
  position: relative;
  height: 191px;
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
  top: -65px;
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
  background-color:#7b0614 !important;
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
  top: -161px;
  margin: 0 auto;
}
.p-name{
  font-size:14px;
  color:#A4897E ;
  text-align: right;
  text-shadow:0 2px 4px rgba(0,0,0,0.25);
  font-weight: bold;
}
.p-slogan{
  font-size:24px;
  color:#A4897E;
  letter-spacing:0.69px;
  text-align: right;
}
.p-keyword{
  font-size:24px;
  color:#A4897E;
  text-align:right;
}
.p-baoming{
  font-size:24px;
  color:#7b0614;
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

</style>
