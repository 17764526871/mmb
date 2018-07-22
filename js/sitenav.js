$(function(){
      //动态渲染
  $.ajax({
    type:'get',
    url: "http://" + ip + ":9090/api/getsitenav",
    success:function (info) {
      $('.info').html(template('tpl1',info));
    }
  })
})