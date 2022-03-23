import React, { useReducer, useState } from "react";

import { Header, Main, Cards, Footer } from "@components/css";
import Head from "next/head";
import { Portfolio } from "@components/css/portfolio";
import { About } from "@components/css/about";
import { Availability } from "@components/css/availability";
import { CanvasRenderer } from "@components/background";
import { PageSelector } from "@components/css/pageSelector";

const menuFlexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 400
}

const responsiveDoubleColStyle: React.CSSProperties = {
    margin: "10vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
}

interface PageInfo {
    page: JSX.Element,
    label: string
}

//TODO: modularise this
var pageOptions: PageInfo[] = [
    {page: <Portfolio />, label: "Portfolio"},
    {page: <Availability />, label: "Availability"}
]

const Home: React.FC = () => {
    var [selectedPage, selectPage] = useState<PageInfo|undefined>(undefined)

    return (
            <div style={responsiveDoubleColStyle}>
                <div style={menuFlexStyle}>
                    <Head>
                        <title>edeetee</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
                    </Head>
                    <Main />
                    <About />

                    <PageSelector<PageInfo> 
                        options={pageOptions}
                        selected={selectedPage}
                        onSelected = {
                            el => selectPage(el == selectedPage ? undefined : el)
                        }
                    />

                    <div style={{zIndex: -10}}>                
                        <CanvasRenderer />
                    </div>

                </div>
                <div style={{margin: "0 auto"}}></div>
                <div style={{maxWidth: 500, justifySelf: "center"}}>
                    {selectedPage?.page}
                </div>
                <div style={{margin: "0 auto"}}></div>
            </div>
            
        
    );
};

export default Home;