# ASCII ART IN HARDWARE

*ASCII art* is a graphic design technique that uses computer characters for presentation and consists of pictures pieced together from some printable characters defined by the ASCII Standard. However, this requires a lot of simple calculations and therefore consumes high amounts of computer resources. For this reason, these tasks can be done better with *shaders*. 

## Problem statement
Create an image composed solely of ASCII characters that looks like the original image using shaders. 

## Methodology 
The shader begins by dividing the image into blocks of the same size as each ascci character of the image (See image below containing the 49 ascii characters used). Then the brighness of the upper-left pixel is calculated and assigned to the whole block. Then it maps this value into 49 discrete integers from 0 to 48. This is nesseary as this implementation uses 49 ascci characters to create the final ascci art image. 

The shader takes the characters from the following image of ascci characters: 

// image 

The characters are sorted by brighness. The '$' has the lowest amount of brighness (The block containing the '$' has the most black pixels), and the value increases from top to bottom, lef to right. So the '.' character has the highes amount of brighness (It has mostly white pixels). 

So there is a mapping between the brighness and characters as follows: 

// image

The shader then takes each pixel from the character-block image to the corresponding block of the ascci-art image. In order to do this the values of the bottom-left and upper-right corner of the block are calculared as follows. 

- bottom-left point
x1 = (brillo % 7) * resolucion / largo
y1 = 1 - ((floor(brillo / 7) * resolucion + resolucion )) / largo

- upper-right point
x2 = x1 + resolucion / largo
y2 = y1 + resolucion / largo

The result of the fragment shader is then used as a texture of a 2D plane, thus generating the desired result.


# P5 inline code

# > :P5 sketch=/docs/sketches/testTexture.js, width=500, height=500

# > :P5 sketch=/docs/sketches/textureShader.js, width=710, height=400

# > :P5 sketch=/docs/sketches/asciiHardware.js, width=500, height=400


# > :P5 sketch=/docs/sketches/mandrille.js, width=600, height=600
> :P5 sketch=/docs/sketches/workshop2/hardwareAscii.js, width=600, height=600

> :ToCPrevNext