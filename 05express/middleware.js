const express = require("express");
const app = express();

module.exports = app.use((req, res, next) => {
  req.on("data", function () {
    console.log(data);
  });
});
