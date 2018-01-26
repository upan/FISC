<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  created(){
      this.changeLanguage()
  },
  methods: {
      changeLanguage(){
          let path = this.$route.path
          if(path.startsWith('/cn')){
              this.$i18n.locale = 'zh-CN';
          }
      }
  },
}
</script>