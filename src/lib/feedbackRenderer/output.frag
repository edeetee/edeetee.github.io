precision highp float;

#pragma glslify: hsv2rgb = require(glsl-hsv2rgb) 

uniform sampler2D texture;
varying vec2 uv;

void main () {
    vec4 textureColor = texture2D(texture, uv);

    vec2 feedbackDiff = textureColor.rg-uv;
    float feedbackLength = min(1., length(feedbackDiff));
    // float feedbackLength = textureColor.r;

    vec3 hsv = vec3(pow(feedbackLength, 1.0)*0.7-0.6, pow(feedbackLength, 1.1)*0.4, 1);

    gl_FragColor = vec4(hsv2rgb(hsv), 1);
    // gl_FragColor = vec4(textureColor.xy, 0, 1);
    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);
}