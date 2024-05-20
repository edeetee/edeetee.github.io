
import { Separator } from './separator'
import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { Expandable } from './expandable'
import { PortfolioItem } from './PortfolioItem'

export enum PortfolioTag {
    Creative,
    Assistive,
    Visuals
}

/**
 * 
 * @param year actual year
 * @param month 1-12
 * @param day 1-31
 * @returns Date
 */
export function date(year: number, month?: number, day?: number) {
    return new Date(year, (month ?? 1) - 1, day ?? 1)
}

export const centeredFlexStyle: CSSProperties = { display: 'flex', flexDirection: 'row', alignItems: 'start', flexWrap: 'wrap', justifyContent: 'space-around' }

const titleStyle: CSSProperties = {
    borderLeft: "solid",
    borderWidth: 8,
    // borderColor: "rgba(.5,.5,.5,0.5)",
    borderRadius: 0,
    paddingLeft: 8,
};

export const RenderPortfolioItem: React.FC<{ item: PortfolioItem }> = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    const media = item.images?.map((image, i) => <div key={i} style={{ width: 'auto', height: '100%', justifySelf: 'end' }} >{image}</div>)

    const header = <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', flexWrap: 'wrap' }}>
        <div style={{ transform: 'translate(-48px, 0)', fontWeight: 'bold', fontStyle: 'italic', fontSize: 16, verticalAlign: 'center', width: 0 }}>{item.date.getFullYear()}</div>
        <h1 style={titleStyle}>{item.title}</h1>
    </div>;

    return <div style={{ position: 'relative', margin: '3vh 0' }}>

        <a onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
            {header}
        </a>
        <Expandable expanded={expanded} children={<div style={{ display: 'flex', flexDirection: 'column' }}>{item.content}</div>} />
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {media?.map((m, i) => <div key={i} style={{ width: expanded ? '90%' : '40%', margin: 8 }}>{m}</div>)}
        </div>

    </div>
}

export const RenderPortfolio = (items: PortfolioItem[]) => {
    return <div>
        {items.map((item, i) => <RenderPortfolioItem key={i} item={item} />)}
        <div style={{ height: 64 }}></div>
    </div>
}