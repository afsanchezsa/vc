let availableColors;
let pictures = [];
let p5;
let p8;
let p12;
let original;

function preload() {
    const location = '../sketches/workshop1/w4/regular_show.jpg'
    original = loadImage(location);
    p5 = loadImage(`../sketches/workshop1/w4/results/photomosaic_5.jpg`)
    p8 = loadImage(`../sketches/workshop1/w4/results/photomosaic_8.jpg`)
    p12 = loadImage(`../sketches/workshop1/w4/results/photomosaic_12.jpg`)
}

function setup() {
    createCanvas(500, 1300);
    image(original,0,0);
    image(p12,0 ,325);
    image(p8,0,650);
    image(p5,0,975);
}
