<template>
  <div class="dashboard-container" style="background: #fff;min-height: calc(93vh - 50px);border-radius: 16px;box-shadow:0px 0px 6px 0px rgba(87,123,202,0.1);">
     <div style="width:100%;height:500px" ref="chart"></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
import  'echarts-liquidfill'
export default {
  name: 'line_four',
  data(){
    return{
    
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor: '#050038',
            title: {
                text: '',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 25,
                    color: 'rgb(97, 142, 205)'
                }
            },
            series: [
                {
                    type: 'liquidFill',
                    radius: '45%',
                    center: ['50%', '50%'],
                    data: [0.5, 0.5, 0.5], // data个数代表波浪数
                    backgroundStyle: {
                        borderWidth: 1,
                        color: 'rgb(255,0,255,0.1)'
                    },
                    label: {
                        normal: {
                            formatter: (0.5 * 100).toFixed(2) + '%',
                            textStyle: {
                                fontSize: 50
                            }
                        }
                    },
                    outline: {
                        show: false,
                    }
                },
                {
                    type: "pie",
                    center: ["50%", "50%"],
                    radius: ["50%", "52%"],
                    hoverAnimation: false,
                    data: [{
                            "name": "",
                            "value": 500,
                            labelLine: {
                                show: false
                            },
                            itemStyle: {
                                color: '#5886f0'
                            },
                            emphasis: {
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    color: '#5886f0'
                                },
                            }
                        },
                        { //画中间的图标
                            name: "",
                            value: 4,
                            labelLine: {
                                show: false
                            },
                            itemStyle: {
                                color: '#ffffff',
                                normal: {
                                    color: "#5886f0",
                                    borderColor: "#5886f0",
                                    borderWidth: 20,
                                    // borderRadius: '100%'
                                },
                            },
                            label: {

                                borderRadius: '100%'
                            },
                            emphasis: {
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    color: '#5886f0'
                                },
                            }

                        },
                        { // 解决圆点过大后续部分显示明显的问题
                            name: "",
                            value: 4,
                            labelLine: {
                                show: false
                            },
                            itemStyle: {
                                color: '#5886f0'
                            },
                            emphasis: {
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    color: '#5886f0'
                                },
                            }
                        },
                        { //画剩余的刻度圆环
                            name: "",
                            value: 88,
                            itemStyle: {
                                color: '#050038'
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            emphasis: {
                                labelLine: {
                                    show: false
                                },
                                itemStyle: {
                                    color: 'rgba(255,255,255,0)'
                                },
                            }
                        }
                    ]
                }

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

