
let img;

function setup(){
  createCanvas(720,540,WEBGL);
  img=loadImage('/vc/docs/sketches/lenna.png');
  ortho(-width/2,width/2,-height/2,height/2);
   textureMode(NORMAL);
}

function draw(){
background(255);

cover(true);
//texture(img);
orbitControl();//poscicion de camara a partir del mouse

}

function cover(texture=false){
beginShape();

  //texture(img);
  let Acoord=[-width / 4, -height / 4,0];
  let Bcoord=[width / 4, -height / 4, 0];
  let Ccoord=[-width / 4, height / 4, 0];
  fill (255,0,0);
  vertex(Acoord[0], Acoord[1], Acoord[2]);
  fill(0,255,0);
  vertex(Bcoord[0], Bcoord[1], Bcoord[2]);
 // vertex(width / 2, height / 2, 0, 1, 1);
 fill(0,0,255);
  vertex(Ccoord[0], Ccoord[1], Ccoord[2]);


endShape(CLOSE);
beginShape();
fill(0);
/*vertex(-300,-200,0);
vertex(0,-200,-300);
vertex(0,100,-300);
vertex(-300,100,0);
*/
vertex(0,0,-20);
vertex(0,200,-20)
vertex(200,200,-20)
vertex(200,0,-20)


endShape(CLOSE);
}
function projection(coord){

}