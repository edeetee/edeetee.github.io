import { FrameCallback, Regl } from "regl";

import feedbackFrag from "./feedback.frag"
import outputFrag from "./output.frag"

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

export const FeedbackRenderer: (regl: Regl) => {onMouseMove: MouseMoveListener, onFrame: FrameCallback} = (regl: Regl) => {
    // var mouse = mouseChange(document.body, () => {})
    var mouseUV = {x: 0, y: 0}

    function updateMouse(pageX: number, pageY: number){
        mouseUV.x = (pageX-window.scrollX)/window.innerWidth
        mouseUV.y = (pageY-window.scrollY)/window.innerHeight
    }

    document.body.addEventListener("touchmove", ev => updateMouse(ev.touches[0].pageX, ev.touches[0].pageY))
    document.body.addEventListener("mousemove", ev => updateMouse(ev.pageX, ev.pageY))

    // var mouse = mouseChange(document.body, () => {})

    var lastFramebuffer = regl.texture({
        type: "float",
    })

    var feedbackFramebuffer = regl.framebuffer({
        colorType: "float",
        depthStencil: false
    })

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
            texture: lastFramebuffer,
            size: ({viewportWidth, viewportHeight}) => [viewportWidth, viewportHeight],
            mouse: ({pixelRatio}) => [mouseUV.x, 1-mouseUV.y],
            // resized: () => 
            t: ({tick}) => 0.01 * tick
        },
        
        framebuffer: feedbackFramebuffer,
    })

    var lastSize = [0,0]

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

            //only resize on larger
            if(lastSize[0] < viewportWidth || lastSize[1] < viewportHeight){
                lastFramebuffer.resize(viewportWidth, viewportHeight)
                feedbackFramebuffer.resize(viewportWidth, viewportHeight)
                lastSize = [viewportWidth, viewportHeight]
            }

            fullscreenQuad(() => {
                // regl.clear({
                //     color: [1,1,1,1],
                //     framebuffer: feedbackFramebuffer
                // })

                processFeedback()

                // feedbackFramebuffer.use(() => {
                //     var readFbo = regl.read()
                // })
                feedbackFramebuffer.use(() => {
                    lastFramebuffer({
                        copy: true,
                    })
                })
                // regl.clear({
                //     color: [1,1,1, 1]
                // })
    
                processOutput()

                // regl.clear({
                //     color: [1, 0, 0, 1]
                // })

                // regl.draw()
            })

        }
    }
}