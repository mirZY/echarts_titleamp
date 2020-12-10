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
         category : [
             {
                name: "管控",
                value: 2500
            },
            {
                name: "集中式",
                value: 8000
            },
            {
                name: "纳管1",
                value: 5000
            },
            {
                name: "纳管2",
                value: 4000
            },
            {
                name: "纳管3",
                value: 2000
            }
         ],
         total:1000,
         datas:[],
    }
  },
  methods: {
      initCharts () {
         this.category.forEach(value => {
            this.datas.push(value.value);
        });
        let that = this ;
    　　 let myChart = this.$echarts.init(this.$refs.chart);
        
    　　// 绘制图表
    　　myChart.setOption({
             backgroundColor:'#071347',
            xAxis: {
                max: this.total,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            grid: {
                left: 80,
                top: 20, // 设置条形图的边距
                right: 180,
                bottom: 20
            },
            yAxis: [{
                type: "category",
                inverse: false,
                data: that.category,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            }],
            series: [{
                    // 内
                    type: "bar",
                    barWidth: 18,

                    legendHoverLink: false,
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // console.log(params)
                                var color;
                                if(params.dataIndex==0){
                                        color = {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 1,
                                            y2: 0,
                                            colorStops: [{
                                                    offset: 0,
                                                    color: "#EB5118" // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: "#F21F02" // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    }else if(params.dataIndex==2){
                                        color = {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 1,
                                            y2: 0,
                                            colorStops: [{
                                                    offset: 0,
                                                    color: "#FFA048" // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: "#B25E14" // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    }else if(params.dataIndex==3){
                                        color = {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 1,
                                            y2: 0,
                                            colorStops: [{
                                                    offset: 0,
                                                    color: "#F8E972" // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: "#E5C206" // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    }else{
                                        color = {
                                            type: "linear",
                                            x: 0,
                                            y: 0,
                                            x2: 1,
                                            y2: 0,
                                            colorStops: [{
                                                    offset: 0,
                                                    color: "#1588D1" // 0% 处的颜色
                                                },
                                                {
                                                    offset: 1,
                                                    color: "#0F4071" // 100% 处的颜色
                                                }
                                            ]
                                        }
                                    }
                                    return color;
                            },
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: "left",
                            formatter: "{b}",
                            textStyle: {
                                color: "#fff",
                                fontSize: 14
                            }
                        }
                    },
                    data: that.category,
                    z: 1,
                    animationEasing: "elasticOut"
                },
                {
                    // 分隔
                    type: "pictorialBar",
                    itemStyle: {
                        normal:{
                            color:"#061348"
                        }
                    },
                    symbolRepeat: "fixed",
                    symbolMargin: 6,
                    symbol: "rect",
                    symbolClip: true,
                    symbolSize: [1, 21],
                    symbolPosition: "start",
                    symbolOffset: [1, -1],
                    symbolBoundingData: that.total,
                    data: that.category,
                    z: 2,
                    animationEasing: "elasticOut"
                },
                {
                    // 外边框
                    type: "pictorialBar",
                    symbol: "rect",
                    symbolBoundingData: that.total,
                    itemStyle: {
                        normal: {
                            color: "none"
                        }
                    },
                    label: {
                        normal: {
                            formatter: (params) => {
                                var text;
                                if(params.dataIndex==0){
                                    text = '{a|  100%}{f|  '+params.data+'}';
                                }else if(params.dataIndex==1){
                                    text = '{b|  100%}{f|  '+params.data+'}';
                                }else if(params.dataIndex==2){
                                    text = '{c|  100%}{f|  '+params.data+'}';
                                }else if(params.dataIndex==3){
                                    text = '{d|  100%}{f|  '+params.data+'}';
                                }else if(params.dataIndex==4){
                                    text = '{f|  100%}{f|  '+params.data+'}';
                                }
                                return text;
                            },
                            rich:{
                                a: {
                                    color: 'red'
                                },
                                b: {
                                    color: 'blue'
                                },
                                c:{
                                    color: 'yellow'
                                },
                                d:{
                                    color:"green"
                                },
                                f:{
                                    color:"#ffffff"
                                }
                            },
                            position: 'right',
                            distance: -0, // 向右偏移位置
                            show: true
                        }
                    },
                    data: that.datas,
                    z: 0,
                    animationEasing: "elasticOut"
                },
                {
                    name: "外框",
                    type: "bar",
                    barGap: "-20%", // 设置外框粗细
                    data: [this.total, this.total,this.total,this.total,this.total,this.total,this.total,this.total,this.total,this.total,this.total,this.total],
                    barWidth: 25,
                    itemStyle: {
                        normal: {
                            color: "transparent", // 填充色
                            barBorderColor: "#1C4B8E", // 边框色
                            barBorderWidth: 1, // 边框宽度
                            // barBorderRadius: 0, //圆角半径
                            label: {
                                // 标签显示位置
                                show: false,
                                position: "top" // insideTop 或者横向的 insideLeft
                            }
                        }
                    },
                    z: 0
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

