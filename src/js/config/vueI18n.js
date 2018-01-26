import Vue from 'vue';
import VueI18n from "vue-i18n";

Vue.use(VueI18n)

const messages = {
    'zh-CN': require('../lang/zh'),   // 中文语言包
    'en-US': require('../lang/en')  // 英文语言包
};

export default new VueI18n({
    locale: 'en-US',    // 语言标识
    messages
})