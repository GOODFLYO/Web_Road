var date = new Date();
var year = date.getFullYear(); //  返回的是年份
var month = date.getMonth() + 1; //  返回的月份上个月的月份，记得+1才是当月
var dates = date.getDate() - 1; //  返回的是几号
var day = date.getDay() - 1; //  周一返回的是1，周六是6，但是周日是0
var arr = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
// console.log("今天是" + year + "年" + month + "月" + dates + "日" + arr[day]);
//首页日期
