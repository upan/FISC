<template>
  <div id="pageNotFound">
      <Indexheader></Indexheader>
      <div class="a-404-image"></div>
      <span class="not-fount-text">{{$t('m.pageNotFoundText')}}</span>
  </div>
</template>

<script>
import Indexheader from "src@/components/IndexHeader.vue";

export default {
  name: "pageNotFound",
  components: {
      Indexheader
  }
}
</script>

<style scoped>
#pageNotFound{
    text-align: center;
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


