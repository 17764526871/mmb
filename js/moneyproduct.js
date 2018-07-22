$(function(){
    var productid=+getSearch()['productid']
    $.ajax({
        type:"get",
        url:"http://" + ip + ":9090/api/getmoneyctrlproduct",
        data:{
            productid:productid
        },
        success:function(info){
            $('.container').html(template('tpl1',info));
            $('.productlist').html(template('tpl2',info));
            $('.comment').html(template('tpl3',info));
        }
    })
})