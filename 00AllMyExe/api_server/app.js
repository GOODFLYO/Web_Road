const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: false }));
// 路由之前封装好中间件
app.use((req, res, next) => {
  // 设置status的默认值为1
  res.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

const userRouter = require("./router/user");

app.use("/api", userRouter);

app.listen(3007, () => {
  console.log("api-server running at http://127.0.0.1:3007");
});
