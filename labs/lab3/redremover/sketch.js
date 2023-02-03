function removeRed(color) {
    color.setRed(0);
    return color;
  }
  
  function draw() {
    let noRed = removeRed(color(170, 200, 150));
    fill(noRed);
  
    ellipse(50, 50, 50, 50);
  }
  