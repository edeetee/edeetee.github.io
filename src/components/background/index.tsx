
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

        // var gl2Context =canvas.getContext("webgl2")

        var regl = REGL({
            canvas: canvas,
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

    render = () => <canvas ref={this.canvasRef} onMouseMove={e => this.onMouseMove(e.clientX, e.clientY)} style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0
    }}>
        
    </canvas>   
}