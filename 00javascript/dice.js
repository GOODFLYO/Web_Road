//基本用法的async函数
let asyncFun = async function () {
  return 1;
};
console.log(asyncFun());
//会返回一个promise对象

console.log(await asyncFun());

var aa = await asyncFun();
console.log(aa);

//使用场景
//摇色子方法
function dice() {
  return new Promise((resolve, reject) => {
    let sino = parseInt(Math.random() * 6 + 1); //生成一个1~6之间的随机小数
    setTimeout(() => {
      resolve(sino);
    }, 2000);
  });
}
//异步方法
async function test() {
  let n = await dice();
  //await 关键字后面调用摇色子方法执行完毕之后，才进行变量赋值
  console.log("摇出来" + n); //最后打印出摇出来的数
}
test();

// 上面这段代码async中使await 摇色子()先执行，
// 等到三秒后执行完再把得到的结果赋值给左边的n，
// 也就是说test函数需要三秒钟才执行完成，
// 所以test函数是异步的，因此前面必须写async
