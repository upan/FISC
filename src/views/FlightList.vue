<template>
  <div id="flightList">
      <MainHeader/>
      <div class="flight-search2">
        <SearchFlightsInputs :defaultValueObj="defaultSearchValue"/>
      </div>
      <FlightStatusTable></FlightStatusTable>
      <FISCFooter/>
  </div>
</template>

<script>
import MainHeader from "src@/components/Header.vue";
import FISCFooter from "src@/components/FISCFooter.vue";
import SearchFlightsInputs from "src@/components/SearchFlightsInputs.vue";
import FlightStatusTable from "src@/components/FlightStatusTable.vue";
import {dateFormate} from 'src@/js/config/util.js'

export default {
  name: 'FlightList',
  data(){
    return {
      defaultSearchValue: {}
    }
  },
  created(){
    let params = this.$route.params
    this.defaultSearchValue = {
      type: params.type || 'fnum',
      searchValue: params.value || '',
      searchDate: params.date || dateFormate(new Date(), 'dd/MM/yyyy')
    }
  },
  components: {
    MainHeader,
    FISCFooter,
    SearchFlightsInputs,
    FlightStatusTable
  }
}
</script>

<style scoped>
  .flight-search2 {
      height: 120px;
      background-color: #3d86e5;
      padding-top: 36px;
  }
</style>

