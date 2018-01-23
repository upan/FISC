<template>
    <div class="airport-complete">
        <input type="text" class="auto-complete-input" 
            :placeholder="placeholder" 
            v-model="inputValue"
            @focus="isShowPopularPanel = true" 
            @input="isShowAutoCompletePanel = true,isShowPopularPanel = false"
            @keyup.up="keyupUP"
            @keyup.down="keyupDown"
            @keyup.enter="keyupEnter">
        <div class="popular-airport-box" v-if="isShowPopularPanel">
            <div class="popular-header"><span>{{ $t('m.searchAirportPopularText') }}</span></div>
            <div class="popular-table">
                <span v-for="(option, index) in popularAirports" 
                    :key="index" 
                    @click="inputValue = option.airportCode,isShowPopularPanel = false"
                >{{option.airportCode}}</span>
            </div>
        </div>
        <div class="auto-complete-box" v-if="isShowAutoCompletePanel">
            <ul>
                <li v-for="(option, index) in autoCompleteList" 
                    :key="index" 
                    :class="{active: index === activeIndex}"
                    @click="selectApt"
                    @mouseover="activeIndex = index">
                    <span>{{$i18n.locale === 'zh-CN' ? (option.airportName + ' (' + option.airportCode + ') ' + option.airportEnName) : (option.airportEnName + ' (' + option.airportCode + ')')}}</span>
                </li>
            </ul>
        </div>
        <div v-if="isShowAutoCompletePanel || isShowPopularPanel" class="overlay" @click=" keyupEnter(), isShowAutoCompletePanel && (isShowAutoCompletePanel = false),isShowPopularPanel && (isShowPopularPanel = false)"></div>
    </div>
</template>
<script>
    import Airports from 'src@/js/config/all-airports-list.js'
    import PopularAirports from 'src@/js/config/popular-airports-list.js'

    export default {
        name: 'airportAutoComplete',
        props: ['placeholder'],
        data(){
            return{
                activeIndex: 0,
                defalutMaxDropLi: 10,
                isShowPopularPanel: false,
                isShowAutoCompletePanel: false,
                inputValue: '',
                allAirports: Airports,
                popularAirports: PopularAirports
            }
        },
        computed: {
            autoCompleteList(){
                let _arr = [], self = this;
                if(self.inputValue !== ''){
                    let i = 0;
                    this.allAirports.forEach((option, index) => {
                        let _value = self.inputValue.toUpperCase(),
                            code3 = option.airportCode.toUpperCase(),
                            enName = option.airportEnName.toUpperCase(),
                            cnNamePy = option.airportPy.toUpperCase();
                        if(self.$i18n.locale === 'zh-CN' && i < self.defalutMaxDropLi && (code3.includes(_value) || enName.includes(_value))){
                            _arr.push(option)
                            i++;
                        }else if(self.$i18n.locale === 'en-US' && i < self.defalutMaxDropLi && (code3.includes(_value) || enName.includes(_value) || cnNamePy.includes(_value))){
                            _arr.push(option)
                            i++;
                        }
                    });
                }
                if(_arr.length === 0){
                    self.isShowAutoCompletePanel = false;
                }
                return _arr
            }
        },
        methods: {
            keyupUP(){
                if(this.isShowAutoCompletePanel){
                    this.activeIndex > 0 && (this.activeIndex = this.activeIndex - 1)
                }
            },
            keyupDown(){
                if(this.isShowAutoCompletePanel){
                    this.activeIndex < (this.defalutMaxDropLi - 1) && (this.activeIndex = this.activeIndex + 1)
                }
            },
            keyupEnter(){
                if(this.isShowAutoCompletePanel){
                    this.inputValue = this.autoCompleteList[this.activeIndex].airportCode
                    this.activeIndex = 0
                    this.isShowAutoCompletePanel = false
                }
            },
            selectApt(){
                this.keyupEnter()
            }
        }
    }
</script>

<style scoped>
.popular-airport-box{
    position: absolute;
    top: 54px;
    z-index: 1;
    background: #fff;
    width: 480px;
    padding: 20px;
    -webkit-box-shadow: 0 0 8px rgba(0,0,0,.3);
    box-shadow: 0 0 8px rgba(0,0,0,.3);
}
.popular-header{
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
}
.popular-table>span{
    font-size: 14px;
    line-height: 20px;
    padding: 3px 10px;
    transition: all .2s;
    border-radius: 3px;
    float: left;
    cursor: pointer;
}
.popular-table>span:hover{
    background: #3d86e5;
    color: #fff;
}
.auto-complete-box{
    max-height: 330px;
    overflow: auto;
    z-index: 2;
    width: 344px;
    position: absolute;
    top: 54px;
}
.auto-complete-box>ul{
    padding: 0;
    background-color: #fff;
}
.auto-complete-box>ul>li{
    margin: 0;
    padding: 2px 5px;
    cursor: pointer;
    display: block;
    position: relative;
    font: menu;
    font-size: 12px;
    line-height: 25px;
    overflow: hidden;
}
.auto-complete-box>ul>li.active{
    background-color: #1e90ff;
    color: #fff;
}
</style>
