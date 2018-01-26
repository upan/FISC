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
  computed: {
    languageText(){
        return this.$i18n.locale === 'zh-CN' ? 'EN' : '中文'
    }
  },
  methods: {
      changeLanguage(){
          let path = this.$route.path;
          switch (this.$i18n.locale) {
              case 'zh-CN':
                this.$i18n.locale = 'en-US';
                this.$router.replace(path.replace('/cn', ''))
                break;
              case 'en-US':
                this.$i18n.locale = 'zh-CN';
                this.$router.replace('/cn' + path)
                break;
          }
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
    color: #f8f8f8;
    font-size: 14px;
}
.language-box span.language-span{
    padding: 2px 4px;
    border: 1px solid #aaa;
    border-radius: 3px;
    font-size: 10px;
    margin-right: 4px;
}
.language-box span.language-span:hover{
    border: 1px solid #ccc;
}
</style>

