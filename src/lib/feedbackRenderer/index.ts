import REGL, { DrawCommand, DrawConfig, FrameCallback, Regl, Texture, Texture2D } from "regl";

import feedbackFrag from "./feedback.frag"
import outputFrag from "./output.frag"

interface MouseMoveListener{
    (x: number, y: number): void
}

const fullscreenVertShader = `
precision mediump float;
attribute vec2 position;
varying vec2 uv;
void main () {
    uv = position;
    gl_Position = vec4(2.0 * position - 1.0, 0, 1);
}`

const fullscreenVertPositions = [
    -2, 0,
    0, -2,
    2, 2]

export const FeedbackRenderer: (regl: Regl) => {onMouseMove: MouseMoveListener, onFrame: FrameCallback} = (regl: Regl) => {
    // var mouse = mouseChange(document.body, () => {})
    var mouseUV = {x: 0, y: 0}

    document.body.addEventListener("mousemove", ev => {
        mouseUV.x = ev.clientX/document.body.clientWidth
        mouseUV.y = ev.clientY/document.body.clientHeight
    })

    // var mouse = mouseChange(document.body, () => {})

    // var pixels = regl.texture()

    var feedbackFramebuffer = regl.framebuffer()

    var fullscreenQuad = regl({
        attributes: {
            position: fullscreenVertPositions
        },
        vert: fullscreenVertShader,
        count: 3,
    })

    var processFeedback = regl({
        frag: feedbackFrag,
        
        uniforms: {
            texture: feedbackFramebuffer,
            size: ({viewportWidth, viewportHeight}) => [viewportWidth, viewportHeight],
            mouse: ({pixelRatio}) => [mouseUV.x, 1-mouseUV.y/pixelRatio],
            t: ({tick}) => 0.01 * tick
        },
        
        framebuffer: feedbackFramebuffer,
    })

    var processOutput = regl({
        frag: outputFrag,

        uniforms: {
            texture: feedbackFramebuffer
        },
    })

    return {
        onMouseMove(x, y) {
            mouseUV = { x: x, y: y }
        },

        onFrame: ({viewportHeight, viewportWidth}) => {

            // pixels.resize(viewportWidth, viewportHeight)

            feedbackFramebuffer.resize(viewportWidth, viewportHeight)

            fullscreenQuad(() => {

                regl.clear({
                    color: [0, 0, 0, 1]
                })

                processFeedback()

                // regl.clear({
                //     color: [0, 0, 0, 1]
                // })
    
                processOutput()

            })

            // pixels({
            //     copy: true
            // })
        }
    }
}