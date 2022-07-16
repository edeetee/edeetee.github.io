import React, { useEffect, useRef, useState } from "react";
import { About } from "@components/css/about";
import { Work } from "@components/work";
import { Links } from "@components/links";
import { PageSelector } from "../pageSelector";
import { Creative } from "@components/creative";
import { Assistive } from "@components/assistive";
import styles from './index.module.css'
import { asyncAnimationFrame } from "src/lib/asyncAnimationFrame";
import { Visuals } from "@components/visuals";

interface PageInfo {
    page: JSX.Element,
    label: string,
    url: string
}

//TODO: modularise this
const pageOptions: PageInfo[] = [
    {page: <Visuals/>, label: "Music Visuals", name: "visuals"},
    {page: <Creative />, label: "Creative", name: "creative"},
    {page: <Assistive />, label: "Assistive", name: "assistive"},
    {page: <Work />, label: "Skills", name: "skills"}
].map(info => {
    return {url: `/#${info.name}`, ...info}
})

export const Main: React.FC = () => {
    const [selectedPage, selectPage] = useState<PageInfo|undefined>(undefined)

    const menuRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    async function tryUpdateView(){
        if (window.history.state != null && window.history.state.as != selectedPage?.url){
            const new_page = pageOptions.find(info => info.url == window.history.state.as)
            selectPage(new_page)

            await asyncAnimationFrame()
            const y = contentRef.current?.getBoundingClientRect()?.top
            const menuY = menuRef.current?.getBoundingClientRect()?.top
            if(y !== undefined && menuY != undefined)
                scrollTo({
                    top: y-menuY,
                    behavior: "smooth"
                })
        }
    }

    useEffect(() => {
        window.addEventListener('hashchange', tryUpdateView)
        tryUpdateView()
    })

    
    return (
        <div className={styles.responsiveDoubleCol}>
            <div ref={menuRef} className={styles.responsiveStickyMenu}>
                <About />

                <PageSelector<PageInfo> 
                    options={pageOptions}
                    selected={selectedPage}
                />

                <Links />

            </div>
            <div style={{display: selectedPage ? "initial" : "none"}} className={styles.separator}></div>
            <div ref={contentRef} className={styles.content}>
                <h1>{selectedPage?.label}</h1>
                {selectedPage?.page}
                <div style={{height: 64}}></div>
            </div>
            <div style={{margin: "0 auto"}}></div>
        </div>
    );
};
