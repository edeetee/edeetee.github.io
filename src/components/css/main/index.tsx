
"use client";

import React, { useEffect, useRef, useState } from "react";
import { About } from "@components/css/about";
import CV from "@markdown/cv.mdx";
import { Links } from "@components/links";
import { PageSelector } from "../pageSelector";
import { Creative } from "@components/creative";
import { Assistive } from "@components/assistive";
import styles from './index.module.css'
import { Events } from "@components/visuals";
import { History } from "@components/history";
import { ContentExpander } from "@components/contentExpander";
import { AnimatedMe } from "@components/animated_me";
import { Expandable } from "@src/lib/expandable";
import { usePathname } from 'next/navigation'

interface PageInfo {
    page: JSX.Element,
    label: string,
    url: string
}

const pageOptions: PageInfo[] = [
    { page: <CV />, label: "CV", name: "cv" },
    { page: <Events />, label: "Events", name: "optiphonic" },
    { page: <Creative />, label: "Creative", name: "creative" },
    { page: <Assistive />, label: "Assistive", name: "assistive" },
    // { page: <History />, label: "History", name: "history" }
].map(info => {
    return { url: `/${info.name}`, ...info }
})


export const Main: React.FC = () => {
    const initial_page = pageOptions.find(info => info.url == usePathname())

    const [selectedPage, selectPage] = useState<PageInfo | null>(initial_page || null)
    const [showExtra, setShowExtra] = useState(false);
    const lastSelectedPage = useRef(selectedPage);

    const contentRef = useRef<HTMLDivElement>(null)
    const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);

    // load page from history on first load
    useEffect(() => {
        if (initial_page != null) {
            selectPage(initial_page)
        }
        setInitialRenderComplete(true);
    }, []);

    //copy state to history on page change
    useEffect(() => {
        if (selectedPage != null) {
            lastSelectedPage.current = selectedPage;
        }

        window.history.pushState({}, "", selectedPage?.url ?? "/");
    }, [selectedPage]);

    // if (!initialRenderComplete) {
    //     return null;
    // }

    const showContent = selectedPage != null;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'stretch' }} >
            {/* <About /> */}
            <img
                src="/images/bg.webp"
                alt="" // Decorative image, empty alt is appropriate
                className="print-only"
                style={{
                    // width: '100%',
                    height: '8px',
                    objectFit: 'cover',
                    objectPosition: 'center 50%',
                    marginBottom: '1em',
                }}
            />

            <h1 className="not-print" style={{ marginRight: 0, textAlign: 'right', margin: '5vh 5vw' }}>Edward Taylor</h1>
            <div className="print-only" style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', }} >

                <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'start' }} >
                    <h1 >Edward Taylor</h1>
                    <br />
                    <div >
                        0224998841<br />
                        dev@edt.nz<br />
                        www.edt.nz
                    </div>
                </div>
                <img src="images/profile.jpg" width={180} height={180} />
            </div>


            {!initialRenderComplete ? null : <div className="nav" role="navigation"><PageSelector<PageInfo>
                options={pageOptions}
                selected={selectedPage}
                onSelected={(el) => {
                    selectPage(el == selectedPage ? null : el);
                }}
            />
            </div>}

            <div className="expandingHome" style={{ margin: 'auto' }}>

                {!initialRenderComplete ? null : <Expandable expanded={!showContent}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <ContentExpander expanded={showExtra} maxSize={64} onClick={() => setShowExtra(!showExtra)} />
                        <Expandable expanded={!showExtra} horizontal>
                            <Expandable expanded={!showExtra}>
                                <div style={{ maxWidth: '50vw', padding: '0 3vw', textAlign: 'left' }}>
                                    <div style={{ marginBottom: '-1em' }}>I am a</div>
                                    <h2>creative technologist</h2>
                                    <h2>software team lead</h2>
                                    <h2>projection artist</h2>
                                    <div style={{ marginBottom: '-1em' }}>with a</div>
                                    <h2>Bachelor of Design Innovation</h2>
                                    <div style={{ marginBottom: '-1em' }}>living in</div>
                                    <h2>New Zealand</h2>
                                </div>
                            </Expandable>
                        </Expandable>
                    </div>
                </Expandable>}
            </div>



            {!initialRenderComplete ? null : <Expandable expanded={showContent}>
                <div ref={contentRef} className={styles.content}>
                    <div className="not-print">{selectedPage?.page ?? lastSelectedPage?.current?.page}</div>
                    <div className="print-only">{selectedPage?.page}</div>
                </div>
            </Expandable>}


            <div className="footer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Links className={styles.padding} style={{ userSelect: 'none' }} />
                <AnimatedMe />
            </div>
        </div >
    );
};
