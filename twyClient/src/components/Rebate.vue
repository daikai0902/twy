<template>
  <div class="">
    <div class="">{{ code }}</div>
    <div class="">{{ userId }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: null,
      userId: null
    }
  },
  created () {
    console.log(this.$route)
    let _qString = this.$route.query
    this.code = _qString.code
    this.userId = _qString.state
  },
  methods: {
  }
}
</script>

