
 // this variable will hold our shader object
 let theShader;
 // this variable will hold our createGraphics layer
 let img;
 function preload(){
   // load the shader
   theShader = loadShader('../sketches/shaders/shader.vert','../sketches/shaders/texture.frag');
   img=loadImage('../sketches/lenna.png');
 }

 function setup() {
   // shaders require WEBGL mode to work
   createCanvas(710, 400, WEBGL);
   
   ortho(-width/2,width/2,-height/2,height/2);
   // initialize the createGraphics layers


   // turn off the createGraphics layers stroke
    noStroke();



 }

 function draw() {
    background(0);

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture (img);
    shader(theShader);
    box(300);
 
 }
// good example in https://editor.p5js.org/cocopon/sketches/rke1-X8t7