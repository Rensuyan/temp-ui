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
          return {
            title: "标题",
            x: [],
            series: []
          }
        }
      }
    },
    data() {
      return {
        chart: null,
        lineData: this.chartData,
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

        let series = [];
        for (let i = 0; i < this.lineData.series.length; i++) {
          series.push({
            name: this.lineData.legend[i],
            type: this.lineData.type ? this.lineData.type : "line",
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            barWidth: 10,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba('+ this.lineData.color[i] +', 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba('+ this.lineData.color[i] +', 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb('+ this.lineData.color[i] +')',
                borderColor: 'rgba('+ this.lineData.color[i] +',0.27)',
                borderWidth: 12

              }
            },
            data: this.lineData.series[i]
          })
        }

        this.chart.setOption({
          title: {
            top: 20,
            text: this.lineData.title,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 16,
              color: '#444'
            },
            left: '1%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              lineStyle: {
                color: '#57617B'
              }
            }
          },
          legend: {
            top: 20,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: this.lineData.legend,
            right: '4%',
            textStyle: {
              fontSize: 12,
              color: '#444'
            }
          },
          grid: {
            top: 100,
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: this.lineData.type == "bar" ? true : false,
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            data: this.lineData.x
          }],
          yAxis: [{
            type: 'value',
            name: '(%)',
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#57617B'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14
              }
            },
            splitLine: {
              lineStyle: {
                color: '#e9e9e9'
              }
            }
          }],
          series: series
        })
      }
    }
  }
</script>
