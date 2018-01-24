<template>
  <div @click="changeLanguage" class="language-box">
      <Tooltip :content="$t('m.switchCnAndEnInfoText')" placement="left">
        <span class="language-span">{{languageText}}</span>
      </Tooltip>
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
    top: 30px;
    right: 5px;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
}
.language-box span.language-span{
    padding: 2px 4px;
    border: 1px solid #aaa;
    border-radius: 3px;
    color: #f8f8f8;
    font-size: 10px;
    margin-right: 4px;
}
.language-box span.language-span:hover{
    border: 1px solid #ccc;
}
</style>

