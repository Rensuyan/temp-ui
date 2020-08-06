<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <panel-col
          value="1000"
          title="这是标题"
          icon="el-icon-cold-drink">
        </panel-col>
        <panel-col
          value="1000"
          title="这是标题"
          icon="el-icon-hot-water">
        </panel-col>
        <panel-col
          value="1000"
          title="这是标题"
          icon="el-icon-potato-strips">
        </panel-col>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <panel-row
          value="1000"
          title="这是标题"
          icon="el-icon-reading"
          icon-color="#89bd1b">
        </panel-row>
        <panel-row
          value="1000"
          title="这是标题"
          icon="el-icon-reading"
          icon-color="#89bd1b">
        </panel-row>
        <panel-row
          value="1000"
          title="这是标题"
          icon="el-icon-reading"
          icon-color="#89bd1b">
        </panel-row>
      </el-col>
    </el-row>

    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <panel-image
          title="好吃的汉堡"
          des="2020-08-06 14:23:00"
          btn-name="操作"
          @cardImageBtnClick="dealEvents">
        </panel-image>
        <panel-image
          title="好吃的汉堡"
          des="2020-08-06 14:23:00"
          btn-name="操作"
          @cardImageBtnClick="dealEvents">
        </panel-image>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import PanelCol from "@/components/CardPanel/PanelCol"
  import PanelRow from "@/components/CardPanel/PanelRow"
  import PanelImage from "@/components/CardPanel/PanelImage"
  export default {
    components: {
      PanelCol,PanelRow,PanelImage
    },
    data() {
      return {

      }
    },
    methods:{
      dealEvents(r) {
        this.$message(r)
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
