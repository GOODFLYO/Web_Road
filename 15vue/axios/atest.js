import fetch from "node-fetch";
import axios from "axios";
// var x = await axios.get("https://autumnfish.cn/search?keywords=起风了");
// const y = x.data.result.songs[0].id;
// console.log(y);

// let x;
// await axios
//   .get("https://autumnfish.cn/search?keywords=起风了")
//   .then((response) => {
//     // console.log(response.data);
//     x = response;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   console.log(x);

// console.log(x.result.songs[0].id);

// const y = x.result.songs[0].id;
// console.log(y);

var a;
var b = [];
await fetch("https://autumnfish.cn/search?keywords=五月天")
  .then((x) => x.json())
  .then((data) => (a = data.result));
b = a.songs;
for (let item in b) {
  console.log(b[item].name);
  console.log(b[item].artists[0].name);
}

// fetch("https://tools.jixiaob.cn/?id=1330348068&type=netease").then((a) =>
//   console.log(a)
// );

// await fetch("https://tools.jixiaob.cn/?id=1330348068&type=netease")
//   .then((response) => response.text())
//   .then((text) => {
//     let musicUrl = doc.querySelector("#download").value;
//     console.log(musicUrl);
//   })
//   .catch((error) => console.error(error));

// console.log(await fetch("https://autumnfish.cn/search?keywords=%E8%B5%B7%E9%A3%8E%E4%BA%86"));
