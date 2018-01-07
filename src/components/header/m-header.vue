<template>
    <div class="m-header">       
        <div class="icon"></div>
        <h1 class="text">音乐</h1>
        <router-link tag="div" class="mine" to="/user">
            <i class="icon-mine"></i>
        </router-link>        
    </div>
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
    }
    
</style>   