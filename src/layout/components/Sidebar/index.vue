<template>
  <div :class="{'has-logo':showLogo}">
    
    <logo v-if="showLogo" :collapse="isCollapse" />

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >

        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vuex from 'vuex'
import store from '../../../store'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import index from '@/router/index'
import Layout from '@/layout'


export default {
  components: { SidebarItem, Logo },
  data(){
    return{
      sidebarStatus:'' 
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      // 这个先不要删除  
      // console.log(window.localStorage.getItem('sidebarStatus'))
      // console.log(this.$router.options.routes)
      // console.log(index.options.routes)
      // console.log(store.state.userinfo.data_role_id)
      
      // let a = [],
      //     b = [],
      //     c = [],
      //     e = [],
      //     f = store.state.userinfo.data_role_id.toString()
  
      //   this.$router.options.routes.forEach(r => {
      //     if (!r.children) {
      //       a.push(r) 
      //     } else {
      //       if (r.meta) {
      //         if (r.meta.roles.indexOf(f) != -1) {
      //           b = []
      //           r.children.forEach(j => {
      //             if (j.meta.roles.indexOf(f) != -1) {
      //               b.push(j)
      //             }
      //           })
      //           r.children = []
      //           r.children = b
      //           // c.push(r)
      //           a.push(r)
      //         }
      //       } else {
      //         r.children.forEach(k => {

      //           if (k.meta.roles.indexOf(f) != -1) {
      //             // e.push(r)
      //             a.push(r)
      //           }
      //         })

      //       }

      //     }
      //   })
      // return a
      //  return a.concat(e).concat(c)
      //  return this.$router.options.routes
    
      return  this.$store.state.Sidebar
      
    },
    activeMenu() {
      const route = this.$route

      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
      
    },
    showLogo() {

      return this.$store.state.settings.sidebarLogo ;

    },
    variables() {

      return variables ;

    },
    isCollapse() {

      if(this.sidebar.opened){

        this.sidebarStatus = true ;

      }else{

        this.sidebarStatus = false ;

      }

      return !this.sidebar.opened ;
    },

    
  },
}
</script>
<style lang="less" scoped>

  .logo{
    width: 100%;
    margin:20px 10px 20px 15px;
    position: relative;
    span:first-child{
      img{
        width: 100px;
      }
    }
    span:nth-child(2){
      width: 1px;
      height: 14px;
      display: inline-block;
      background: #687393;
      margin-left: 10px;
      margin-right: 10px;
    }
    span:nth-child(3){
     img{
       width: 63px;
     }
    }
  }

</style>