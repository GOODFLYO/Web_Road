const fs = require("fs");
// 文件读取模块
fs.readFile("t.txt", function (err, data) {
  console.log(data);
});

console.log(__dirname);
console.log(__filename);
