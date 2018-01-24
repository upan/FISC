import Vue from 'vue';
import Router from 'vue-router';
import Home from 'src@/views/Home.vue'
import FlightList from 'src@/views/FlightList.vue'
import PageNotFound from 'src@/views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/index',
            component: Home
        },
        {
            path: '/flight-list',
            name: 'flightList',
            component: FlightList
        },
        {
            path: '*',
            name: '404',
            component: PageNotFound
        }
    ]
})