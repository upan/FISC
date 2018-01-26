<template>
<div class="auto1200 search-result">
    <div class="no-flight-data" v-if="isNoData">
        <img src="../images/404.png" alt="noFoundFlights">
        <span>{{$t('m.flightListNoFound')}}</span>
    </div>
    <div class="loading" v-if="isLoading">
        <img src="../images/loading.gif" alt="loading...">
        <span>{{ $t('m.loadingText') }}</span>
    </div>
    <div v-if="hasFetchData">
        <h2 class="total"><strong>{{titleInfo.mainTitle}}</strong><span class="title-date">Jan 25, 2018</span>, a total of <em>1</em><span class="title-unit">flight</span></h2>
        <div class="flights-title">
            <p class="w226 w2260">Flight No.</p>
            <p class="w96">A/C Type</p>
            <p class="w96">Tail No.</p>
            <p class="w96">From</p>
            <p class="w96">To</p>
            <p class="w96">STD</p>
            <p class="w96">ATD</p>
            <p class="w96">STA</p>
            <p class="w96">ATA</p>
            <p class="w96">Carousel</p>
            <p class="w108">Status</p>
        </div>
        <ul class="flights-ul">
            <li v-for="(option, index) in flightListData" :key="index">
                <div class="w226 w2261">
                    <img :src="option.icon" @error.self="imgDownloadError">
                    <strong>{{option.code3}}</strong>
                    <a class="codesharing" v-if="option.isCodeSharing">{{ $t('m.codeShareText') }}</a>
                </div>
                <div class="w96">
                    <strong>{{option.type}}</strong>
                </div>
                <div class="w96">
                    <strong>{{option.tailNo}}</strong>
                </div>
                <div class="w96 city">
                    <strong>{{option.frog}}</strong>
                    <p>{{option.forgGate}}</p>
                </div>
                <div class="w96 city">
                    <strong>{{option.fdst}}</strong>
                    <p>{{option.fdstGate}}</p>
                </div>
                <div class="w96">
                    <strong>{{option.STD}}</strong>
                </div>
                <div class="w96">
                    <strong>{{option.ATD}}</strong>
                </div>
                <div class="w96">
                    <strong>{{option.STA}}</strong>
                </div>
                <div class="w96">
                    <strong>{{option.ATA}}</strong>
                </div>
                <div class="w96">
                    <strong>{{option.carousel}}</strong>
                </div>
                <div class="w108">
                    <strong :class="{delay: option.isDelay}">{{option.status}}</strong>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Urls from 'src@/js/config/url-config.js'
import { secondToDateByFormate, mappingStatus } from 'src@/js/config/util.js'

let params = null;

