const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use("/get", (req, res) => {
  res.send({
    name: "zs",
    age: 18,
  });
});

app.listen(80, function () {
  console.log("server running at 127.0.0.1:80");
});
