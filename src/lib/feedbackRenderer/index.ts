import { FrameCallback, Regl } from "regl";

import feedbackUvFrag from "./feedback_uv.frag"
import feedbackMonoFrag from "./feedback_mono.frag"
import outputFrag from "./output.frag"

import vec from "fast-vector"

interface MouseMoveListener{
    (x: number, y: number): void
}

interface PressListener{
    (pressed: boolean): void
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

export const FeedbackRenderer: (regl: Regl) => {onFrame: FrameCallback, onPress: PressListener, onMove: MouseMoveListener} = (regl: Regl) => {
    // let mouse = mouseChange(document.body, () => {})
    let mouseUV = new vec(-1,-1)
    let laggedMouseUV = mouseUV
    let firstMouse = true

    let lastTime = 0
    let size = new vec(0,0)
    let aspect = 1
    let pressed = false

    // let mouse = mouseChange(document.body, () => {})

    const lastFramebuffer = regl.texture({
        type: "float",
        min: 'linear',
        mag: 'linear',
        wrap: 'clamp'
        // filter: ''
    })

    const timestamp = Date.now()/1000 % 1000;

    const fullscreenQuad = regl({
        attributes: {
            position: fullscreenVertPositions
        },
        vert: fullscreenVertShader,
        count: 3,
    })

    const feedbackFramebuffer = regl.framebuffer({
        colorType: "float",
        depthStencil: false
    })

    const processFeedback = regl({
        frag: feedbackUvFrag,
        
        uniforms: {
            texture: lastFramebuffer,
            aspect: () => [aspect, 1],
            mouse: () => laggedMouseUV.toArray(),
            pressed: () => pressed,
            // resized: () => 
            t: ({time}) => time+timestamp
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
            mouseUV = new vec(x,y)
            if(firstMouse){
                laggedMouseUV = mouseUV
                firstMouse = false
            }

        },

        onPress: (pressedState) => {
            pressed = pressedState
        },

        onFrame: ({viewportHeight, viewportWidth, time}) => {
            const timeDiff = time-lastTime
            lastTime = time

            //limit mouse speed
            const diff = vec.div(mouseUV.sub(laggedMouseUV).limit(timeDiff), aspect, 1)
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