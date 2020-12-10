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
         xData : ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
         thisYearData : [11, 38, 23, 39, 66, 66, 79],
         timeLineData : [1],
         legend:['2017', '2018'],
         background : "#0e2147", //背景 
         textColor : "#fff",
         lineColor:"rgba(255,255,255,0.2)",
         colors : [{
                borderColor: "rgba(227,161,96,1)",
                start: "rgba(227,161,96,0.8)",
                end: "rgba(227,161,96,0.3)"
            },
            {
                borderColor: "rgba(0,222,255,1)",
                start: "rgba(0,222,255,0.3)",
                end: "rgba(0,222,255,0.8)"
            },
        ],
        borderData : [],
        scale : 2,
    }
  },
  methods: {
      initCharts () {
         this.borderData = this.xData.map(item => {
            return this.scale;
        });
    　　 let myChart = this.$echarts.init(this.$refs.chart);
        let that = this
    　　// 绘制图表
    　　myChart.setOption({
             baseOption: {
                backgroundColor: "#0e2147",
                timeline: {
                    show: false,
                    top: 0,
                    data: [1]
                },
                legend: {
                    top: '5%',
                    right: '5%',
                    itemWidth: 20,
                    itemHeight: 5,
                    // itemGap: 343,
                    icon: 'horizontal',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20,
                    },
                    data: ['2017', '2018']
                },
                grid: [{
                    show: false,
                    left: '5%',
                    top: '10%',
                    bottom: '8%',
                    containLabel: true,
                    width: '37%'
                }, {
                    show: false,
                    left: '51%',
                    top: '10%',
                    bottom: '8%',
                    width: '0%'
                }, {
                    show: false,
                    right: '2%',
                    top: '10%',
                    bottom: '8%',
                    containLabel: true,
                    width: '37%'
                }],
                xAxis: [{
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        color: this.textColor
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:this.lineColor
                        }
                    },
                }, {
                    gridIndex: 1,
                    show: false
                }, {
                    gridIndex: 2,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        color: this.textColor
                    },
                    splitLine:{
                        show: true,
                        lineStyle:{
                            color:this.lineColor
                        }
                    },
                }],
                yAxis: [{
                    type: 'category',
                    inverse: true,
                    position: 'right',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:this.lineColor
                        }
                    },
                
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    data: this.xData
                }, {
                    gridIndex: 1,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        padding:[30,0,0,0],
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 20
                        },
                        align: "center"

                    },
                    data: this.xData.map(function(value) {
                        return {
                            value: value,
                            textStyle: {
                                align: 'center'
                            }
                        }
                    })
                }, {
                    gridIndex: 2,
                    type: 'category',
                    inverse: true,
                    position: 'left',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:this.lineColor
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false

                    },
                    data: this.xData
                }],
                series: [{
                    name: "2017",
                    type: "bar",
                    barWidth: 25,
                    stack: "1",
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: this.colors[0].start
                                },
                                {
                                    offset: 1,
                                    color: this.colors[0].end
                                }
                            ]),
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data:  [3, 20, 62, 34, 55, 65, 33],
                    animationEasing: "elasticOut"
                },
                {
                    name: "2017",
                    type: "bar",
                    barWidth: 25,
                    stack: "1",
                    itemStyle: {
                        normal: {
                            color: this.colors[0].borderColor

                        }
                    },
                    data: this.borderData
                },
                {
                    name: "2018",
                    type: "bar",
                    stack: "2",
                    barWidth: 25,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: this.colors[1].start
                                },
                                {
                                    offset: 1,
                                    color: this.colors[1].end
                                }
                            ]),
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data:[11, 38, 23, 39, 66, 66, 79],
                    animationEasing: "elasticOut"
                },
                {
                    name: "2018",
                    type: "bar",
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    barWidth: 25,
                    stack: "2",
                    itemStyle: {
                        normal: {
                            color: this.colors[1].borderColor

                        }
                    },
                    data: this.borderData
                },]

            },
             
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

