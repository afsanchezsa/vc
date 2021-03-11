var myp5 = new p5((p) => {
    
  
    p.setup = function() {
        p.createCanvas(500, 400);
        // here we use a callback to display the image after loading
        p.loadImage('../sketches/lenna.png', img => {
            let width=500;
            let d = p.pixelDensity();
            let pink=p.color(230,176,200);
          p.image(img, 0, 0,width,width);
          //p.filter(p.INVERT);
          p.loadPixels();
        
          
          for (let i = 0; i < p.pixels.length; i += 4) {
            p.pixels[i] = p.red(255-p.pixels[i]);
            p.pixels[i + 1] = p.green(255-p.pixels[i+1]);
            p.pixels[i + 2] = p.blue(255-p.pixels[i+2]);
            p.pixels[i + 3] = p.alpha(255-p.pixels[i+3]);
          }
          p.updatePixels();
        });
        
      }
  
   
  
  
  }, "negative");