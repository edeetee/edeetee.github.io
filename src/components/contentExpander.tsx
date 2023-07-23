import { mdiPlus, mdiMinus } from "@mdi/js"
import { DetailedHTMLProps, HTMLAttributes } from "react"

const size = 200

export const ContentExpander: React.FC<{ expanded: boolean } & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {

    const animationStyle = {
        transition: 'rotate .1s linear', transformOrigin: 'center center', rotate: `${props.expanded ? -90 : 0
            }deg`
    };

    return <div {...props} style={{ fill: 'white', cursor: 'pointer', marginLeft: '10vw', marginBottom: 32 }}>
        <svg width={size} height={size} viewBox={`0 0 24 24`} style={{ ...animationStyle, overflow: 'clip', scale: '1.7' }}><path d={props.expanded ? mdiPlus : mdiMinus}></path></svg>
    </div >
}