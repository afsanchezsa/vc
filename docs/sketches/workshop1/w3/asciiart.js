let img_original;

function preload() {
  let location = '../sketches/workshop1/w3/lenna.png';
  img_original = loadImage(location);
}

function setup() {
  createCanvas(800, 900);
  img_original.resize(150, 150);

  imgProcessOutput = imagePreprocessing(img_original, contrast=100); // applies contrast and luma to image. Changes img_transformed by reference
  let ascii_image = mapPixelToASCII(imgProcessOutput); // takes every luma value and assings an ascci character according to brighness
  printCharacters(ascii_image, 5, 0, size=6); // Prints all characters every 'size' px apart  
}

/**
 * 
 * @param {*} img : image to be processed. Function changes the same reference to image 
 * @param {*} contrast : value from 0 to 100 to apply contrast
 * @returns 
 */
function imagePreprocessing (img, contrast){
  applyContrast(img, contrast);
  return applyLuma(img);
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

function printCharacters(ascii_image, x_start, y_start, size) {
  let h = ascii_image.length;
  let w = ascii_image[0].length;
  textFont('Courier New');
  textSize(size);
  for (let i = 0; i < h; i++){
    for (let j = 0; j < w; j++){
      let x = x_start + size * j;
      let y = y_start + size * i;
      text(ascii_image[i][j], x, y)
    }
  }
}

function mapPixelToASCII(imgProcessOutput) {
  // ASCII order taken from http://paulbourke.net/dataformats/asciiart/
  let characters = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

  let minValue = imgProcessOutput.minValue;
  let maxValue = imgProcessOutput.maxValue;
  return imgProcessOutput.values.map((row) => {
    return row.map((value) => {
      let position = Math.round(map(value, minValue, maxValue, 0, characters.length - 1));
      return characters[position];
    })
  })
}
