function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
  
    for (let i = 50; i < width; i += 50) {
      for (let j = 50; j < height; j += 50) {
        stroke(255)
        strokeWeight(10)
        line(0, i, width, i)
        line(j, 0, j, height)
      }
    }
  
  
  }