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
        title: {
            text: '波动图'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['2018', '2019','2020']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            id:2,
            show:false,
            boundaryGap: false,//坐标轴两边留白
            data: ['12201', '12202', '12203','12204','12301','12302','12303','12304','12401', '12402', '12403','12404'],
        },
        yAxis: [
            {
                id:1,
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine:{
                    onZeroAxisIndex:2,
                    show: false
                },
                axisTick:{
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#E5E9ED',
                    // 	opacity:0.1
                    }
                }

            }
        ],
        series: [
            {
                name: '2020',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#ffb0f1',
                        lineStyle: {
                            color:'#ffb0f1',
                            width:1
                        },
                        areaStyle: '#ffb0f1',
                    }
                },
                data: [19, 15,17,18,16,17,18,17,17,16,18,16]
            },
            {
                name: '2020',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#ffb0f1',
                        lineStyle: {
                            color: '#ffb0f1',
                            width:1
                        },
                        areaStyle: '#ffb0f1'
                    }
                },
                data: [-19, -15,-17,-18,-16,-17,-18,-17,-17,-16,-18,-16]
            },
            {
                name: '2019',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#fb73e3',
                        lineStyle: {
                            color:'#fb73e3',
                            width:1
                        },
                        areaStyle:  '#fb73e3',
                    }
                },
                data:[14, 10, 12, 13, 11, 12, 13, 12, 12, 11, 13, 11]
            },
            {
                name: '2019',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#fb73e3',
                        lineStyle: {
                            color: '#fb73e3',
                            width:1
                        },
                        areaStyle: '#fb73e3'
                    }
                },
                data: [-14, -10, -12, -13, -11, -12, -13, -12, -12, -11, -13, -11]
            },
            {
                name: '2018',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#fb5df5',
                        lineStyle: {
                            color:'#fb5df5',
                            width:1
                        },
                        areaStyle: '#fb5df5',
                    }
                },
                data:  [3, 4, 5, 5, 7, 8, 7, 5, 8, 7, 7, 6]
            },
            {
                name: '2018',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#fb5df5',
                        lineStyle: {
                            color: '#fb5df5',
                            width:1
                        },
                        areaStyle: '#fb5df5',
                    }
                },
                data: [-3, -4, -5, -5, -7, -8, -7, -5, -8, -7, -7, -6]
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

