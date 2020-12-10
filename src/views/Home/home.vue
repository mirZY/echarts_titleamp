<template>
  <div class="dashboard-container" style="position:relative;background: #fff;min-height: calc(93vh - 50px);border-radius: 16px;box-shadow:0px 0px 6px 0px rgba(87,123,202,0.1);padding-bottom: 30px;">
     <div class="homes">
        图表大全
     </div>
  </div>
</template>

<script>

import Layout from '@/layout'


export default {
  computed: {
    message() {
      return "The webmaster said that you can not enter this page...";
    }
  },

  methods: {
      handleLogin(){
                    let Sidebar = [
                        {path: '/login', hidden: true},
                        {path: '/404',hidden: true},
                        {path: '/Line',component: Layout,alwaysShow: true,
                            name: 'line_one',
                            meta: {title: '折线图表',icon: 'icon-yong-yewu',},
                            children: [{
                                    path: 'line_one',
                                    name: 'line_one',
                                    meta: {title: '折线图（一）'}
                                },{
                                    path: 'line_two',
                                    name: 'line_two',
                                    meta: {title: '折线图（二）'}
                                },{
                                    path: 'line_three',
                                    name: 'line_three',
                                    meta: {title: '折线图（三）'}
                                },{
                                    path: 'line_four',
                                    name: 'line_four',
                                    meta: {title: '折线图（四）'}
                                },
                                {
                                    path: 'line_five',
                                    name: 'line_five',
                                    meta: {title: '折线图（五）'}
                                },
                                {
                                    path: 'line_six',
                                    name: 'line_six',
                                    meta: {title: '折线图（六）'}
                                },
                                {
                                    path: 'line_seven',
                                    name: 'line_seven',
                                    meta: {title: '折线图（七）'}
                                },
                                {
                                    path: 'line_eight',
                                    name: 'line_eight',
                                    meta: {title: '折线图（八）'}
                                },
                            ]
                        },
                        {path: '/Bar',component: Layout,alwaysShow: true,
                            name: 'bar_one',
                            meta: {title: '柱状图表',icon: 'icon-yong-yewu',},
                            children: [{
                                    path: 'bar_one',
                                    name: 'bar_one',
                                    meta: {title: '柱状图（一）'}
                                },{
                                    path: 'bar_two',
                                    name: 'bar_two',
                                    meta: {title: '柱状图（二）'}
                                },{
                                    path: 'bar_three',
                                    name: 'bar_three',
                                    meta: {title: '柱状图（三）'}
                                },{
                                    path: 'bar_four',
                                    name: 'bar_four',
                                    meta: {title: '柱状图（四）'}
                                },
                                {
                                    path: 'bar_five',
                                    name: 'bar_five',
                                    meta: {title: '柱状图（五）'}
                                },
                                {
                                    path: 'bar_six',
                                    name: 'bar_six',
                                    meta: {title: '柱状图（六）'}
                                },
                                {
                                    path: 'bar_seven',
                                    name: 'bar_seven',
                                    meta: {title: '柱状图（七）'}
                                },
                                {
                                    path: 'bar_eight',
                                    name: 'bar_eight',
                                    meta: {title: '柱状图（八）'}
                                },
                            ]
                        },{path: '/Pie',component: Layout,alwaysShow: true,
                            name: 'pie_one',
                            meta: {title: '饼图表',icon: 'icon-yong-yewu',},
                            children: [{
                                    path: 'pie_one',
                                    name: 'pie_one',
                                    meta: {title: '饼图（一）'}
                                 },
                                {
                                    path: 'pie_two',
                                    name: 'pie_two',
                                    meta: {title: '饼图（二）'}
                                },{
                                    path: 'pie_three',
                                    name: 'pie_three',
                                    meta: {title: '饼图（三）'}
                                },{
                                    path: 'pie_four',
                                    name: 'pie_four',
                                    meta: {title: '饼图（四）'}
                                },
                                {
                                    path: 'pie_five',
                                    name: 'pie_five',
                                    meta: {title: '饼图（五）'}
                                },
                                {
                                    path: 'pie_six',
                                    name: 'pie_six',
                                    meta: {title: '饼图（六）'}
                                },
                                {
                                    path: 'pie_seven',
                                    name: 'pie_seven',
                                    meta: {title: '饼图（七）'}
                                },
                                {
                                    path: 'pie_eight',
                                    name: 'pie_eight',
                                    meta: {title: '饼图（八）'}
                                },{
                                    path: 'pie_nine',
                                    name: 'pie_nine',
                                    meta: {title: '饼图（久）'}
                                },
                            ]
                        },
                       
                    ]
                    this.$store.commit('SaveSidebar', Sidebar);
            
      },
      
     
  },

  created() {
     this.handleLogin();
  }
};
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

.homes{
    margin: 240px auto;
    font-size: 40px;
    color: #283765;
    position: absolute;
    left: 50%;
    margin-left: -15%;
}
</style>
