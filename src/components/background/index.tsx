
//TODO: maybe make component class?

import React, { useEffect } from "react";
import REGL from "regl";
import { FeedbackRenderer } from "src/lib/feedbackRenderer";

const RES_MULTIPLIER = 0.5

export const CanvasRenderer = () => {
    const canvasRef = React.createRef<HTMLCanvasElement>()

    let onMouseMove: ((x: number, y: number) => void)|undefined

    useEffect(() => {
        if(!process.browser)
            return

        const canvas = canvasRef.current

        const glContext = canvas?.getContext("webgl")

        function updateSize(){
            if(canvas && glContext){
                canvas.width = window.innerWidth*RES_MULTIPLIER
                canvas.height = window.innerHeight*RES_MULTIPLIER
                glContext.viewport(0,0, canvas.width, canvas.height)
            }
        }

        window.addEventListener("resize", updateSize)

        updateSize()

        const regl = REGL({
            pixelRatio: 1,
            // canvas: canvas,
            gl: glContext || undefined,
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
            onDone(err, regl){
                if(err != null)
                    console.log(err)
            }
        })

        const feedbackRenderer = FeedbackRenderer(regl)

        onMouseMove = feedbackRenderer.onMouseMove

        regl.frame(ctx => {
            feedbackRenderer.onFrame(ctx)
        })
    })
    
    return <canvas ref={canvasRef}
        onMouseMove={e => {if(onMouseMove) onMouseMove(e.clientX, e.clientY)}} 
        style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0
        }}
    ></canvas>
}