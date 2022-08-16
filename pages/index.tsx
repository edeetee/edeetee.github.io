import React from "react";

import { CanvasRenderer } from "@components/background";
import Head from "next/head";
import { Main } from "@components/css/main";
import { AnimatedMe } from "@components/animated_me";

const Home: React.FC = () => {
    return <>   
        <Head>
            <title>Edward Taylor</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type="image/png" href="/favicon/16.png"></link>
            <link rel="icon" sizes="32x32" type="image/png" href="/favicon/32.png"></link>
            <link rel="icon" sizes="64x64" type="image/png" href="/favicon/64.png"></link>
        </Head> 
        <CanvasRenderer />
        <Main />
        <AnimatedMe />
    </>  
};

export default Home;