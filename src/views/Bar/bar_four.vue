<template>
  <div class="dashboard-container" style="background: #fff;min-height: calc(93vh - 50px);border-radius: 16px;box-shadow:0px 0px 6px 0px rgba(87,123,202,0.1);">
     <div style="width:100%;height:500px" ref="chart"></div>
  </div>
</template>

<script>

export default {
  name: 'line_four',
  data(){
    return{
        data:{
           xData: ['花溪区', '南明区', '观山湖区', '钟山区', '六枝特区', '红花岗区', '汇川区', '遵义县', '西秀区', '平坝县', '玉屏县'],
           yData: [0.1, 0.15, 0.18, 0.25, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45]
        }
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: [
                {
                    top: 100,
                    bottom: 101
                },
                {
                    height: 60,
                    bottom: 40
                }
            ],
            xAxis: [{
                type: 'category',
                data: this.data.xData,
                gridIndex: 0,
                axisLabel: {
                    color: '#333'
                },
                axisLine: {
                    lineStyle: {
                        color: '#e7e7e7'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#e7e7e7'
                    }
                },
                zlevel: 2
            }, {
                type: 'category',
                gridIndex: 1,
                axisLine: {
                    show: false
                },
                zlevel: 1
            }],
            yAxis: [{
                type: 'value',
                gridIndex: 0,
                axisLabel: {
                    color: '#333'
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },{
                type: 'value',
                gridIndex: 1,
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }],
            series: [{
                data: this.data.yData,
                type: 'bar',
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#555'
                    }
                },
                itemStyle: {
                    normal: {
                        color: (params) => {
                            let colors = ['#4150d8', '#28bf7e', '#ed7c2f', '#f2a93b', '#f9cf36', '#4a5bdc', '#4cd698', '#f4914e', '#fcb75b', '#ffe180', '#b6c2ff', '#96edc1']
                            return colors[params.dataIndex]
                        }
                    }
                },
                xAxisIndex: 0,
                yAxisIndex: 0
            },{
                data: [{
                    name: '贵阳市',
                    value: 1
                }],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    offset: [0, 10],
                    textStyle: {
                        color: '#777'
                    }
                },
                type: 'bar',
                barGap: 0,
                barWidth: '27.2727%',
                itemStyle: {
                    normal: {
                        color: 'rgba(134,176,237, .5)'
                    }
                },
                xAxisIndex: 1,
                yAxisIndex: 1
            },{
                data: [{
                    name: '六盘水市',
                    value: 1
                }],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    offset: [0, 10],
                    textStyle: {
                        color: '#777'
                    }
                },
                type: 'bar',
                barGap: 0,
                barWidth: '18.1818%',
                itemStyle: {
                    normal: {
                        color: 'rgba(40,191,126, .5)'
                    }
                },
                xAxisIndex: 1,
                yAxisIndex: 1
            },{
                data: [{
                    name: '遵义市',
                    value: 1
                }],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    offset: [0, 10],
                    textStyle: {
                        color: '#777'
                    }
                },
                type: 'bar',
                barGap: 0,
                barWidth: '27.2727%',
                itemStyle: {
                    normal: {
                        color: 'rgba(237,124,47, .5)'
                    }
                },
                xAxisIndex: 1,
                yAxisIndex: 1
            },{
                data: [{
                    name: '安顺市',
                    value: 1
                }],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    offset: [0, 10],
                    textStyle: {
                        color: '#777'
                    }
                },
                type: 'bar',
                barGap: 0,
                barWidth: '18.1818%',
                itemStyle: {
                    normal: {
                        color: 'rgba(242,169,59, .5)'
                    }
                },
                xAxisIndex: 1,
                yAxisIndex: 1
            },{
                data: [{
                    name: '铜仁市',
                    value: 1
                }],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    offset: [0, 10],
                    textStyle: {
                        color: '#777'
                    }
                },
                type: 'bar',
                barCategoryGap: 0,
                barGap: 0,
                barWidth: '9.0909%',
                itemStyle: {
                    normal: {
                        color: 'rgba(249,207,54, .5)'
                    }
                },
                xAxisIndex: 1,
                yAxisIndex: 1
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

