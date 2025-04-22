
import { Separator } from './separator'
import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { Expandable } from './expandable'
import { PortfolioItem } from './PortfolioItem'
import { ContentExpander } from '@components/contentExpander'

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
    // borderLeft: "solid",
    // borderWidth: 8,
    // // borderColor: "rgba(.5,.5,.5,0.5)",
    // borderRadius: 0,
    margin: 0,
    position: 'relative',
};

export const RenderPortfolioItem: React.FC<{ item: PortfolioItem }> = ({ item }) => {
    const [expanded, setExpanded] = useState(false);

    const media = item.images?.map((image, i) => <div key={i} style={{ width: '100%', height: '100%', justifySelf: 'end' }} >{image}</div>)

    const yearStr = item.date.getFullYear().toString().substring(2);

    const hasMedia = media?.length ?? 0 > 0;

    const header = <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
        {hasMedia && <><ContentExpander maxSize={30} expanded={!expanded} /><div style={{ width: 8 }}></div></>}
        <h1 style={titleStyle}>
            {item.title}
            <div style={{
                transform: 'translate(-1.5em, -.75em)',
                position: 'absolute',
                right: '-1.5em',
                top: '.5em',
                fontWeight: 'bold',
                fontStyle: 'italic',
                fontSize: 16,
                verticalAlign: 'center',
                width: 0,
                height: 0,
            }}>'{yearStr}</div>
        </h1>
    </div>;

    return <div style={{ position: 'relative', marginTop: '8vh' }}>
        {hasMedia ? <a onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
            {header}
        </a> : header}

        <div style={{ display: 'flex', flexDirection: 'column' }}>{item.content}</div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', flexWrap: 'wrap' }}>
            {media?.map((m, i) => <div key={i} style={{ width: expanded ? '45%' : '30%', minWidth: 128, aspectRatio: expanded ? 'initial' : '1', margin: 8 }}>{m}</div>)}
        </div>
    </div>
}

export const RenderPortfolio = (items: PortfolioItem[]) => {
    return <div>
        {items.map((item, i) => <RenderPortfolioItem key={i} item={item} />)}
    </div>
}