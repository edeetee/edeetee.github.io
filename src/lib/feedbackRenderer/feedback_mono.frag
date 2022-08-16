precision lowp float;

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
    textureUV += snoise32(vec3(aspectUv, t*0.1))*0.002;

    vec4 textureColor = texture2D(texture, textureUV);

    float outUv = textureColor.x;
    outUv += max(0., pow(snoise3(vec3(aspectUv*0.5, t*0.01+vec3(45091.123123))), 2.) * 0.02);
    outUv *= 0.99;
    // outUv -= 0.05;

    //only use uv for first frame

    gl_FragColor = vec4(vec2(outUv), 0, 1);
}