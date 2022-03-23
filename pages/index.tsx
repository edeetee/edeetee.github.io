import React, { useReducer, useState } from "react";

import { Header, Main, Cards, Footer } from "@components/css";
import Head from "next/head";
import { Portfolio } from "@components/css/portfolio";
import { About } from "@components/css/about";
import { Availability } from "@components/css/availability";
import { CanvasRenderer } from "@components/background";
import { PageSelector } from "@components/css/pageSelector";
import { ShowSingle } from "@components/showSingle";

const menuFlexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    maxWidth: 300
}

const responsiveDoubleColStyle: React.CSSProperties = {
    marginLeft: "10vh",
    marginRight: "10vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
}

var pageOptions = [
    {page: <Portfolio />, label: "Portfolio"},
    {page: <Availability />, label: "Availability"}
]

const Home: React.FC = () => {

    var [selectedPage, selectPage] = useState<JSX.Element|null>(null)

    return (
            <div style={responsiveDoubleColStyle}>
                <div style={menuFlexStyle}>
                    <Head>
                        <title>edeetee</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
                    </Head>
                    <Main />
                    <About />

                    <PageSelector 
                        options={pageOptions}
                        onClick={
                            ({page}) => selectPage(page == selectedPage ? null : page)
                        }
                    />

                    <div style={{zIndex: -10}}>                
                        <CanvasRenderer />
                    </div>

                </div>
                <div style={{maxWidth: 500}}>
                    {selectedPage}
                </div>
            </div>
            
        
    );
};

export default Home;