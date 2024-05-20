import { mdiPlus, mdiMinus } from "@mdi/js"
import { DetailedHTMLProps, HTMLAttributes, SVGProps } from "react"

export const ContentExpander: React.FC<{ expanded: boolean, maxSize: number } & SVGProps<SVGSVGElement>> = (props) => {

    const animationStyle = {
        transition: 'rotate .1s linear', transformOrigin: 'center center', rotate: `${props.expanded ? -90 : 0
            }deg`
    };

    const { expanded, maxSize, style, ...svgProps } = props;

    const size = '20vw';

    return <svg {...svgProps} focusable width={size} height={size} viewBox={`0 0 24 24`} style={{ ...animationStyle, maxHeight: maxSize, maxWidth: maxSize, fill: 'white', cursor: 'pointer', overflow: 'clip', ...style }}>
        <path style={{ scale: '1.5', transformOrigin: 'center center', transform: 'translate(64,64)', fill: 'black' }} d={expanded ? mdiPlus : mdiMinus}></path>
        <path style={{ scale: '1.5', transformOrigin: 'center center' }} d={expanded ? mdiPlus : mdiMinus}></path>

    </svg>
}