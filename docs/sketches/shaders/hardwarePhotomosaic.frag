precision mediump float;
uniform sampler2D image;
uniform sampler2D symbol1;
uniform bool debug;
uniform float resolution;
uniform float NUM_IMAGES;
uniform float WIDTH_PIXEL;
uniform float HEIGHT_PIXEL;

varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;
float module( float x , float y ){
    float   flt_res = x-(y*(floor(x/y)));
    return flt_res;
}
void main() {
    
    float lev=vTexCoord.x*NUM_IMAGES;
    vec2 symbolCoord=vec2(lev,vTexCoord.y);
    vec2 imageCoord=floor(symbolCoord);
    symbolCoord=symbolCoord-imageCoord;
     float scalingfactor =1.0/NUM_IMAGES;

    imageCoord=vec2(imageCoord.x*scalingfactor,imageCoord.y);
    vec4 col=texture2D(image,imageCoord);
    float brigthness = dot(col.xyz, vec3(0.333, 0.333, 0.333));
    
    float temp=brigthness*(NUM_IMAGES);
    float level=floor(temp);
    
   
    float y0=0;
    float x0= module(level,NUM_IMAGES)*scalingfactor;

    vec2 myCoord=(symbolCoord*scalingfactor)+vec2(x0,y0);
    vec4 finalColor=texture2D(symbol1,myCoord);

    gl_FragColor = debug?finalColor:vec4(brigthness);
}