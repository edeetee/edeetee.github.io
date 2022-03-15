
//TODO: maybe make component class?

import React, {Component, RefObject} from "react";
import REGL from "regl";
import { FeedbackRenderer } from "src/lib/rendergl";

export class CanvasRenderer extends Component   {
    canvasRef: RefObject<HTMLCanvasElement>

    constructor(props: {}){
        super(props)

        this.canvasRef = React.createRef()
    }

    componentDidMount = () => {
        var canvas = this.canvasRef.current!

        var regl = REGL(canvas)

        var feedbackRendererOnFrame = FeedbackRenderer(regl)

        regl.frame(() => {
            feedbackRendererOnFrame()
        })
    }
    
    // componentWillUnmount(){
        
    // }

    render = () => <canvas style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0
    }}>
        
    </canvas>   
}