$(function () {
    var shopId = 0;
    var areaId = 0;
    render(shopId, areaId)
    //渲染主体部分的函数
    function render(shopId, areaId) {
        $.ajax({
            type: 'get',
            url: "http://" + ip + ":9090/api/getgsproduct",
            data: {
                shopid: shopId,
                areaid: areaId
            },
            success: function (info) {
                console.log(info);
                $('.product ul').html(template('tpl1', info))
            }
        });
    }
    //渲染店铺分类
    $.ajax({
        type: 'get',
        url: "http://" + ip + ":9090/api/getgsshop",
        success: function (info) {
            $('.one ul').html(template("tpl2", info));
        }
    })
    //渲染地区分类
    $.ajax({
        type: 'get',
        url: "http://" + ip + ":9090/api/getgsshoparea",
        success: function (info) {
            console.log(info);
            $('.two ul').html(template("tpl3", info));
        }
    });

    //点击一级分类切换显示隐藏
    $('.mmb_nav li').on('click', function () {
        var boxid = $(this).data('id');
        console.log(boxid);
        $("." + boxid + "").toggleClass('dsn').siblings("div").addClass("dsn");

    })
    //点击添加类
    $('.nav_second ul').on('click', 'li', function () {
        //选择显示字体图标
        $(this).siblings().find('span').removeClass('mui-icon mui-icon mui-icon mui-icon-checkmarkempty');
        $(this).find('span').toggleClass('mui-icon mui-icon mui-icon mui-icon-checkmarkempty');

    })

    // 店铺分类传id渲染
    $(".one").on('click', 'li', function () {
        //替换文本
        var text=$(this).find('a').text();
        $('.dp').text(text);
        //渲染页面
        shopId=$(this).data('id');
        render(shopId,areaId);
    })
    //地区分类渲染
    $(".two").on('click', 'li', function () {
        //替换文本
        var text=$(this).find('a').text();
        text=text.trim()
        $('.dq').text(text.substr(0,2));
        //渲染页面
        shopId=$(this).data('id');
        render(shopId,areaId);
    })
})