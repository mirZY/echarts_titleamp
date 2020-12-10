<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

  .el-menu-item.is-active {
      color: #FFFFFF;
  }
  #app .sidebar-container i {
      margin-right: 16px;
  }
  #app .hideSidebar .el-submenu>.el-submenu__title i {
    margin-left: 20px;
  }

  // 日期
  .el-date-editor .el-range-separator {
    padding: 0 5px;
    line-height: 32px;
    width: 11%;
    color: #303133;
  }

  .el-input--small .el-input__inner {
    height: 38px;
    line-height: 38px;
  }

  .el-range-editor--medium.el-input__inner {
      height: 38px;
  }

  .el-input__inner {
        -webkit-appearance: none;
        background-color: #FFF;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 38px;
        line-height: 38px;
        outline: 0;
        padding: 0 15px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
  }

  // 查询
  .query{
    height: 36px;
    line-height: 36px;
    background: #2f6bff;
    color: white;
    border-radius: 2px;
    display: inline-block;
    padding: 0 20px;
    cursor: pointer;
  }
  // 导出
  .export{
         height: 36px;
         line-height: 36px;
         border:1px solid #2f6bff;
         color: #2f6bff;
         border-radius: 2px;
         padding: 0 20px;
         float:right;
         margin-right: 28px;
         cursor: pointer;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .header{
    cursor: pointer;
  }

  .PaginBn .el-pagination.is-background .el-pager li:not(.disabled).active{
        background-color: #2F6BFF ;
  }
  
</style>
<style lang="less">
 
 @media only screen and (max-width: 500px) {
    .el-range-editor.el-input__inner {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 3px 10px;
        width: 71%;
        height: 28px;
    }
    .el-date-editor .el-range-separator {
        padding: 0 6px;
        line-height: 23px;
        width: 16%;
        color: #303133;
        font-size: 12px;
    }
    .el-date-range-picker__content.is-left {
         border-right: 0px; 
         width: 64%;
    }
    .el-date-range-picker__content {
        width: 64%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 16px;
    }
    .el-range-editor .el-range-input {
        line-height: 1;
        font-size: 12px;
    }
    .el-date-editor .el-range__icon {
        font-size: 14px;
        margin-left: -5px;
        color: #C0C4CC;
        float: left;
        line-height: 18px;
    }
    .el-date-editor .el-range-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        outline: 0;
        padding: 0;
        width: 80%;
        color: #606266;

    }
    // 查询
    .query{
        height: 20px;
        line-height: 20px;
        background: #2f6bff;
        color: white;
        border-radius: 2px;
        display: inline-block;
        padding: 0 15px;
        margin-left: 0px;
        margin-top:10px;
        font-size: 12px;
    }
    // 导出
    .export{
         height: 20px;
         line-height: 20px;
         border:1px solid #2f6bff;
         color: #2f6bff;
         border-radius: 2px;
         padding: 0 15px;
         float:right;
         margin-right: 28px;
         margin-top:10px;
         font-size: 12px;
         display: none;
     }

     .PageBtn {
       
        .el-pagination {
            white-space: nowrap;
            padding: 2px 5px;
            color: #303133;
            font-weight: 700;
            width: 100%;
            overflow: hidden;
        }
        .el-pager li {
            padding: 0 4px;
            font-size: 13px;
            min-width: 30.5px;
            height: 28px;
            line-height: 28px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            text-align: center;
        }
        .el-pagination__total{
          display: none!important;
        }

    }
     
      
}
</style>