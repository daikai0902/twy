<template>
  <div class="">
    <msg :title="msgTitle" :description="msgDesc" :icon="msgIcon" v-if="bindingwxComplete"></msg>
    <!-- <div class="">{{ code }}</div> -->
    <!-- <div class="">{{ userId }}</div> -->
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
      msgIcon: 'success',
      bindingwxComplete: false
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
      let that = this
      axios.post(`https://ykapi.twyxedu.com/bms/rebate/user/openId/add?code=${this.code}&userId=${this.userId}`, '').then(res => {
        if (res.code === 2000) {
          that.bindingwxComplete = true
        } else {
          that.msgTitle = '绑定失败'
          that.msgDesc = '您绑定返利人失败，请重新绑定'
          that.msgIcon = 'warn'
          that.bindingwxComplete = true
        }
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>

