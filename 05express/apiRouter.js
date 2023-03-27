const express = require("express");

const router = express.Router();

router.get("/api/jsonp", (req, res) => {
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

// 在这里挂在对应的路由

router.get("/get", (req, res) => {
  const query = req.query;
  // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.send({
    status: 0,
    msg: "get success!",
    data: query,
  });
});

router.post("/post", (req, res) => {
  const body = req.body;
  // res.setHeader("Access-Control-Allow-Methods", "GET");
  res.send({
    status: 0,
    msg: "post success!",
    data: body,
  });
});

router.delete("/delete", (req, res) => {
  res.send({
    status: 0,
    msg: "delete success!",
  });
});

module.exports = router;
