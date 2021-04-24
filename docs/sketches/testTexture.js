let pg;
function setup(){
    createCanvas(500,500,WEBGL);
   ortho(-width,width,-height,height);
}

function draw(){
    background(200);
fill(color(255,0,0));
cover(false);
orbitControl();//poscicion de camara a partir del mouse
}

function cover(texture=false){
    beginShape();
if (texture) {
    texture(pg);
  vertex(-width / 2, -height / 2, 0, 0, 0);
  vertex(width / 2, -height / 2, 0, 1, 0);
  vertex(width / 2, height / 2, 0, 1, 1);
  vertex(-width / 2, height / 2, 0, 0, 1);
}
else {
  vertex(-width / 2, -height / 2, 0);
  vertex(width / 2, -height / 2, 0);
  vertex(width / 2, height / 2, 0);
  vertex(-width / 2, height / 2, 0);
}
endShape(CLOSE);
}