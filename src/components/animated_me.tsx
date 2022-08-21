import { Image } from "src/lib/StaticImage";
import me from "@public/images/me.webp"
import { useEffect, useRef } from "react";


export const AnimatedMe = () => {
    const imageRef = useRef<HTMLDivElement>(null)

    let mouse_over = false;

    let cur_rotation = 0;

    function onFrame(){
        const aim_rotation = mouse_over ? Math.sin(Date.now()*0.005)*4 : 0;

        cur_rotation += (aim_rotation - cur_rotation) * 0.1;

        if (imageRef.current)
            imageRef.current.style.transform = `rotate(${cur_rotation-45}deg)`;

        requestAnimationFrame(onFrame)
    }

    function onClick() {
        if(imageRef.current)
            // imageRef.current.remove()
            imageRef.current.style.display = "none"
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
                transform: "rotate(90deg)",
                width: 128,
            }}>


        <Image style={{
            pointerEvents: "none"
            }} src={me}/>
    </div>
    )
}