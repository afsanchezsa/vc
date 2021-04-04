let slider;
let drawGuidingLines = false;

function setup() {
  createCanvas(710, 400);
  slider = createSlider(150, 250, 200);
  slider.position(10, 10);
  slider.style('width', '80px');

  button = createButton('Click me!');
  button.position(120, 0);
  button.mousePressed(toggleGuidingLines);
}

function draw() {
  // Fondo
  background(255);
  
  
  distance = slider.value();;
  arrowSize = 50;
  distanceBetweenLines = 120;

  x1 = distance; 
  y = 70; 
  x2 = width - distance;

  strokeWeight(4);
  stroke(0);
  line(x1, y, x2, y);
  drawLeftArrow(x1, y, arrowSize);
  drawRightArrow(x2, y, arrowSize);

  y += distanceBetweenLines; 
  strokeWeight(4);
  line(x1, y, x2, y);
  drawRightArrow(x1, y, arrowSize);
  drawLeftArrow(x2, y, arrowSize);

  y += distanceBetweenLines;
  strokeWeight(4); 
  line(x1, y, x2, y);
  drawLeftArrow(x1, y, arrowSize);
  drawLeftArrow(x2, y, arrowSize);

  if (drawGuidingLines) {
    stroke(255, 0, 0);
    strokeWeight(2);
    line(x1, 0, x1, height);
    line(x2, 0, x2, height);
  }
}

function drawLeftArrow(x, y, size) {
  strokeWeight(4);
  line(x, y, x + size, y + size);
  line(x, y, x + size, y - size);
} 

function drawRightArrow(x, y, size) {
  strokeWeight(4);
  line(x - size, y - size, x, y);
  line(x - size, y + size, x, y);
} 

function toggleGuidingLines() {
  drawGuidingLines = !drawGuidingLines;
}