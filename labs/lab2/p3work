let x = 400;
let y = 300;
let xSpeed = -5;
let ySpeed = 5;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  ellipse(x, y, 50, 50);

  x += xSpeed;
  y += ySpeed;

  if (x >= width || x <= 0) {
    xSpeed *= -1;
  }
  if (y >= height || y <= 0) {
    ySpeed *= -1;
  }
}