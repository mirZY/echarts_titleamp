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
        angle:0,
        value :55.33
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);
        let that = this

    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor:"#061740",
            title: {
                    text: '{a|'+ that.value +'}{c|%}',
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        rich:{
                            a: {
                                fontSize: 48,
                                color: '#29EEF3'
                            },
                            
                            c: {
                                fontSize: 20,
                                color: '#ffffff',
                                // padding: [5,0]
                            }
                        }
                    }
                },
                series: [ {
                        name: "ring5",
                        type: 'custom',
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                                    startAngle: (0+that.angle) * Math.PI / 180,
                                    endAngle: (90+that.angle) * Math.PI / 180
                                },
                                style: {
                                    stroke: "#0CD3DB",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    }, {
                        name: "ring5",
                        type: 'custom',
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                                    startAngle: (180+that.angle) * Math.PI / 180,
                                    endAngle: (270+that.angle) * Math.PI / 180
                                },
                                style: {
                                    stroke: "#0CD3DB",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    }, {
                        name: "ring5",
                        type: 'custom',
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                                    startAngle: (270+-that.angle) * Math.PI / 180,
                                    endAngle: (40+-that.angle) * Math.PI / 180
                                },
                                style: {
                                    stroke: "#0CD3DB",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    }, {
                        name: "ring5",
                        type: 'custom',
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            return {
                                type: 'arc',
                                shape: {
                                    cx: api.getWidth() / 2,
                                    cy: api.getHeight() / 2,
                                    r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                                    startAngle: (90+-that.angle) * Math.PI / 180,
                                    endAngle: (220+-that.angle) * Math.PI / 180
                                },
                                style: {
                                    stroke: "#0CD3DB",
                                    fill: "transparent",
                                    lineWidth: 1.5
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    }, {
                        name: "ring5",
                        type: 'custom',
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            let x0 = api.getWidth() / 2;
                            let y0 = api.getHeight() / 2;
                            let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                            let point = that.getCirlPoint(x0, y0, r, (90+-that.angle))
                            return {
                                type: 'circle',
                                shape: {
                                    cx: point.x,
                                    cy: point.y,
                                    r: 4
                                },
                                style: {
                                    stroke: "#0CD3DB",//粉
                                    fill: "#0CD3DB"
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    }, {
                        name: "ring5",  //绿点
                        type: 'custom',
                        coordinateSystem: "none",
                        renderItem: function(params, api) {
                            let x0 = api.getWidth() / 2;
                            let y0 = api.getHeight() / 2;
                            let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                            let point = that.getCirlPoint(x0, y0, r, (270+-that.angle))
                            return {
                                type: 'circle',
                                shape: {
                                    cx: point.x,
                                    cy: point.y,
                                    r: 4
                                },
                                style: {
                                    stroke: "#0CD3DB",      //绿
                                    fill: "#0CD3DB"
                                },
                                silent: true
                            };
                        },
                        data: [0]
                    }, {
                        name: '吃猪肉频率',
                        type: 'pie',
                        radius: ['58%', '45%'],
                        silent: true,
                        clockwise: true,
                        startAngle: 90,
                        z: 0,
                        zlevel: 0,
                        label: {
                            normal: {
                                position: "center",

                            }
                        },
                    data: [{
                            value: that.value,
                            name: "",
                            itemStyle: {
                                normal: {
                                    color: { // 完成的圆环的颜色
                                        colorStops: [{
                                            offset: 0,
                                            color: '#4FADFD' // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color: '#28E8FA' // 100% 处的颜色
                                        }]
                                    },
                                }
                            }
                        },
                        {
                            value: 100-that.value,
                            name: "",
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "#173164"
                                }
                            }
                        }
                    ]
                },
        
                {
                    name: "",
                    type: "gauge",
                    radius: "58%",
                    center: ['50%', '50%'],
                    startAngle: 0,
                    endAngle: 359.9,
                    splitNumber: 8,
                    hoverAnimation: true,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: 60,
                        lineStyle: {
                            width: 5,
                            color: "#061740"
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: 0,
                        name: ""
                    }]
                },
                
            ]
            
            })
      },
      getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
            x: x1,
            y: y1
        }
    },

     draw(){
        this.angle = this.angle+3
        // myChart.setOption(option, true)
        this.initCharts()

    }

     
   
  },
  mounted () {
    let that = this
    setInterval(function() {
        //用setInterval做动画感觉有问题
        that.angle = that.angle+3
        // myChart.setOption(option, true)
        that.initCharts()
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