export default {
  name: 'FlightStatusTable',
  data(){
      return {
          isLoading: false,
          flightListData: [],
          titleInfo: {}
      }
  },
  computed: {
      hasFetchData(){
          if(!this.isLoading && this.flightListData.length !== 0){
              return true
          }
          return false
      },
      isNoData(){
          if(!this.isLoading && this.flightListData.length === 0){
              return true
          }
          return false
      }
  },
  watch: {
    '$route' : "changeSearchValue"
  }, 
  created(){
      this.setRouteParamsAndFetchData();
  },
  methods: {
    setRouteParamsAndFetchData(){
        this.flightListData = [];
        params = this.$route.params;
        params.type && params.value && params.date && this.fetchData()
    },
    changeSearchValue(){
        this.setRouteParamsAndFetchData();
    },
    getRequestUrl: function(){
        switch (params.type) {
            case 'airport':
                return Urls.fetchFlightStatusByAirportUrl;
            case 'airline':
                return Urls.fetchFlightStatusByAirlineUrl;
            case 'fnum':
            default:
                return Urls.fetchFlightStatusByFnumUrl;
        }
    },
    imgDownloadError(event){
        event.target.src = require('../images/image-on-error.png')
    },
    getRequestParams: function(){
        let paramsValue = params.value,
            _dateArr = params.date && params.date.split('/'),
            fdate = _dateArr[2] + '-' + _dateArr[1] + '-' + _dateArr[0],
            _obj = {
                fdate,
                page: 1,
                pageSize: 20
            };
        switch (params.type) {
            case 'airport':
                let _arr = paramsValue.split(',');
                _obj['forg'] = _arr[0];
                _obj['fdst'] = _arr[1];
                break;
            case 'airline':
                _obj['airline'] = paramsValue;
                break;
            case 'fnum':
            default:
                _obj['fnum'] = paramsValue;
                break;
        }
        return _obj;
    },
    fetchData(){
        let self = this,
            url = self.getRequestUrl(),
            requestParams = self.getRequestParams();
        this.$axios.get(url, {
                params: requestParams,
                transformRequest: (data) => {
                    //beforeSend
                    self.isLoading = true;//展示loading
                    return data;
                }
            }).then(res => {
                self.isLoading = false;//隐藏loading
                let _data = res.data
                if(_data.code === 0 && _data.data && _data.data.data.length !== 0){
                    self.fetchFlightsSuccess(_data.data)
                }
            }).catch(res => {
                self.isLoading = false;
                console.info(res)
            })
    },
    fetchFlightsSuccess(data){
        let listData = data.data,
            _list = [],
            mainTitle = params.type === 'airport' ? params.value.replace(',', '-') : params.value;

        mainTitle = mainTitle.toUpperCase();
        
        this.$set(this, 'titleInfo', {
            mainTitle
        })

        listData.forEach( (item, index) => {
            let airlineCode2 = item.airline ? item.airline.toLowerCase() : '';
            _list.push({
                icon: Urls.airlineIconUrl + airlineCode2 + '.png',
                code3: item.fnum || '-',
                isCodeSharing: item.share_execute_flag && item.share_execute_flag !== '0' ? true : false,
                type: item.ftype || '-',
                tailNo: item.aircraft_number || '-',
                frog: item.forg || '-',
                forgGate: item.departure_terminal || '-',
                fdst: item.fdst || '-',
                fdstGate: item.arrival_terminal || '-',
                STD: item.scheduled_deptime ? secondToDateByFormate(item.scheduled_deptime, 'hh:mm') : '-',
                ATD: item.actual_deptime ?  secondToDateByFormate(item.actual_deptime, 'hh:mm') : '-',
                STA: item.scheduled_arrtime ? secondToDateByFormate(item.scheduled_arrtime, 'hh:mm') : '-',
                ATA: item.actual_arrtime ? secondToDateByFormate(item.actual_arrtime, 'hh:mm') : '-',
                carousel: item.baggage_reclaim_carousel || '-',
                isDelay: item.flight_status_code && item.flight_status_code === '4' ? true : false,
                status: item.flight_status_code ? this.$t('m.statusText.flightStatus' + item.flight_status_code) : '-'
            })
        });
        this.flightListData = _list;
    }
  }
}
</script>



<style scoped>
.total{height: 78px; line-height: 78px;font-size: 16px;}
.total strong{font-size: 22px; font-weight: bold;margin-right: 40px;}
.total em{font-size: 22px; font-weight: bold;padding-left: 6px;padding-right: 6px;}

.flights-title{height: 50px;border: 1px solid #d3dbde;background-color: #fff;margin-bottom: 10px;}
.flights-title p{float: left; line-height: 48px;text-align: center;}
.w226.w2260{text-align: left;padding-left: 50px;}
.w226.w2261{text-align: left;padding-left: 20px;}
.w96.city{text-align: left;padding-left: 26px;}
.w226.w2261 p{margin-left: 30px;}
.w226{width: 226px; }
.w96{width: 96px;}
.w108{width:108px;}

.flights-ul>li{width: 1200px;border: 1px solid #d3dbde;background-color: #fff;margin-bottom: 10px;position: relative;overflow: hidden;cursor: pointer;-webkit-transition:all .5s;transition:all .5s;}
.flights-ul>li:hover{-webkit-box-shadow: 0 0 8px rgba(0,0,0,.2);box-shadow: 0 0 8px rgba(0,0,0,.2);width: 1220px; margin-left: -10px; }
.flights-ul>li>div{float: left;margin-top: 20px;text-align: center;}
.flights-ul>li>div>img{width: 22px; height: 22px;margin-right:4px;}
.flights-ul>li>div>strong{font-size: 16px; font-weight: bold;line-height: 24px;}
.flights-ul>li>div>p{line-height: 20px;color: #626466;font-weight: 100;margin-bottom: 10px;}
.codesharing{position: absolute; left: 111px; top: 10px; background-color: #ccd2d9;border-radius: 2px;padding: 2px 4px;color: #626466; font-weight: 100;}
.codesharing:hover{color: #626466;cursor: pointer;}
.flights-ul strong.delay{color: red;}
.no-flight-data{
    text-align: center;
    margin: 130px 0;
}
.no-flight-data>span{
    display: block;
    color: #A1A1A1;
    font-size: 14px;
    margin-top: 10px;
}
.loading{
    text-align: center;
    line-height: 32px;
    font-size: 21px;
    font-weight: bold;
    margin: 50px 0;
}
.loading>span{
    padding-left: 10px;
}
@media screen and (max-width: 1200px){
    .flights-ul>li{width: 960px;}
    .flights-ul>li:hover{width: 980px;}
    .w96{width: 68px;}
}
</style>

