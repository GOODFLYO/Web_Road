const path = require("path");
const fs = require("fs");
const express = require("express");
const exp = require("constants");
const app = express();
// const middleware = require("./middleware");
const router = express.Router();
// const mw = require(middleware);

const resadd = path.join(__dirname, "/index.html");
var resstr;
fs.readFile(resadd, "utf-8", function (err, data) {
  console.log("读取成功");
  resstr = data;
});

// router.get("/user/list", (req, res) => {
//   res.send(resstr);
// });


router.post("/user", (req, res) => {
  res.send(resstr);
});

module.exports = router;
