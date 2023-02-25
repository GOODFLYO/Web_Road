var items = document.getElementsByClassName("option-item");
for (x in items) {
  if ((x - 2) % 5 == 0) {
    items[x].getElementsByTagName("input")[0].checked = true;
  }
}

// document.getElementsByClassName("option-list")[3].getElementsByTagName("input")[0].checked
