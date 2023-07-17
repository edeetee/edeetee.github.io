import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'

interface VideoProps {
    style?: CSSProperties,
    src: string,
    unmutable?: boolean
}

export const Video = ({ style, src, unmutable, ...props }: VideoProps & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) => {

    const videoRef = useRef<HTMLVideoElement>(null)

    const [showMutedIcon, setShowMutedIcon] = useState(unmutable);
    const [isPlaying, setIsPlaying] = useState(false);

    function setPlaying(isPlaying: boolean) {
        isPlaying ? videoRef.current?.play() : videoRef.current?.pause()
        setIsPlaying(isPlaying)
    }

    return <div style={{ ...style }} onMouseOver={
        (e) => {
            e.preventDefault()
            setPlaying(true)
        }
    }
        onClick={
            (e) => {
                console.log(e)
                e.preventDefault()
                if (unmutable && videoRef.current?.muted) {
                    videoRef.current.muted = false;
                    setShowMutedIcon(false)
                    return;
                }
                setPlaying(!isPlaying)
            }
        }
    >
        <a href={src} style={{ position: 'relative', display: 'block' }}>
            {unmutable && <span className="material-symbols-outlined" style={{ position: 'absolute', color: 'white', fontSize: 32 }}>
                {showMutedIcon ? 'no_sound' : 'volume_up'}
            </span>}

            {!isPlaying && <span className="material-symbols-outlined" style={{
                fontSize: 64,
                position: 'absolute',
                color: 'white',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                play_circle
            </span>}

            <video muted loop ref={videoRef} src={src} style={{ width: '100%', height: '100%', objectFit: "cover" }} {...props} > </video>
        </a>
    </div>
}
