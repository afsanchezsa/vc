// Configuration

let circles = 10; // num of circles
let radius1 = 120; // radius - circle 1
let radius2 = 70; // radius - circle 2
let frames = 13; // frame rate
let circleSize = 40;

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

  colors = [[113,0,255],[236,9,251],[254,0,143],[254,0,0],[252,127,4],[255,252,0],[131,255,0],[8,253,4],[0,254,119],[0,255,246],[8,138,251],[0,11,254]];
  
  for(let i=0; i<circles; i++){
    drawPoint(colors[i], radius1, false, i);
    drawPoint(colors[i], radius2, true, i);
  }

  count--;
  
  if (count < -1) {
    count = circles - 1;
  }
}


function drawPoint(colors, radius, inner, i) {
  if ((inner && i == count) || (!inner && i != count)) {
    fill(colors[0],colors[1],colors[2], colors[3]);
  } else {
    fill(colors[0],colors[1],colors[2], 0);
  }

  noStroke();
  let circ = (PI*2*radius/circles);
  let alpha = 2*asin(circ/(2*radius));
  let x = 355+radius*sin(alpha*i);
  let y = 205+radius*cos(alpha*i);
  ellipse(x,y,circleSize,circleSize);
}