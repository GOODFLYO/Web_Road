try {
  async function A() {
    return new Promise((res, rej) => {
      console.log("欢迎来到青青草原");
      res("666");
    });
  }

    console.log(A);

//   console.log( A());

  //   const x = await A();
} catch (error) {
  console.log(error);
}
