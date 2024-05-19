
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

    const media = item.images?.map((image, i) => <div key={i} style={{ width: 'auto', height: '100%', marginLeft: 32, justifySelf: 'end' }} >{image}</div>)

    const header = <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ transform: 'translate(-48px, 0)', fontWeight: 'bold', fontStyle: 'italic', fontSize: 16, verticalAlign: 'center', width: 0 }}>{item.date.getFullYear()}</div>
        {/* title */}

        <h1 style={titleStyle}>{item.title}</h1>

        {<Expandable horizontal expanded={!expanded} children={<div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', height: 128 }}>{media}</div>} />}
    </div>;

    return <div style={{ position: 'relative' }}>

        <a onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
            {header}
        </a>


        <Expandable expanded={expanded} children={<>{item.content}{media}</>} />
    </div>
}

export const RenderPortfolio = (items: PortfolioItem[]) => {
    return <div>
        {items.map((item, i) => <RenderPortfolioItem key={i} item={item} />)}
        <div style={{ height: 64 }}></div>
    </div>
}