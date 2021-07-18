let mosaic;
let symbol1;
let myImage;
let debug;
const WIDTH_PIXEL=150;
const HEIGHT_PIXEL=150;
const NUM_IMAGES=30;
function preload(){
 myImage=loadImage('/vc/docs/sketches/images/omkara.png')
 // symbol1=loadImage('../sketches/images/ascii.png')
  mosaic=loadShader('/vc/docs/sketches/shaders/shader.vert','/vc/docs/sketches/shaders/hardwarePhotomosaic.frag')
}

function setup(){
  createCanvas(600, 600,WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(mosaic);
  mosaic.setUniform('image',myImage)
  
  //mosaic.setUniform('resolution',30)
  mosaic.setUniform('WIDTH_PIXEL',WIDTH_PIXEL);
  mosaic.setUniform('NUM_IMAGES',NUM_IMAGES);
  mosaic.setUniform('HEIGHT_PIXEL',HEIGHT_PIXEL);
  debug=true
  mosaic.setUniform('debug',debug)
  let img = createImage(WIDTH_PIXEL*NUM_IMAGES, HEIGHT_PIXEL);
img.loadPixels();
let w;

for (let i = 0; i < img.width; i++) {
    w=Math.floor((i)/(WIDTH_PIXEL))/NUM_IMAGES;
    
  for (let j = 0; j < img.height; j++) {

    img.set(i, j, color(255*w, 255*w, 255*w));
  }
}
img.updatePixels();
//image(img, 0, 0);
mosaic.setUniform('symbol1',img)
}

function draw(){
  background(33);
  cover(true);
}

function cover(texture=false){
  beginShape();
  if (texture) {
    //texture(img);
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

function keyPressed(){
  if(key==='d'){
      debug=!debug;
      mosaic.setUniform('debug',debug)
  }
}