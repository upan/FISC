import Vue from 'vue';
import Router from 'vue-router';
// import Home from 'src@/views/Home.vue'
// import FlightList from 'src@/views/FlightList.vue'
// import PageNotFound from 'src@/views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: resolve => require(['../../views/Home.vue'], resolve),//懒加载
        },
        {
            path: '/index',
            component: resolve => require(['../../views/Home.vue'], resolve),//懒加载
        },
        {
            path: '/flight-list',
            name: 'flightList',
            component: resolve => require(['../../views/FlightList.vue'], resolve),//懒加载
        },
        {
            path: '*',
            name: '404',
            component: resolve => require(['../../views/PageNotFound.vue'], resolve)//懒加载
        }
    ]
})