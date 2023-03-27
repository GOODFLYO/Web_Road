const express = require("express");
const session = require("express-session");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "IT",
    resave: false,
    saveUninitialized: true,
  })
);

app.post("/post", (req, res) => {
  if (req.body.username !== "admin" || req.body.password !== "000000") {
    return res.send({
      status: 1,
      msg: "登录失败",
    });
  }
  req.session.user = req.body;
  req.session.islogin = true;
  res.send({
    status: 0,
    msg: "登录成功",
  });
});

app.post("/post/logout", (req, res) => {
  req.session.destroy();
  res.send({
    msg: "退出登录",
  });
});

app.get("/get", (req, res) => {
  if (req.session.islogin !== true) {
    return res.send("没登陆");
  }
  res.send(req.session.user.username);
});

app.listen(80, function () {
  console.log("is listening 127.0.0.1");
});
