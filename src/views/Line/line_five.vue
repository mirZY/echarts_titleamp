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
      color:['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
    }
  },
  methods: {
      initCharts () {
    　　let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
        backgroundColor: '#B0C4DE',
            title: {
                text: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis',
                padding: [2, 10],
                textStyle: {
                    fontSize: 16
                }
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 3
                    }
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true,
                    lineStyle: {
                        width:3
                    }
                },
                axisLabel: {
                    rotate: 45,
                    fontWeight: "bold",
                    formatter: function(value) {
                        return value.split(" ")[1];
                    }
                },
                data: ["2017-09-11 16:23:34", "2017-09-11 16:28:34", "2017-09-11 16:33:34", "2017-09-11 16:38:34", "2017-09-11 16:43:34", "2017-09-11 16:48:34", "2017-09-11 16:53:34"]
            },
            grid: {
                left: '2%',
                right: '4%',
                bottom: '4%',
                containLabel: true
            },
            visualMap: [{
                
                show: false,
                pieces: [{
                    gt: 0,
                    lte: 100,
                    color: 'red'
                }, {
                    gt: 100,
                    color: 'blue'
                }],
                seriesIndex: 1
            },{
                show: false,
                pieces: [{
                    gt: 0,
                    lte: 80,
                    color: 'yellow'
                }, {
                    gt: 80,
                    color: 'blue'
                }],
                seriesIndex: 0}],
            yAxis: {
                type: 'value',
                name: 'M',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 3,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'red'
                            }, {
                                offset: 1,
                                color: 'blue'
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                },
                axisTick: {
                    lineStyle: {
                        width: 3
                    }
                },
                axisLabel: {
                    fontWeight: "bold",
                }
            },
            series: [{
                type: 'line',
                symbol: 'circle',
                symbolSize: 10,
                smooth: true,
                animationDuration: 2000,
                itemStyle: {
                    normal: {
                        color: 'rgb(103, 99, 99)',
                        shadowBlur: 2,
                        shadowColor: "rgba(0, 0, 0, .12)",
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetX: 4,
                        shadowOffsetY: 10
                    }
                },
                data: [120, 90, 34, 65, 89, 201, 130],
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 100
                    }]
                },
                markPoint: {
                    label: {
                        normal: {
                            show: true,
                            align: 'center',
                            color: 'WHITE',
                            fontWeight: 100,
                            formatter: '{b}'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.4,
                                y: 0.4,
                                r: 0.9,
                                colorStops: [{
                                    offset: 0,
                                    color: '#51e0a2'
                                }, {
                                    offset: 1,
                                    color: 'rgb(33,150,243)'
                                }],
                                globalCoord: false
                            },
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 10,
                        }
                    },
                    data: [{
                        name: '触发',
                        value: 120,
                        coord: [0, 120]
                    }]
                }
            }, {
                type: 'line',
                symbol: 'circle',
                symbolSize: 10,
                smooth: true,
                animationDuration: 2000,
                itemStyle: {
                    normal: {
                        color: 'rgb(103, 99, 99)',
                        shadowBlur: 2,
                        shadowColor: "rgba(0, 0, 0, .12)",
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetX: 4,
                        shadowOffsetY: 10
                    }
                },
                data: [10, 40, 74, 83, 120, 146, 180]
            }, {
                type: 'line',
                symbol: 'circle',
                symbolSize: 10,
                smooth: true,
                animationDuration: 2000,
                itemStyle: {
                    normal: {
                        color: 'rgb(103, 99, 99)',
                        shadowBlur: 2,
                        shadowColor: "rgba(0, 0, 0, .12)",
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                },
                lineStyle: {
                    normal: {
                        color: this.color[5],
                        width: 3,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetX: 4,
                        shadowOffsetY: 10
                    }
                },
                data: [30, 25, 74, 143, 93, 100, 135]
            }]
                     
                
    　　    })
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

