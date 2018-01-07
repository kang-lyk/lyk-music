import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'

fastclick.attach(document.body)

Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})