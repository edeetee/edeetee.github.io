import React, { useState } from "react";
import { About } from "../about";
import { Availability } from "../availability";
import { PageSelector } from "../pageSelector";
import { Portfolio } from "../portfolio";

const menuFlexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400
}

const responsiveDoubleColStyle: React.CSSProperties = {
    margin: "10vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative"
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
        <div style={responsiveDoubleColStyle}>
            <div style={menuFlexStyle}>
                <About />

                <PageSelector<PageInfo> 
                    options={pageOptions}
                    selected={selectedPage}
                    onSelected = {
                        el => selectPage(el == selectedPage ? undefined : el)
                    }
                />

            </div>
            <div style={{margin: "0 auto"}}></div>
            <div style={{maxWidth: 500, justifySelf: "center"}}>
                {selectedPage?.page}
            </div>
            <div style={{margin: "0 auto"}}></div>
        </div>
    );
};
