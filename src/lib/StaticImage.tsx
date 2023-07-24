import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { MediaContainer } from './MediaContainer';
import NextImage, { StaticImageData } from 'next/image';

interface ImageProps{
    style?: CSSProperties,
    src: StaticImageData,
    disableLink?: boolean
}

export const imgStyle: CSSProperties = { width: '100%', height: '100%', objectFit: "cover" };

export const Image = ({ style, src, disableLink }: ImageProps) => {
    console.log(src.width, src.height)
    const inner = <NextImage src={src} width={src.width} height={src.height} objectFit='contain' sizes='50vw' style={{ background: 'black' }} />;

    return <MediaContainer style={{ width: '100%', height: '100%' }}>
        {!disableLink ?
            <a href={src.src} style={{ position: 'relative' }}>
                {inner}
            </a>
            : inner
        }


    </MediaContainer>
}