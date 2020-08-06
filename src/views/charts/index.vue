<template>
  <div class="app-container">
    <el-row :gutter="5">
      <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>统计1</span>
          </div>
          <div class="text item">
            <line-chart height="300px" width="100%" :chart-data="barData" id="chart1"></line-chart>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>统计2</span>
          </div>
          <div class="text item">
            <pie-chart height="300px" width="100%" :chart-data="pieData" id="chart2"></pie-chart>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="5">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>统计3</span>
          </div>
          <div class="text item">
            <line-chart height="300px" width="100%" :chart-data="lineData" id="chart3"></line-chart>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import LineChart from '@/components/Charts/LineMarker'
  import PieChart from '@/components/Charts/PieChart'
  export default {
    components: {
      LineChart,
      PieChart
    },
    data() {
      return {
        lineData: {},
        barData: {},
        pieData: {}
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.lineData = {
          title: '线图',
          type: 'line',
          x: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50',
            '13:55'
          ],
          legend: ['项目1', '项目2'],
          series: [
            [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
            [50, 60, 56, 34, 77, 99, 12, 16, 45, 10, 45, 10]
          ],
          color: ["137, 189, 27", "0, 136, 212"]
        }
        this.barData = {
          title: '柱状图',
          type: 'bar',
          x: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50',
            '13:55'
          ],
          legend: ['项目1', '项目2'],
          series: [
            [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
            [50, 60, 56, 34, 77, 99, 12, 16, 45, 10, 45, 10]
          ],
          color: ["137, 189, 27", "0, 136, 212"]
        }
        this.pieData = {
          title:'饼图',
          legend:['项目1', '项目2', '项目3', '项目4', '项目5'],
          data: [{
            value: 21,
            name: '项目1'
          }, {
            value: 38,
            name: '项目2'
          }, {
            value: 35,
            name: '项目3'
          }, {
            value: 31,
            name: '项目4'
          }, {
            value: 28,
            name: '项目5'
          }]
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
