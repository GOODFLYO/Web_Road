// 包的入口文件
const dataFormat = require("./src/dateformat");
const sayHello = require("./src/sayhello");


// ...指的是展开对象里面的函数
module.exports = {
  ...dataFormat,
  ...sayHello,
};
