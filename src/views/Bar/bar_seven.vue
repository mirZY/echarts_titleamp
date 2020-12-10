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
     data : [
            {name:"1#电梯",floorCount:6,nowFloor:4,type:0},//0停在某一楼层，1上行，2下行,还没做
            {name:"2#电梯",floorCount:7,nowFloor:1,type:1},
            {name:"3#电梯",floorCount:6,nowFloor:6,type:0},
            {name:"4#电梯",floorCount:6,nowFloor:4,type:2},
            {name:"5#电梯",floorCount:5,nowFloor:3,type:1}
        ],
    xData:[],
    series:[]
    }
    
  },
  methods: {
      initCharts () {
         
    　　 let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
            backgroundColor: '#021228',//'#0494fc',
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#fff'
            }
        },
        tooltip: {
            show: false
        },
        grid: {
            top: 100,
            left: 10,
            right: 10,
            bottom: 100
        },
    
    
        xAxis: {
    
            data:this.xData,
            axisLine: {
                lineStyle: {
                    color: '#fff'
                },
                show:false
            },
            axisLabel: {
                show:true,
                fontSize:14
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
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
                show: false,
            },
        },
        series: this.series
    
    
    　　  })
      },

      setSeries(){
           var MaxCount = 0;
     
            for(let i = 0;i<this.data.length;i++){
                this.xData.push(this.data[i]["name"]);
                if(this.data[i]["floorCount"] > MaxCount) MaxCount = this.data[i]["floorCount"];
            }
    
            for(let i = 1; i <= MaxCount;i++){
                let bar = {
                    data: [],
                    type: 'bar',
                    color: 'rgba(7, 7, 7, 1)',
                    /*barGap: '-100%',//重叠*/
                    stack: 'one', //堆叠
                    barWidth: 50
                };
                let bar2 = {
                    type: 'bar',
                    stack: 'one', //堆叠
                    color: 'rgba(125, 125, 125, 0)',
                    barWidth: 50,
                    data: []
                };
                for(let j=0;j<this.data.length;j++){
                    if(i <= this.data[j].floorCount){
                        
                        bar.data.push(
                            {   value : 7,
                                itemStyle: {
                                    borderColor: 'rgba(150, 150, 150, .3)',
                                    borderWidth: '20',
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 0.7, [{
                                            offset: 0,
                                            color: i!=this.data[j]["nowFloor"] ?"#087cf9":"#f51207"
                                        },
                                        {
                                            offset: 1,
                                            color: i!=this.data[j]["nowFloor"] ?"#09408a":"#e2746e"
                                        }
                                    ])
                                },
                                label: {
                                    color: '#fff',
                                    show: true,
                                    position: 'inside',
                                    formatter: i+'F'
                    
                                }
                            }
                        );
                        bar2.data.push(2);
                    }else{
                        bar.data.push(null);
                        bar2.data.push(null);
                    }
                    
                }
                this.series.push(bar);
                this.series.push(bar2);
        
         }
      },

     
   
  },
  created(){
      this.setSeries();
      let data = [
            {name:"1#电梯",floorCount:6,nowFloor:4,type:0},//0停在某一楼层，1上行，2下行,还没做
            {name:"2#电梯",floorCount:7,nowFloor:1,type:1},
            {name:"3#电梯",floorCount:6,nowFloor:6,type:0},
            {name:"4#电梯",floorCount:6,nowFloor:4,type:2},
            {name:"5#电梯",floorCount:5,nowFloor:3,type:1}
        ]
       let that = this
       setInterval(function() {

            for(let i=0;i<data.length;i++){
                if(data[i].type === 1){
                    if([i].nowFloor < data[i].floorCount){
                        data[i].nowFloor++;
                    }else{
                        data[i].type = 2;
                    }
                }
                else if(data[i].type === 2){
                    if(data[i].nowFloor > 1){
                        data[i].nowFloor--;
                    }else{
                        data[i].type = 1;
                    }
                }
            }
            that.setSeries();
        },2000);
       
  },
  mounted () {
   

    // let data = [
    //         {name:"1#电梯",floorCount:6,nowFloor:4,type:0},//0停在某一楼层，1上行，2下行,还没做
    //         {name:"2#电梯",floorCount:7,nowFloor:1,type:1},
    //         {name:"3#电梯",floorCount:6,nowFloor:6,type:0},
    //         {name:"4#电梯",floorCount:6,nowFloor:4,type:2},
    //         {name:"5#电梯",floorCount:5,nowFloor:3,type:1}
    //     ]
       

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

