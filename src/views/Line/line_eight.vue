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
      XName: ["推送","处置中","完成","数据入库"],
      data1: [
            [100,100, 100, 100],
            [100,100,{value:100, symbol:'emptyHeart',symbolSize:30}]
        ],
      Line:["线1","线2"],
      color:['#256589','#3fe973']
    }
  },
  methods: {
      initCharts () {
           var datas = [];
            this.Line.map((item,index)=>{
                if(index==0){
                    datas.push(
                    {
                        symbolSize: 15,
                        symbol: 'circle',
                        hoverAnimation:false,
                        name: item,
                        type: "line",
                        data: this.data1[index] ,
                        itemStyle: {
                            normal: {
                                borderWidth: 5,
                                color: this.color[index],
                            }
                        }
                    }
                )
                
                }else{
                    datas.push(
                    {
                        symbolSize: 15,
                        symbol: 'circle',
                        hoverAnimation:false,
                        name: item,
                        type: "line",
                        data: this.data1[index] ,
                        itemStyle: {
                            normal: {
                                borderWidth: 5,
                                color: this.color[index],
                            }
                        }
                    }
                )
                    
            }
           
        })
    　　let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
             backgroundColor:"#fas111",
             grid: {
                left: '5%',
                top: '25%',
                bottom: '60%',
                right: '5%',
            },
            yAxis: [
                {
                    type: 'value',
                    position: 'right',
                    max:100,
                    splitLine: {
                        show: false
                    }
                    ,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#6A989E',
                        }
                    },
                    axisLabel: {
                        inside: true,
                        show: true,
                        textStyle: {
                            color: '#90deff',// x轴颜色
                            fontWeight: 'normal',
                            fontSize: '24',
                            lineHeight: 24
                        }

                    },
                    data: this.XName,
                }
            ],
            series: datas,
                
    　　})
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

