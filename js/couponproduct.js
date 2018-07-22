$(function () {
    var couponid = +getSearch()['couponid'];
    $.ajax({
        type: 'get',
        url: "http://" + ip + ":9090/api/getcouponproduct",
        data: {
            couponid: couponid
        },
        success: function (info) {
            console.log(info);
            $('.mmb_main ul').html(template('tpl1', info))
            $('.modal ul').html(template('tpl2', info))
        }
    })
    //点击显示模态框

    $('.mmb_main ul').on('click', 'li', function () {
        $('.modal').removeClass('dsn');
        //获取img高度赋值给box
        var height = $('.modal').find('img').height();
        var allheight = $('.modal').find('ul').height();
        //获取总个数
        var num = Math.ceil(allheight / height);
        $('.modal .img').height(height);
        //显示第几张
        //获取当前的id
        var id = $(this).data('id');
        $('.img ul').css('top', -id * height + 'px')
        //轮播图效果右键功能
        $('.right').on('click', function () {
            if(id>=num){
                return
            };
            $('.img ul').css('top', -(id++ )* height + 'px');      
        })
        //轮播图左键的功能
        $('.left').on('click', function () {
            if(id<=0){
                return
            };
            $('.img ul').css('top', -(--id )* height + 'px');      
        })

    })

    //点击模态框消失
    $(".close").on('click', function () {
        $('.modal').addClass('dsn');
    })



})