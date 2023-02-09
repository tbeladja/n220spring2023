let rect1, rect2;

function setup() {
  createCanvas(400, 400);
  
  rect1 = {
    x: 50,
    y: 200,
    width: 100,
    height: 200
  };
  
  rect2 = {
    x: 250,
    y: 200,
    width: 100,
    height: 200
  };
}

function draw() {
  background(220);
  
  fill(255, 0, 0);
  rect(rect1.x, rect1.y, rect1.width, rect1.height);
  
  fill(0, 0, 255);
  rect(rect2.x, rect2.y, rect2.width, rect2.height);
  
  if (keyIsDown(UP_ARROW)) {
    rect1.y -= 5;
    rect2.y += 5;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    rect1.y += 5;
    rect2.y -= 5;
  }
}