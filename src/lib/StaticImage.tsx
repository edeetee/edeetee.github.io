import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface ImageProps{
    style?: CSSProperties,
    src: string,
    disableLink?: boolean
}

export const Image = ({ style, src, disableLink }: ImageProps) => {
    const inner = <img src={src} style={{ width: '100%', height: '100%', objectFit: "cover" }} />;

    return <div style={{ ...style }}>
        {!disableLink ?
            <a href={src} style={{ display: 'block' }}>
                {inner}
            </a>
            : inner
        }
    </div>
}