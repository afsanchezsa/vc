# Image and video processing

# Load Image
Adapted from [here](https://p5js.org/es/reference/#/p5/image).

> :P5 sketch=/docs/sketches/loadImage.js, width=500, height=400

The markdown of the above sketch looks like this (check the [component specs](/docs/snippets/component) for details):

```markdown
> :P5 sketch=/docs/sketches/loadImage.js, width=500, height=400
```
and the `loadImage.js` [p5 instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) like this:

```js | loadImage.js

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

```

# Negative Image

Adapted from [here](https://p5js.org/es/reference/#/p5/pixels).

> :P5 sketch=/docs/sketches/negative.js, width=500, height=400

The markdown of the above sketch looks like this (check the [component specs](/docs/snippets/component) for details):

```markdown
> :P5 sketch=/docs/sketches/negative.js, width=500, height=400
```

and the `negative.js` [p5 instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) like this:

```js | negative.js
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
  
   
  
  
  }, "negative"); // --> the id should be the same file name
```




# Gray Scale Image

Adapted from [here](https://p5js.org/es/reference/#/p5/filter).

> :P5 sketch=/docs/sketches/gray.js, width=500, height=400

The markdown of the above sketch looks like this (check the [component specs](/docs/snippets/component) for details):

```markdown
> :P5 sketch=/docs/sketches/gray.js, width=500, height=400
```

and the `gray.js` [p5 instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) like this:

```js | gray.js

let img;
function preload(){
    img = loadImage('../sketches/lenna.png');
}
function setup() {
  createCanvas(500,400);
  image(img,0,0);
  filter(GRAY);

}

```

> :ToCPrevNext