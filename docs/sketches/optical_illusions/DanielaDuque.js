class Brick{
  constructor(bc, y,x = 0){
    this.brickColor = bc;
    this.yPos = y;
    this.xPos = x;
  }
  
    // this function creates the brick
    createBrick(){
      fill(this.brickColor);
      rect(this.xPos, this.yPos, 100, 100);
    }

    setSpeed(){
      this.xSpeed = 1;
    }

    moveBrick(){
      this.xPos+=this.xSpeed;
      if(this.xPos+100 >= width || this.xPos <= 0){
        this.xSpeed*=-1;
      }
    }
  
  }
  
  class Barra{
    constructor(bc, y,x = 0){
      this.brickColor = bc;
      this.yPos = y;
      this.xPos = x;
    }
    
      // this function creates the brick
      createBrick(){
        fill(this.brickColor);
        rect(this.xPos, this.yPos, 690, 50);
      }
  }
  // Constantes
  
  let b1, b2, c1, c2;
  
  function setup() {
    createCanvas(710, 400);
  
    // Definir colores
    b1 = color(255);
    b2 = color(0);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);
  }
 
  
  let brick1 = new Brick("white",150);
  let brick2 = new Brick("white",10,10);
  let brick3 = new Brick("white",10,600);
  
  let barra = new Barra("white",300,10);

  brick1.setSpeed();
  
  function draw() {
    // Fondo
    background(0);
        
    if(mouseIsPressed){
      background(50);
    }

   
    brick1.createBrick();
    brick2.createBrick();
    brick3.createBrick();

    
    barra.createBrick();

    brick1.moveBrick();
  
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
  