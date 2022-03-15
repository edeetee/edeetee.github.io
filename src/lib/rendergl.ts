import REGL, { DrawCommand, Regl, Texture, Texture2D } from "regl";

import mouse from "mouse-change"

interface Renderer{
    (regl: Regl): (() => void)
}

export const FeedbackRenderer: Renderer = regl => {
    var pixels = regl.texture()

    var drawFeedback = regl({
        frag: `
        precision mediump float;
        uniform sampler2D texture;
        uniform vec2 mouse;
        uniform float t;
        varying vec2 uv;

        void main () {
            float dist = length(gl_FragCoord.xy - mouse);
            vec4 textureColor = texture2D(texture, uv);
            // vec2 feedbackUv = textureColor.xy;

            // vec2 mouseDist = uv-mouse;
            // float mouseLength = length(mouseDist);

            // float strength = max(0, 1-mouseLength);

            // gl_FragColor = mix(uv, feedbackUv, 0.01);

            gl_FragColor = vec4(uv, 1,1);
            
            // gl_FragColor = vec4(0.98 * texture2D(texture,
            // uv + cos(t) * vec2(0.5 - uv.y, uv.x - 0.5) - sin(2.0 * t) * (uv - 0.5)).rgb, 1) +
            // exp(-0.01 * dist) * vec4(
            //     1.0 + cos(2.0 * t),
            //     1.0 + cos(2.0 * t + 1.5),
            //     1.0 + cos(2.0 * t + 3.0),
            //     0.0);
        }`,
        
        vert: `
        precision mediump float;
        attribute vec2 position;
        varying vec2 uv;
        void main () {
            uv = position;
            gl_Position = vec4(2.0 * position - 1.0, 0, 1);
        }`,
        
        attributes: {
            position: [
            -2, 0,
            0, -2,
            2, 2]
        },
        
        uniforms: {
            texture: pixels,
            mouse: ({pixelRatio, viewportHeight}) => [
                mouse.x * pixelRatio,
                viewportHeight - mouse.y * pixelRatio
            ],
            t: ({tick}) => 0.01 * tick
        },
        
        count: 3
    })

    return () => {
        regl.clear({
            color: [0, 0, 0, 1]
          })
    
        drawFeedback()
    
        pixels({
            copy: true
        })
    }
}