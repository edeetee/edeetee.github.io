import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { MediaContainer } from './MediaContainer';

interface ImageProps{
    style?: CSSProperties,
    src: string,
    disableLink?: boolean
}

export const imgStyle: CSSProperties = { width: '100%', height: '100%', objectFit: "cover" };

export const Image = ({ style, src, disableLink }: ImageProps) => {
    const inner = <img src={src} style={imgStyle} />;

    return <MediaContainer>

        {!disableLink ?
            <a href={src} style={{ display: 'flex' }}>
                {inner}
            </a>
            : inner
        }

    </MediaContainer>
}