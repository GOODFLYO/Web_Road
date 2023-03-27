window.onload = function () {
  // alert("测试中······")
  const gettextarea = document.getElementById("text_area");
  const getreset = document.getElementById("treset");
  const gettsubmit = document.getElementById("tsubmit");
  //   console.log(gettextarea.value);
  gettsubmit.addEventListener("click", function () {
    if (gettextarea.value == "") {
      alert("请输入留言");
      gettextarea.innerHTML = 
      return false;
    }
  });
};
