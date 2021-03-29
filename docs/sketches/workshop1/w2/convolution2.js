let fingers;
let lienzo;
const matrix = [ [ 0, -1, 0 ],
[ -1,  4, -1 ],
[ 0, -1, 0 ] ];
const matrixsize=3;
function setup() {
 
  
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  fingers.hide(); 
  

  createCanvas(700, 700);
//  
   lienzo=createImage(320,240);




}

function draw() {
 // background(150);
  
  // draw the video frame to canvas
  fingers.loadPixels();
  //filter(GRAY);
  //image(fingers, 150, 150); // draw a second copy to canvas
  lienzo.loadPixels();
  
  // Begin our loop for every pixel in the smaller image
  for (let x = 0; x <fingers.width; x++) {
    for (let y = 0; y < fingers.heigth; y++ ) {
      let c = convolution(x, y, matrix, matrixsize, fingers);
      
      // retrieve the RGBA values from c and update pixels()
      let loc = (x + y*fingers.width) * 4;
      lienzo.pixels[loc] = red(c);
      lienzo.pixels[loc + 1] = green(c);
      lienzo.pixels[loc + 2] = blue(c);
      lienzo.pixels[loc + 3] = alpha(c);
    }
  }

  lienzo.updatePixels();
  
  image(fingers,0,0); 
  image(lienzo,100,100);
  
}

function mousePressed() {
  fingers.loop(); // set the video to loop and start playing
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