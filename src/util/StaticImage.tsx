import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface ImageProps{
    style?: CSSProperties,
    src: string
}

export const Image = ({style, src}: ImageProps) => 
    <div style={{...style}}>
        <a href={src}>
            <img src={src} style={{width: '100%', height: '100%', objectFit: "cover"}} />
        </a>
    </div>
    