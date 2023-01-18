function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    background(20);
    //moon
    fill(255)
    ellipse(400,60,50,50)
    fill(20);
    strokeWeight(0);
    ellipse(410,55,40,40)
    
    //blimp
    fill(150);
    strokeWeight(2);
    rect(175,230,50,30);
    
    fill(200);
    strokeWeight(2);
    triangle(265,170,320,170,290,190);
    
    strokeWeight(2);
    triangle(265,220,330,230,290,205);
    
    fill(204),
    stroke(250);
    strokeWeight(5);
    ellipse(200,200,200,80);
    
    fill(150);
    strokeWeight(1);
    triangle(150,200,190,200,175,205);
    
    //smoke coming out of blimp
    fill(100);
    strokeWeight(0);
    ellipse(330,200,30,30);
    
    fill(100);
    strokeWeight(0);
    ellipse(370,210,20,20);
    
    fill(100);
    strokeWeight(0);
    ellipse(395,230,13,13);
    
    strokeWeight(0.2);
    line(20,150,100,150);
    line(75,120,155,120);
    line(290,150,370,150);
    line(290,260,370,260);
    line(75,290,155,290);
    line(20,260,100,260);
    
    
  }
  