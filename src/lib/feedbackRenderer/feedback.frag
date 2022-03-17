precision highp float;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
#pragma glslify: rotate = require(glsl-rotate)

uniform sampler2D texture;
uniform vec2 mouse;
uniform float t;
uniform vec2 size;
varying vec2 uv;

vec2 resize = vec2(size.x/size.y, 1);

void main () {
    float dist = length(gl_FragCoord.xy - mouse);
    

    vec2 mouseDist = (uv-mouse)*resize;
    float mouseLength = length(mouseDist);
    float mouseStrength = pow(clamp(1.0-mouseLength, 0.0, 1.0), 10.0);

    vec2 rotatedMouseDist = rotate(mouseDist, t);
    vec2 mouseUvOffset = normalize(-mouseDist)*mouseStrength;

    vec2 textureUv = uv - mouseUvOffset*0.01 + snoise3(vec3(uv*2.0, t*0.1))*0.005;
    vec4 textureColor = texture2D(texture, textureUv);
    vec2 feedbackUv = textureColor.xy;
    // vec2 feedbackUv = textureColor.xy;

    vec2 newUv = feedbackUv + snoise3(vec3(uv, t*0.1))*0.005;

    newUv = mix(uv, newUv, 0.995);

    gl_FragColor = vec4(newUv, 0, 1);
}