import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react'
import { MediaContainer } from './MediaContainer';
import NextImage, { StaticImageData } from 'next/image';
import Modal from 'react-modal';

interface ImageProps {
    style?: CSSProperties,
    src: StaticImageData,
    disableLink?: boolean
}



export const Image = ({ src, disableLink }: ImageProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return <MediaContainer style={{ width: '100%', height: '100%' }}>
        {!disableLink ?
            <a onClick={() => setIsOpen(true)} style={{ width: '100%', height: '100%', cursor: 'zoom-in' }}>
                <BareImage src={src} />
            </a>
            : <BareImage src={src} />
        }
        <Modal isOpen={modalIsOpen}
            style={{
                overlay: { backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1000 },
            }}
            contentElement={(p) => <div style={{ zIndex: 1000, display: 'flex', height: '100%', cursor: 'zoom-out' }} ><BareImage src={src} /></div>}
            onRequestClose={() => setIsOpen(false)}
            shouldCloseOnOverlayClick shouldCloseOnEsc>

        </Modal>
    </MediaContainer>
}

export function BareImage({ src }: { src: StaticImageData }) {
    return <NextImage alt='' src={src}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }} fill={false} sizes='50vw' />;
}
