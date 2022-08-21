import { Image } from "src/lib/StaticImage";
import me from "@public/images/me.webp"
import { useEffect, useRef } from "react";


export const AnimatedMe = () => {
    const imageRef = useRef<HTMLDivElement>(null)

    let mouse_over = false;

    let cur_rotation = 0;

    let clicked = false;
    let offset = 0;

    function calc_transform() {
        const freq = clicked ? 0.03 : 0.005;
        const amp = clicked ? 20 : 4;
        const aim_rotation = mouse_over || clicked ? Math.sin(Date.now()*freq)*amp : 0;

        cur_rotation += (aim_rotation - cur_rotation) * 0.1;
        
        if(clicked)
            offset -= 20;

        return `translate(${offset}px, ${offset}px) rotate(${cur_rotation-45}deg)`;
    }

    function onFrame(){
        if (imageRef.current){
            imageRef.current.style.transform = calc_transform();
        }

        requestAnimationFrame(onFrame)
    }

    function onClick() {
        clicked = true;
        // if(imageRef.current)
            // imageRef.current.remove()
            // imageRef.current.style.display = "none"
            // setTimeout(() => {
            //     if(imageRef.current)
            //         imageRef.current.
            // }, 1000)
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
                right: -64,
                bottom: -150,
                transformOrigin: "50%, 50%", 
                transform: calc_transform(),
                width: 128,
            }}>


        <Image style={{
            pointerEvents: "none"
            }} src={me}/>
    </div>
    )
}