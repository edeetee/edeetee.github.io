import { ReactNode } from "react"

export const Expandable = ({ expanded, children, horizontal = false }: { expanded: boolean, children: ReactNode, horizontal?: boolean | null }) => {
    const t = expanded ? '1fr' : '0fr';

    return <div style={{
        display: 'grid',
        gridTemplateRows: horizontal ? 'initial' : t,
        gridTemplateColumns: !horizontal ? 'initial' : t,
    }}>
        <div style={{ overflow: 'hidden', }}>
            <div>{children}</div>
        </div>
    </div>
}
