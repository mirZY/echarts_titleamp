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
      data:[{
        name: 'user1',
        value: 20,
        sum: 10
    },
    {
        name: 'user2',
        value: 20,
        sum: 10
    },
    {
        name: 'user3',
        value: 23,
        sum: 50
    },
    {
        name: 'user4',
        value: 44,
        sum: 60
    }, {
        name: 'user1',
        value: 10,
        sum: 10
    },
    {
        name: 'user2',
        value: 20,
        sum: 10
    },
    {
        name: 'user3',
        value: 53,
        sum: 50
    },
    {
        name: 'user4',
        value: 24,
        sum: 60
    }, {
        name: 'user1',
        value: 10,
        sum: 10
    },
    {
        name: 'user2',
        value: 20,
        sum: 10
    }],
    opt:{index: 0},
    color:['#A71A2B']
    }
  },
  methods: {
      initCharts () {
          this.data = this.data.sort((a, b) => {
            return b.value - a.value
        });
        let that = this
    　　let myChart = this.$echarts.init(this.$refs.chart);

    　　// 绘制图表
    　　myChart.setOption({
        backgroundColor: '#000000',
        grid: {
            top: '2%',
            bottom: -15,
            right: 30,
            left: 30,
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(this.data, 'name'),
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                interval: 0,
                color: '#fff',
                align: 'left',
                margin: 80,
                fontSize: 13,
                formatter: function(value, index) {
                    return '{title|' + value + '}'
                },
                rich: {
                    title: {
                        width: 165
                    }
                }
            },
        }, {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(this.data, 'name'),
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                shadowOffsetX: '-20px',
                color: ['#fff'],
                align: 'right',
                verticalAlign: 'bottom',
                lineHeight: 30,
                fontSize: 13,
                formatter: function(value, index) {
                    return (that.data[index].value / that.data[index].sum) * 100
                },
            }
        }],
        series: [{
            name: 'XXX',
            type: 'pictorialBar',
            // symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
            symbolSize: [30, 30],
            symbolOffset: [10, 0],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#14b1eb'
                }
            },
            data: this.getSymbolData(this.data)
        }, {
            name: '条',
            type: 'bar',
            showBackground: true,
            barBorderRadius: 50,
            yAxisIndex: 0,
            data: this.data,
            barWidth: 10,
            // align: left,
            itemStyle: {
                normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [{
                                offset: 0,
                                color: '#A71A2B'
                            },
                            {
                                offset: 0.7,
                                color: '#A71A2B'
                            },
                            {
                                offset: 1,
                                color: '#5EDEE5'
                            }
                        ],
                        false
                    ),
                    barBorderRadius: 5
                },
                // color: '#A71A2B',
                barBorderRadius: 4,
            },
            label: {
                normal: {
                    color: '#fff',
                    show: true,
                    position: [0, '-20px'],
                    textStyle: {
                        fontSize: 16
                    },
                    formatter: function(a, b) {
                        return a.name
                    }
                }
            }
        }]
                     
                
    　　  })
      },

      getArrByKey (data, k){
        let key = k || "value";
        let res = [];
        if (data) {
            data.forEach(function(t) {
                res.push(t[key]);
            });
        }
        return res;
    },
    getSymbolData (data){
        let arr = [];
        for (var i = 0; i < data.length; i++) {
            arr.push({
                value: data[i].value,
                symbolPosition: 'end'
            })
        }
        return arr;
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

