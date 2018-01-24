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
              <input type="text" key="fnum" v-model="fnumInputValue" :placeholder="$t('m.searchFnumPlaceholder')">
          </div>
          <div class="air-city" v-if="searchType === 'airport'">
              <AirportAutoComplete :inputValuePar.sync="airportInputValue1" :placeholder="$t('m.searchAirportStartPlaceholder')"/>
              <div class="change-btn"></div>
              <AirportAutoComplete :inputValuePar.sync="airportInputValue2" :placeholder="$t('m.searchAirportEndPlaceholder')"/>
          </div>
          <div class="enter-airline enter-nu" v-if="searchType === 'airline'">
              <input type="text" key="airline" v-model="airlineInputValue" :placeholder="$t('m.searchAirlinePlaceholder')">
          </div>
      </div>
      <div class="fligt-date enter-nu">
          <span class="date-picker-info">{{ $t('m.datePickerText') }}</span>
          <DatePicker :value="searchDate" @on-change="changeDate" :options="options" format="dd/MM/yyyy" type="date" :placeholder="$t('m.datePickerPlaceholder')" style="width: 100%"></DatePicker>
      </div>
      <div class="search-btn" @click="submitSearchForm">{{ $t('m.searchBtnText') }}</div>
  </div>
</template>

<script>
import AirportAutoComplete from 'src@/components/AirportAutoComplete.vue'
import SingleDatePicker from 'src@/components/SingleDatePicker.vue'
import {dateFormate} from 'src@/js/config/util.js'

export default {
  name: 'SearchFlightsInputs',
  data(){
      return {
          searchType: 'fnum',
          fnumInputValue: '',
          airportInputValue1: '',
          airportInputValue2: '',
          airlineInputValue: '',
          searchDate: dateFormate(new Date(), 'dd/MM/yyyy'),
          options: {
                disabledDate (date) {
                    return date && (date.valueOf() < Date.now() - 2592000000 || date.valueOf() > Date.now() + 259200000);
                }
            },
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
  computed: {
    searchValue(){
        switch (this.searchType) {
            case "fnum":
                return this.fnumInputValue
                break;
            case "airport":
                return this.airportInputValue1 + ','+ this.airportInputValue2
                break;
            case "airline":
                return this.airlineInputValue
                break;
        }
    },
  },
  methods: {
      changeSearchType (index) {
            this.fnumInputValue = ''
            this.airportInputValue1 = ''
            this.airportInputValue2 = ''
            this.airlineInputValue = ''

          this.searchTypeList.forEach( (obj, _index) => {
              _index  === index ? obj.active = true : obj.active = false
          })
          //更新查询类型的值
          this.searchType = this.searchTypeList[index].key
      },
      changeDate(val){
          this.searchDate = val;
      },
      submitSearchForm(){
        //判断日期是否为空
        if(this.searchDate === ''){
            this.$Message.error(this.$t('m.dateNoEmptyInfoText'));
            return;
        }
        //判断日期格式是否是1970年和正规的日期格式 xx/xx/xxxx
        if(this.searchDate === '01/01/1970' || !this.searchDate.match(/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/)){
            this.$Message.error(this.$t('m.dateIllegalInfoText'));
            return;
        }
        //判断航班号是否为空以及是否合法
        if(this.searchType === 'fnum'){
            if(this.fnumInputValue === ''){
                this.$Message.error(this.$t('m.fnumNoEmptyInfoText'));
                return;
            }else{
                if(!this.fnumInputValue.match(/^[a-zA-Z0-9]+$/)){
                    this.$Message.error(this.$t('m.fnumIllegalInfoText'));
                    return;
                }
            }
        }
        //判断航司是否为空以及是否合法
        if(this.searchType === 'airline'){
            if(this.airlineInputValue === ''){
                this.$Message.error(this.$t('m.airlineNoEmptyInfoText'));
                return;
            }else{
                if(!this.airlineInputValue.match(/^[a-zA-Z]{2,3}$/)){
                    this.$Message.error(this.$t('m.airlineIllegalInfoText'));
                    return;
                }
            }  
        }
        //判断机场是否为空以及是否合法
        if(this.searchType === 'airport'){
            if(this.airportInputValue1 === '' || this.airportInputValue2 === ''){
                this.$Message.error(this.$t('m.airportNoEmptyInfoText'));
                return;
            }else{
                if(!this.airportInputValue1.match(/^[a-zA-Z]{3}$/) || !this.airportInputValue2.match(/^[a-zA-Z]{3}$/)){
                    this.$Message.error(this.$t('m.airportIllegalInfoText'));
                    return;
                }
            }
        }

        //输入均合法 执行
        console.info(this.searchType, this.searchValue, this.searchDate)
        this.$router.go('/flight-list')
      }
  },
  components: {
      AirportAutoComplete: resolve => {require(['./AirportAutoComplete.vue'], resolve)},//懒加载
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
        left: 20px;
        z-index: 1;
        cursor: default;
        color: #000;
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
