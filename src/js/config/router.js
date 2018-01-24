import Vue from 'vue';
import Router from 'vue-router';
// import Home from 'src@/views/Home.vue'
// import FlightList from 'src@/views/FlightList.vue'
// import PageNotFound from 'src@/views/PageNotFound.vue'
const Home = () => import('../../views/Home.vue');
const FlightList = () => import('../../views/FlightList.vue');
const PageNotFound = () => import('../../views/PageNotFound.vue');

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home//懒加载
        },
        {
            path: '/index',
            component: Home//懒加载
        },
        {
            path: '/flight-list',
            name: 'flightList',
            component: FlightList//懒加载
        },
        {
            path: '*',
            name: '404',
            component: PageNotFound//懒加载
        }
    ]
})