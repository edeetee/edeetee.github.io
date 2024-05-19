import { CSSProperties, DetailedHTMLProps, ImgHTMLAttributes } from 'react'

interface ImageProps {
    children?: React.ReactNode,
    style?: CSSProperties,
}

const borderStyle = 'solid';
const borderOffset = 4;
const borderLength = 3;
const commonBorderStyle: CSSProperties = { position: "absolute", width: borderLength, height: borderLength, borderWidth: 1, borderColor: 'white', zIndex: 1 };

export const MediaContainer = ({ children, style }: ImageProps) => {
    return <div style={{ ...style, position: 'relative', margin: borderOffset, display: 'block', width: '100%', height: '100%' }}>
        <div style={{ ...commonBorderStyle, left: -borderOffset, top: -borderOffset, borderLeft: borderStyle, borderTop: borderStyle }}></div>
        <div style={{ ...commonBorderStyle, right: -borderOffset, bottom: -borderOffset, borderRight: borderStyle, borderBottom: borderStyle }}></div>
        <div style={{ ...commonBorderStyle, right: -borderOffset, top: -borderOffset, borderRight: borderStyle, borderTop: borderStyle }}></div>
        <div style={{ ...commonBorderStyle, left: -borderOffset, bottom: -borderOffset, borderLeft: borderStyle, borderBottom: borderStyle }}></div>

        {children}

    </div>
}