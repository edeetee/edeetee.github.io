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
    // vec2 textureUv = ((uv-vec2(0.5))*1.005) + vec2(0.5);
    vec4 textureColor = texture2D(texture, uv);

    vec2 feedbackUv = textureColor.xy;
    // vec2 feedbackUv = textureColor.xy;

    vec2 mouseDist = (uv-mouse)*resize;
    float mouseLength = length(mouseDist);
    float mouseStrength = pow(clamp(1.0-mouseLength, 0.0, 1.0), 5.0);

    // gl_FragColor = mix(uv, feedbackUv, 0.01);

    // vec2 distortedUV = feedbackUv + clamp(vec2(1)-mouseDist, vec2(0.0), vec2(1.0))

    // gl_FragColor = vec4(mix(uv, textureColor.xy, 0.5), mouseStrength, 1); 

    // gl_FragColor = textureColor + vec4(vec3(mouseStrength), 0);
    // float newStrength = mouseStrength + textureColor.x*0.1;

    // vec3 feedbackRgb = vec3(textureColor.r+0.01, mix(textureColor.r, textureColor.g, 0.995), mix(textureColor.g, textureColor.b, 0.995));

    // vec3 feedbackRgb = mix(mix(vec3(1), textureColor.rgb, 0.99), textureColor.gbr, 0.1);
    
    // gl_FragColor = vec4(vec3(newStrength), 1);
    // vec4 newColor = vec4(vec3(1.0-mouseStrength), 1);
    // gl_FragColor = mix(vec4(1), textureColor, 0.99)-vec4(vec3(mouseStrength), 1);

    vec2 mouseUvOffset = normalize(rotate(mouseDist, t*0.5))*mouseStrength;

    vec2 newUv = feedbackUv - mouseUvOffset*0.004 + snoise3(vec3(uv, t*0.1))*0.001;

    newUv = mix(uv, newUv, 0.997);

    gl_FragColor = vec4(newUv, 0, 1);
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