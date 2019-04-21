//通过node.js发送请求给 图灵api 获取聊天回复内容

//1. 引入http模块
var http = require("http");

var data = JSON.stringify({
	"key": "45d48e2340de40168a1e4a9d76319901",
	"info": "你是哥哥还是妹妹",
	"userid": "123456"
})

var req = http.request({
    method: "POST",
    host: "www.tuling123.com",
    protocal: "http://",
    port: "80",
    path: "/openapi/api",
    headers: {  
        "Content-Type": 'application/json',       
        "Content-Length": Buffer.byteLength(data)
    }  
}, function(res){

    var bufferList = [];
    res.on("data", function(chunk){
        bufferList.push(chunk);
    })

    res.on("end", function(){
        var result = Buffer.concat(bufferList);
        console.log(result.toString());
    })  

})

req.write(data);