import REGL from "regl";

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

export const FeedbackRenderer = (glContext: WebGLRenderingContext) => {

    const regl = REGL({
        pixelRatio: 1,
        gl: glContext,
        extensions: [
            'OES_texture_float', 
            // 'GL_OES_texture_float', 
            'WEBGL_color_buffer_float',
            'OES_texture_float_linear'
            // 'WEBGL_texture_float'
        ],
        optionalExtensions: [
            'EXT_color_buffer_float'
        ],
        // optionalExtensions: ['OES_texture_float_linear', "WEBGL_color_buffer_float"],
        onDone(err){
            if(err != null)
                console.log(err)
        }
    })

    // let mouse = mouseChange(document.body, () => {})
    let mouseUV = new vec(-1,-1)
    let laggedMouseUV = mouseUV
    let firstMouse = true

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
        frag: feedbackFrag,
        
        uniforms: {
            texture: lastFramebuffer,
            aspect: () => [aspect, 1],
            mouse: () => laggedMouseUV.toArray(),
            // resized: () => 
            t: ({time}) => time
        },
        
        framebuffer: feedbackFramebuffer,
    })

    const processOutput = regl({
        frag: outputFrag,

        uniforms: {
            texture: feedbackFramebuffer
        },
    })

    regl.frame(({viewportHeight, viewportWidth, time}) => {
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

    })

    return {
        onMove: (x, y) => {
            mouseUV = new vec(x,y)
            if(firstMouse){
                laggedMouseUV = mouseUV
                firstMouse = false
            }

        }
    }
}