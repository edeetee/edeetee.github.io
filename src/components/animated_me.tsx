import { Image } from "src/lib/StaticImage";
import me from "@public/images/me.webp"
import { useEffect, useRef } from "react";


export const AnimatedMe = () => {
    const imageRef = useRef<HTMLDivElement>(null)

    function onFrame(){
        const rotation = Math.sin(Date.now()*0.002)*4

        if (imageRef.current)
            imageRef.current.style.transform = `rotate(${rotation}deg)`;

        requestAnimationFrame(onFrame)
    }

    function onClick() {
        if(imageRef.current)
            imageRef.current.remove()
            // setTimeout(() => {
            //     if(imageRef.current)
            //         imageRef.current.
            // }, 1000)
        return false
    }

    useEffect(() => {
        requestAnimationFrame(onFrame)
    })

    return (<div ref={imageRef} onClick={onClick} style={{
                position: "fixed",
                cursor: "pointer",
                // width: "20vw",
                margin: 100,
                right: 0,
                transformOrigin: "50%, 50%",
                top: 0,
                width: "10vw"
            }}>
        <Image style={{pointerEvents: "none"}} src={me}/>
    </div>)
}