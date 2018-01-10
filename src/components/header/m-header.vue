<template>
    <header class="m-header">       
        <h1 class="text">音乐</h1>
        <router-link tag="div" class="mine" to="/user">
            <i class="icon-mine"></i>
        </router-link>        
    </header>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="scss" >
    // 颜色定义规范
    @import "~common/scss/variable";
    .m-header {
        position: relative;
        height: 44px;
        text-align: center;
        font-size: 0;   
        color: $color-theme; 
        .text{
            display: inline-block;
            vertical-align: top;
            line-height: 44px;
            font-size: $font-size-large;
        }      
        .mine {
            position: absolute;
            top: 0;
            right: 0;
            .icon-mine{
                display: block;
                padding: 12px;
                font-size: 20px;
                color: $color-theme ;
            }
        }
    }
    
</style>   