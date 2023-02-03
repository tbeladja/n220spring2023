function setup() {
    createCanvas(500, 500);
  }

function draw() {
  Blimp(mouseX,mouseY);
}

function Blimp(x,y) {
  
  
    //blimp
    fill(150);
    strokeWeight(2);
    rect(x,y+30,50,30);
    
    fill(204),
    stroke(250);
    strokeWeight(5);
    ellipse(x,y,200,80);
    
  }