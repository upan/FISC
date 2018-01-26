<template>
    <div class="flights-page" data-type="pager">
        <ul class="page-list">
            <li v-for="(page, index) in pageList" 
                :key="index" >
                <router-link 
                    v-if="page.toPage !== 'null'"
                    :class="{active: Number(page.page) === Number(currentPage) && Number(page.page) !== 0}" 
                    :to="page.toPage+''">{{page.text}}
                </router-link>
                <strong v-if="page.toPage === 'null'">{{ page.text }}</strong>
            </li>
        </ul>
        <span class="totalPages">
            {{ $t('m.flightListHeader.totalText') }}<span>{{ options.pageCount }}</span> {{ getUnit }}
        </span>
    </div>
</template>

<script>
export default {
  name: 'Pager',
  props: ['options'],
  data(){
      return {
          pageList: [],
          currentPage: 1
      }
  },
  watch: {
      '$route' : "changePage"
  },
  computed: {
      getUnit(){
          return this.$i18n.locale === 'zh-CN' ? '页' : this.options.pageCount <= 1 ? 'page' : 'pages'
      }
  },
  created(){
      this.changePage()
  },
  methods: {
      changePage(){
          let page = this.getRoutePage();
          this.currentPage = page;
          this.setPageList()
      },
      getRoutePage(){
          let page = this.$route.params.page;
          if(!page.toString().match(/^[0-9]+$/)){
              page = 1;
          }
          return page
      },
      getPageHeader(){
          return [
                {
                    page: 0, 
                    toPage: 1, 
                    text: this.$i18n.locale === 'zh-CN' ? '首页' : 'Home'
                },
                    {
                    page: 0, 
                    toPage: this.currentPage <= 1 ? 1 : Number(this.currentPage) - 1, 
                    text: this.$i18n.locale === 'zh-CN' ? '上一页' : 'Previous'
                }
            ]
      },
      getPageFooter(){
            return [
                {
                    page: 0, 
                    toPage: this.currentPage >= this.options.pageCount ? this.options.pageCount : Number(this.currentPage) + 1, 
                    text: this.$i18n.locale === 'zh-CN' ? '下一页' : 'Next'
                },
                {
                    page: 0, 
                    toPage: this.options.pageCount, 
                    text: this.$i18n.locale === 'zh-CN' ? '尾页' : 'Last'
                }
            ]
      },
      setPageList(){
          let count = Number(this.options.pageCount), 
            current = Number(this.currentPage),
            _arr = [];
          //总页数小于6
          if(count < 6){
              for(let i = 1;i < count + 1;i++){
                  _arr.push({
                      page: i,
                      toPage: i,
                      text: i
                  })
              }
          }else{//总页数大于6
              //当前页数小于5时 显示省略号
              if(current < 5){
                  for(let i = 1;i < 6; i++){
                      _arr.push({
                          page: i,toPage: i,text: i
                      })
                  }
                  _arr = _arr.concat([
                      {page: 0, toPage: 'null', text: '...'},
                      {page: count, toPage: count, text: count}
                  ])
              }else{
                  //当前页在末尾时
                  if(current < count - 3){
                    for(let i = current - 2; i < current + 3; i++) {
                        _arr.push({
                            page: i,toPage: i,text: i
                        })
                    }
                    _arr = _arr.concat([
                        {page: 0, toPage: 'null', text: '...'},
                        {page: count, toPage: count, text: count}
                    ])
                  }else{
                    _arr = _arr.concat([
                        {page: 1, toPage: 1, text: 1},
                        {page: 0, toPage: 'null', text: '...'}
                    ])
                    for(let i = count - 4; i < count + 1; i++) {
                        _arr.push({
                            page: i,toPage: i,text: i
                        })
                    }
                  }
              }
          }
          //设置pageList
          this.pageList = this.getPageHeader().concat(_arr).concat(this.getPageFooter());
      }
  }
}
</script>


<style scoped>
    .flights-page{
        text-align: center;
        margin: 25px 0 35px 0;
    }
    .page-list, .page-list>li{
        display: inline-block
    }
    .page-list>li{
        margin: 0 3px
    }
    .page-list>li>a{
        padding: 8px 12px;
        border: 1px solid #aaa;
        color: #333;
        border-radius: 5px;
    }
    .page-list>li>a.active{
        background: #5096FA;
        color: #fff;
        border-color: #5096FA
    }
    .page-list>li>a:hover{
        border-color:  #5096FA;
        box-shadow: 0 0 3px #5096FA;
    }
    .totalPages{
        margin-left: 5px;
    }
    .totalPages>span{
        font-weight: bold;
        margin: 0 3px;
    }
</style>

