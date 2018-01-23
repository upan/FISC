<template>
  <DatePicker :value="value1" :options="options" format="dd/MM/yyyy" type="date" :placeholder="$t('m.datePickerPlaceholder')" style="width: 100%"></DatePicker>
</template>

<script>
import {dateFormate} from 'src@/js/config/util.js'
export default {
    name: 'SingleDatePicker',
    data () {
        return {
            value1: dateFormate(new Date(), 'dd/MM/yyyy'),
            options: {
                disabledDate (date) {
                    return date && (date.valueOf() < Date.now() - 2592000000 || date.valueOf() > Date.now() + 259200000);
                }
            }
        }
    }
}
</script>
