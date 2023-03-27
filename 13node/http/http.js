const http = require("http");
const fs = require("fs");
const path = require("path");

var reshtml;
 fs.readFile(
  path.join(__dirname, "../example/index.html"),
  "utf-8",
  function (err, data) {
    if (err) {
      console.log("defeat!");
    } else {
      reshtml= data;
    }
  }
);

console.log("🌼 - reshtml:", reshtml);

const server = http.createServer(function (req, res) {
  const url = req.url;
  const request = req.method;
  console.log("🌼 - server - req.url:", url);
  res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
//   res.end(`恭喜你，请求 ${url} 成功,用的${request}方法`);
  res.end(reshtml);
});

server.listen(20848, "127.0.0.1", function () {
  console.log("success!");
});
