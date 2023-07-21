precision highp float;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: rotate = require(glsl-rotate)
#pragma glslify: blur = require('glsl-fast-gaussian-blur')


uniform sampler2D texture;
uniform vec2 mousePos;
uniform vec2 mouseVel;
uniform float t;
uniform vec2 aspect;
varying vec2 uv;
uniform bool pressed;
uniform float speed;
uniform vec2 res;

#define PI 3.1415926538

vec2 snoise32(vec3 pos){
    return vec2(snoise3(pos), snoise3(pos+vec3(99.40139)));
}

void main () {
    
    vec2 mouseDist = (uv-mousePos)*aspect;
    float mouseLength = length(mouseDist);
    float mouseStrength = pow(max(1.0-mouseLength*1.5, 0.0), 2.0);

    vec2 aspectUv = uv*aspect;

    float rotation = pressed ? PI*sin(t*0.5)/2. : PI;
    vec2 rotatedMouseDist = rotate(mouseDist, rotation);

    vec2 mouseForceDir = normalize(rotatedMouseDist)*3.0;
    vec2 mouseUvOffset = (mouseForceDir+mouseVel*40.0)*mouseStrength;

    vec2 textureOffset = vec2(0.0, 0.0);
    textureOffset += mouseUvOffset;
    textureOffset += snoise32(vec3(aspectUv*1.1232, t*0.2));

    vec2 textureUV = uv+textureOffset*0.001*speed;

    vec4 textureColor;
    if((textureUV.x < 0.0 || 1.0 < textureUV.x) && (textureUV.y < 0.0 || 1.0 < textureUV.y))
        textureColor = vec4(textureUV, 0, 1);
    else
        textureColor = blur(texture, textureUV, res, normalize(textureOffset)*0.4);

    vec2 outUv = textureColor.xy;
    outUv += pow(snoise32(vec3(aspectUv*1000.0+vec2(1234.1232), t*10.323)), vec2(8.0))
        *0.3
        *speed
        *(1.0+1.0*pow(snoise3(vec3(aspectUv*0.8312, t*0.2581232)), 2.0));

    //alpha starts at 0
    outUv = mix(uv, outUv, (1.0-0.03*speed)*textureColor.a);

    gl_FragColor = vec4(outUv, 0, 1);
}