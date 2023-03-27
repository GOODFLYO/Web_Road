// var scr = document.createElement("script");
// scr.src = "https://cdn.jsdelivr.net/npm/vue/dist/vue.js";
// document.body.appendChild(scr);

import fetch from "node-fetch";
fetch("https://autumnfish.cn/search?keywords=%E8%B5%B7%E9%A3%8E%E4%BA%86")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
