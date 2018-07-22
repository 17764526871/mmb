$(function () {
    //渲染导航
    $.ajax({
        type: 'get',
        url: "http://" + ip + ":9090/api/getbaicaijiatitle",
        success: function (info) {
            console.log(info);
            $('.nav_list').html(template('tpl2', info));
        }
    })

    render(0)
//根据导航id异步渲染
    $('.nav').on('tap', "a", function () {
        var titleid= $(this).data('id');
        console.log( titleid );
        render(titleid);
    })

        //渲染每页
        function render(id) {
            $.ajax({
                type: "get",
                url: 'http://' + ip + ':9090/api/getbaicaijiaproduct',
                data: {
                    titleid: id
                },
                success: function (info) {
                    $('.mmb_main ul').html(template('tpl1', info));
                }
            })
        }
})