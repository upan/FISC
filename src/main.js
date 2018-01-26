import Vue from 'vue'
import router from 'src@/js/config/router.js'
import i18n from 'src@/js/config/vueI18n.js'
import 'src@/styles/main.css'
import { locale, DatePicker, Message, Tooltip  } from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import App from 'src@/App.vue'

//设置iview组件为英文
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
locale(en)

//开发环境下
if (process.env.NODE_ENV !== 'production'){
    //开启错误提示
    Vue.config.debug = true;
}

//全局注册组件
Vue.component('DatePicker', DatePicker);
Vue.component('Tooltip', Tooltip);

//注册axios请求拦截器
axios.interceptors.request.use(
    config => {
        console.log('请求拦截器： ----------')
        return config;
    },error => {
        console.log('请求拦截器： ---------- 请求错误')
        return Promise.reject(error);
    }
)
// 添加axios响应拦截器
axios.interceptors.response.use(
    response => {
        console.log('响应拦截器： ----------')
        return response;
  }, error => {
        console.log('响应拦截器： ---------- 响应错误')
        return Promise.reject(error);
  }
);

//注册$Message插件
Vue.prototype.$Message = Message;
Vue.prototype.$axios = axios;



new Vue({
    router,
    i18n,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app');
