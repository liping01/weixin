
//1. 引入xml2js包
var xml2js = require("xml2js");

// xml2js包提供了  将xml数据和js对象进行转换的方法

//1. 将xml转换成js对象
//explicitArray：因为解析的时候，默认的会将所有的内容作为数组存储，但是我们这里不需要这么做
//explicitArray这个参数，可以设置不以数组形式存储
var parser = new xml2js.Parser({explicitArray: false});

//2. 将js对象转换成xml格式的数据
//由于微信服务器所需要的数据的特殊格式，我们
//1. 需要去掉文档声明doctype
//2. 将根节点的名称改成xml
//3. 给节点内容加上CDATA
var builder = new xml2js.Builder({rootName: "xml", cdata: true, headless: true});


var str = `<xml>
<ToUserName><![CDATA[公众号]]></ToUserName>
<FromUserName><![CDATA[粉丝号]]></FromUserName>
<CreateTime>1460537339</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[这里是用户发送的正文内容]]></Content>
<MsgId>6272960105994287618</MsgId>
</xml>`;

//1. 调用parser的方法，将xml数据解析成js对象
// parser.parseString(str, function(err, result){
//     //解析完成后，自动调用这个回调函数
//     //result就是解析完成后的结果
//     console.log(result);
// })

//2. 调用builder的方法，将js对象转换成xml格式的数据
var obj = {
    name: "潘明<>",
    age: 18
}

var result = builder.buildObject(obj);
console.log(result);