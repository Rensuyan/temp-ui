<template>
  <el-card class="card-panel-col">
    <div class="card-panel-icon" :style="{color: iconColor}">
      <span :class="[icon]"></span>
    </div>
    <div class="card-panel-title">{{title}}</div>
    <div class="card-panel-value">{{value}}</div>

  </el-card>
</template>

<script>
  export default {
    props: {
      iconColor: {
        type: String,
        default: '#0f85cf'
      },
      title: {
        type: String,
        default: '标题'
      },
      value: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'el-icon-paperclip'
      },
    }
  }
</script>
<style scoped lang="scss">
  //卡片面板组
  /*  .card-panel-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    &>div {
      display: inline-block;
      background: #fff;
    }
  } */
  .card-panel-col {
    min-width: 200px;
    display: inline-block;
    line-height: 30px;
    margin: 2px;
    padding: 10px;
    position: relative;
    background: #fff;
    
    .el-card__body{
      padding: 0;
    }
    .card-panel-icon {
      display: inline-block;
      font-size: 34px;
      line-height: 50px;
      margin-right: 15px;
    }

    .card-panel-title {
      display: inline-block;
      position: absolute;
      top: 5px;
      left: 65px;
      color: #777;
    }

    .card-panel-value {
      display: inline-block;
      position: absolute;
      top: 30px;
      left: 65px;
      font-size: 20px;
    }
  }
</style>
