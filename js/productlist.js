$(function () {
    var category = getSearch()['category']
    var categoryid = getSearch()['categoryid']
    var pageid = getSearch()['pageid']
    var numPage = 0;
    //导航渲染
    $('.productlist_nav a:nth-child(3)').html(category)
    //第一次渲染
    $.ajax({
            type: 'get',
            url: 'http://' + ip + ':9090/api/getproductlist',
            dataType: 'json',
            data: {
                categoryid: categoryid,
                pageid: pageid
            },
            success: function (info) {
                console.log(info);
                $('.products ul').html(template("tpl1", info));
                numPage = Math.ceil(info.totalCount / info.pagesize);
                for (var i = 1; i <= numPage; i++) {
                    $('.middle2 select').append('<option value="' + i + '" >' + i + '/' + numPage + '</option>')
                }
            }
        })

    


    // $.ajax({
    //     type: 'get',
    //     url: 'http://' + ip + ':9090/api/getproductlist',
    //     dataType: 'json',
    //     data: {
    //         categoryid: categoryid,
    //         pageid: pageid
    //     },
    //     success: function (info) {
    //         console.log(info);
    //         $('.products ul').html(template("tpl1", info));
    //         numPage = Math.ceil(info.totalCount / info.pagesize);
    //         info.pageid = pageid;
    //         info.numPage = numPage;
    //         $("#page").html(template('tpl2', info));
            
            
    //     }
    // })

    //分页功能
    //点击上一页翻页
    // $('.prev').on('click', function () {
    //     var url = location.search;
    //     if (pageid <= numPage && pageid > 1) {
    //         var newUrl = url.substr(0, url.length - 1) + (--pageid);
    //         location.href = newUrl;
    //     }
    // })
    // $('.next').on('click', function () {
    //     var url = location.search;
    //     if (pageid < numPage && pageid >= 1) {
    //         var newUrl = url.substr(0, url.length - 1) + (++pageid);
    //         console.log(newUrl);
    //         location.href = newUrl;
    //     }
    // })
    // $("#page").on('change', function () {
    //     var url = location.search;
    //     var id = $(this).val();
    //     location.href = url.substr(0, url.length - 1) + id;

    // })
    //分页第二种实现方式
    //切换分页实现异步请求
    $("#page2").on('change', function () {
        var id = $(this).val();
        console.log(id);
        render(id)
    })
    $('.prev2').on('click', function () {
        var id=+$("#page2").val();
        if(id<=1){
            return;
        }
        id=id-1;
        render(id);
        $("#page2").val(id)
    })
    $('.next2').on('click', function () {
        var id=+$("#page2").val();
       if(id>=numPage){
           return;
       }
       id=id+1;
       render(id);
       $("#page2").val(id)
    })

  
    function render(id) {
        $.ajax({
            type: 'get',
            url: 'http://' + ip + ':9090/api/getproductlist',
            dataType: 'json',
            data: {
                categoryid: categoryid,
                pageid: id
            },
            success: function (info) {      
                $('.products ul').html(template("tpl1", info));

            }
        })
    }

})