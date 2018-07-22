$(function(){
    $.ajax({
        type:'get',
        url: "http://" + ip + ":9090/api/getinlanddiscount",
        success:function(info){
            console.log( info );
            $(".mmb_main ul").html(template("tpl1",info))
        }
    })
})