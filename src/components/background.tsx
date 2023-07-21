
//TODO: maybe make component class?

import React, { useEffect } from "react";
import REGL from "regl";
import { FeedbackRenderer } from "src/lib/feedbackRenderer";
import { constrain } from "src/lib/constrain";

const RES_MULTIPLIER = 1 / 2

export const CanvasRenderer = () => {
    const canvasRef = React.createRef<HTMLCanvasElement>()

    useEffect(() => {
        if(window === undefined)
            return

        const canvas = canvasRef.current

        const glContext = canvas?.getContext("webgl") || undefined

        function updateSize(){

            if(canvas && glContext){
                const newWidth = window.innerWidth * RES_MULTIPLIER;
                const newHeight = window.innerHeight * RES_MULTIPLIER;
                if (canvas.width < newWidth || canvas.height < newHeight) {
                    canvas.width = newWidth
                    canvas.height = newHeight
                    glContext.viewport(0, 0, canvas.width, canvas.height)
                }
            }
        }

        window.addEventListener("resize", updateSize)

        updateSize()

        const regl = REGL({
            // pixelRatio: 0.001,
            // canvas: canvas,
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

        const feedbackRenderer = FeedbackRenderer(regl)

        function updateMouse(pageX: number, pageY: number){
            const x = constrain((pageX-window.scrollX)/window.innerWidth, 0, 1)
            const y = constrain(1-(pageY-window.scrollY)/window.innerHeight, 0, 1)

            feedbackRenderer.onMove(x, y)
        }
    
        document.body.addEventListener("touchmove", ev => updateMouse(ev.touches[0].pageX, ev.touches[0].pageY))
        document.body.addEventListener("mousemove", ev => updateMouse(ev.pageX, ev.pageY))
        document.body.addEventListener("mouseover", ev => updateMouse(ev.pageX, ev.pageY))

        document.body.addEventListener("mousedown", () => feedbackRenderer.onPress(true))
        document.body.addEventListener("touchstart", () => feedbackRenderer.onPress(true))

        document.body.addEventListener("touchend", () => feedbackRenderer.onPress(false))
        document.body.addEventListener("touchcancel", () => feedbackRenderer.onPress(false))
        document.body.addEventListener("mouseup", () => feedbackRenderer.onPress(false))

        regl.frame(ctx => {
            feedbackRenderer.onFrame(ctx)
        })
    })
    
    return <canvas ref={canvasRef}
        style={{
            imageRendering: "pixelated",
            position: "fixed",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0
        }}
    ></canvas>
}