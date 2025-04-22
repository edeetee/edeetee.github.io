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
uniform float hyperdrive;

#define PI 3.1415926538

vec2 snoise32(vec3 pos){
    return vec2(snoise3(pos), snoise3(pos+vec3(99.40139)));
}

void main () {
    vec2 mouseDist = (uv-mousePos)*aspect;
    float mouseLength = length(mouseDist);
    float mouseStrength = pow(max(1.0-mouseLength*1.0, 0.0), 5.0);

    vec2 aspectUv = uv*aspect;

    float rotation = pressed ? PI+PI*hyperdrive : PI;
    vec2 rotatedMouseDist = rotate(mouseDist, rotation);

    vec2 mouseForceDir = normalize(rotatedMouseDist)* (pressed ? 5.0 : 3.0);
    vec2 mouseUvOffset = (mouseForceDir+mouseVel*130.0)*mouseStrength;

    vec2 centerness = rotate(uv-0.5, PI*hyperdrive*0.25);
    vec2 hyperdriveOffset = pow(max(1.0-length(centerness), 0.0), 0.5)*normalize(-centerness)*max(3.0, hyperdrive)*0.8;

    vec2 textureOffset = vec2(0.0, 0.0);
    textureOffset += mouseUvOffset;
    textureOffset += snoise32(vec3(aspectUv*1.1232, t*0.2));

    if(pressed)
        textureOffset += hyperdriveOffset;

    vec2 textureUV = uv+textureOffset*0.001*speed;

    vec4 textureColor;
    if((textureUV.x < 0.0 || 1.0 < textureUV.x) && (textureUV.y < 0.0 || 1.0 < textureUV.y))
        textureColor = vec4(textureUV, 0, 1);
    else
        textureColor = blur(texture, textureUV, res, normalize(textureOffset)*max(0.3, min(1.0, length(textureOffset))));

    vec2 outUv = textureColor.xy;
    outUv += pow(snoise32(vec3(uv*res*0.31232+vec2(1234.1232), t*5.323)), vec2(4.0))
        *0.07
        *speed;
        // *(1.0+1.0*pow(snoise3(vec3(aspectUv*0.8312, t*0.2581232)), 2.0) + pow(mouseStrength, 100.0)*1.5);

    //alpha starts at 0
    outUv = mix(uv, outUv, (1.0-0.02*speed)*textureColor.a);

    gl_FragColor = vec4(outUv, 0, 1);
}