let availableColors;
let pictures = [];

function preload() {
    loadStrings('../sketches/workshop1/w4/availableColors.txt', loadDataset)
}

function setup() {
    createCanvas(450, 450);
    let i=0;
    for(let x = 0; x < 7; x++) {
        for(let y = 0; y < 7; y++) {
            image(pictures[i],x*64,y*64)
            i+=1;
        }
    }
    noLoop()
}

function loadDataset(strings){
    for (let i = 0; i < 49; i++) {
        const img = loadImage(`../sketches/workshop1/w4/dataset/${strings[i]}`)
        pictures.push(img)
    }
    noLoop()
}


