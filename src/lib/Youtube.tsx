import { CSSProperties } from "react"
import { MediaContainer } from "./MediaContainer"

interface YoutubeParams {
    style?: CSSProperties,
    embedId: string
}

export const Youtube = ({ embedId, style }: YoutubeParams) =>
    <MediaContainer style={{
        position: "relative",
        aspectRatio: '16/9',
        ...style
    }}>
        <iframe
            style={{
                // left: 0,
                // top: 0,
                height: "100%",
                width: "100%",
                // position: "absolute"
            }}
            // width="853"
            // height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </MediaContainer>