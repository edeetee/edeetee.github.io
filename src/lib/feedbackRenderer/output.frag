precision mediump float;

#pragma glslify: hsv2rgb = require(glsl-hsv2rgb) 

uniform sampler2D texture;
varying vec2 uv;

void main () {
    vec4 textureColor = texture2D(texture, uv);

    vec2 feedbackDiff = textureColor.rg-uv;

    vec3 hsv = vec3((feedbackDiff.r+feedbackDiff.g)*0.5-0.3, 0.05, 1);

    gl_FragColor = vec4(hsv2rgb(hsv), 1);
    // gl_FragColor = vec4(textureColor.xy, 0, 1);
    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);
}