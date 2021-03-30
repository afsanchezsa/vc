let img;
let w = 80;
let c_w = 700;
let c_h = 700;

let edgeImg;

// Border Detection
const kernel_1 = [ [ -1, -1, -1 ],
                 [ -1,  8, -1 ],
                 [ -1, -1, -1 ] ]; 
// Box blur
const kernel_2 =  [ [0.11, 0.11, 0.11],
                    [0.11, 0.11, 0.11],
                    [0.11, 0.11, 0.11]]; 

// Vertical 
const kernel_3 = [  [ 1,  1,  0],
                    [ 1,  0, -1 ],
                    [ 0,  -1,  -1] ]; 
//Sharpen
const kernel_4 = [  [ 0, -1, 0 ],
                    [ -1,  5, -1],
                    [ 0, -1, 0 ] ]; 
function preload() {
    img = loadImage('../sketches/lenna.png');
    
}
 
function setup() {
    createCanvas(c_w, c_h);
    noLoop();
}


function draw() {   

    img.loadPixels()

    edgeImg = createImage(img.width, img.height); 
    conv (edgeImg, kernel_1, 0, c_h/2)

    SharpenImg = createImage(img.width, img.height); 
    conv (SharpenImg, kernel_4, 0, 0)

    BlurImg = createImage(img.width, img.height); 
    conv (BlurImg , kernel_2, c_w/2, c_h/2)

    EmbossImg = createImage(img.width, img.height); 
    conv (EmbossImg , kernel_3, c_w/2, 0)
  
}

function conv(edgeImg,kernel, posX, posY){
    edgeImg.loadPixels()

    for (let x = 0; x <img.width; x++) {
        for (let y = 0; y < img.height; y++ ) {
            //console.log("patitos")
        let c = convolution(x, y, kernel, 3, img);
        let loc = (x + y*img.width) * 4;
        edgeImg.pixels[loc] = red(c);
        edgeImg.pixels[loc + 1] = green(c);
        edgeImg.pixels[loc + 2] = blue(c);
        edgeImg.pixels[loc + 3] = alpha(c);
        
        }
    }

    edgeImg.updatePixels();
    
    image(edgeImg, posX, posY, c_w/2, c_h/2);
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

