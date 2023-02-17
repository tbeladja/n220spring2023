var square = document.getElementById("square");
var size = 100;

square.addEventListener("click", function() {
  size *= 1.1; // Increase size by 10%
  square.style.width = size + "px";
  square.style.height = size + "px";
});