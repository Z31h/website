var listActive = false;

function btnClick() {
  listActive = !listActive;
  var listItem = document.getElementById("content");
  if (listActive) {
    listItem.style.display = "block";
  } else {
    listItem.style.display = "none";
  }
}
