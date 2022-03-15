import React from "react";

import { Header, Main, Cards, Footer } from "@components/css";
import Head from "next/head";
import { Portfolio } from "@components/css/portfolio";
import { About } from "@components/css/about";
import { Availability } from "@components/css/availability";

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                margin: "10vh"
            }}
        >
            <Head>
                <title>edeetee</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            </Head>
            <Main />
            <About />
            <Portfolio />
            <Availability />
        </div>
    );
};

export default Home;