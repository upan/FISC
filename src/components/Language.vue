<template>
  <div @click="changeLanguage" class="language-box">
      <span>{{languageText}}</span>
  </div>
</template>

<script>
export default {
  name: 'language',
  props: ['language'],
  data(){
      return {
          languageText: '中文'
      }
  },
  methods: {
      changeLanguage(){
          switch (this.languageText) {
              case '中文':
                  this.$i18n.locale = 'zh-CN'
                  break;
              case 'EN':
                  this.$i18n.locale = 'en-US'
                  break;
          }
          this.languageText === '中文' ? this.languageText = 'EN' : this.languageText = '中文'
      }
  }
}
</script>

<style scoped>
.language-box{
    position: absolute;
    top: 0;
    right: 0px;
    cursor: pointer;
    line-height: 83px;
    color: #fff;
    font-size: 14px;
}
.language-box>span{
    padding: 3px 6px;
    border: 1px solid #aaa;
    border-radius: 6px;
    color: #f8f8f8;
}
.language-box>span:hover{
    border: 1px solid #ccc;
}
</style>

