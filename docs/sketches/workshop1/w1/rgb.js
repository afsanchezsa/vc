

let img_original, img_transformed;

function preload() {
  let location = '../sketches/workshop1/w3/lenna.png';
  img_original = loadImage(location);
  img_transformed = loadImage(location);
}

function setup() {
  createCanvas(775, 255);
  img_original.resize(250, 250);
  img_original.loadPixels();

  let img = createImage(250, 250);
  let img2 = createImage(250, 250);
  let img3 = createImage(250, 250);

  img.loadPixels();
  img2.loadPixels();
  img3.loadPixels();

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, [0,0,img_original.get(i,j)[2],255]);
      img2.set(i, j, [0,img_original.get(i,j)[1],0,255]);
      img3.set(i, j, [img_original.get(i,j)[0],0,0,255]);
    }
  }
  img.updatePixels();
  img2.updatePixels();
  img3.updatePixels();

  image(img, 0, 0);
  image(img2, 260, 0);
  image(img3, 520, 0);

}


