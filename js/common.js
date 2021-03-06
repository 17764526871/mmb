$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        scrollY: true, //是否竖向滚动
        scrollX: false, //是否横向滚动
        startX: 0, //初始化时滚动至x
        startY: 0, //初始化时滚动至y
        indicators: false, //是否显示滚动条
        deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
        bounce: true //是否启用回弹
    });
    //点击返回顶部
    $('.top').on("click", function () {
        mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100); //100毫秒滚动到顶
    })
    

})

function getSearch(){
    var search=location.search;
    search=decodeURI(search);
    search=search.slice(1);
    var arr= search.split('&');
    var obj={};
    for(var i=0;i<arr.length;i++){
        var key =arr[i].split('=')[0];
        var value=arr[i].split("=")[1];
        obj[key]=value;
    }
    return obj
}