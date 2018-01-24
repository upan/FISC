<template>
  <div id="flightList">
      <Indexheader/>
      <FISCFooter/>
  </div>
</template>

<script>
import Indexheader from "src@/components/IndexHeader.vue";
import FISCFooter from "src@/components/FISCFooter.vue";

export default {
  name: 'FlightList',
  components: {
    Indexheader,
    FISCFooter
  }
}
</script>
