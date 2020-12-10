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
         scale : 1,
         echartData : [{
        value: 2154,
        name: '曲阜师范大学',
        itemStyle: {
                        normal: {//颜色渐变
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#E58B44'},
                                    {offset: 1, color: 'transparent'}
                                ]
                            )
                        }
                    }
                
        }, {
        value: 3854,
        name: '潍坊学院',
        itemStyle: {
                        normal: {//颜色渐变
                            color: new this.$echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#D95CFF'},
                                    {offset: 1, color: 'transparent'}
                                ]
                            )
                        }
                    }
        
            }, {
                value: 3515,
                name: '青岛职业技术学院',
                itemStyle: {
                                normal: {//颜色渐变
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#06A3F4'},
                                            {offset: 1, color: 'transparent'}
                                        ]
                                    )
                                }
                            }
                
            }, {
            value: 3515,
            name: '淄博师范高等专科',
            itemStyle: {
                            normal: {//颜色渐变
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#29AF62'},
                                        {offset: 1, color: 'transparent'}
                                    ]
                                )
                            }
                        }
            
        }, {
            value: 3854,
            name: '鲁东大学',
            itemStyle: {
                            normal: {//颜色渐变
                                color: new  this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#FF3939'},
                                        {offset: 1, color: 'transparent'}
                                    ]
                                )
                            }
                        }
            
        }, {
            value: 2154,
            name: '山东师范大学',
            itemStyle: {
                            normal: {//颜色渐变
                                color: new  this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#0b5263'},
                                        {offset: 1, color: 'transparent'}
                                    ]
                                )
                            }
                        }
            
        }],
        total_datas :0,
        rich :{
            yellow: {
                color: "#ffc72b",
                fontSize: 15 * this.scale,
                // padding: [21, 0],
                align: 'center'
            },
            total: {
                color: "#ffc72b",
                fontSize: 40 * this.scale,
                align: 'center'
            },

            blue: {
                color: '#49dff0',
                fontSize: 16 * this.scale,
                align: 'center'
            },
            hr: {
                borderColor: '#0b5263',
                width: '100%',
                borderWidth: 1,
                height: 0,
            }
        },
    }
  },
  methods: {
      initCharts () {
         for (var i = 0; i < this.echartData.length; i++) {
            this.total_datas += this.echartData[i].value
        }
    　　 let myChart = this.$echarts.init(this.$refs.chart);
    let that = this

    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor: '#060d22',
            title: {
                    text: '总数',
                    subtext: that.total_datas,
                    textStyle: {
                        color: '#f2f2f2',
                        fontSize: 40,
                        align: 'center'
                    },
                    subtextStyle: {
                        fontSize: 30,
                        color: ['#ff9d19']
                    },
                    x: 'center',
                    y: 'center',
                },
                legend: {
                        // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
                        orient: 'vertical',
                        // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                        x: 'left',
                        // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                        y: 'center',
                        itemWidth: 24,   // 设置图例图形的宽
                        itemHeight: 18,  // 设置图例图形的高
                        textStyle: {
                        color: '#666'  // 图例文字颜色
                        },
                        // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
                        itemGap: 30,
                        data: ['曲阜师范大学','潍坊学院','青岛职业技术学院','淄博师范高等专科','鲁东大学','山东师范大学']
                    },

                    series: [{
                        name: '总考生数量',
                        type: 'pie',
                        itemStyle: {
                        normal: {
                        borderWidth: 5,
                        borderColor: "#030d22"
                        }
                    },
                        radius: ['38%', '50%'],
                        hoverAnimation: false,
                        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
                        label: {
                            normal: {
                            formatter: function(params, ticket, callback) {
                                var total = 0; //考生总数量
                                var percent = 0; //考生占比
                                that.echartData.forEach(function(value, index, array) {
                                    that.total = that.total?that.total:0 +value.value;
                                });
                                console.log(that.total )
                                percent = ((params.value / that.total) * 10).toFixed(1);
                                
                                return '{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                            },
                            rich: that.rich
                        },
                    },
                    labelLine: {
                        normal: {
                            length: 55 * that.scale,
                            length2: 10,
                            lineStyle: {
                                color: '#0b5263'
                            }
                        }
                    },
                    data: that.echartData
                }]
        
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

