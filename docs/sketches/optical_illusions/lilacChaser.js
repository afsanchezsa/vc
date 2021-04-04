let circles = 12; // num of circles
let radius = 130; // radius
// let circles = 40; // num of circles
// let radius = 170; // radius
let circleSize = 45;
let frames = 15; // frame rate

//  Code

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

  let circ = (PI*2*radius/circles);
  let alpha = 2*asin(circ/(2*radius));
  
  for(let i=0; i<circles; i++){
    if (i != count) {
      fill(252,48,252, 255);
    } else {
      fill(252,48,252, 0);
    }
    noStroke()
    
    let x = 355+radius*sin(alpha*i);
    let y = 200+radius*cos(alpha*i);
    ellipse(x,y,circleSize,circleSize);
  }

  count--;
  
  if (count < -1) {
    count = circles - 1;
  }

}