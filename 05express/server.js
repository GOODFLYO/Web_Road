//引入express
const express = require("express");
//创建应用对象
const app = express();
//创建路由规则
app.get("/", (request, response) => {
  //设置响应头 允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  
  //设置响应
  var mess = {
    name: 'zyn',
    sex: 'boy'
  }
  var m =   JSON.stringify(mess);
  response.send(m);
});
//app监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动，8000端口监听中···");
});
