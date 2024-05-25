import React from "react";

import { CanvasRenderer } from "@src/lib/CanvasRenderer";
import Head from "next/head";
import { Main } from "@components/css/main";
import { FeedbackRenderer } from "@src/lib/feedbackRenderer";

const Home: React.FC = () => {
    return <>
        <Head>
            <title>Edward Taylor | Optiphonic</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href="/favicon/16.png"></link>
            <link rel="icon" sizes="32x32" type="image/png" href="/favicon/32.png"></link>
            <link rel="icon" sizes="64x64" type="image/png" href="/favicon/64.png"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Head>

        <CanvasRenderer buildRenderer={FeedbackRenderer} />
        <Main />
        {/* <AnimatedMe /> */}
    </>
};

export default Home;