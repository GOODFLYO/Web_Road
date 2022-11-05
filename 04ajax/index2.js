var pregrant = false;
var promise = new Promise((reslove, reject) => {
  if (pregrant == true) {
    reslove("孩子他爹");
  } else {
    reject("老公");
  }
});

promise
  .then((name) => {
    console.log(name);
  })
  .catch((name) => {
    console.log(name);
  })
  .finally(() => {
    console.log("你被绿了哈哈哈");
  });
