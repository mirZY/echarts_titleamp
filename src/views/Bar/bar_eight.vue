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
        lineColor: '#406A92',
        labelColor: '#fff',
        fontSize: '30',
        lineWidth: 3,
    }
    
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
        backgroundColor: '#031845',
        grid: {
            left: '0%',
            right: '0%',
            top: '25%',
            bottom: '7%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            textStyle: {
                fontSize: this.fontSize
            }
        },
        legend: {
            show: true,
            x: 'center',
            y: '1%',
            itemWidth: 45,
            itemHeight: 18,
            textStyle: {
                color: '#fff',
                fontSize: this.fontSize
            },
            data:['可靠率','合格率']
        },
        xAxis: [{
            type: 'category',
            name: '',
            nameTextStyle: {
                fontSize: this.fontSize,
                color: this.labelColor,
                lineHeight: 90,
            },
            axisLabel: {
                color: this.labelColor,
                fontSize: this.fontSize,
                margin: 20,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: this.lineColor,
                    width: this.lineWidth
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#197584'
                }
            },
            data: ['城市', '农村']
        }],
        yAxis: [{
            type: 'value',
            name: '',
            nameTextStyle: {
                fontSize: this.fontSize,
                color: this.labelColor
            },
            nameGap: 30,
            axisLabel: {
                show: false,
                formatter: '{value}',
                margin: 20,
                textStyle: {
                    color: this.labelColor,
                    fontSize: this.fontSize,

                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: this.lineColor,
                    width: this.lineWidth
                }
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ["rgba(128,160,176,.1)", "rgba(250,250,250,0)"]
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: this.lineColor
                }
            }
        }],
    series: [{
            "name": "",
            type: 'pictorialBar',
            symbolSize: [50, 25],
            symbolOffset: [-75, -10],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
                show: false
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    fontSize: this.fontSize,
                    color: '#fff'
                }
            },
            color: "#26B2E8",
            data: [99.9, 89.9]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [70, 30],
            symbolOffset: [-75, 15],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#2EA9E5',
                    borderType: 'solid',
                    borderWidth: 3
                }
            },
            data: [99.9, 89.9]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [90, 40],
            symbolOffset: [-75, 20],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#26B2E8',
                    borderType: 'solid',
                    borderWidth: 4
                }
            },
            data: [99.9, 89.9]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 25],
            tooltip: {
                show: false
            },
            symbolOffset: [-75, 10],
            z: 12,
            "color": "#26B2E8",
            "data": [99.9, 89.9]
        },
        {
            type: 'bar',
            name:'合格率',
            "barWidth": "50",
            barGap: '200%',
            barCateGoryGap: '10%',
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    fontSize: this.fontSize,
                    color: '#fff',
                    opacity: 1,
                    formatter: '{c}%',
                    offset: [0, -20]
                }
            },
            itemStyle: {
                normal: {
                    color: '#1E93C6',
                    opacity: 1
                },
            },
            data: [99.9, 89.9]
        },
        {
            "name": "",
            type: 'pictorialBar',
            symbolSize: [50, 25],
            symbolOffset: [75, -10],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
                show: false
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    fontSize: this.fontSize,
                    color: '#fff'
                }
            },
            color: "#20D3AB",
            data: [99.9, 99.9]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [70, 30],
            symbolOffset: [75, 15],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#20D3AB',
                    borderType: 'solid',
                    borderWidth: 3
                }
            },
            data: [99.9, 99.9]
        },
        {
            name: '',
            type: 'pictorialBar',
            tooltip: {
                show: false
            },
            symbolSize: [90, 40],
            symbolOffset: [75, 20],
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#20D3AB',
                    borderType: 'solid',
                    borderWidth: 4
                }
            },
            data: [99.9, 99.9]
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [50, 25],
            tooltip: {
                show: false
            },
            symbolOffset: [75, 10],
            z: 12,
            "color": "#20D3AB",
            "data": [99.9, 99.9]
        },
        {
            type: 'bar',
            name:'可靠率',
            "barWidth": "50",
            barGap: '200%',
            barCateGoryGap: '10%',
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    fontSize: this.fontSize,
                    color: '#fff',
                    formatter: '{c}%',
                    offset: [0, -20]
                }
            },
            itemStyle: {
                normal: {
                    color: '#1AAE96',
                    opacity: 1
                },
            },
            data: [99.9, 99.9]
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

