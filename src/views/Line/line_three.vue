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
          backgroundColor: '#7A72D6',
    tooltip: {
        trigger: 'axis',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        left: '50',
        right: '50',
        top: '40',
        bottom: '12%',
    },
    xAxis: [{
        type: 'category',
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
    }],
    yAxis: [{
        show: false,
    }],
    series: [{
            name: 'TIT',
            type: 'line',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 166, 0, 1)',
                    shadowBlur: 2,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                    type: 'dashed',
                }
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                borderColor: "#fff",
                borderWidth: 2,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            
            data: [1020, 1682, 1091, 2000, 3090, 2230, 1910, 1682, 1791, 3000, 4090, 2220],

        },
        {
            z: 1,
            type: 'pictorialBar',
            name: 'TIT',
            tooltip: {
                show: false
            },
            animation: false,
            hoverAnimation: false,
            data: [3220, 3682, 2791, 3000, 4090, 3230, 2910, 4682, 2791, 3000, 4090, 2220],
            symbol: 'path://d="M936.1,773.6l-10-160.3h20Zm0-264.1-.8,103.8-30.4-42.6s17.4,11.8,8.9-19c0,0,18.8,13.9,8.9-16.8,0-.1,9.6,4.8,13.4-25.4Zm1.7.1L937,613.3l31.1-42.1s-17.6,11.5-8.6-19.1c0,0-19,13.6-8.7-17.1C950.8,535,941.1,539.8,937.8,509.6Zm.5,107.8h-4.4l2.2,132.8Z"',
            barWidth: 50,
            itemStyle: {
                normal: {
                    barBorderRadius: 50,
                    color: new this.$echarts.graphic.LinearGradient(
                        0, 0.25, 0.75, 1,
                        [{
                                offset: 0,
                                color: '#FFDF75'
                            },
                            {
                                offset: 1,
                                color: '#f00'
                            },
                        ]
                    ),
                    // opacity: .7,
                    label: {
                        show: false
                    },
                    shadowColor: '#2D258B',
                    shadowBlur: 0,
                    shadowOffsetY: 1,
                    shadowOffsetX: 1,
                }
            },
        },
    ]
  　　});
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

