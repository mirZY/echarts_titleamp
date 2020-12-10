<template>
    <div>
         <div class="Header">
            <span v-for="(item,index) in titleTxt" :key="index">
                <span>{{item}}</span>
            </span>
        </div>
        <div class="line"></div>
    </div>
   
</template>
<script>
    export default {
        name: "MTitle",
        props: ['titleTxt'],
        data() {
            return {}
        }
    }

</script>

<style lang="less" scoped>
    .Header{
        height: 50px;
        line-height: 50px;
        margin-left:28px;
        span:first-child{
            span{
                font-size: 20px;
                font-weight:600;
                color:rgba(50,58,71,1);
            }
            
        }
        span:nth-child(2){
            margin-left: 18px;
            font-size:14px;
            font-weight:400;
            color:rgba(47,107,255,1);
        }
    }
    .line{
        width:100%;
        height:1px;
        background:rgba(237,240,240,1);
    }

</style>
