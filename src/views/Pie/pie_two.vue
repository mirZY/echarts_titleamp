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
        num:0
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);
         let that = this
    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor: '#111',
            title: [{
                text: 'speed',
                x: 'center',
                top: '52%',
                textStyle: {
                    color: '#fdf914',
                    fontSize: 20,
                    fontWeight: '100',
                }
            }, {
                text: '60%',
                x: 'center',
                top: '42%',
                textStyle: {
                    fontSize: '50',
                    color: '#fdf914',
                    fontFamily: 'Lato',
                    foontWeight: '600',
                },
            }],
            polar: {
                radius: ['44%', '50%'],
                center: ['50%', '50%'],
            },
            angleAxis: {
                max: 100,
                show: false,
            },
            radiusAxis: {
                type: 'category',
                show: true,
                axisLabel: {
                    show: false,
                },
                axisLine: {
                    show: false,

                },
                axisTick: {
                    show: false
                },
            },
            series: [
                {
                    name: '',
                    type: 'bar',
                    roundCap: true,
                    barWidth: 60,
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(66, 66, 66, .3)',
                    },
                    data: [60],
                    coordinateSystem: 'polar',

                    itemStyle: {
                        normal: {
                            color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: '#fdf914'
                            }, {
                                offset: 1,
                                color: '#38a700'
                            }]),
                        }
                    }

                }, 
                {
                    type: 'gauge',
                    name: '',
                    radius: '57%',
                    startAngle: '0',
                    endAngle: '-359.99',
                    splitNumber: '200',
                    center: ['50%', '50%'],
                    pointer: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: 95,
                        name: ''
                    }],
                    axisLine: {
                        lineStyle: {
                            width: 20,
                            opacity: 0
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        length: 13,
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 1,
                                y: 0,
                                x2: 0,
                                y2: 0,
                                colorStops: [{
                                    offset: 0,
                                    color: '#111'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(66, 66, 66, 1)',
                                }, {
                                    offset: 1,
                                    color: '#111'
                                }],
                                globalCoord: false
                            },
                            width: 1,
                            type: 'solid',
                        },
                    },
                    axisLabel: {
                        show: false
                    }
                },
                {
                    name: '',
                    type: 'pie',
                    startAngle: 90,
                    radius: ['60%', '62%'],
                    hoverAnimation: false,
                    center: ['50%', '50%'],
                    itemStyle: {
                        normal: {
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(66, 66, 66, .4)',
                            shadowBlur: 10,
                            shadowColor: 'rgba(253, 249, 20, .3)',
                        }
                    },
                    data: [{
                        value: 100,

                    }]
                },
                {
                    name: '',
                    type: 'pie',
                    startAngle: 90,
                    radius: ['62.5%', '64%'],
                    hoverAnimation: false,
                    center: ['50%', '50%'],
                    itemStyle: {
                        normal: {
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(66, 66, 66, .3)',
                            shadowBlur: 10,
                            shadowColor: 'rgba(253, 249, 20, .3)',
                        }
                    },
                    data: [{
                        value: 100,

                    }]
                },
                {
                    name: '',
                    type: 'pie',
                    startAngle: 90,
                    radius: ['64.5%', '65.8%'],
                    hoverAnimation: false,
                    center: ['50%', '50%'],
                    itemStyle: {
                        normal: {
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(66, 66, 66, .2)',
                            shadowBlur: 10,
                            shadowColor: 'rgba(253, 249, 20, .3)',
                        }
                    },
                    data: [{
                        value: 100,

                    }]
                },
                {
                    name: '',
                    type: 'pie',
                    startAngle: 90,
                    radius: ['66.5%', '67.5%'],
                    hoverAnimation: false,
                    center: ['50%', '50%'],
                    itemStyle: {
                        normal: {
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(66, 66, 66, .1)',
                            shadowBlur: 10,
                            shadowColor: 'rgba(253, 249, 20, .3)',
                        }
                    },
                    data: [{
                        value: 100,

                    }]
                },
                {
                    name: "",
                    type: 'custom',
                    coordinateSystem: "none",
                    renderItem: function(params, api) {
                        return {
                            type: 'arc',
                            shape: {
                                cx: api.getWidth() / 2,
                                cy: api.getHeight() / 2,
                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.545,
                                startAngle: (0+that.num) * Math.PI / 180,
                                endAngle: (1+that.num) * Math.PI / 180
                            },
                            style: {
                                stroke: "#fdf914",
                                fill: "transparent",
                                lineWidth: 5
                            },
                            silent: true
                        };
                    },
                    data: [0]
                },
            ]
        
         })
      },
     numb(){
        this.num = this.num+5
        this.initCharts()
    }

     
   
  },
  mounted () {
   let that = this
   setInterval(function() {
        that.numb()
    }, 100);

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

