<template>
  <div id="adsb">
    <MainHeader :index="1"></MainHeader>
    <ADSBMap></ADSBMap>
  </div>
</template>

<script>
import MainHeader from "src@/components/Header.vue";
import ADSBMap from "src@/components/ADSBMap.vue";

export default {
  name: 'adsb',
  components: {
    MainHeader,
    ADSBMap
  }
}
</script>
