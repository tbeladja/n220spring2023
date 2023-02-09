let myObject = {
    width: 100,
    height: 50,
    color: 'red',
    x: 50,
    y: 75
  };
  
  function drawObject(obj) {
    fill(obj.color);
    rect(obj.x, obj.y, obj.width, obj.height);
  }
  
  function setup() {
    createCanvas(200, 200);
  }
  
  function draw() {
    drawObject(myObject);
  }
  