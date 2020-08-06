<template>

  <el-card class="card-panel-row">
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
  .card-panel-row {
    position: relative;
    display: inline-block;
    margin: 2px;
    min-width: 200px;
    line-height: 30px;
    padding: 5px 10px;
    background: #fff;

    .el-card__body{
      padding: 0;
    }
    
    .card-panel-icon {
      margin-right: 15px;
      display: inline-block;
      vertical-align: middle;
      font-size: 30px;
      line-height: 40px;
    }

    .card-panel-title {
      display: inline-block;
      margin-right: 5px;
      left: 45px;
      color: #777;
    }

    .card-panel-value {
      display: inline-block;
      vertical-align: middle;
      font-size: 20px;
    }
  }
</style>
