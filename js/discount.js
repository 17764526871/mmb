$(function(){
    var productid=+getSearch()['productid']
    $.ajax({
        type:"get",
        url:"http://" + ip + ":9090/api/getdiscountproduct",
        data:{
            productid:productid
        },
        success:function(info){
            console.log( info );
            $('.container').html(template('tpl1',info));
            $('.comment').html(template('tpl3',info));
        }
    })
})