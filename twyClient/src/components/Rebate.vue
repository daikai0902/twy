<template>
  <div class="">
    <msg :title="msgTitle" :description="msgDesc" :icon="msgIcon"></msg>
    <div class="">{{ code }}</div>
    <div class="">{{ userId }}</div>
  </div>
</template>

<script>
import axios from 'axios'
import { Msg, Divider } from 'vux'
export default {
  components: { Msg, Divider },
  data () {
    return {
      code: null,
      userId: null,
      msgTitle: '绑定成功',
      msgDesc: '您绑定返利人成功',
      msgIcon: 'success'
    }
  },
  created () {
    let _qString = this.$route.query
    this.code = _qString.code
    this.userId = _qString.state
    this.bindingwxRebate()
  },
  methods: {
    bindingwxRebate () {
      axios.post(`https://ykapi.twyxedu.com/bms/rebate/user/openId/add?code=${this.code}&userId=${this.userId}`, '').then(res => {
        console.log(res)
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>

