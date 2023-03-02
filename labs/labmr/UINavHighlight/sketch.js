let divElements = [];
let topDiv;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // create six divs with different words
  for (let i = 0; i < 6; i++) {
    let divElement = createDiv("Div " + (i + 1));
    divElement.position(i * (width / 6), height / 2);
    divElement.style('text-align', 'center');
    divElement.style('font-size', '30px');
    divElement.style('cursor', 'pointer');
    divElement.mouseClicked(function() {
      handleClick(divElement);
    });
    divElements.push(divElement);
  }
  
  // create the top div
  topDiv = createDiv("");
  topDiv.position(0, height / 4);
  topDiv.style('text-align', 'center');
  topDiv.style('font-size', '50px');
}

function draw() {
  background(255);
}

function handleClick(clickedDiv) {
  // remove highlight from other divs
  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i] !== clickedDiv) {
      divElements[i].style('background-color', '');
      divElements[i].style('font-weight', 'normal');
    }
  }
  
  // add highlight to the clicked div
  clickedDiv.style('background-color', '#FFFF00');
  clickedDiv.style('font-weight', 'bold');
  
  // add the clicked div's text to the top div
  topDiv.html(clickedDiv.html());
}
