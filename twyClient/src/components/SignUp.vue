<template>
  <div class="signup-wrap">
    <div class="signup-header">
      <img class="bg-top" src="../assets/bg_top.png">
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
      <x-input  v-model="name" placeholder="孩子姓名"></x-input>
      <x-input  v-model="age" placeholder="年龄" type="number"></x-input>
      <x-input  v-model="sex" placeholder="性别"></x-input>
      <x-input  v-model="clothsize" placeholder="衣尺码" type="number"></x-input>
      <x-input  v-model="shoessize" placeholder="鞋尺码" type="number"></x-input>
      <x-input  v-model="momname" placeholder="妈妈姓名"></x-input>
      <x-input  v-model="momphone" placeholder="手机" type="tel"></x-input>
      <x-input  v-model="dadname" placeholder="爸爸姓名"></x-input>
      <x-input  v-model="dadphone" placeholder="手机" type="tel"></x-input>
      <x-input  v-model="nursery" placeholder="现就读的幼儿园"></x-input>
      <x-input  v-model="address" placeholder="家庭住址"></x-input>
      <x-input  v-model="course" placeholder="选课程"></x-input>
      <x-textarea v-model="remark" :max="50" placeholder="备注"></x-textarea>
      <x-button type="primary" class="btn-save" @click.native="bindSignup">填写完成，立即付款</x-button>
      <img class="bg-ft" src="../assets/bg_ft.png">
      <img class="bg-ft-mask" src="../assets/bg_ft_mask.png">
    </group>
  </div>
</template>

<script>
import { Group, Cell, XInput, XTextarea, XButton } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XInput,
    XTextarea,
    XButton
  },
  data () {
    return {
      name: null,
      age: null,
      sex: null,
      clothsize: null,
      shoessize: null,
      momname: null,
      momphone: null,
      dadname: null,
      dadphone: null,
      nursery: null,
      address: null,
      course: null,
      remark: null

    }
  },
  methods: {
    bindSignup () {
      this.$http.post('http://twyapi.joy-read.com/api/signup', {
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
      }).then((res) => {
        console.log(res)
      })
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
.vux-x-input {
  width: 270px;
  height: 36px;
  box-sizing: border-box;
  margin: 30px auto 0;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
}
.weui-cells {
  border-radius: 16px;
  background: #f1f1f3;
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
}
.weui-cell:before{
  border-top: none;
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
  margin: 30px auto;
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
.require-tip img{
  width:10px;
  height:9px;
  vertical-align: middle;
}

</style>
