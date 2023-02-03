function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(255);
    
    let res = polarPoint(100); // call the polarPoint function with r=100
    translate(100,100); // translate the origin to (100,100)
    ellipse(res.x, res.y, 10, 10); // draw a circle at (res.x, res.y) with a radius of 10
  }
  
  function polarPoint(r) {
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);
    return createVector(x,y);
  }
  