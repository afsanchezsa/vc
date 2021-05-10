let iA;
let img;
const pixelSize=5;
let textures=[];
function preload() {
 for (let p=1;p<58;p++){
   if(p!=39){
    let im=loadImage(`../sketches/images/generatedtext (${p}).png`);
    textures.push(im);
  
   }
  
 }
  iA = loadImage('../sketches/images/a.png');
  img=loadImage('../sketches/lenna.png');
}
function setup(){
  createCanvas(710, 400,WEBGL);
  textureMode(NORMAL);
  noLoop();
  img.resize(img.width/pixelSize,img.height/pixelSize);

  
}

function draw() {
  
    //image(iA, 0, 0);
  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++ ) {
      //let c = convolution(x, y, matrix, matrixsize, img);
      //let c= img.get(y,x);
      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y*img.width) * 4;
      let brigthness=(img.pixels[loc] +img.pixels[loc + 1] +img.pixels[loc + 2] )/3;
      //img.pixels[loc + 3] = alpha(c);
      //console.log(brigthness/5);
     // cover(x*pixelSize-(width/2),y*pixelSize-(height/2),textures[Math.floor(brigthness/5)]);
     cover(x*pixelSize-(width/2),y*pixelSize-(height/2),textures[Math.floor(brigthness/5)]);
      
    }
  }
  
  
    
}

function cover(x,y,img){
  ///y=y*-1;
  beginShape();
  texture(img);
  vertex(x, y-pixelSize, 0, 0, 0);
  vertex(x+pixelSize, y-pixelSize, 0, 1, 0);
  vertex(x+pixelSize, y, 0, 1, 1);
  vertex(x,y, 0, 0, 1);
  endShape();
}
