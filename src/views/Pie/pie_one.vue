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
     num1 : 75,
     num2 : 55,
     num3 : 35,
     num4 : 20,
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor: '#24262e',
            series: [
                {
                    type: 'pie',
                    radius: ['31%', '83%'],
                    center: ['50%', '50%'],
                    startAngle: 50,
                    data: [{
                            hoverOffset: 1,
                            value: this.num4,
                            name: '',
                            itemStyle: {
                                color: 'rgba(60, 100, 183, .5)',
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            hoverAnimation: false,
                        },
                        {
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            value: 100 - this.num4,
                            hoverAnimation: false,
                            itemStyle: {
                                color: 'rgba(251, 200, 79, 0)',
                            },
                        }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['37%', '77%'],
                    center: ['50%', '50%'],
                    startAngle: 50,
                    data: [{
                            hoverOffset: 1,
                            value: this.num3,
                            name: '',
                            itemStyle: {
                                color: 'rgba(0, 161, 162, .5)',
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            hoverAnimation: false,
                        },
                        {
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            value: 100 - this.num3,
                            hoverAnimation: false,
                            itemStyle: {
                                color: 'rgba(251, 200, 79, 0)',
                            },
                        }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['43%', '71%'],
                    center: ['50%', '50%'],
                    startAngle: 50,
                    data: [{
                            hoverOffset: 1,
                            value: this.num2,
                            name: '',
                            itemStyle: {
                                color: 'rgba(95, 227, 130, .5)',
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            hoverAnimation: false,
                        },
                        {
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            value: 100 - this.num2,
                            hoverAnimation: false,
                            itemStyle: {
                                color: 'rgba(251, 200, 79, 0)',
                            },
                        }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['49%', '65%'],
                    center: ['50%', '50%'],
                    startAngle: 50,
                    data: [{
                            hoverOffset: 1,
                            value: this.num1,
                            name: '',
                            itemStyle: {
                                color: 'rgba(255, 205, 38, .5)',
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            hoverAnimation: false,
                        },
                        {
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            value: 100 - this.num1,
                            hoverAnimation: false,
                            itemStyle: {
                                color: 'rgba(251, 200, 79, 0)',
                            },
                        }
                    ]
                },
                {
                    type: 'pie',
                    z:1,
                    radius: ['54%', '60%'],
                    center: ['50%', '50%'],
                    data: [
                        {
                            label: {
                                show: false
                            },
                            labelLine: {
                                normal: {
                                    smooth: true,
                                    lineStyle: {
                                        width: 0
                                    }
                                }
                            },
                            value: 100 - this.num1,
                            hoverAnimation: false,
                            itemStyle: {
                                color: 'rgba(255, 255, 255, 1)',
                            },
                        }
                    ]
                },
            ]
        
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

