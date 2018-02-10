<template>
    <div>
        <m-header></m-header>
        <tab></tab>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div> 
</template>

<script type="text/ecmascript-6">    
    import MHeader from 'components/header/m-header'
    import Tab from 'components/tab/tab'
    export default {
        components: {
            MHeader,
            Tab
        }
    }
</script>
<style lang="scss">
    @import 'common/scss/index';
</style>   