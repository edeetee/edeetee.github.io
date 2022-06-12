import React, { useRef, useState } from "react";
import { About } from "@components/css/about";
import { Work } from "@components/work";
import { Links } from "@components/links";
import { PageSelector } from "../pageSelector";
import { Creative } from "@components/creative";
import { Assistive } from "@components/assistive";
import styles from './index.module.css'
import { asyncAnimationFrame } from "src/lib/asyncAnimationFrame";

interface PageInfo {
    page: JSX.Element,
    label: string
}

//TODO: modularise this
const pageOptions: PageInfo[] = [
    {page: <Creative />, label: "Creative"},
    {page: <Assistive />, label: "Assistive"},
    {page: <Work />, label: "Skills"}
]

export const Main: React.FC = () => {
    const [selectedPage, selectPage] = useState<PageInfo|undefined>(undefined)

    const menuRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    
    return (
        <div className={styles.responsiveDoubleCol}>
            <div ref={menuRef} className={styles.responsiveStickyMenu}>
                <About />

                <PageSelector<PageInfo> 
                    options={pageOptions}
                    selected={selectedPage}
                    onSelected = {
                        async el => {
                            const newPageSelected = el != selectedPage
                            selectPage(newPageSelected ? el : undefined)

                            await asyncAnimationFrame()

                            //if content below menu
                            if(newPageSelected && menuRef.current?.offsetTop != contentRef.current?.offsetTop){
                                const y = contentRef.current?.getBoundingClientRect()?.top
                                scrollTo({
                                    top: y,
                                    behavior: "smooth"
                                })
                            }
                                // contentRef.current?.scrollIntoView({
                                //     behavior: "smooth"
                                // })
                        }
                    }
                />

                <Links />

            </div>
            <div style={{display: selectedPage ? "initial" : "none"}} className={styles.separator}></div>
            <div ref={contentRef} style={{maxWidth: 600, justifySelf: "center"}}>
                <h1>{selectedPage?.label}</h1>
                {selectedPage?.page}
            </div>
            <div style={{margin: "0 auto"}}></div>
        </div>
    );
};
