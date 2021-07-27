function actionbarlef() {
  var x = document.getElementById("barlef");
  if (x.className === "section-bar-left") {
    x.className += " responsive";
  } else {
    x.className = "section-bar-left";
  }
}

 $('#barlef').click(function (e){
       e.preventDefault();
       $('#wrapper').toggleClass("responsive");
     });