let img_original, img_transformed;

function preload() {
  let location = '../sketches/workshop1/w3/lenna.png';
  img_original = loadImage(location);
  img_transformed = loadImage(location);
}

function setup() {
  createCanvas(775, 255);
  img_original.resize(250, 250);
  image(img_original, 0, 0);

  applyContrast(img_original, 100);
  image(img_original, 260, 0);

  let lumaValues = applyLuma(img_original).values;

  let img = createImage(250, 250);
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, color(lumaValues[j][i]));
    }
  }
  img.updatePixels();
  image(img, 520, 0);

}


/**
 * 
 * @param {*} img : image to be processed. Function changes the same reference to image 
 * @returns 
 */
function applyLuma (img){
  let lumaMatrix = []; // Stores luma values in matrix : [[row1], [row2], ..., [rowN]]

  let luma_Y = (pixel) => 0.2126 * red(pixel) + 0.7152 * green(pixel) + 0.0722 * blue(pixel);
  img.loadPixels();
  for (let j = 0; j < img.height; j++) {
    let row = [] // Single row of the matrix
    for (let i = 0; i < img.width; i++) {
      row.push(luma_Y(img.get(i, j))); // Apply luma to every pixel in image
    }
    lumaMatrix.push(row); 
  }
  return { 
    values: lumaMatrix ,
    minValue: luma_Y(color(0, 0, 0)), // Used for mapPixelToASCII
    maxValue: luma_Y(color(255, 255, 255)) // Used in mapPixelToASCII
  }
}

/**
 * Function based on https://editor.p5js.org/cassie/sketches/SB4pBjns0
 * 
 * @param {*} img image to be processed. Function changes the same reference to image 
 * @param {*} contrast 0 to 100
 */
function applyContrast(img, contrast) {
  img.loadPixels();
  for (let x = 0; x < img.width; x +=1) {
    for (let y = 0; y < img.height; y +=1) {
      let c = img.get(x,y);
      let factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
      let nR = constrain(factor*(red(c)-128) + 128, 0, 255);
      let nG = constrain(factor*(green(c)-128) + 128, 0, 255);
      let nB = constrain(factor*(blue(c)-128) + 128, 0, 255);
      let nC = color(nR,nG,nB);
      img.set(x,y,nC);
    }
  }
  img.updatePixels();
}