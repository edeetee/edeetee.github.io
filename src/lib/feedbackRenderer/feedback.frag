precision highp float;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: rotate = require(glsl-rotate)

uniform sampler2D texture;
uniform vec2 mouse;
uniform float t;
uniform vec2 size;
varying vec2 uv;

#define PI 3.1415926538

vec2 resize = vec2(size.x/size.y, 1);

vec2 snoise32(vec3 pos){
    return vec2(snoise3(pos), snoise3(pos+vec3(99.40139)));
}

void main () {
    
    vec2 mouseDist = (uv-mouse)*resize;
    float mouseLength = length(mouseDist);
    float mouseStrength = pow(max(1.0-mouseLength*1.5, 0.0), 5.0);

    vec2 aspectUv = uv*resize;

    // vec2 rotatedMouseDist = rotate(mouseDist, PI*(1.0+0.25*sin(t*1.0)));
    vec2 mouseUvOffset = normalize(-mouseDist)*mouseStrength;

    vec2 textureUv = uv + mouseUvOffset*0.02 + snoise32(vec3(aspectUv, t*0.2))*0.001;
    vec4 textureColor = texture2D(texture, textureUv);

    // if(textureColor.a == 0.0)
    //     textureColor = mix(vec4(uv, 0,1);

    vec2 feedbackUv = textureColor.xy;

    vec2 newUv = feedbackUv + snoise32(vec3(aspectUv, t*0.1))*0.002;

    //only use uv for first frame
    newUv = mix(uv, feedbackUv, 0.99*textureColor.a);

    gl_FragColor = vec4(newUv, 0, 1);
}