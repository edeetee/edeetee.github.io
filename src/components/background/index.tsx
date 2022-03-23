
//TODO: maybe make component class?

import React, {Component, RefObject} from "react";
import REGL from "regl";
import { FeedbackRenderer } from "src/lib/feedbackRenderer";

export class CanvasRenderer extends Component   {
    canvasRef: RefObject<HTMLCanvasElement>

    constructor(props: {}){
        super(props)

        this.canvasRef = React.createRef()
    }

    componentDidMount() {
        if(!process.browser)
            return

        var canvas = this.canvasRef.current!

        var glContext = canvas.getContext("webgl")!

        function updateSize(){
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            glContext.viewport(0,0, window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", updateSize)

        updateSize()

        var regl = REGL({
            pixelRatio: 1,
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
            onDone(err, regl){
                if(err != null)
                    console.log(err)
            }
        })

        var feedbackRenderer = FeedbackRenderer(regl)

        this.onMouseMove = feedbackRenderer.onMouseMove

        regl.frame(ctx => {
            feedbackRenderer.onFrame(ctx)
        })
    }

    onMouseMove = (x: number, y: number) => {}

    render = () => <canvas 
        ref={this.canvasRef} 
        onMouseMove={e => this.onMouseMove(e.clientX, e.clientY)} 
        style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            left: 0,
            top: 0
        }}
    >
        
    </canvas>   
}