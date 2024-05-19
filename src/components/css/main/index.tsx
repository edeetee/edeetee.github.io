import React, { useEffect, useRef, useState } from "react";
import { About } from "@components/css/about";
import { Skills } from "@components/skills";
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

interface PageInfo {
    page: JSX.Element,
    label: string,
    url: string
}

const pageOptions: PageInfo[] = [
    { page: <Events />, label: "Events", name: "optiphonic" },
    { page: <Creative />, label: "Creative", name: "creative" },
    { page: <Assistive />, label: "Assistive", name: "assistive" },
    { page: <Skills />, label: "Skills", name: "skills" },
    { page: <History />, label: "History", name: "history" }
].map(info => {
    return { url: `/${info.name}`, ...info }
})

export const Main: React.FC = () => {
    const [selectedPage, selectPage] = useState<PageInfo | null>(null)
    // const [showContent, setShowContent] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    //load page from history on first load
    useEffect(() => {
        if (window.history.state != null) {
            const new_page = pageOptions.find(info => info.url == window.history.state.as)
            if (new_page != null) {
                selectPage(new_page)
            }
        }
    }, []);

    //copy state to history on page change
    useEffect(() => {
        window.history.pushState({}, "", selectedPage?.url ?? "/");
    }, [selectedPage]);

    const showContent = selectedPage != null;

    // const hideableContentStyle: React.CSSProperties = { transition: 'all .3s ease-in-out', transform: showContent ? 'translateX(0)' : 'translateY(20vh)', opacity: showContent ? 1 : 0, maxHeight: showContent ? 99999999 : 0, overflow: 'clip' };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'stretch' }} >
            {/* <About /> */}
            <h1 style={{ alignSelf: 'end', margin: '5vh 5vw' }}>Edward Taylor</h1>
            <div role="navigation"><PageSelector<PageInfo>
                options={pageOptions}
                selected={selectedPage}
                onSelected={(el) => {
                    selectPage(el == selectedPage ? null : el);
                }}
            />
            </div>

            <div style={{ margin: 'auto' }}>
                <div style={{ maxWidth: '400px', padding: '0 5vw', textAlign: 'right' }}>
                    <Expandable expanded={!showContent}>
                        <div style={{ marginBottom: '-1em' }}>I am a</div>
                        <h2>creative technologist</h2>
                        <h2>projection artist</h2>
                        <h2>software team lead</h2>
                        <div style={{ marginBottom: '-1em' }}>with a</div>
                        <h2>Bachelor of Design Innovation</h2>
                        <div style={{ marginBottom: '-1em' }}>living in</div>
                        <h2>New Zealand</h2>
                        <div style={{ height: 32 }}></div>
                        {/* <p style={{ textAlign: 'justify' }}>
                            I am a creative individual who uses technology to build systems for experiences and solutions.
                        </p> */}
                    </Expandable>
                </div></div>

            <Expandable expanded={showContent}>
                <div ref={contentRef} className={styles.content}>
                    <div style={{ margin: '5vh 4vw', paddingTop: '5vh' }}>{selectedPage?.page}</div>
                </div>
            </Expandable>


            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Links className={styles.padding} style={{ userSelect: 'none' }} />
                <AnimatedMe />
            </div>
        </div>
    );
};
