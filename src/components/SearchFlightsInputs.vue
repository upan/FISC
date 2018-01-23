<template>
  <div class="search-flight">
      <ul class="flight-tab">
          <li 
            :class="{active: typeObj.active}" 
            @click="changeSearchType(index)"
            v-for="(typeObj, index) in searchTypeList" 
            :key="index">{{$t('m.' + typeObj.typeName)}}
          </li>
      </ul>
      <div class="search-number">
          <div class="enter-fnum enter-nu" v-if="searchType === 'fnum'">
              <input type="text" :placeholder="$t('m.searchFnumPlaceholder')">
          </div>
          <div class="air-city" v-if="searchType === 'airport'">
              <AirportAutoComplete :placeholder="$t('m.searchAirportStartPlaceholder')"/>
              <div class="change-btn"></div>
              <AirportAutoComplete :placeholder="$t('m.searchAirportEndPlaceholder')"/>
          </div>
          <div class="enter-airline enter-nu" v-if="searchType === 'airline'">
              <input type="text" :placeholder="$t('m.searchAirlinePlaceholder')">
          </div>
      </div>
      <div class="fligt-date enter-nu">
          <span class="date-picker-info">{{ $t('m.datePickerText') }}</span>
          <SingleDatePicker/>
      </div>
      <div class="search-btn">{{ $t('m.searchBtnText') }}</div>
  </div>
</template>

<script>
import AirportAutoComplete from 'src@/components/AirportAutoComplete.vue'
import SingleDatePicker from 'src@/components/SingleDatePicker.vue'

export default {
  name: 'SearchFlightsInputs',
  data(){
      return {
          searchType: 'fnum',
          searchTypeList: [
              {
                  key: 'fnum',
                  typeName: 'searchTypeFnum',
                  active: true
              },
              {
                  key: 'airport',
                  typeName: 'searchTypeAirport',
                  active: false
              },
              {
                  key: 'airline',
                  typeName: 'searchTypeAirline',
                  active: false
              }
          ]
      }
  },
  methods: {
      changeSearchType (index) {
          this.searchTypeList.forEach( (obj, _index) => {
              _index  === index ? obj.active = true : obj.active = false
          })
          //更新查询类型的值
          this.searchType = this.searchTypeList[index].key
      }
  },
  components: {
      AirportAutoComplete,
      SingleDatePicker
  }
}
</script>

<style scoped>
    .search-flight{
        width: 1200px;
        margin: 0 auto;
        height: 50px;
        font-size: 18px;
        display: flex;
        justify-content: center;
    }
    .flight-tab{
        height: 50px;
        padding: 2px;
        background-color: #fff;
        border-radius: 3px;
        margin-right: 20px;
    }
    .search-flight li {
        height: 46px;
        padding-left: 20px;
        padding-right: 20px;
        float: left;
        line-height: 46px;
        border-radius: 2px;
        cursor: pointer;
    }
    .search-flight li.active {
        background-color: #3d86e5;
        color: #fff;
    }
    .search-number {
        height: 50px;
        float: left;
        margin-right: 20px;
        width: 344px;
    }
    .enter-nu input{
        text-transform: uppercase;
        color: #000;
        height: 50px;
        width: 100%;
        text-align: center;
        padding-left: 10px;
        background-color: #fff;
        border-radius: 3px;
        border: none;
        font-size: 18px;
    }
    .air-city{
        position: relative;
        height: 50px;
        width: 100%;
        border-radius: 3px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
    }
    .change-btn {
        width: 44px;
        height: 50px;
        cursor: pointer;
        background: url("../images/chage-city.png") #fff no-repeat center center;
    }
    .air-city>div.airport-complete{
        height: 50px;
    }
    .fligt-date{
        position: relative;
        border-radius: 3px;
        background-color: #fff;
        height: 50px;
        line-height: 50px;
        margin-right: 20px;
        width: 300px;
    }
    .date-picker-info{
        position: absolute;
        top: 0;
        left: 3px;
        z-index: 1;
        cursor: default;
    }
    .search-btn{
        height: 50px;
        width: 171px;
        border-radius: 3px;
        background: url(../images/bg-btn.png) repeat-x;
        cursor: pointer;
        text-align: center;
        line-height: 50px;
        color: #fff;
    }
</style>
