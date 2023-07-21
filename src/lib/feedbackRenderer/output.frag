precision highp float;

#pragma glslify: hsv2rgb = require(glsl-hsv2rgb) 

uniform sampler2D texture;
varying vec2 uv;
uniform float t;

float modPeriod = 0.3;

void main () {
    vec4 textureColor = texture2D(texture, uv);

    vec2 feedbackDiff = textureColor.rg-uv;
    float feedbackLength = min(1., length(feedbackDiff)*2.0);
    // float feedbackLength = textureColor.r;
    float edges = mod(feedbackLength, modPeriod)/modPeriod;

    vec3 hsv = vec3(edges*0.5-0.5+t*0.05, 0.4, 1);

    vec3 color = hsv2rgb(hsv);
    // vec3 color = vec3(textureColor.xy, 0.0);
    // float brightness = edges;
    float brightness = pow(feedbackLength, 2.0);

    gl_FragColor = vec4(color, 1)*brightness;
    // gl_FragColor = textureColor;
    // gl_FragColor = vec4(0.0,0.0,0.0,0.0);
    // gl_FragColor = vec4(textureColor.xy, 0, 1);
    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);
}