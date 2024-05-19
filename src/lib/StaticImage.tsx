import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { MediaContainer } from './MediaContainer';
import NextImage, { StaticImageData } from 'next/image';

interface ImageProps {
    style?: CSSProperties,
    src: StaticImageData,
    disableLink?: boolean
}



export const Image = ({ style, src, disableLink }: ImageProps) => {

    return <MediaContainer style={{ width: '100%', height: '100%' }}>
        {!disableLink ?
            <a href={src.src} style={{ width: '100%', height: '100%' }}>
                <BareImage src={src} />
            </a>
            : <BareImage src={src} />
        }
    </MediaContainer>
}

export function BareImage({ src }: { src: StaticImageData }) {
    return <NextImage alt='' src={src}
        style={{ objectFit: 'contain', width: '100%', height: '100%' }} fill={false} sizes='50vw' />;
}
