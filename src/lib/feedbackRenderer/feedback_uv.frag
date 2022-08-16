precision highp float;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: rotate = require(glsl-rotate)

uniform sampler2D texture;
uniform vec2 mouse;
uniform float t;
uniform vec2 aspect;
varying vec2 uv;
uniform bool pressed;

#define PI 3.1415926538

vec2 snoise32(vec3 pos){
    return vec2(snoise3(pos), snoise3(pos+vec3(99.40139)));
}

void main () {
    
    vec2 mouseDist = (uv-mouse)*aspect;
    float mouseLength = length(mouseDist);
    float mouseStrength = pow(max(1.0-mouseLength*1.5, 0.0), 5.0);

    vec2 aspectUv = uv*aspect;

    float rotation = pressed ? PI*t*0.2 : PI;
    vec2 rotatedMouseDist = rotate(mouseDist, rotation);
    vec2 mouseUvOffset = normalize(rotatedMouseDist)*mouseStrength;

    vec2 textureUV = uv;
    textureUV += mouseUvOffset*0.02;
    textureUV += snoise32(vec3(aspectUv, t*0.2))*0.002;

    vec4 textureColor;
    if((textureUV.x < 0.0 || 1.0 < textureUV.x) && (textureUV.y < 0.0 || 1.0 < textureUV.y))
        textureColor = vec4(textureUV, 0, 1);
    else
        textureColor = texture2D(texture, textureUV);

    vec2 outUv = textureColor.xy;
    outUv += snoise32(vec3(aspectUv*0.5+vec2(1234.1232), t*0.05))*0.01;

    //alpha starts at 0
    outUv = mix(uv, outUv, 0.99*textureColor.a);

    gl_FragColor = vec4(outUv, 0, 1);
}