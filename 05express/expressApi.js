const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const router = require("./apiRouter");
app.use(express.urlencoded({ extended: false }));

// 客户端访问进入的接口
app.use("/", router);
app.get("/api/jsonp", (req, res) => {
  // console.log("jsonp is ok");
  const funcName = req.query.callbak;
  // console.log(funcName);
  const data = {
    name: "zs",
    age: 19,
  };
  const scriptStr = `${funcName}(${JSON.stringify(data)})`;
  res.send(scriptStr);
});

// 无论用什么请求都是返回"你好，恭喜你成功访问此网页"
// app.use("/", function (req, res) {
//   res.send("你好，恭喜你成功访问此网页");
// });

app.listen(80, function () {
  console.log("express running at 127.0.0.1");
});
