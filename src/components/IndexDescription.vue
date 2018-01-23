<template>
  <ul class="decrp">
	<li>
		<img src="../images/decrop-icon_01.png">
		<div>{{$t('m.headerTitle1')}}</div>
		<p>{{$t('m.description1')}}</p>
	</li>
	<li>
		<img src="../images/decrop-icon_02.png">
		<div>{{$t('m.headerTitle2')}}</div>
		<p>{{$t('m.description2')}}</p>
	</li>
	<li>
		<img src="../images/decrop-icon_03.png">
		<div>{{$t('m.headerTitle3')}}</div>
		<p>{{$t('m.description3')}}</p>
	</li>
	<li>
		<img src="../images/decrop-icon_04.png">
		<div>{{$t('m.headerTitle4')}}</div>
		<p>{{$t('m.description4')}}</p>
	</li>
</ul>
</template>

<script>
export default {
  name: 'IndexDecription'
}
</script>

<style scoped>
.decrp{width: 1200px; margin: 0 auto;margin-top:50px; margin-bottom: 50px;overflow: hidden;display: flex;justify-content: center;}
.decrp li{width:220px;margin-right: 100px;}
.decrp li:last-child{margin-right:0px;}
.decrp li img{margin-left: 59px;}
.decrp li div{text-align: center; font-size: 16px;margin-top: 21px; margin-bottom: 18px;}
.decrp li p{width: 220px; text-align: center;color: #626466;line-height: 20px;margin: 0 auto;}
</style>


