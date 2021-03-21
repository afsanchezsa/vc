
let img;

function preload(){
img=loadImage('../sketches/lenna.png');
}
function setup(){
    
    pixelDensity(0.1);//reducimos la densidad del pixel para que hayan menos pixeles
    //por pulgada y asi poder pintar mejor los caracteres

    createCanvas(img.width*2,img.height*3);//creamos un canvas para pintar los caracteres
    
    let characters=['.','i',"X",'W'];//un arreglo con los caracteres del menos denso al mas denso
    let redLevel;
    let str='';//variable str para almacernar los caracteres
    img.loadPixels();
    
    
    for (let j = 0; j < img.height; j++) {
    for (let i = 0; i < img.width; i++) {
          redLevel=red(img.get(i,j));//obtenemos el valor del canal rojo del pixel en la coordenada i,j
          str+=characters[Math.floor(redLevel/64)]//dependiendo el valor de rojo le asigna el caracter
           }
        str+='\n';//salto de linea
      }
    //ahora reajustamos la densidad inicial
    pixelDensity(1.0);
    //el tamaño de la letra debe ser 3 para que se vea con claridad
    textSize(3);
    //esta fuente siempre ocupa el mismo espacio para todos los caracteres
    textFont('Courier New');
    //pintamos la cadena de string en el canvas
    text(str,0,0);
    
}
