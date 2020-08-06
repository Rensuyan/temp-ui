<template>
  <div class="list-bar-item" @click="itemClick">
    <div class="list-image" v-if="params.img">
      <el-image fit="cover" :src="params.img" alt=" "></el-image>
    </div>

    <div class="list-btns">
      <el-button type="text" class="button" v-for="item in params.btns" :key="item">{{item}}</el-button>
    </div>

    <div>
      <div class="list-title">{{params.title}}</div>
      <div class="list-des" v-for="item in params.texts" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      params: {
        type: Object,
        default: {}
      }
    },
    methods: {
      itemClick() {
        this.$emit("itemClick", this.params)
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-bar-item {
    position: relative;
    padding: 5px 10px;
    background: #fff;

    &+.list-bar-item {
      margin-top: 5px;
    }

    &>div {
      display: inline-block;
      vertical-align: middle;
    }

    .list-image {
      margin-right: 10px;
      width: 35px;
      height: 35px;
      overflow: hidden;
      border-radius: 50%;

      .el-image {
        width: 100%;
        height: 100%;
      }
    }

    .list-title {
      display: inline-block;
      margin: 5px 0;
      font-weight: 500;
      vertical-align: middle;
    }

    .list-btns {
      position: absolute;
      right: 10px;

      .el-button {
        padding: 2px;
        background: rgba(64, 158, 255, 0.2);
      }

      .el-button+.el-button {
        margin-left: 5px;
      }
    }

    .list-des {
      color: #777;
    }
  }
</style>
