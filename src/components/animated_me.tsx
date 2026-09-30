import { BareImage } from "src/lib/StaticImage";
import me from "@public/images/profile-transparent.png"
import { useEffect, useRef } from "react";
import { mdiPower } from "@mdi/js";

const offset_rotation = 20;
const hide_distance = 100;

interface AnimatedMeProps {
    /** Slide the little guy off screen (used while a page is open) */
    hidden?: boolean
}

export const AnimatedMe = ({ hidden = false }: AnimatedMeProps) => {
    const imageRef = useRef<HTMLDivElement>(null)

    // animation state lives in refs so the single rAF loop always reads current values
    const hiddenRef = useRef(hidden);
    const hide_progress = useRef(0);
    const frameRef = useRef<number | null>(null);

    const mouse_over = useRef(false);
    const clicked = useRef(false);

    const cur_rotation = useRef(offset_rotation);
    const offset = useRef(0);

    const last_frame = useRef(Date.now());

    function calc_transform() {
        const speed = (Date.now() - last_frame.current) / (1000 / 60);

        const freq = clicked.current ? 0.02 : 0.003;
        const amp = clicked.current ? 100 : 15;
        const aim_rotation = offset_rotation + (mouse_over.current || clicked.current ? Math.sin(Date.now() * freq) * amp : 0);

        cur_rotation.current += (aim_rotation - cur_rotation.current) * 0.1;

        if (clicked.current)
            offset.current -= 20 * speed;

        const hide = hide_progress.current;
        const hide_ease = hide;

        return `translate(${offset.current / 2 - hide_ease * -hide_distance/2}px, ${offset.current + 48 + hide_ease * hide_distance}px) rotate(${cur_rotation.current - 45}deg)`;
    }

    function onFrame() {
        // ease towards the hidden state so he slides away instead of popping out
        const aim_hidden = hiddenRef.current ? 1 : 0;
        hide_progress.current += (aim_hidden - hide_progress.current) * 0.05;

        // if (Math.abs(aim_hidden - hide_progress.current) < 0.001)
        //     hide_progress.current = aim_hidden;

        if (imageRef.current) {
            imageRef.current.style.transform = calc_transform();
            imageRef.current.style.opacity = `${1 - hide_progress.current}`;
        }

        last_frame.current = Date.now();
        frameRef.current = requestAnimationFrame(onFrame)
    }

    function onClick() {
        clicked.current = true;
        return false
    }

    useEffect(() => {
        hiddenRef.current = hidden;
    }, [hidden])

    useEffect(() => {
        frameRef.current = requestAnimationFrame(onFrame)

        return () => {
            if (frameRef.current != null)
                cancelAnimationFrame(frameRef.current)
        }
    }, [])

    return (
        <div
            ref={imageRef}
            onClick={onClick}
            onMouseEnter={() => mouse_over.current = true}
            onMouseLeave={() => mouse_over.current = false}
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
                opacity: 1 - hide_progress.current,
                pointerEvents: hidden ? "none" : "auto",
                overflow: 'clip',
                width: 200,
            }}>

            <BareImage src={me} />
        </div>
    )
}
