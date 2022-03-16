precision mediump float;

uniform sampler2D texture;
varying vec2 uv;

void main () {
    vec4 textureColor = texture2D(texture, uv);

    gl_FragColor = textureColor;
    // gl_FragColor = vec4(textureColor.xy, 0, 1);
    // gl_FragColor = vec4(mod(uv+textureColor.xy, vec2(1)), 0,1);
}