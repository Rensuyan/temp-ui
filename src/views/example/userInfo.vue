<template>
  <div class="user-info-container">
    <div class="user-info-text">name: {{ name }}</div>
    <div class="user-info-text">token: {{ token }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    console.log(this.$store.getters["name"])
  },
  computed: {
    ...mapGetters([
      'name','token'
    ])
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
