<template>
  <div class="top-nav header-height">
      <div class="header-height header-width header-container">
          <div class="logo"></div>
          <div class="nav-links">
              <ul>
                  <li class="li-on" @mouseover="isShowLiDrop = true" @mouseout="isShowLiDrop = false">
                        <router-link :to="$i18n.locale === 'zh-CN' ? '/cn' : '/'">{{$t('m.headerTitle1')}}</router-link>
						<ul class="li-drop" v-if="isShowLiDrop">
							<li><router-link 
                                :to="$i18n.locale === 'zh-CN' ? '/cn/flight-status-data' : '/flight-status-data'">
                                {{$t('m.headerTitleSub1')}}
                            </router-link></li>
							<li><router-link 
                                :to="$i18n.locale === 'zh-CN' ? '/cn/ads-b' : '/ads-b'">
                                {{$t('m.headerTitleSub2')}}
                            </router-link></li>
						</ul>
					</li>
					<li><a href="weather.html">{{$t('m.headerTitle2')}}</a></li>
					<li><a href="airport-flow-chart.html">{{$t('m.headerTitle3')}}</a></li>
					<li><a href="report.html">{{$t('m.headerTitle4')}}</a></li>
              </ul>
              <div class='login login2'>{{ $t('m.loginText') }}</div>
          </div>
      </div>
      <language/>
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
        right: 15px;
        display: flex;
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
    .login{
        padding-left: 50px;
        padding-right: 30px;
        height: 42px;
        border-radius: 21px;
        background: #3d86e5 url(../images/login.png) no-repeat 7px 6px;
        margin-top: 18px;
        line-height: 40px;
        color: #fff;
        cursor: pointer;
    }
    @media screen and (max-width: 1200px){
        .nav-links>ul .li-drop{
            width: 150% !important;
        }
    }
</style>
