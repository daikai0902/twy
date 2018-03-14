<template>
  <div class="signup-wrap">
    <div class="signup-header">
      <img class="bg-top" src="../assets/bg_top.png">
      <img class="bg-top-mask" src="../assets/bg_top_mask.png">
    </div>
    <group class="signup-bd">
      <x-input  v-model="value" placeholder="孩子姓名"></x-input>
      <x-input  v-model="value" placeholder="年龄" type="number"></x-input>
      <x-input  v-model="value" placeholder="性别"></x-input>
      <x-input  v-model="value" placeholder="衣尺码" type="number"></x-input>
      <x-input  v-model="value" placeholder="鞋尺码" type="number"></x-input>
      <x-input  v-model="value" placeholder="妈妈姓名"></x-input>
      <x-input  v-model="value" placeholder="手机" type="tel"></x-input>
      <x-input  v-model="value" placeholder="爸爸姓名"></x-input>
      <x-input  v-model="value" placeholder="手机" type="tel"></x-input>
      <x-input  v-model="value" placeholder="现就读的幼儿园"></x-input>
      <x-input  v-model="value" placeholder="家庭住址"></x-input>
      <x-input  v-model="value" placeholder="选课程"></x-input>
      <x-textarea :max="50" placeholder="备注"></x-textarea>
      <x-button type="primary" class="btn-save">填写完成，立即付款</x-button>
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
      value: null
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
  background: #fff;
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
</style>
