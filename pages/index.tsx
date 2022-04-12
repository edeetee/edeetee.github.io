import React from "react";

import { CanvasRenderer } from "@components/background";
import Head from "next/head";
import { Main } from "@components/css/main";

const Home: React.FC = () => {
    return <>   
        <Head>
            <title>Edward Taylor</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
        </Head> 
        <CanvasRenderer />
        <Main />
    </>  
};

export default Home;