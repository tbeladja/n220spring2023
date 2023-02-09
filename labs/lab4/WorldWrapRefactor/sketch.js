let ball = {
    x: 400,
    y: 300,
    xSpeed: -5,
    ySpeed: 5,
    size: 50,
    color: "#000000"
  };
  
  function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background(255);
    fill(ball.color);
    ellipse(ball.x, ball.y, ball.size, ball.size);
  
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
  
    if (ball.x >= width || ball.x <= 0) {
      ball.xSpeed *= -1;
    }
    if (ball.y >= height || ball.y <= 0) {
      ball.ySpeed *= -1;
    }
  }
  