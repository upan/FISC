import Vue from 'vue';
import Router from 'vue-router';
// import Home from 'src@/views/Home.vue'
// import FlightList from 'src@/views/FlightList.vue'
// import PageNotFound from 'src@/views/PageNotFound.vue'
const Home = () => import('../../views/Home.vue');
const FlightList = () => import('../../views/FlightList.vue');
const PageNotFound = () => import('../../views/PageNotFound.vue');
const ADSB = () => import('../../views/ADS-B.vue')
import App from 'src@/App.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '',
                    component: Home//懒加载
                },
                {
                    path: '/flight-status-data',
                    component: FlightList//懒加载
                },
                {
                    path: '/flight-status-data/:type/:value/:date/:page',
                    name: 'flightlist',
                    component: FlightList//懒加载
                },
                {
                    path: '/ads-b',
                    name: 'ADS-B',
                    component: ADSB//懒加载
                }
            ]
        },
        {
            path: '/cn',
            component: App,
            children: [
                {
                    path: '',
                    component: Home//懒加载
                },
                {
                    path: 'flight-status-data',
                    component: FlightList//懒加载
                },
                {
                    path: 'flight-status-data/:type/:value/:date/:page',
                    name: 'flightlistCn',
                    component: FlightList//懒加载
                },
                {
                    path: 'ads-b',
                    name: 'ADS-BCn',
                    component: ADSB//懒加载
                }
            ]
        },
        {
            path: '*',
            name: '404',
            component: PageNotFound//懒加载
        }
    ]
})