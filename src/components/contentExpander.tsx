import { mdiPlus, mdiMinus } from "@mdi/js"
import { DetailedHTMLProps, HTMLAttributes, SVGProps } from "react"

const maxSize = 200

export const ContentExpander: React.FC<{ expanded: boolean } & SVGProps<SVGSVGElement>> = (props) => {

    const animationStyle = {
        transition: 'rotate .1s linear', transformOrigin: 'center center', rotate: `${props.expanded ? -90 : 0
            }deg`
    };

    const size = '20vw';

    return <svg {...props} width={size} height={size} viewBox={`0 0 24 24`} style={{ ...animationStyle, maxHeight: maxSize, maxWidth: maxSize, fill: 'white', cursor: 'pointer', marginLeft: '10vw', marginBottom: 32, overflow: 'clip' }}>
        <path style={{ scale: '1.5', transformOrigin: 'center center', transform: 'translate(64,64)', fill: 'black' }} d={props.expanded ? mdiPlus : mdiMinus}></path>
        <path style={{ scale: '1.5', transformOrigin: 'center center' }} d={props.expanded ? mdiPlus : mdiMinus}></path>

    </svg>
}