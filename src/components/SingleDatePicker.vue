<template>
  
</template>

<script>
import {dateFormate} from 'src@/js/config/util.js'

export default {
    name: 'SingleDatePicker',
    props: ['searchDate'],
    data () {
        return {
            value1: dateFormate(new Date(), 'dd/MM/yyyy'),
            
        }
    }
}
</script>
