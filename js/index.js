$(function(){
    $.ajax({
        type:"get",
        url:"http://" + ip + ":9090/api/getindexmenu",
        success:function(info){
            console.log( info );
            $('.mmb_nav ').html(template("tpl1", info));
            $('.mmb_nav a:nth-child(n+9)').hide();
            $('.mmb_nav a:nth-child(8)').on("click",function(){
           $('.mmb_nav a:nth-child(n+9)').toggle();
            })
        }
    })

    // 渲染商品
    $.ajax({
        type:'get',
        url:'http://' + ip + ':9090/api/getmoneyctrl',
        dataType:"json",
        success:function(info){
            console.log( info );
            $('.mmb_content ul').html(template("tpl2",info))
        }
    })
})