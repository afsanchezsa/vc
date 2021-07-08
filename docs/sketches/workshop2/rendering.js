
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
  noStroke();
beginShape();

  //texture(img);
  let Acoord=[-width / 4, -height / 4,-10];
  let Bcoord=[width / 4, -height / 4, 80];
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

baseCoord=[-200,-240]
ancho=400
profundidad=-120
vertex(baseCoord[0],baseCoord[1],profundidad);
vertex(baseCoord[0],baseCoord[1]+ancho,profundidad)
vertex(baseCoord[0]+ancho,baseCoord[1]+ancho,profundidad)
vertex(baseCoord[0]+ancho,baseCoord[1],profundidad)
endShape(CLOSE);

let focus=[(baseCoord[0]*2+ancho)/2,(baseCoord[1]*2+ancho)/2,-300]
beginShape(POINTS);

vertex(focus[0],focus[1],focus[2]);
endShape();
dVector=[focus[0]-Acoord[0],focus[1]-Acoord[1],focus[2]-Acoord[2]]


beginShape(LINES)
stroke(255,0,0);
vertex(Acoord[0],Acoord[1],Acoord[2]);
vertex(focus[0],focus[1],focus[2]);
endShape();

beginShape(LINES)
stroke(0,255,0);
vertex(Bcoord[0],Bcoord[1],Bcoord[2]);
vertex(focus[0],focus[1],focus[2]);
endShape();
beginShape(LINES)
stroke(0,0,255);
vertex(Ccoord[0],Ccoord[1],Ccoord[2]);
vertex(focus[0],focus[1],focus[2]);
endShape();



}
function projection(coord){

}