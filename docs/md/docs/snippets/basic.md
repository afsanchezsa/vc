# ASCII ART IN HARDWARE

*ASCII art* is a graphic design technique that uses computer characters for presentation and consists of pictures pieced together from some printable characters defined by the ASCII Standard. However, this requires a lot of simple calculations and therefore consumes high amounts of computer resources. For this reason, these tasks can be done better with *shaders*. 

## Problem statement
Create an image composed solely of ASCII characters that looks like the original image using shaders. 

## Methodology 
The shader begins by dividing the image into blocks of the same size as each ascci character of the image (See image below containing the 49 ascii characters used). Then the brightness of the upper-left pixel is calculated and assigned to the whole block. Then it maps this value into 49 discrete integers from 0 to 48. This is nesseary as this implementation uses 49 ascci characters to create the final ascci art image. 

The shader takes the characters from the following image of ascci characters: 


<img src="../sketches/images/ascii.png" alt="drawing" width="400"/>

The characters are sorted by brightness. The `$`  has the lowest amount of brightness (The block containing the `$` has the most black pixels), and the value increases from top to bottom, lef to right. So the `.` character has the highes amount of brightness (It has mostly white pixels). 

So there is a mapping between the brightness and characters as follows: A brightness value of 0 is mmapped to the `$` character, then 1 to `@`, 6 to `W`, 7 to `M`, and 48 to `.`. See the image below. 

<img src="../sketches/images/ascii_grid.png" alt="drawing" width="400"/>

The shader then takes each pixel from the character-block image to the corresponding block of the ascci-art image. In order to do this the values of the bottom-left and upper-right corner of the block are calculated as follows. 


> :Formula align=left
>
> ```
> \text{Bottom-left point} \\
> x_1 = (brightness \mathbin{\%} 7) \cdot \frac{resolution}{blockLength} \\
> y_1 = 1 - (\lfloor \frac{brightness}{7} \rfloor + 1) \cdot \frac{resolution}{blockLength}\\
> ```
> ```
> \text{Upper-right point} \\
> x_2 = x_1 + \frac{resolution}{blockLength} \\
> y_2 = y_1 + \frac{resolution}{blockLength} \\
> ```


The result of the fragment shader is then used as a texture of a 2D plane, thus generating the desired result.


