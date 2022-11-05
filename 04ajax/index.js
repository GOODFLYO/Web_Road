window.onload = function f() {
  var buttonName = document.getElementById("namebutton");
  var ife = document.getElementById("ife");
  var nametext = document.getElementById("name");

  buttonName.addEventListener("click", function v() {
    // alert(ife[0])
    ife.src = nametext.value;
  });
};
