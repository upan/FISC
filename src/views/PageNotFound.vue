<template>
  <div id="pageNotFound">
      <MainHeader></MainHeader>
      <div class="container">
        <div class="a-404-image"></div>
        <span class="not-fount-text">{{$t('m.pageNotFoundText')}}</span>
      </div>
      <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from "src@/components/Header.vue";
import MainFooter from 'src@/components/FISCFooter.vue'

export default {
  name: "pageNotFound",
  components: {
      MainHeader,
      MainFooter
  }
}
</script>

<style scoped>
.container{
    text-align: center;
    margin: 150px 0;
}
.not-fount-text{
    font-size: 14px;
    font-weight: bold;
    color: #333;
}
.a-404-image{
    width: 128px;
    height: 128px;
    background: url("../images/404-1.png") no-repeat ;
    margin: auto;
}
</style>


