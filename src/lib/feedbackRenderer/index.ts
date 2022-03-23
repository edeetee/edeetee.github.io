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

export const FeedbackRenderer: (regl: Regl) => {onMouseMove: MouseMoveListener, onFrame: FrameCallback} = (regl: Regl) => {
    // let mouse = mouseChange(document.body, () => {})
    const mouseUV = new vec(0,0)
    let laggedMouseUV = new vec(0,0)

    function updateMouse(pageX: number, pageY: number){
        mouseUV.x = (pageX-window.scrollX)/window.innerWidth
        mouseUV.y = 1-(pageY-window.scrollY)/window.innerHeight
    }

    document.body.addEventListener("touchmove", ev => updateMouse(ev.touches[0].pageX, ev.touches[0].pageY))
    document.body.addEventListener("mousemove", ev => updateMouse(ev.pageX, ev.pageY))

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
            size: ({viewportWidth, viewportHeight}) => [viewportWidth, viewportHeight],
            mouse: () => laggedMouseUV.toArray(),
            // resized: () => 
            t: ({tick}) => 0.01 * tick
        },
        
        framebuffer: feedbackFramebuffer,
    })

    let lastSize = [0,0]

    const processOutput = regl({
        frag: outputFrag,

        uniforms: {
            texture: feedbackFramebuffer
        },
    })

    let lastTime = 0

    return {
        onMouseMove(x, y) {
            mouseUV.x = x
            mouseUV.y = y
        },

        onFrame: ({viewportHeight, viewportWidth, time}) => {
            const timeDiff = time-lastTime
            lastTime = time

            //limit mouse speed
            const diff = mouseUV.sub(laggedMouseUV)
            const maxSpeed = timeDiff*1.2
            laggedMouseUV = laggedMouseUV.add(diff.normalize().mul(maxSpeed))
            // laggedMouseUV = laggedMouseUV.add(diff)

            // console.log(laggedMouseUV)

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
                //     let readFbo = regl.read()
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