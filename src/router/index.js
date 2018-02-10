import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Recommend = () => import('components/recommend/index')
const Rank = () => import('components/rank/index')
const Search = () => import('components/search/index')
const Singer = () => import('components/singer/index')

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/recommend'
        }, {
            path: '/recommend',
            component: Recommend
        }, {
            path: '/rank',
            component: Rank
        }, {
            path: '/search',
            component: Search
        }, {
            path: '/singer',
            component: Singer
        }
    ]
})