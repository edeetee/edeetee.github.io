precision mediump float;
uniform sampler2D texture;
uniform vec2 mouse;
uniform float t;
uniform vec2 size;
varying vec2 uv;

vec2 resize = vec2(size.y/size.x, 1);

void main () {
    float dist = length(gl_FragCoord.xy - mouse);
    vec2 textureUv = ((uv-vec2(0.5))*0.98) + vec2(0.5);
    vec4 textureColor = texture2D(texture, textureUv);

    vec2 feedbackUV = textureColor.xy;
    // vec2 feedbackUv = textureColor.xy;

    vec2 mouseDist = (uv-mouse);
    float mouseLength = length(mouseDist);
    float mouseStrength = clamp(1.0-mouseLength*5.0, 0.0, 1.0);

    // gl_FragColor = mix(uv, feedbackUv, 0.01);

    // vec2 distortedUV = feedbackUV + clamp(vec2(1)-mouseDist, vec2(0.0), vec2(1.0))

    // gl_FragColor = vec4(mix(uv, textureColor.xy, 0.5), mouseStrength, 1); 

    // gl_FragColor = textureColor + vec4(vec3(mouseStrength), 0);
    // float newStrength = mouseStrength + textureColor.x*0.1;
    
    // gl_FragColor = vec4(vec3(newStrength), 1);
    gl_FragColor = vec4(uv, mouseStrength, 1);
    // gl_FragColor = vec4(uv, 0,1);
    // gl_FragColor = vec4(1,1,1,0);
    
    // gl_FragColor = vec4(0.98 * texture2D(texture,
    // uv + cos(t) * vec2(0.5 - uv.y, uv.x - 0.5) - sin(2.0 * t) * (uv - 0.5)).rgb, 1) +
    // exp(-0.01 * dist) * vec4(
    //     1.0 + cos(2.0 * t),
    //     1.0 + cos(2.0 * t + 1.5),
    //     1.0 + cos(2.0 * t + 3.0),
    //     0.0);
}