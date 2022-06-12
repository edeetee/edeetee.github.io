import { FrameCallback, Regl } from "regl";

import feedbackFrag from "./feedback.frag"
import outputFrag from "./output.frag"

import vec from "fast-vector"

interface MouseMoveListener{
    (x: number, y: number): void
}

const fullscreenVertShader = `
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main () {
    uv = position;
    gl_Position = vec4(2.0 * position - 1.0, 0, 1);
}`

//http://stack.gl/packages/#hughsk/glsl-noise

const fullscreenVertPositions = [
    -2, 0,
    0, -2,
    2, 2]

export const FeedbackRenderer: (regl: Regl) => {onFrame: FrameCallback, onMove: MouseMoveListener} = (regl: Regl) => {
    // let mouse = mouseChange(document.body, () => {})
    const mouseUV = new vec(0,0)
    let laggedMouseUV = new vec(0,0)

    let lastTime = 0
    let size = new vec(0,0)
    let aspect = 1

    // let mouse = mouseChange(document.body, () => {})

    const lastFramebuffer = regl.texture({
        type: "float",
        min: 'linear',
        mag: 'linear'
        // filter: ''
    })

    const feedbackFramebuffer = regl.framebuffer({
        colorType: "float",
        depthStencil: false
    })

    const fullscreenQuad = regl({
        attributes: {
            position: fullscreenVertPositions
        },
        vert: fullscreenVertShader,
        count: 3,
    })

    const processFeedback = regl({
        frag: feedbackFrag,
        
        uniforms: {
            texture: lastFramebuffer,
            aspect: () => [aspect, 1],
            mouse: () => laggedMouseUV.toArray(),
            // resized: () => 
            t: ({tick}) => 0.01 * tick
        },
        
        framebuffer: feedbackFramebuffer,
    })

    const processOutput = regl({
        frag: outputFrag,

        uniforms: {
            texture: feedbackFramebuffer
        },
    })

    return {
        onMove: (x, y) => {
            mouseUV.x = x
            mouseUV.y = y
        },

        onFrame: ({viewportHeight, viewportWidth, time}) => {
            const timeDiff = time-lastTime
            lastTime = time

            //limit mouse speed
            const diff = mouseUV.sub(laggedMouseUV).limit(timeDiff).div(aspect, 1)
            laggedMouseUV = laggedMouseUV.add(diff)

            // console.log(laggedMouseUV)

            //only resize on larger
            if(size.x < viewportWidth || size.y < viewportHeight){
                lastFramebuffer.resize(viewportWidth, viewportHeight)
                feedbackFramebuffer.resize(viewportWidth, viewportHeight)
                size = new vec(viewportWidth, viewportHeight)
                aspect = viewportWidth/viewportHeight
            }

            fullscreenQuad(() => {
                processFeedback()

                feedbackFramebuffer.use(() => {
                    lastFramebuffer({
                        copy: true,
                    })
                })
    
                processOutput()
            })

        }
    }
}