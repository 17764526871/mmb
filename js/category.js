$(function(){
    $.ajax({
        type:'get',
        url:'http://' + ip + ':9090/api/getcategorytitle',
        dataType:"json",
        success:function(info){
            $('.mmb_category ul').html(template("tpl1",info))

        }
    })
    // 渲染列表
    $('.mmb_category>ul').on('tap','.btn_son',function(){
        var id=$(this).data('id');
        console.log( id );
        $.ajax({
            type:'get',
            url:'http://' + ip + ':9090/api/getcategory',
            dataType:'json',
            data:{
                titleid:id
            },
            success:function(info){
                console.log( info );
                $('.mui-collapse-content').html(template('tpl2',info))
            }
        })
    })
   
})