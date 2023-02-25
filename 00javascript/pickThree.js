var members = [
  "辻峎",
  "王权",
  "guoli",
  "小羊",
  "喜羊羊",
  "灰太狼",
  "懒羊羊",
  "美羊羊",
  "红太狼",
  "神蛇",
  "大花",
  "鹿丸",
  "须佐",
];
var totals = members.length;


function random(number){
  var arr = [];　
  while(arr.length < number) {  
      var num = Math.floor(Math.random() * totals);  
      if(arr.length === 0){   
          arr.push(num);
      }else {
          for (var i = 0; i < arr.length; i++) {   
              if (arr.join(',').indexOf(num) < 0) {
                  arr.push(num);
              }
          }
      }
  }

  return arr;
}

var arrRandom = random(3);
var a, b, c;
a = arrRandom[0];
b = arrRandom[1];
c = arrRandom[2];
console.log("--------------------------------------\n");
console.log("本次参与抽奖的人数是：");
console.log(totals);
console.log("\n--------------------------------------");
console.log("参与抽奖的人有：");
for (x in members) {
  console.log(members[x]);
}
console.log("\n--------------------------------------");
console.log("中奖成员序号是：");

console.log(a, b, c);
console.log("\n--------------------------------------");
console.log("中奖成员是：");
console.log(members[a], members[b], members[c]);
