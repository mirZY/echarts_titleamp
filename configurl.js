let url;
if (window.location.hostname == "bi.zhugexuetang.com") { //生产环境
    url = "https://api.bi.zhugexuetang.com";
} else {
    // url = "http://api.data.zyuwen.cn";
    url = "https://api.bi.zhugexuetang.com";
}

export const AjaxUrl = url;