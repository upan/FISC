<template>
  <div class="header">
		<div class="auto1200 height120">
			<div class="logo"></div>
			<div class="nav">
				<ul class="nav-ul2">
					<li class="li-on" @mouseover="isShowLiDrop = true" @mouseout="isShowLiDrop = false">
                        <router-link :to="$i18n.locale === 'zh-CN' ? '/cn' : '/'">{{$t('m.headerTitle1')}}</router-link>
						<ul class="li-drop" v-if="isShowLiDrop">
							<li><router-link :to="$i18n.locale === 'zh-CN' ? '/cn/flightlist' : '/flightlist'">{{$t('m.headerTitleSub1')}}</router-link></li>
							<li><a href="adsb-show.html">{{$t('m.headerTitleSub2')}}</a></li>
						</ul>
					</li>
					<li><a href="weather.html">{{$t('m.headerTitle2')}}</a></li>
					<li><a href="airport-flow-chart.html">{{$t('m.headerTitle3')}}</a></li>
					<li><a href="report.html">{{$t('m.headerTitle4')}}</a></li>
				</ul>
				<div class="login login2">{{ $t('m.loginText') }}</div>
			</div> 
		</div>
        <language/>
	</div>
</template>

<script>
import Language from 'src@/components/Language.vue'

export default {
  name: 'MainHeader',
  data(){
      return {
          isShowLiDrop: false
      }
  },
  components: {
      Language
  }
}
</script>

<style scoped>
.auto1200 {
    width: 1200px;
    margin: 0 auto;
}
.header{ height:120px; background:#fff;font-size: 16px;-webkit-box-shadow: 0 1px 15px rgba(0,0,0,.15);box-shadow: 0 1px 15px rgba(0,0,0,.15)}
.height120{height: 120px;}
.header .logo{height:42px;width:301px; margin-top: 38px; float: left;background: url(../images/logo2.png) no-repeat center center;}
.header .nav,.header .login{float:right;}
.nav>ul,.nav>ul>li{float: left;}
.nav-ul2>li{position: relative;}
.nav-ul2>li>a{color: #333;line-height: 120px; padding-left: 24px; padding-right: 24px; cursor: pointer;}
.nav-ul2>li>a:hover{color: #3d86e5;}
.nav-ul2>li:hover{border-bottom: 2px solid #3d86e5;}
.nav-ul2>li.li-on{border-bottom: 2px solid #3d86e5;height:100%;}
.nav-ul2>li.li-on>a{color: #3d86e5;}
.nav-ul2>li .li-drop{position: absolute;top:120px;left: 0px;background-color: #3d86e5;width: 100%;z-index: 999;}
.nav-ul2>li:hover .li-drop{display: block;}
.li-drop li{height: 38px;line-height: 38px;color: #fff;font-size: 14px;padding-left: 12px;}
.li-drop li a{color: #fff;}
.li-drop li:hover{background-color: rgba(255,255,255,.1);}
.login{padding-left: 50px;padding-right: 30px; height: 42px; border-radius: 21px;background: #3d86e5 url(../images/login.png)  no-repeat 7px 6px; margin-top: 18px;line-height: 40px;color: #fff; cursor: pointer;}
.login.login2{margin-top: 38px;}
.language-box{
    top: 45px !important;
    color: #333 !important;
}

@media screen and (max-width: 1200px){
.auto1200 {
    width: 960px;
}
.auto1200{ width:960px;}
.nav-ul2>li>a{padding-left: 0;padding-right: 10px;}
.nav-ul2>li .li-drop{width: 150%;}
}
.login.login2{
    margin-right: 8px;
}
.language-box{
    right: 0 !important;
}

</style>
