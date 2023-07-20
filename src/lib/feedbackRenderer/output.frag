precision highp float;

#pragma glslify: hsv2rgb = require(glsl-hsv2rgb) 

uniform sampler2D texture;
varying vec2 uv;

float modPeriod = 0.1;

void main () {
    vec4 textureColor = texture2D(texture, uv);

    vec2 feedbackDiff = textureColor.rg-uv;
    float feedbackLength = min(1., length(feedbackDiff));
    // float feedbackLength = textureColor.r;
    float edges = mod(feedbackLength, modPeriod)/modPeriod;

    vec3 hsv = vec3(edges-0.5, 0.4, 1);

    vec3 color = hsv2rgb(hsv);
    // vec3 color = vec3(textureColor.xy, 0.0);
    // float brightness = edges;
    float brightness = pow(feedbackLength, 0.8);

    gl_FragColor = vec4(color, 1)*brightness;
    // gl_FragColor = vec4(textureColor.xy, 0, 1);
    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);
}