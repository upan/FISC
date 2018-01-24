import Vue from 'vue'
import router from 'src@/js/config/router.js'
import i18n from 'src@/js/config/vueI18n.js'
import 'src@/styles/main.css'
import { locale, DatePicker, Message, Tooltip  } from 'iview';
import 'iview/dist/styles/iview.css';

import lang from 'iview/dist/locale/en-US';
// configure language
locale(lang);

//开发环境下
if (process.env.NODE_ENV !== 'production'){
    //开启错误提示
    Vue.config.debug = true;
}

//全局注册组件
Vue.component('DatePicker', DatePicker);
Vue.component('Tooltip', Tooltip);

//注册$Message插件
Vue.prototype.$Message = Message;

new Vue({
    router,
    i18n
}).$mount('#app');
