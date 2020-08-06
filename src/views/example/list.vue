<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">

        <list-bar v-for="item in list" :key="item.title" :params="item"></list-bar>

      </el-col>
    </el-row>

  </div>
</template>

<script>
  import ListBar from "@/components/List/ListBar"
  export default {
    components: {
      ListBar
    },
    data() {
      return {
        list: [{
          title: "标题1",
          texts: ["这是一条描述，做详细说明", "2020-08-06 12:00:00"],
          btns: ["按钮1", "按钮2"],
          img: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        }, {
          title: "标题2",
          texts: ["这是一条描述，做详细说明", "2020-08-06 12:00:00"],
          btns: ["btn1", "btn2"],
          img: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
        }]
      }
    },
    methods: {

    }
  }
</script>
<style scoped lang="scss">

</style>
