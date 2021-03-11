
let img;
function preload(){
    img = loadImage('../sketches/lenna.png');
}
function setup() {
  createCanvas(710,400);
  image(img,0,0);
  filter(GRAY);
  //Esta es otra forma de hacerlo sacando el promedio de los canales RGB y asignando
  //Dicho valor a cada canal
  /*loadPixels();
  let average=0;
  for (let i = 0; i < pixels.length; i += 4) {
      average=(red(pixels[i])+green(pixels[i+1])+blue(pixels[i+2]))/3;
      console.log(average);
    pixels[i] = average;
    pixels[i + 1] = average;
    pixels[i + 2] = average;
    //pixels[i + 3] = alpha(pixel[i]);->> en este caso no tocamos el alpha
  }
  updatePixels();*/
}
