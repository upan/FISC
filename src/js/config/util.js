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