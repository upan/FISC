import Vue from 'vue';
import VueI18n from "vue-i18n";
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';

Vue.use(VueI18n)

const messages = {
    'zh-CN': Object.assign(require('../lang/zh'), zh),   // 中文语言包
    'en-US': Object.assign(require('../lang/en'), en)  // 英文语言包
};

export default new VueI18n({
    locale: 'en-US',    // 语言标识
    messages
})