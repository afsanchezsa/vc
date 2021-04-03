let picture;
let sp;
let w_scaled;
let h_scaled;
let dataset= [];
let availableColors;
const scaleFactor = 8
const datasetSize =105
let im = []

function preload() {
    let location = '../sketches/workshop1/w4/regular_show.jpg'
    picture = loadImage(location);
    resizeCanvas(picture.width,picture.height)
    loadStrings('../sketches/workshop1/w4/availableColors.txt',loadDataset)
    loadDataset();
    noLoop()
}

function setup() {
    createCanvas(600, 600);
    noLoop();
}

function draw() {
    w_scaled = Math.floor(picture.width / scaleFactor);
    h_scaled = Math.floor(picture.height / scaleFactor);
    picture.resize(w_scaled,h_scaled)
    picture.loadPixels()
    image(picture, 0, 0);
    for(let x = 0; x < w_scaled; x++) {
      for(let y = 0; y < h_scaled; y++) {
        let [r, g, b] = picture.get(x, y);
          const choice = closestColor(r,g,b)
          const pixelImage = im[choice]
          image(pixelImage,x*scaleFactor,y*scaleFactor)
          noLoop()
      }
    }
    noLoop();
}

function closestColor(r,g,b) {
    let minDistance = -1;
    let choice;
    for (let i=0; i < datasetSize; ++i) {
        const color_i = dataset[i];
        let distance = dist(r,g,b,color_i[0],color_i[1],color_i[2]);
        if (minDistance==-1 || distance < minDistance) {
            minDistance = distance;
            choice = i;
        }
    }
    return choice;
}

function loadDataset(availableColors){
    availableColors.slice(0,datasetSize).map(c => {
        const r = parseInt(c.substring(0,3),10)
        const g = parseInt(c.substring(4,7),10)
        const b = parseInt(c.substring(8,11),10)
        dataset.push([r,g,b])
        loadImage(`../sketches/workshop1/w4/dataset/${c}`, il => { 
            il.resize(scaleFactor,scaleFactor)
            im.push(il)
        })
    })
    noLoop()
}
