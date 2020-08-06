<template>
  <div :id="id" :class="className" :style="{height:height,width:width}">
  </div>
</template>

<script>
  import echarts from 'echarts'
  import resize from './mixins/resize'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'chart'
      },
      width: {
        type: String,
        default: '200px'
      },
      height: {
        type: String,
        default: '200px'
      },
      chartData: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        chart: null,
        pieData: this.chartData,
      }
    },
    mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id))

        this.chart.setOption({
          title: {
            top: 20,
            text: this.pieData.title,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16,
              color: '#444'
            },
            left: '1%'
          },
          color: ['#0088d4','#89bd1b','#fba606','#68d4d2','#fe8eea'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            top: 20,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: this.pieData.legend,
            right: '4%',
            orient : 'vertical',
            textStyle: {
              fontSize: 12,
              color: '#444'
            }
          },
          calculable: true,
          series: [{
            name: '访问来源',
            type: 'pie',
            radius : ['45%', '60%'],
            center: ['50%', '60%'],
            data: this.pieData.data
          }]
        })
      }
    }
  }
</script>
