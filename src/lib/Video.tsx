import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import { MediaContainer } from './MediaContainer';

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
        if (!isPlaying) {
            setShowMutedIcon(true)
            if (videoRef.current != null)
                videoRef.current.muted = true;
        }
        isPlaying ? videoRef.current?.play() : videoRef.current?.pause()
        setIsPlaying(isPlaying)
    }

    useEffect(() => {
        if (videoRef.current != null)
            videoRef.current.volume = 0.5;
    }, []);

    return <MediaContainer style={{ ...style }}
    >
        <a href={src} style={{ position: 'relative', display: 'flex' }}
            onMouseOver={
                (e) => {
                    e.preventDefault()
                    if (!isPlaying) {
                        setPlaying(true)
                    }
                }
            }
            onClick={
                (e) => {
                    if (e.currentTarget)
                    e.preventDefault()
                    if (unmutable && videoRef.current?.muted) {
                        videoRef.current.muted = false;
                        setShowMutedIcon(false)
                        if (isPlaying)
                            return;
                    }
                    setPlaying(!isPlaying)
                }
            }
        >
            {unmutable && <span onClick={(e) => { e.preventDefault(); setShowMutedIcon(!showMutedIcon) }} className="material-symbols-outlined" style={{ position: 'absolute', color: 'white', fontSize: 32, zIndex: 1 }}>
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

            <video muted autoPlay={isPlaying} loop ref={videoRef} src={src} style={{ width: '100%', height: '100%', objectFit: "cover" }} {...props} > </video>
        </a>
    </MediaContainer>
}
