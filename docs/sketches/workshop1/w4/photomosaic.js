let picture;
let w_scaled;
let h_scaled;
let availableColors;
let dataset= [];
let loadedImages = [];
const scaleFactor = 8;
const datasetSize =105;

function preload() {
    const location = '../sketches/workshop1/w4/regular_show.jpg'
    picture = loadImage(location);
    loadStrings('../sketches/workshop1/w4/availableColors.txt',loadDataset)
    noLoop()
}

function setup() {
    createCanvas(650, 850);
    image(picture,0,0);
    noLoop();
}

function draw() {
    w_scaled = Math.floor(picture.width / scaleFactor);
    h_scaled = Math.floor(picture.height / scaleFactor);
    picture.resize(w_scaled,h_scaled);
    picture.loadPixels();
    for(let x = 0; x < w_scaled; x++) {
        for(let y = 0; y < h_scaled; y++) {
            const [r, g, b] = picture.get(x, y);
            const index = closestColor(r,g,b);
            const pixelImage = loadedImages[index];
            image(pixelImage,x*scaleFactor,430 + y*scaleFactor);
        }
    }
}

function closestColor(r,g,b) {
    let minDistance = -1;
    let index;
    for (let i=0; i < datasetSize; ++i) {
        const img_i = dataset[i];
        let distance = dist(r,g,b,img_i[0],img_i[1],img_i[2]);
        if (minDistance == -1 || distance < minDistance) {
            minDistance = distance;
            index = i;
        }
    }
    noLoop();
    return index;
}

function loadDataset(availableColors){
    availableColors.slice(0,datasetSize).map(c => {
        const r = parseInt(c.substring(0,3),10);
        const g = parseInt(c.substring(4,7),10);
        const b = parseInt(c.substring(8,11),10);
        dataset.push([r,g,b]);
        loadImage(`../sketches/workshop1/w4/dataset/${c}`, il => { 
            il.resize(scaleFactor,scaleFactor);
            loadedImages.push(il);
        })
    })
    noLoop();
}
