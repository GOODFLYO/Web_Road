function test() {
  console.log("测试");
  return function xx() {
    console.log("测试2");
  };
}

console.log("------------1-----------");
test();

console.log("------------2-----------");
const a = test();

console.log("------------3-----------");
console.log(a);

console.log("------------4-----------");
a();

console.log("------------5-----------");
const b = test;

console.log("------------6-----------");
console.log(b);

console.log("------------7-----------");
b()();
