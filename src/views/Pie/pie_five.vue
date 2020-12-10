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
    
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
           backgroundColor: '#050038',
           tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(200,231,242,0.9)',
                textStyle: {
                    color:'rgba(20,34,54,1)'
                },
                formatter: function(param) {
                    if(param.data.name == 'other') return '';
                    return param.name + '</br>在线率: ' + param.percent + '%';
                }
            },
            // 内圈背景，外圈背景，内圈数据，多余数据，外圈数据
            color: ['rgba(3, 128, 195, 0.1)', 'rgba(38, 66, 89, 1)', 'rgba(110, 111, 255, 1)', 'transparent', 'rgba(61, 208, 241, 1)'],
            series: [{
                    name: '内层背景',
                    type: 'pie',
                    radius: ['60%', '80%'],
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [{
                        value: 0,
                        name: '内层背景'
                    }]
                },
                {
                    name: '外层背景',
                    type: 'pie',
                    radius: ['80%', '90%'],
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    data: [{
                        value: 0,
                        name: '外层背景'
                    }]
                },
                {
                    name: 'IPC',
                    type: 'pie',
                    radius: ['60%', '70%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            padding: [0,0,0,80],
                            align: 'center',
                            width: 70,
                            height: 50,
                            lineHeight: 14, // 控制\n的行高
                            fontSize: 14,
                            formatter: function(param) {
                                return '{a| '+ param.seriesName +'}' + '\n\n{b|'+ param.percent +'% }';
                            },
                            rich: {
                                a : {
                                    fontSize: 14,
                                    color: 'rgba(110, 111, 255, 1)',
                                    lineHeight: 19,

                                },
                                b: {
                                    fontSize: 20,
                                    color: 'rgba(110, 111, 255, 1)',
                                    lineHeight: 23,
                                }
                            }
                        },
                    },
                    data: [{
                            value: 56,
                            name: 'IPC',
                            label: {
                                normal: {
                                    show: false
                                }
                            }
                        },
                        {
                            value: 100,
                            name: 'other'
                        }
                    ]
                },
                {
                    name: '设备',
                    type: 'pie',
                    radius: ['70%', '80%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            padding: [0,80,0,0],
                            align: 'center',
                            width: 70,
                            height: 50,
                            lineHeight: 14, // 控制\n的行高
                            fontSize: 14, 
                            formatter: function(param) {
                                return '{a| '+ param.seriesName +'}' + '\n\n{b|'+ param.percent +'% }';
                            },
                            rich: {
                                a : {
                                    fontSize: 14,
                                    color: 'rgba(61, 208, 241, 1)',
                                    lineHeight: 19,
                                },
                                b: {
                                    fontSize: 20,
                                    color: 'rgba(61, 208, 241, 1)',
                                    lineHeight: 23,
                                }
                            }
                        },
                    },
                    data: [{
                            value: 87,
                            name: '设备',
                            label: {
                                normal: {
                                    show: false
                                }
                            }
                        },
                        {
                            value: 100,
                            name: 'other'
                        },
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

