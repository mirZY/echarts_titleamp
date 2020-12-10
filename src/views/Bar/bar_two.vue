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
      data:20,
    }
  },
  methods: {
      initCharts () {
          
    　　let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor: '#0e202d',
            tooltip: {
                trigger: 'none'
            },
            xAxis: {
                data: ["百分比"],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#e54035'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [{
                name: '最上层立体圆',
                type: 'pictorialBar',
                symbolSize: [300, 45],
                symbolOffset: [0, -20],
                z: 12,
                itemStyle: {
                    normal: {
                        color: '#363F5E'
                    }
                },
                data: [{
                    value: 100,
                    symbolPosition: 'end'
                }]
            }, {
                name: '中间立体圆',
                type: 'pictorialBar',
                symbolSize: [300, 45],
                symbolOffset: [0, -20],
                z: 12,
                itemStyle: {
                    normal: {
                        color: '#2B5B4D'
                    }
                },
                data: [{
                    value: this.data,
                    symbolPosition: 'end'
                }]
            }, {
                name: '最底部立体圆',
                type: 'pictorialBar',
                symbolSize: [300, 45],
                symbolOffset: [0, 20],
                z: 12,
                itemStyle: {
                    normal: {
                        color: '#01CC04'
                    }
                },
                data: [100 - this.data]
            }, {
                //底部立体柱
                stack: '1',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: '#01CC04',
                        opacity: .7
                    }
                },
                label: {
                    show: true,
                    position: "top",
                    distance: 15,
                    color: "#FFFE00",
                    fontSize:50,
                    formatter:'{c}'+'%'
                },
        
                silent: true,
                barWidth: 300,
                barGap: '-100%', // Make series be overlap
                data: [this.data]
            }, {
                //上部立体柱
                stack: '1',
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: '#36405E',
                        opacity: .7
                    }
                },
                silent: true,
                barWidth: 300,
                barGap: '-100%', // Make series be overlap
                data: [100 - this.data]
            }]          
                
    　　  })
      },
   
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

