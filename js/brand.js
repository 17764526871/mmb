$(function () {
    var brandtitleid = +getSearch()['brandtitleid'];
    $.ajax({
        type: 'get',
        url: 'http://' + ip + ':9090/api/getbrand',
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid,
        },
        success: function (info) {
            $('.product_good ul').html(template('tpl1', info));
        }
    });
    //渲染销量排行
    var productid = 0;
    $.ajax({
        type: 'get',
        url: 'http://' + ip + ':9090/api/getbrandproductlist',
        dataType: 'json',
        data: {
            brandtitleid: brandtitleid,
            pagesize: 4,
        },
        success: function (info) {
            console.log(productid);
            $('.sales ul').html(template("tpl2", info));

            //评论页
            $.ajax({
                type: 'get',
                url: 'http://' + ip + ':9090/api/getproductcom',
                dataType: 'json',
                data: {
                    productid: productid,
                },
                success: function (info) {
                    console.log(info);
                    $('.commons ul').html(template("tpl3", info))
                }
            })

        }
    });

})