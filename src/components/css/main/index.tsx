import React, { useState } from "react";
import { About } from "../about";
import { Availability } from "../availability";
import { Links } from "../links";
import { PageSelector } from "../pageSelector";
import { Portfolio } from "../portfolio";
import styles from './index.module.css'

const menuFlexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400
}

interface PageInfo {
    page: JSX.Element,
    label: string
}

//TODO: modularise this
const pageOptions: PageInfo[] = [
    {page: <Portfolio />, label: "Portfolio"},
    {page: <Availability />, label: "Availability"}
]

export const Main: React.FC = () => {
    const [selectedPage, selectPage] = useState<PageInfo|undefined>(undefined)
    
    return (
        <div className={styles.responsiveDoubleCol}>
            <div className={styles.responsiveStickyMenu}>
                <About />

                <PageSelector<PageInfo> 
                    options={pageOptions}
                    selected={selectedPage}
                    onSelected = {
                        el => selectPage(el == selectedPage ? undefined : el)
                    }
                />

                <Links />

            </div>
            <div style={{display: selectedPage ? "initial" : "none"}} className={styles.separator}></div>
            <div style={{maxWidth: 600, justifySelf: "center"}}>
                {selectedPage?.page}
            </div>
            <div style={{margin: "0 auto"}}></div>
        </div>
    );
};