> :Tabs
> > :Tab title=How It looks
> > 
> > > :P5 sketch=/docs/sketches/workshop2/hardwareAscii.js, width=600, height=600
>
> > :Tab title=P5 Code
> >
> > 
> > ```js | hardwareAscii.js
> > let mosaic;
> > let image;
> > let symbol1;
> > let debug;
> > function preload(){
> >   image=loadImage('../sketches/images/omkara.png')
> >  symbol1=loadImage('../sketches/images/ascii.png')
> >  mosaic=loadShader('../sketches/shaders/shader.vert','../sketches/shaders/asciiShader.frag')
> > }
> > 
> > function setup(){
> >  createCanvas(600,600,WEBGL);
> >  textureMode(NORMAL);
> >  noStroke();
> >  shader(mosaic);
> >  mosaic.setUniform('image',image)
> >  mosaic.setUniform('symbol1',symbol1)
> >  mosaic.setUniform('resolution',30)
> >  debug=true
> >  mosaic.setUniform('debug',debug)
> > }
> >
> > function draw(){
> >   background(33);
> >   cover(true);
> > }
> >
> > function cover(texture=false){
> >   beginShape();
> >   if (texture) {
> >    //texture(img);
> >    vertex(-width / 2, -height / 2, 0, 0, 0);
> >    vertex(width / 2, -height / 2, 0, 1, 0);
> >    vertex(width / 2, height / 2, 0, 1, 1);
> >    vertex(-width / 2, height / 2, 0, 0, 1);
> >  }
> >  else {
> >    vertex(-width / 2, -height / 2, 0);
> >    vertex(width / 2, -height / 2, 0);
> >    vertex(width / 2, height / 2, 0);
> >    vertex(-width / 2, height / 2, 0);
> >  }
> >  endShape(CLOSE);
> > }
> >
> > function keyPressed(){
> >   if(key==='d'){
> >       debug=!debug;
> >       mosaic.setUniform('debug',debug)
> >   }
> > }
> > ```
>
> > :Tab title=Vertex Shader Code
> >
> > 
> > ```glsl | shader.vert
> > // Precision seems mandatory in webgl
> > precision highp float;
> > 
> > // 1. Attributes and uniforms sent by p5.js
> > 
> > // Vertex attributes and some uniforms are sent by
> > // p5.js following these naming conventions:
> > // https://github.com/processing/p5.js/blob/main/contributor_docs/webgl_mode_architecture.md
> > 
> > // 1.1. Attributes
> > // vertex position attribute
> > attribute vec3 aPosition;
> > 
> > // vertex texture coordinate attribute
> > attribute vec2 aTexCoord;
> > 
> > // vertex color attribute
> > attribute vec4 aVertexColor;
> > 
> > // 1.2. Matrix uniforms
> > 
> > // The vertex shader should project the vertex position into clip space:
> > // vertex_clipspace = vertex * projection * view * model (see the gl_Position below)
> > // Details here: http://visualcomputing.github.io/Transformations
> > 
> > // Either a perspective or an orthographic projection
> > uniform mat4 uProjectionMatrix;
> > 
> > // modelview = view * model
> > uniform mat4 uModelViewMatrix;
> > 
> > // B. varying variable names are defined by the shader programmer:
> > // vertex color
> > varying vec4 vVertexColor;
> > 
> > // vertex texcoord
> > varying vec2 vTexCoord;
> > 
> > void main() {
> >   // copy / interpolate color
> >   vVertexColor = aVertexColor;
> >   // copy / interpolate texcoords
> >   vTexCoord = aTexCoord;
> >   // vertex projection into clipspace
> >   gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);
> > }
> > ```
>
> > :Tab title=Fragment Shader Code
> >
> > 
> > ```glsl | ascii.frag
> > precision mediump float;
> > uniform sampler2D image;
> > uniform sampler2D symbol1;
> > uniform bool debug;
> > uniform float resolution;
> > varying vec4 vVertexColor;
> > // interpolated texcoord (same name and type as in vertex shader)
> > varying vec2 vTexCoord;
> > float module( float x , float y ){
> >     float   flt_res = x-(y*(floor(x/y)));
> >     return flt_res;
> > }
> > void main() {
> >     vec2 symbolCoord=vTexCoord*resolution;
> >     vec2 imageCoord=floor(symbolCoord);
> >     symbolCoord=symbolCoord-imageCoord;
> >     imageCoord=imageCoord*vec2(1.0)/vec2(resolution);
> >     vec4 col=texture2D(image,imageCoord);
> >     float brigthness = dot(col.xyz, vec3(0.333, 0.333, 0.333));
> >     
> >     float temp=brigthness*(48.0);
> >     float level=floor(temp);
> >     
> >     float scalingfactor = 150.0/1050.0;
> > 
> >     float y0= floor(level/7.0)*scalingfactor;
> >     float x0= module(level,7.0)*scalingfactor;
> > 
> >     vec2 myCoord=(symbolCoord*vec2(1.0)/vec2(7.0))+vec2(x0,y0);
> >     vec4 finalColor=texture2D(symbol1,myCoord);
> > 
> >     gl_FragColor = debug?finalColor:vec4(brigthness);
> > }
> > ```


# P5 inline code

# > :P5 sketch=/docs/sketches/testTexture.js, width=500, height=500

# > :P5 sketch=/docs/sketches/textureShader.js, width=710, height=400

# > :P5 sketch=/docs/sketches/asciiHardware.js, width=500, height=400


# > :P5 sketch=/docs/sketches/mandrille.js, width=600, height=600


> :ToCPrevNext