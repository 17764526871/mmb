var http = require("http");
var server = http.createServer();

server.on("request",function(req,res){
    console.log( "收到请求" );

    res.write("欢迎光临");
    res.end();
});

server.listen(9999,function(){
    console.log( "欢迎光临" );
   
})