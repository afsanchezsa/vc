let picture;

function preload() {
    const location = '../sketches/workshop1/w4/regular_show.jpg'
    picture = loadImage(location);
}


function setup() {
    createCanvas(600, 600);
    image(picture,0,0)
    noLoop();
}

