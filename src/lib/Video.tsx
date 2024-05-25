import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, VideoHTMLAttributes, useEffect, useRef, useState } from 'react'
import { MediaContainer } from './MediaContainer';
import ReactModal from 'react-modal';

interface VideoProps {
    style?: CSSProperties,
    src: string,
    muted?: boolean,
    onExitFullscreen?: () => void
}

export const Video = ({ style, src, muted, onExitFullscreen, ...props }: VideoProps & DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>) => {

    const videoRef = useRef<HTMLVideoElement>(null)

    const unmutable = !muted ?? false;

    const [showMutedIcon, setShowMutedIcon] = useState(unmutable);
    const [isPlaying, setIsPlaying] = useState(false);

    const [fullscreen, setFullscreen] = useState(onExitFullscreen != undefined);

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
        <a href={src} role='button' aria-label='video' style={{ position: 'relative', display: 'flex', width: '100%', height: '100%' }}
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
                    if (e.currentTarget) {
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
            }
        >
            {unmutable && <span role='button' aria-label='toggle audio' onClick={(e) => { e.preventDefault(); setShowMutedIcon(!showMutedIcon) }} className="material-symbols-outlined" style={{ position: 'absolute', color: 'white', fontSize: 32, zIndex: 1 }}>
                {showMutedIcon ? 'no_sound' : 'volume_up'}
            </span>}

            {!isPlaying && <span role='none' className="material-symbols-outlined" style={{
                fontSize: 64,
                position: 'absolute',
                color: 'white',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                play_circle
            </span>}

            <a onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                return onExitFullscreen != null ? onExitFullscreen() : setFullscreen(true);
            }}>
                <span className="material-symbols-outlined" style={{
                    fontSize: 32,
                    position: 'absolute',
                    color: 'white',
                    bottom: '0',
                    right: '0',
                    zIndex: 1,
                    // cursor: 'zoom-in'
                    // transform: 'translate(-50%, -50%)'
                }}>fullscreen</span>
            </a>

            <video muted autoPlay={isPlaying} loop ref={videoRef} src={src} style={{ width: '100%', height: '100%', objectFit: "cover" }} {...props} > </video>

            {onExitFullscreen == null && <ReactModal isOpen={fullscreen} onRequestClose={() => setFullscreen(false)} style={{
                overlay: { backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000 },
            }}>
                <Video onExitFullscreen={() => setFullscreen(false)} src={src} muted={muted} />
            </ReactModal>}

        </a>
    </MediaContainer>
}
