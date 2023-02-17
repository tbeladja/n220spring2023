var myDiv = document.getElementById("myDiv");
var clickCount = 0;

myDiv.addEventListener("click", function() {
  clickCount++;
  if (clickCount <= 3) {
    myDiv.innerHTML += "mc";
  }
});
