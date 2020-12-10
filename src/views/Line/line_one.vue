<template>
  <div class="dashboard-container" style="background: #fff;min-height: calc(93vh - 50px);border-radius: 16px;box-shadow:0px 0px 6px 0px rgba(87,123,202,0.1);">
     <div style="width:100%;height:500px" ref="chart"></div>
  </div>
</template>

<script>

export default {
  name: 'line_one',
  data(){
    return{
      
    }
  },
  methods: {
      initCharts () {
  　　let myChart = this.$echarts.init(this.$refs.chart);

  　　// 绘制图表
  　　myChart.setOption({
          backgroundColor: '#080b30',
          title: {
            //   text: '折线图（一）',
              textStyle: {
                  align: 'center',
                  color: '#fff',
                  fontSize: 20,
              },
              top: '5%',
              left: 'center',
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  lineStyle: {
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0,
                              color: 'rgba(0, 255, 233,0)'
                          }, {
                              offset: 0.5,
                              color: 'rgba(255, 255, 255,1)',
                          }, {
                              offset: 1,
                              color: 'rgba(0, 255, 233,0)'
                          }],
                          global: false
                      }
                  },
              },
          },
          grid: {
              top: '15%',
              left: '5%',
              right: '5%',
              bottom: '15%',
          },
          xAxis: [{
              type: 'category',
              axisLine: {
                  show: true
              },
              splitArea: {
                  // show: true,
                  color: '#f00',
                  lineStyle: {
                      color: '#f00'
                  },
              },
              axisLabel: {
                  color: '#fff'
              },
              splitLine: {
                  show: false
              },
              boundaryGap: false,
              data: ['A', 'B', 'C', 'D', 'E', 'F'],

          }],

          yAxis: [{
              type: 'value',
              min: 0,
              // max: 140,
              splitNumber: 4,
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: 'rgba(255,255,255,0.1)'
                  }
              },
              axisLine: {
                  show: false,
              },
              axisLabel: {
                  show: false,
                  margin: 20,
                  textStyle: {
                      color: '#d1e6eb',

                  },
              },
              axisTick: {
                  show: false,
              },
          }],
          series: [{
                  name: '注册总量',
                  type: 'line',
                  // smooth: true, //是否平滑
                  showAllSymbol: true,
                  // symbol: 'image://./static/images/guang-circle.png',
                  symbol: 'circle',
                  symbolSize: 25,
                  lineStyle: {
                      normal: {
                          color: "#6c50f3",
                          shadowColor: 'rgba(0, 0, 0, .3)',
                          shadowBlur: 0,
                          shadowOffsetY: 5,
                          shadowOffsetX: 5,
                      },
                  },
                  label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                          color: '#6c50f3',
                      }
                  },
                  itemStyle: {
                      color: "#6c50f3",
                      borderColor: "#fff",
                      borderWidth: 3,
                      shadowColor: 'rgba(0, 0, 0, .3)',
                      shadowBlur: 0,
                      shadowOffsetY: 2,
                      shadowOffsetX: 2,
                  },
                  tooltip: {
                      show: false
                  },
                  areaStyle: {
                      normal: {
                          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(108,80,243,0.3)'
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(108,80,243,0)'
                              }
                          ], false),
                          shadowColor: 'rgba(108,80,243, 0.9)',
                          shadowBlur: 20
                      }
                  },
                  data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
              },
              {
                  name: '注册总量',
                  type: 'line',
                  // smooth: true, //是否平滑
                  showAllSymbol: true,
                  // symbol: 'image://./static/images/guang-circle.png',
                  symbol: 'circle',
                  symbolSize: 25,
                  lineStyle: {
                      normal: {
                          color: "#00ca95",
                          shadowColor: 'rgba(0, 0, 0, .3)',
                          shadowBlur: 0,
                          shadowOffsetY: 5,
                          shadowOffsetX: 5,
                      },
                  },
                  label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                          color: '#00ca95',
                      }
                  },

                  itemStyle: {
                      color: "#00ca95",
                      borderColor: "#fff",
                      borderWidth: 3,
                      shadowColor: 'rgba(0, 0, 0, .3)',
                      shadowBlur: 0,
                      shadowOffsetY: 2,
                      shadowOffsetX: 2,
                  },
                  tooltip: {
                      show: false
                  },
                  areaStyle: {
                      normal: {
                          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(0,202,149,0.3)'
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(0,202,149,0)'
                              }
                          ], false),
                          shadowColor: 'rgba(0,202,149, 0.9)',
                          shadowBlur: 20
                      }
                  },
                  data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
              },
          ]
  　　});
　　}
   
  },
  mounted () {
　　this.initCharts();
　}
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

<style lang="less" scoped>
  .Second{
      margin-left: 28px;
      margin-top: 40px;
      .demonstration{
          font-size:14px;
          font-weight:400;
          color:rgba(50,58,71,1);
      }
  }
  .dialogHeader{
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      color: rgba(50,58,71,1);
  }
  .dialogSecond{
    margin-top:25px;
    div:first-child{
        font-weight: 600;
        color: rgba(50,58,71,1);
    }
    div:nth-child(2){
      margin-top:5px;
      color:#6E747E;
      font-size: 13px;
    }
  }
 
    
</style>

<style lang="less" scoped>
  @media only screen and (max-width: 500px) {
    .Second{
        margin-left: 28px;
        margin-top: 20px;
        .demonstration{
            font-size:14px;
            font-weight:400;
            color:rgba(50,58,71,1);
        }
    }
  }
 
</style>

