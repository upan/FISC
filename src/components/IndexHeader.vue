<template>
  <div class="top-nav header-height">
      <div class="header-height header-width header-container">
          <div class="logo"></div>
          <div class="nav-links">
              <ul>
                  <li v-for="(linkObj, index) in links" @mouseover="index === 0 && (isShowLiDrop = true)" @mouseout="index === 0 && (isShowLiDrop = false)" :key="index" :class="{active: linkObj.active}">
                    <a :href="linkObj.linkUrl">{{linkObj.linkName}}</a>
                    <ul v-if="index === 0 && isShowLiDrop" class="li-drop">
                        <li>
                            <a href="">{{$t('m.headerTitleSub1')}}</a>
                        </li>
                        <li>
                            <a href="">{{$t('m.headerTitleSub2')}}</a>
                        </li>
                    </ul>
                  </li>
              </ul>
          </div>
          <language/>
      </div>
  </div>
</template>

<script>
import Language from 'src@/components/Language.vue'

export default {
  name: 'indexheader',
  props: ['language'],
  components: {
      Language
  },
  data(){
      return {
          isShowLiDrop: false
      }
  },
  computed: {
      links: function () {
          return [
              {
                  linkUrl: '',
                  linkName: this.$t('m.headerTitle1'),
                  active: true
              },
              {
                  linkUrl: '',
                  linkName: this.$t('m.headerTitle2'),
                  active: false
              },
              {
                  linkUrl: '',
                  linkName: this.$t('m.headerTitle3'),
                  active: false
              },{
                  linkUrl: '',
                  linkName: this.$t('m.headerTitle4'),
                  active: false
              }
          ]
      }
  }
}
</script>

<style scoped>
    .top-nav{
        width: 100%;
        background: rgba(23,48,81,.35);
        font-size: 16px;
    }
    .header-container{
        margin: auto;
        position: relative;
    }
    .nav-links{
        position: absolute;
        right: 35px;
    }
    .nav-links>ul, .nav-links>ul>li{
        display: flex;
    }
    .nav-links>ul>li{
        position: relative;
    }
    .nav-links>ul>li:hover, .nav-links>ul>li.active{
        border-bottom: 2px solid #fff;
        height: 100%;
    }
    .nav-links>ul>li>a{
        line-height: 81px;
        padding-left: 24px;
        padding-right: 24px;
        cursor: pointer;
        color: #fff;
        opacity: 0.6;
    }
    .nav-links>ul>li>a:hover, .nav-links>ul>li.active>a{
        color: #fff;
        opacity: 1;
    }
    .nav-links>ul>li .li-drop {
        position: absolute;
        top: 81px;
        left: 0px;
        background-color: #3d86e5;
        width: 100%;
    }
    .li-drop li {
        height: 38px;
        line-height: 38px;
        color: #fff;
        font-size: 14px;
        padding-left: 12px;
    }
    .li-drop li:hover{
        background: #5192E8
    }
    .li-drop li a{
        color: #fff
    }
</style>
