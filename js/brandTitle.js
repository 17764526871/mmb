$(function(){
    //  3.动态渲染 ajax
  $.ajax({
    type: 'get',
    url: 'http://' + ip + ':9090/api/getbrandtitle',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.products ul').html(template("tpl1", info))
    }
  })
  mui('body').on('tap','a',function(){document.location.href=this.href;});
})