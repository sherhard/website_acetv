function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "flex";
    x.style.flexDirection="column";
  } else {
    x.style.display = "none";
  }
}