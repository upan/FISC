<template>
  <div id="app">
      <div class="banner">
        <indexheader/>
        <h1 class="intr">
            {{$t('m.indexMainTitle')}}
            <span>{{$t('m.indexSubTitle')}}</span>
        </h1>
        <SearchFlightsInputs/>
      </div>
      <IndexDescription/>
      <FISCFooter/>
  </div>
</template>

<script>
import Indexheader from "src@/components/IndexHeader.vue";
import SearchFlightsInputs from "src@/components/SearchFlightsInputs.vue";
import IndexDescription from "src@/components/IndexDescription.vue";
import FISCFooter from "src@/components/FISCFooter.vue";

export default {
  name: 'home',
  components: {
      Indexheader,
      SearchFlightsInputs,
      IndexDescription,
      FISCFooter
  },
}
</script>

<style scoped>
    #app{
        width: 100%
    }
    .banner {
        height: 633px;
        background: url("../images/banner.png") no-repeat center center;
    }
    .intr{
        font-size: 60px;
        text-align: center;
        margin: 0 auto;
        margin-top: 160px;
        color: #fff;
        width: 1200px;
        margin-bottom: 100px;
        text-shadow: 0 3px 10px rgba(0,0,0,.1);
    }
    .intr>span{
        font-size: 40px;
        display: block;
        margin-top: 13px;
    }
</style>
