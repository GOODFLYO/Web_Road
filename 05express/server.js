const express = require("express");
const router = require("./router");
// console.log(router);

const app = express();
app.use((req, res, next) => {
  req.on("data", function () {
    // console.log(data);
  });
  next()
});
// app.use(express.static('static/blogConfig'))
app.use(router);

app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});
