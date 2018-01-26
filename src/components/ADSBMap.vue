<template>
    <div id="map"></div>
</template>

<script>
import GoogleMap from 'src@/js/baseModule/GoogleMap.js'

export default {
  name: 'ADSBMap',
  mounted(){
    this.initMap()
  },
  methods: {
      initMap(){
          let adsbMap = new GoogleMap('map', 5).initMap();
      }
  }
}
</script>

<style scoped>
    #map{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>


