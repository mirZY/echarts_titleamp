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
     attackSourcesData:[70, 34, 60, 70, 34, 70, 34, 34],
     attackSourcesName:['绕过攻击', '网络爬虫', '其他有害程序事件', '远程代码执行', '信息泄露', 'HTTP请求攻击', '其他注入攻击', '后门攻击'],
     attackSourcesColor:['#f36c6c', '#e6cf4e', '#20d180', '#0093ff', '#1089E7', '#F57474', '#56D0E3', '#1089E7', '#F57474', '#1089E7', '#F57474', '#F57474']
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);
        let that = this

    　　// 绘制图表
    　　myChart.setOption({
            tooltip: {
                show: true,
                // backgroundColor: 'rgba(3,169,244, 0.5)',//背景颜色（此时为默认色）
                textStyle: {
                    fontSize: 16
                },
                //trigger: 'axis',
                //axisPointer: {
                //    type: 'shadow'
                //}
            },
            legend: {
                show: false
            },
            grid: {
                left: 160,
            },
            dataZoom: [{
                type: 'slider',
                yAxisIndex: 0,
                zoomLock: true,
                width: 10,
                handleSize: 0,
                showDetail: false,
                start: 0,
                end: 50,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle: {
                    color: "#d3dee5",
                },
                borderColor: "#90979c"
            }, {
                type: 'inside',
                id: 'insideY',
                yAxisIndex: 0,
                start: 0,
                end: 50,
                zoomOnMouseWheel: false,
                moveOnMouseMove: true,
                moveOnMouseWheel: true
            }],
            xAxis: {
                type: 'value',

                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }

            },
            yAxis: {
                type: 'category',
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisPointer: {
                    label: {
                        show: true,
                        margin: 30
                    }
                },
                data: this.attackSourcesName,
                axisLabel: {
                    margin: 140,
                    fontSize: 14,
                    align: 'left',
                    color: '#333',
                    rich: {
                        nt1: {
                            color: '#fff',
                            backgroundColor: this.attackSourcesColor[0],
                            width: 25,
                            height: 25,
                            align: 'center',
                            borderRadius: 100
                        },
                        nt2: {
                            color: '#fff',
                            backgroundColor: this.attackSourcesColor[1],
                            width: 25,
                            height: 25,
                            align: 'center',
                            borderRadius: 100
                        },
                        nt3: {
                            color: '#fff',
                            backgroundColor: this.attackSourcesColor[2],
                            width: 25,
                            height: 25,
                            align: 'center',
                            borderRadius: 100
                        },
                        nt: {
                            color: '#fff',
                            backgroundColor: this.attackSourcesColor[3],
                            width: 25,
                            height: 25,
                            align: 'center',
                            borderRadius: 100
                        },
                        title1: {
                            backgroundColor: this.attackSourcesColor[0],
                            color: '#fff',
                            width: 90,
                            align: 'left',
                            borderRadius: 5,
                            padding: 5,
                        },
                        title2: {
                            backgroundColor: this.attackSourcesColor[1],
                            color: '#fff',
                            width: 90,
                            align: 'left',
                            borderRadius: 5,
                            padding: 5,
                        },
                        title3: {
                            backgroundColor: this.attackSourcesColor[2],
                            color: '#fff',
                            width: 90,
                            align: 'left',
                            borderRadius: 5,
                            padding: 5,
                        },
                        title: {
                            backgroundColor: this.attackSourcesColor[3],
                            color: '#fff',
                            width: 90,
                            align: 'left',
                            borderRadius: 5,
                            padding: 5,
                        }
                    },
                    formatter: function(value, index) {
                        index = that.contains(that.attackSourcesName, value) + 1
                        if (index - 1 < 3) {
                            return [
                                '{nt' + index + '|' + index + '}' + '  {title' + index + '|' + value + '}'
                            ].join('\n')
                        } else {
                            return [
                                '{nt|' + index + '}' + '  {title|' + value + '}'
                            ].join('\n')
                        }
                    }
                }
            },
            series: [{
                    z: 2,
                    type: 'bar',
                    barWidth: '25px',
                    animationDuration: 1500,
                    data: this.attackSourcesDataFmt(),
                    /**
                     * es写法
                     attackSourcesData.map((item, i) => {
                        itemStyle = {
                            color: i > 3 ? colorList[3] : colorList[i]
                        }
                        return {
                            value: item,
                            itemStyle: itemStyle
                        };
                    }),
                */
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                return that.attackSourcesColor[params.dataIndex > 3 ? 3 : params.dataIndex]
                            },
                            barBorderRadius: 5,
                        }
                    },
                    label: {
                        show: true,
                        position: 'right',
                        color: '#333333',
                        fontSize: 14,
                        offset: [10, 0]
                    }
                }

            ]
                
    　　  })
      },

     contains(arr, dst){
        var i = arr.length;
        while (i -= 1) {
            if (arr[i] == dst) {
                return i;
            }
        }
        return false;
     },
     attackSourcesDataFmt(){
        var sss = [];
        let that = this
        this.attackSourcesData.forEach(function(item, i) {
            let itemStyle = {
                color: i > 3 ? that.attackSourcesColor[3] : that.attackSourcesColor[i]
            }
            sss.push({
                value: item,
                itemStyle: itemStyle
            });
        });
        return sss;
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

