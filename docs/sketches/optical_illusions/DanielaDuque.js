class Brick{
    constructor(bc, y,x){
      this.brickColor = bc;
      this.yPos = y;
      this.xPos = x;
    }
  
    // this function creates the brick
    createBrick(){
      fill(this.brickColor);
      rect(this.xPos, this.yPos, 500, 50);
    }
  
  }
  
  // Constantes
  
  let b1, b2, c1, c2;
  let brick1 = new Brick("white",175,100);
  
  function setup() {
    createCanvas(710, 400);
  
    // Definir colores
    b1 = color(255);
    b2 = color(0);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);
  }
  
  function draw() {
    // Fondo
    background(0);
        
    if(mouseIsPressed){
      background(50);
    }
    
    brick1.createBrick();
  
    if(!mouseIsPressed){
      setGradient(0, 0, width, height, b1, b2, 2);
    }
  }
  
  function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
      // Gradiente de izquierda a derecha
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      
    }
  }
  