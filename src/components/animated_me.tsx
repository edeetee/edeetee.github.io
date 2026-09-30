import { BareImage } from "src/lib/StaticImage";
import me from "@public/images/profile-transparent.png"
import { useEffect, useRef } from "react";

const offset_rotation = 20;

export const AnimatedMe = () => {
    const imageRef = useRef<HTMLDivElement>(null)

    let mouse_over = false;
    let clicked = false;

    let cur_rotation = offset_rotation;
    let offset = 0;

    let last_frame = Date.now();

    function calc_transform() {
        const speed = (Date.now() - last_frame) / (1000 / 60);

        const freq = clicked ? 0.02 : 0.003;
        const amp = clicked ? 100 : 15;
        const aim_rotation = offset_rotation + (mouse_over || clicked ? Math.sin(Date.now() * freq) * amp : 0);

        cur_rotation += (aim_rotation - cur_rotation) * 0.1;

        if (clicked)
            offset -= 20 * speed;

        return `translate(${offset/2}px, ${offset + 48}px) rotate(${cur_rotation - 45}deg)`;
    }

    function onFrame() {
        if (imageRef.current) {
            imageRef.current.style.transform = calc_transform();
        }

        last_frame = Date.now();
        requestAnimationFrame(onFrame)
    }

    function onClick() {
        clicked = true;
        return false
    }

    useEffect(() => {
        requestAnimationFrame(onFrame)
    })

    return (
        <div
            ref={imageRef}
            onClick={onClick}
            onMouseEnter={() => mouse_over = true}
            onMouseLeave={() => mouse_over = false}
            style={{
                position: "fixed",
                cursor: "pointer",
                // width: "20vw",
                // margin: 64,
                right: -16,
                bottom: -16,
                //  top: -32,
                // bottom: -150,
                transformOrigin: "50% 50%",
                transform: calc_transform(),
                overflow: 'clip',
                width: 200,
            }}>

            <BareImage src={me} />
        </div>
    )
}
