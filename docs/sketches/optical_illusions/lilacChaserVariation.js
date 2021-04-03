// Configuration

let circles = 10; // num of circles
let radius1 = 70; // radius - circle 1
let radius2 = 120; // radius - circle 2
let radius3 = 170; // radius - circle 3
let frames = 15; // frame rate
let circleSize = 25;

//  Implementation

let count = circles - 1;

function setup() {
  createCanvas(710, 400);
  frameRate(frames);
}

function draw() {
  background(220);

  stroke(0,0,0);
  line(345, 200, 365, 200);
  line(355, 190, 355, 210);
  
  for(let i=0; i<circles; i++){
    drawPoint([252,48,252,255], radius1, i);
    drawPoint([8,106,9, 180], radius2, i);
    drawPoint([176,54,43, 240], radius3, i);
  }

  count--;
  
  if (count < -1) {
    count = circles - 1;
  }
}


function drawPoint(colors, radius, i) {
  if (i != count) {
    fill(colors[0],colors[1],colors[2], colors[3]);
  } else {
    fill(colors[0],colors[1],colors[2], 0);
  }
  noStroke()
  let circ = (PI*2*radius/circles);
  let alpha = 2*asin(circ/(2*radius));
  let x = 355+radius*sin(alpha*i);
  let y = 205+radius*cos(alpha*i);
  ellipse(x,y,circleSize,circleSize);
}