<template>
  <el-card class="panel-image">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    <div style="padding: 14px;">
      <span>{{title}}</span>
      <div class="bottom">
        <time class="des">{{des}}</time>
        <el-button type="text" class="button" @click="btnClick">{{btnName}}</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '标题'
      },
      des: {
        type: String,
        default: ''
      },
      btnName: {
        type: String,
        default: '操作按钮'
      },
    },
    data() {
      return {

      }
    },
    methods:{
      btnClick() {
        this.$emit('cardImageBtnClick', "点击了")
      }
    }
  }
</script>

<style scoped lang="scss">
  .panel-image {
    min-width: 200px;
    max-width: 300px;
    margin: 2px;
    display: inline-block;

    .des {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }
    .image {
      width: 100%;
      display: block;
    }
  }
</style>
