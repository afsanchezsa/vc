
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
dVector_A=[focus[0]-Acoord[0],focus[1]-Acoord[1],focus[2]-Acoord[2]]
dVector_B=[focus[0]-Bcoord[0],focus[1]-Bcoord[1],focus[2]-Bcoord[2]]
dVector_C=[focus[0]-Ccoord[0],focus[1]-Ccoord[1],focus[2]-Ccoord[2]]

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
let tA=((profundidad-Acoord[2])/dVector_A[2])-0.01;
let redPoint=[Acoord[0]+tA*dVector_A[0],Acoord[1]+tA*dVector_A[1],Acoord[2]+tA*dVector_A[2]]

beginShape(POINTS)
strokeWeight(10);
stroke(255,0,0);
vertex(redPoint[0],redPoint[1],redPoint[2])
endShape()
let tB=((profundidad-Bcoord[2])/dVector_B[2])-0.01;
let greenPoint=[Bcoord[0]+tB*dVector_B[0],Bcoord[1]+tB*dVector_B[1],Bcoord[2]+tB*dVector_B[2]]
beginShape(POINTS)
strokeWeight(10);
stroke(0,255,0);
vertex(greenPoint[0],greenPoint[1],greenPoint[2])
endShape()

let tC=((profundidad-Ccoord[2])/dVector_C[2])-0.01;
let bluePoint=[Ccoord[0]+tC*dVector_C[0],Ccoord[1]+tC*dVector_C[1],Ccoord[2]+tC*dVector_C[2]]
beginShape(POINTS)
strokeWeight(10);
stroke(0,0,255);
vertex(bluePoint[0],bluePoint[1],bluePoint[2])
endShape()
strokeWeight(1);
beginShape()
fill (255,0,0);
vertex(redPoint[0],redPoint[1],redPoint[2])
fill (0,255,0);
vertex(greenPoint[0],greenPoint[1],greenPoint[2])
fill (0,0,255);
vertex(bluePoint[0],bluePoint[1],bluePoint[2])
endShape(CLOSE)


}
function projection(coord){

}