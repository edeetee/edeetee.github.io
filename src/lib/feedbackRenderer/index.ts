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

const expectedFramePeriod = 1000 / 60;

export const FeedbackRenderer: (regl: Regl) => {onFrame: FrameCallback, onPress: PressListener, onMove: MouseMoveListener} = (regl: Regl) => {
    // let mouse = mouseChange(document.body, () => {})
    let mouseUV = new vec(-1,-1)
    let laggedMouseUV = mouseUV
    let firstMouse = true

    let lastMousePress = 0;

    let lastTime = 0;
    let framePeriod = expectedFramePeriod;
    let size = new vec(0, 0);
    let aspect = 1;
    let pressed = false;

    // let mouse = mouseChange(document.body, () => {})

    const lastFramebuffer = regl.texture({
      type: "float",
      //   format: "rgba",
      // min: 'linear',
      // mag: 'linear',
      min: "nearest",
      mag: "nearest",
      wrap: "clamp",
      // filter: ''
    });

    const timestamp = (Date.now() / 1000) % 1000;

    const fullscreenQuad = regl({
      attributes: {
        position: fullscreenVertPositions,
      },
      vert: fullscreenVertShader,
      uniforms: {
        aspect: () => [aspect, 1],
        mousePos: () => mouseUV.toArray(),
        mouseVel: () => laggedMouseUV.sub(mouseUV).toArray(),
        pressed: () => pressed,
        res: ({ viewportWidth, viewportHeight }) => [
          viewportWidth,
          viewportHeight,
        ],
        hyperdrive: () => lastTime - lastMousePress,
        // resized: () =>
        speed: framePeriod / expectedFramePeriod,
        t: ({ time }) => time + timestamp,
      },
      count: 3,
    });

    const feedbackFramebuffer = regl.framebuffer({
      colorType: "float",
      depthStencil: false,
    });

    const processFeedback = regl({
      frag: feedbackUvFrag,

      uniforms: {
        texture: lastFramebuffer,
      },

      framebuffer: feedbackFramebuffer,
    });

    const processOutput = regl({
      frag: outputFrag,

      uniforms: {
        texture: feedbackFramebuffer,
      },
    });

    return {
      onMove: (x, y) => {
        mouseUV = new vec(x, y);
        if (firstMouse) {
          laggedMouseUV = mouseUV;
          firstMouse = false;
        }
      },

      onPress: (pressedState) => {
        pressed = pressedState;
        lastMousePress = lastTime;
      },

      onFrame: ({ viewportHeight, viewportWidth, time }) => {
        framePeriod = time - lastTime;
        lastTime = time;

        //limit mouse speed
        const diff = vec.div(
          mouseUV.sub(laggedMouseUV).limit(framePeriod * 2),
          aspect,
          1
        );
        laggedMouseUV = laggedMouseUV.add(diff);

        // console.log(laggedMouseUV)

        //only resize on larger
        if (size.x < viewportWidth || size.y < viewportHeight) {
          lastFramebuffer.resize(viewportWidth, viewportHeight);
          feedbackFramebuffer.resize(viewportWidth, viewportHeight);
          size = new vec(viewportWidth, viewportHeight);
          aspect = viewportWidth / viewportHeight;
        }

        fullscreenQuad(() => {
          processFeedback();

          feedbackFramebuffer.use(() => {
            lastFramebuffer({
              copy: true,
            });
          });

          processOutput();
        });
      },
    };
}