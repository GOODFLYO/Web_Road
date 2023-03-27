async function A() {
  return new Promise((res, rej) => {
    console.log("欢迎来到青青草原");
    res("666");
  });
}

try {
  console.log("------------------");
  A();

  console.log("------------------");
  console.log(A);

  console.log("------------------");
  console.log(A());

  console.log("------------------");
  console.log(
    A().then((name) => {
      return name;
    })
  );
  // const x = await A();
} catch (error) {
  console.log(error);
}
