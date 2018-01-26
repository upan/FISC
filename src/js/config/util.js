export const dateFormate = (date, fmt) => {
    var o = {
        "M+": date.getMonth() + 1, //month
        "d+": date.getDate(), //date
        "h+": date.getHours(), //hour
        "m+": date.getMinutes(), //min
        "s+": date.getSeconds(), //second
        "S": date.getMilliseconds() //millsecond
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export const secondToDateByFormate = (second, fmt) => {
    second = Number(second);
    let date = new Date(second * 1000)
    return dateFormate(date, fmt);
}

export const mappingStatus = (statusCode) => {
    statusCode = Number(statusCode);
    var obj = {
        0: 'Schedule',
        1: 'Take-off',
        2: 'Arrived',
        3: 'Cancelled',
        4: 'Delay',
        5: 'Divert',
        9: 'Boarding Finished',
        11: 'Returning',
        12: 'Boarding',
        73: 'Cancel in Advance'
    }
    return obj[statusCode];
}

export const numberToEnMonthName = (month) => {
    month = Number(month);
    let obj = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    }
    return obj[month];
}