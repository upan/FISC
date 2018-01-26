<template>
<div class="foot">
	<div class="foot-contact">
		<ul class="foot-ul">
			<li>
				<div>
					{{$t('m.footerText1')}}
				</div>
				<p><a href="mailto:data@VariFlight.com">{{$t('m.footerText2')}}: data@VariFlight.com</a></p>
				<p>{{$t('m.footerText3')}}: +86 0551 65817238</p>
				<p>{{$t('m.footerText4')}}: 0551 65817238</p>
			</li>
			<li>
				<div>
					{{$t('m.footerText5')}}
				</div>
				<p>{{$t('m.footerText6')}}</p>
			</li>
		</ul>
	</div>
	<div class="copyright">Copyright by Feeyo Technology Co., Ltd</div>
</div>
</template>

<script>
export default {
  name: 'FISCFooter'
}
</script>

<style scoped>
.foot-contact{background-color: #002e54;height: 188px;font-size: 14px;}
.foot-ul{overflow: hidden; width: 1200px; margin: 0 auto;}
.foot-ul li{float: left; width: 400px; color: #fff;}
.foot-ul li div{font-size: 18px;margin-top: 36px;margin-bottom: 16px;}
.foot-ul li p{line-height: 28px;}
.foot-ul li p a{color: #fff;}
.foot-ul li p a:hover{text-decoration: underline;}
.copyright{height: 40px;line-height: 40px;color: #fff;text-align: center;background-color: #171d1f;}
</style>


