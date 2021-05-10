let iA;

function preload() {
  iA = loadImage('../sketches/images/a.png');

}
function setup(){
  createCanvas(710, 400,WEBGL);
  //iA.resize(5,5);
  
  textureMode(NORMAL);
  noLoop();
  
}

function draw() {
  
    //image(iA, 0, 0);
    beginShape();
    texture(iA);
    vertex(0, 0, 0, 0, 0);
    vertex(5, 0, 0, 1, 0);
    vertex(5, 5, 0, 1, 1);
    vertex(0,5, 0, 0, 1);
    endShape();
    
}

function cover(){
  
}
