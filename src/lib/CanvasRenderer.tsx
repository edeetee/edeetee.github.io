import React, { CSSProperties, useEffect } from "react";
import REGL, { Regl } from "regl";
import vec from "fast-vector";
import { constrain } from "./constrain";
import Image from "next/image";

const RES_MULTIPLIER = 1 / 2;

export interface MouseMoveListener {
    (x: number, y: number): void;
}

export interface PressListener {
    (pressed: boolean): void;
}

export type BuildRenderer = (regl: Regl) => {
    onFrame: (ctx: REGL.DefaultContext) => void;
    onMove?: (x: number, y: number) => void;
    onPress?: (pressed: boolean) => void;
};

export class SmoothedMouse {
    private target: vec = new vec(0, 0);
    private current: vec = new vec(0, 0);
    uninitialized = true;

    get pos() {
        return this.current;
    }

    get rawPos() {
        return this.target;
    }

    get diff() {
        return this.target.sub(this.current);
    }

    setMousePos(new_target: vec) {
        this.target = new_target;
        if (this.uninitialized) {
            this.current = this.target;
            this.uninitialized = false;
        }
    }

    update(limit: number, aspect = 1.0, mult = 1.0) {
        const diff = vec.div(this.diff.mul(mult).limit(limit), aspect, 1);
        this.current = this.current.add(diff);
    }
}

type CanvasRendererProps = { buildRenderer: BuildRenderer } & React.DetailedHTMLProps<
    React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement
>;

function makeRendererOnCanvas(
    canvasRef: React.RefObject<HTMLCanvasElement>,
    buildRenderer: BuildRenderer,
) {
    if (window === undefined) return;

    const canvas = canvasRef.current;

    const glContext = canvas?.getContext("webgl") || undefined;

    function updateSize() {
        if (canvas && glContext) {
            canvas.width = window.innerWidth * RES_MULTIPLIER;
            canvas.height = window.innerHeight * RES_MULTIPLIER;
            glContext.viewport(0, 0, canvas.width, canvas.height);
        }
    }

    window.addEventListener("resize", updateSize);

    updateSize();

    const regl = REGL({
        // pixelRatio: 0.001,
        // canvas: canvas,
        gl: glContext,
        extensions: [
            "OES_texture_float",
            "WEBGL_color_buffer_float",
        ],
        optionalExtensions: ["EXT_color_buffer_float", "OES_texture_float_linear",],
        onDone(err) {
            if (err != null) console.log(err);
            console.log("done");
            canvasRef.current?.style.setProperty("display", "initial");
        },
    });

    const renderer = buildRenderer(regl);

    function updateMouse(pageX: number, pageY: number) {
        const x = constrain((pageX - window.scrollX) / window.innerWidth, 0, 1);
        const y = constrain(1 - (pageY - window.scrollY) / window.innerHeight, 0, 1);

        if (renderer.onMove) renderer.onMove(x, y);
    }

    function onPress(pressed: boolean) {
        if (renderer.onPress) renderer.onPress(pressed);
    }

    document.body.addEventListener("touchmove", (ev) =>
        updateMouse(ev.touches[0].pageX, ev.touches[0].pageY),
    );
    document.body.addEventListener("mousemove", (ev) => updateMouse(ev.pageX, ev.pageY));
    document.body.addEventListener("mouseover", (ev) => updateMouse(ev.pageX, ev.pageY));

    document.body.addEventListener("mousedown", () => onPress(true));
    document.body.addEventListener("touchstart", () => onPress(true));

    document.body.addEventListener("touchend", () => onPress(false));
    document.body.addEventListener("touchcancel", () => onPress(false));
    document.body.addEventListener("mouseup", () => onPress(false));

    regl.frame((ctx) => {
        renderer.onFrame(ctx);
    });
}

export const CanvasRenderer = ({ buildRenderer, ...props }: CanvasRendererProps) => {
    const canvasRef = React.createRef<HTMLCanvasElement>();

    const { style, ...otherProps } = props;

    useEffect(() => {
        try {
            // throw new Error("test");
            makeRendererOnCanvas(canvasRef, buildRenderer);
        } catch (e) {
            console.error(e);
        }
    });

    const posStyle: CSSProperties = {
        position: "fixed",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        zIndex: -1,
    };

    return (
        <>
            <Image placeholder="blur" src={require("@public/images/bg.png")} alt="" style={{
                ...posStyle,
                backgroundColor: 'black',
            }} />
            <canvas
                ref={canvasRef}
                style={{
                    imageRendering: "pixelated",
                    ...posStyle,
                    ...style,
                    display: "none",
                    backgroundColor: 'black'
                }}
                {...otherProps}
            >
            </canvas>
        </>
    );
};
