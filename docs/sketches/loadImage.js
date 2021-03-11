let img;
function preload() {
  img = loadImage('../sketches/lenna.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
    createCanvas(500,400);
    image(img, 0, 0);
}