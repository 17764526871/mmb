$(function(){
    //渲染导航
    var productid= getSearch()['productid'];
    $.ajax({
        type:'get',
        url:'http://' + ip + ':9090/api/getproduct',
        data:{
            productid:productid 
        },
        dataType:'json',
        success:function(info){
            console.log( info );
            $('.product_item').html(template('tpl1',info));
            $('.price').html(template('tpl3',info));
            var name=info.result[0].productName;
            var newName=name.split(' ')[0];//截取后的商品名字
            //获取分类id
            var categoryid=info.result[0].categoryId;
            $.ajax({
                type:'get',
                url:'http://' + ip + ':9090/api/getcategorybyid',
                data:{
                    categoryid:categoryid
                },
                success:function(info){
                    info.result[0].newName=newName;
                    console.log( info.result[0] );
                    $('.productlist_nav').html(template('tpl2',info.result[0]))

                }
            })

        }
    })

    //渲染评论
    $.ajax({
        type: 'get',
        url: 'http://' + ip + ':9090/api/getproductcom',
        data: {productid: productid},
        success: function (info) {
          $('.comment ul').html(template('tpl4', info));
        }
      });
})