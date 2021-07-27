function actionbarlef() {
  var x = document.getElementById("barlef");
  if (x.className === "section-bar-left") {
    x.className += " responsive";
  } else {
    x.className = "section-bar-left";
  }
}