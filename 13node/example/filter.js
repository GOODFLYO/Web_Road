const fs = require("fs");
const path = require("path");

const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;
const htmladdr = path.join(__dirname, "/index.html");

fs.readFile(htmladdr, "utf-8", function (err, data) {
  if (err) {
    console.log("读取失败" + err);
  }

  // 拆解出css js html文件
  else {
    // console.log(data);
    resolveCSS(data);
    resolveJS(data)
  }
});

// 定义处理css方法

function resolveCSS(htmlstr) {
  const r1 = regStyle.exec(htmlstr);
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  //   console.log("🌼 - resolveCSS - newCSS:", newCSS);
  fs.writeFile(path.join(__dirname, "/index.css"), newCSS, function (err) {
    if (err) {
      console.log("写入样式失败" + err);
    }
  });
}

// 定义处理js方法

function resolveJS(htmlstr) {
    const r1 = regScript.exec(htmlstr);
    // console.log(r1);
    
    const newJS = r1[0].replace("<script>", "").replace("</script>", "");
    fs.writeFile(path.join(__dirname, "/index.js"), newJS, function (err) {
      if (err) {
        console.log("写入脚本失败" + err);
      }
    });
  }

