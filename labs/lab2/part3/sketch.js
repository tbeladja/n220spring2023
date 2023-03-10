// Declare variables for x and y position of the circle, as well as xSpeed and ySpeed

// In the setup function, create canvas with width of 800 and height of 600

//In the draw function:

  // Clear background
  // Draw circle at current x and y position
  // Update x and y position by adding corresponding speed variables
  // Check if x position is at or past the width of the canvas (800) or if it is at or past 0
  // If either of these conditions are met, multiply xSpeed by -1 to change direction of movement
  // Check if y position is at or past the height of the canvas (600) or if it is at or past 0
  // If either of these conditions are met, multiply ySpeed by -1 to change direction of movement

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