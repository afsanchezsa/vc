 
let img;
let w = 100;

// It's possible to convolve the image with many different 
// matrices to produce different effects. This is a high-pass 
// filter; it accentuates the edges. 
const matrix = [ [ 0, -1, 0 ],
[ -1,  4, -1 ],
[ 0, -1, 0 ] ];

function preload() {
  img = loadImage('../sketches/lenna.png');
}

function setup() {
  createCanvas(img.width, img.height);
    
  img.loadPixels();

  // pixelDensity(1) for not scaling pixel density to display density
  // for more information, check the reference of pixelDensity()
  pixelDensity(1);
 
  
}

function draw() {
  // We're only going to process a portion of the image
  // so let's set the whole image as the background first
 //pixelDensity(0.1);
 //background(img);
 
 
  // Calculate the small rectangle we will process
 
  const matrixsize = 3;

  loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++ ) {
      let c = convolution(x, y, matrix, matrixsize, img);
      //let c= img.get(y,x);
      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y*img.width) * 4;
      pixels[loc] = red(c);
      pixels[loc + 1] = green(c);
      pixels[loc + 2] = blue(c);
      pixels[loc + 3] = alpha(c);
    }
  }

  updatePixels();

}

function convolution(x, y, matrix, matrixsize, img) {
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  const offset = Math.floor(matrixsize / 2);
  for (let i = 0; i < matrixsize; i++){
    for (let j = 0; j < matrixsize; j++){
      
      // What pixel are we testing
      const xloc = (x + i - offset);
      const yloc = (y + j - offset);
      let loc = (xloc + img.width * yloc) * 4;

      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc, 0 , img.pixels.length - 1);

      // Calculate the convolution
      // retrieve RGB values
      rtotal += (img.pixels[loc]) * matrix[i][j];
      gtotal += (img.pixels[loc + 1]) * matrix[i][j];
      btotal += (img.pixels[loc + 2]) * matrix[i][j];
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  
  // Return the resulting color
  return color(rtotal, gtotal, btotal);
} 