$(function () {
    // 渲染商品
    var pageid = +getSearch()["pageid"] || 0;
    var numPage;
    $.ajax({
        type: 'get',
        url: 'http://' + ip + ':9090/api/getmoneyctrl',
        data: {
            pageid: pageid
        },
        dataType: "json",
        success: function (info) {       
            numPage = Math.ceil(info.totalCount / info.pagesize);
            info.numPage = numPage;
            info.pageid = pageid+1;
            $('.mmb_content ul').html(template("tpl2", info))
            $("#page").html(template("tpl1", info));
        }
    })
    //分页
    var url = 'moneyctrl.html'
    //上一页
    $('.prev').on('click', function () {
        if (pageid <=numPage&&pageid>0) {
            var newUrl = url + "?pageid=" + (pageid - 1);
            location.href = newUrl;
        }
    })
    //下一页
    $('.next').on('click', function () {
        if ( pageid<numPage-1&&pageid>=0) {
            var newUrl = url + "?pageid=" + (pageid + 1);
            location.href = newUrl;
        }
    })
    //selected
    $("#page").on('change', function () {
        var id = $(this).val()

        location.href=url+'?pageid='+(id-1);
    })

})