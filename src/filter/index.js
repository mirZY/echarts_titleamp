import Vue from 'vue'

Vue.filter('Week', par => {
    let WeekText = "";
    switch (Number(par)) {
        case 0:
            WeekText = '周日'
            break;
        case 1:
            WeekText = '周一'
            break;
        case 2:
            WeekText = '周二'
            break;
        case 3:
            WeekText = '周三'
            break;
        case 4:
            WeekText = '周四'
            break;
        case 5:
            WeekText = '周五'
            break;
        case 6:
            WeekText = '周六'
            break;
        case 7:
            WeekText = '零期'
            break;
        case 8:
            WeekText = '一期'
            break;
        case 9:
            WeekText = '二期'
            break;
        case 10:
            WeekText = '三期'
            break;
        case 11:
            WeekText = '四期'
            break;
        case 12:
            WeekText = '每天'
            break;
        case 13:
            WeekText = '负一期'
            break;
        case 14:
            WeekText = '工作日'
            break;
        case 15:
            WeekText = '隔天'
            break;
        default:
            WeekText = ''
            break;
    }

    return WeekText
});