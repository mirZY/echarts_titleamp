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
            grid: {
                left: '0',
                right: '0',
                bottom: '0'
            },
            xAxis: [{
                boundaryGap: false,
                data: new Array(60),
                splitLine: {
                    show: false
                }
            }],
            yAxis: [{
                min: 0,
                max: 20,
                type: 'value',
                splitLine: {
                    show: false
                }
                
            }],
            backgroundColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#d2e6f4' // 0% 处的颜色
                }, {
                    offset: 1, color: '#a5d9ee' // 100% 处的颜色
                }]
            },
            series: [

                // sun
                {
                    type: 'graph',
                    data: (function() {
                        var size = Math.random() * 100 + 80;
                        var x = Math.random() * 160 + 20;
                        var y = Math.random() * 10 + 5;
                        return [
                            {
                                symbolSize: 0,
                                x: 0,
                                y: 0
                            },
                            {
                                symbolSize: 0,
                                x: 200,
                                y: 100
                            },
                            {
                                symbolSize: size + 40,
                                x: x,
                                y: y,
                                itemStyle: {
                                    normal: {
                                        opacity: .3
                                    }
                                },
                            },
                            {
                                symbolSize: size + 20,
                                x: x,
                                y: y,
                                itemStyle: {
                                    normal: {
                                        opacity: .5
                                    }
                                },
                            },
                            {
                                symbolSize: size,
                                x: x,
                                y: y
                            },
                        ]
                    })(),
                    itemStyle: {
                        normal: {
                            color: '#f4f29a'
                        }
                    },
                    z: -1,
                    animationDelay: 2500
                },

                // cloud
                {
                    type: 'graph',
                    data: (function() {
                        var arr = [
                            {
                                symbolSize: 0,
                                x: 0,
                                y: 0
                            },
                            {
                                symbolSize: 0,
                                x: 200,
                                y: 100
                            },
                        ]
                        for(var i = 0; i < 5; i++) {
                            var size = [Math.random() * 60 + 60, 60];
                            var x = Math.random() * 40 + 40 * i;
                            var y = Math.random() * 5 + 5;
                            arr.push({
                                symbolSize: size,
                                x: x,
                                y: y,
                                symbolOffset: [0, -30]
                            })
                            arr.push({
                                symbolSize: size,
                                x: x,
                                y: y,
                                symbolOffset: [-30, 0]
                            })
                            arr.push({
                                symbolSize: size,
                                x: x,
                                y: y,
                                symbolOffset: [30, 0]
                            })
                        }
                        return arr
                    })(),
                    itemStyle: {
                        normal: {
                            color: '#fff',
                        }
                    },
                    symbolSize: [80, 20],
                    z: -1,
                    animationDelay: 1800
                },

                // mountain middle
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#f3f3f3',
                            opacity: 1
                        }
                    },
                    data: this.getMountainBottom(6, .25),
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 600

                },

                // mountain 1
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#f3f3f3',
                            opacity: 1
                        }
                    },
                    data: (function() {
                        window.r = (Math.random() * 10) | 0;
                        var arr = new Array(r).fill(0).concat([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 13, 10, 11, 10, 9, 8, 7, 6, 5]).concat(new Array(40 - r).fill(0));
                        return arr
                    })(),

                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 1400

                },
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#354967',
                            opacity: 1
                        }
                    },
                    data: (function() {
                        var arr = new Array(r).fill(0).concat([5, 6, 7, 8, 9, 8, 9, 8, 9, 7, 6, 9, 7, 8, 9, 8, 7, 6, 5]).concat(new Array(40 - r).fill(0));
                        return arr
                    })(),

                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 1200

                },

                // mountain 2
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#f3f3f3',
                            opacity: 1
                        }
                    },
                    data: (function() {
                        window.r1 = (Math.random() * 10 + 20) | 0;
                        var arr = new Array(r1).fill(0).concat([6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 16, 17, 18, 19, 18, 17, 16, 15, 14, 13, 12, 11, 12, 11, 10, 9, 8, 7]).concat(new Array(30 - r1).fill(0));
                        return arr
                    })(),

                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 1000
                },
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#354967',
                            opacity: 1
                        }
                    },
                    data: (function() {
                        var arr = new Array(r1).fill(0).concat([6, 7, 8, 9, 10, 11, 12, 11, 13, 12, 11, 12, 11, 13, 11, 12, 11, 10.5, 12, 13, 11, 12, 10.5, 10, 9, 11, 10, 9, 8, 7]).concat(new Array(30 - r1).fill(0));
                        return arr
                    })(),

                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 800
                },

                // mountain bottom
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#354967',
                            opacity: 1
                        }
                    },
                    data: this.getMountainBottom(5),
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 600
                },

                // ground
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#479174',
                            opacity: 1
                        }
                    },
                    data: this.getGround(4, 2),

                    smooth: true,
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 400
                },
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#5daf85',
                            opacity: 1
                        }
                    },
                    data: this.getGround(6, 1.5),

                    smooth: true,
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    },
                    animationDelay: 200
                },
                {
                    type: 'line',
                    areaStyle: {
                        normal: {
                            color: '#86c786',
                            opacity: 1
                        }
                    },
                    data: this.getGround(8, 1),
                    smooth: true,
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            width: 0
                        }
                    }
                },
            ],
                    
    　　})
      },
      getGround(a,b){
            var arr = []
            var offset = Math.random() * 30
            for(var i = 0; i < 60; i++) {
                arr.push(Math.sin(i / 2 + offset) / a + b)
            }
            return arr;
      },

      getMountainBottom(h,a){
           var arr = []
            for(var i = 0; i < 60; i++) {
                arr.push([i / (a || 1), Math.random() * 2 + h])
            }
            return arr;
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

