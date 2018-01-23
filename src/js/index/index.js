import Vue from 'vue'
import router from 'src@/js/config/router.js'
import i18n from 'src@/js/config/vueI18n.js'
import App from "src@/components/App.vue";
import 'src@/styles/main.css'
import { locale, DatePicker } from 'iview';
import 'iview/dist/styles/iview.css';

import lang from 'iview/dist/locale/en-US';

// configure language
locale(lang);

//开发环境下
if (process.env.NODE_ENV !== 'production'){
    //开启错误提示
    Vue.config.debug = true;
}

Vue.component('DatePicker', DatePicker);

(function () {
    new Vue({
        el: '#app',
        router,
        i18n,
        template: '<App/>',
        components: { App }
    });
})()