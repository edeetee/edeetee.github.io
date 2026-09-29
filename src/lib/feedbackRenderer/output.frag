precision highp float;

#pragma glslify: hsv2rgb = require(glsl-hsv2rgb)

uniform sampler2D texture;
varying vec2 uv;
uniform float t;
uniform vec2 mousePos;
uniform vec2 res;
uniform vec2 aspect;

float modPeriod = 0.2;

void main () {
    vec4 textureColor = texture2D(texture, uv);

    vec2 feedbackDiff = textureColor.rg-uv;
    float feedbackLength = min(1.0, length(feedbackDiff)*3.5);
    // float feedbackLength = textureColor.r;
    float edges = mod(feedbackLength, modPeriod)/modPeriod;

    vec3 hsv = vec3(pow(edges, 0.5)+t*0.01, 0.4, 1);

    vec3 color = hsv2rgb(hsv);
    float brightness = pow(feedbackLength, 5.0);

    gl_FragColor = vec4(color, 1)*brightness;
}
