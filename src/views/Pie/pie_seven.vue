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
         colorArr:["#218de0", "#01cbb3", "#85e647", "#5d5cda", "#05c5b0", "#c29927"],
         colorAlpha:['rgba(60,170,211,0.05)','rgba(1,203,179,0.05)','rgba(133,230,71,0.05)','rgba(93,92,218,0.05)','rgba(5,197,176,0.05)','rgba(194,153,39,0.05)']
    }
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart)

    　　// 绘制图表
    　　myChart.setOption({
             backgroundColor:"#090e36",
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
      show:false
    },
    
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        min: 20,
        max: 120,
        interval: 20,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B3E5E",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            formatter: '{value} %',
            show: false,
            padding: [0, 0, 20, 0],
            color: "#0B3E5E",
            fontSize: 16
        },
        splitLine: {
            lineStyle: {
                color: "#07385e",
                width: 2,
                type: "dashed"
            }
        }
    },
    calculable: true,
    series: [ {
        stack: 'a',
        type: 'pie',
        radius: '80%',
        roseType: 'radius',
        zlevel:10,
       startAngle: 100,
        label: {
            normal: {
                formatter: [ '{b|{b}}','{d|{d}%}'].join('\n'),
                rich: {
                    b: {
                        color: '#3bd2fe',
                        fontSize: 14,
                        lineHeight: 20
                    },
                    d: {
                        color: '#d0fffc',
                        fontSize: 14,
                        height: 20
                    },
                },
            }
        },
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 45,
                lineStyle: {
                color: '#0096b1'
                    
                }
            },
            emphasis: {
                show: false
            }
        },
        data: [{
                value: 63,
                name: '容量小设备老旧',
                 itemStyle: {
                  borderColor: this.colorArr[0],
                  borderWidth:2,
                  shadowBlur: 20,
                  shadowColor: "#41a8f8",
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color:this.colorAlpha[0]
                    }
            },
            {
                value: 27,
                name: '季节性企业用电',
                itemStyle: {
                  borderColor: this.colorArr[1],
                  borderWidth:2,
                  shadowBlur: 20,
                  shadowColor: this.colorArr[1],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color:this.colorAlpha[1]
                    }
            },
            {
                value: 7,
                name: '企业用电高峰',
                itemStyle: {
                  borderColor: this.colorArr[2],
                  borderWidth:2,
                  shadowBlur: 20,
                  shadowColor: this.colorArr[2],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color:this.colorAlpha[2]
                    }
            },
            {
                value: 13,
                name: '节假日',
                itemStyle: {
                  borderColor: this.colorArr[3],
                  borderWidth:2,
                  shadowBlur: 20,
                  shadowColor: this.colorArr[3],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color:this.colorAlpha[3]
                    }
            },
            {
                value: 10,
                name: '临时用电',
                itemStyle: {
                  borderColor: this.colorArr[4],
                  borderWidth:2,
                  shadowBlur: 20,
                  shadowColor: this.colorArr[4],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color:this.colorAlpha[4]
                    }
            },
            {
                value: 6,
                name: '三相用电不平衡',
                itemStyle: {
                  borderColor: this.colorArr[5],
                  borderWidth:2,
                  shadowBlur: 20,
                  shadowColor: this.colorArr[5],
                  shadowOffsetx: 25,
                  shadowOffsety: 20,
                  color:this.colorAlpha[5]
                    }
            }
        ]
    }, ]
        
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

