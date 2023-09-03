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
    const [selectedPage, selectPage] = useState<PageInfo>(pageOptions[0])
    const [showContent, setShowContent] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (window.history.state != null) {
            const new_page = pageOptions.find(info => info.url == window.history.state.as)
            if (new_page != null) {
                setShowContent(true)
                selectPage(new_page)
            }
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'stretch' }} >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap-reverse', alignItems: 'start', marginTop: 64, userSelect: 'none' }}>
                <ContentExpander expanded={!showContent} onClick={() => setShowContent(!showContent)} aria-label="Show content" role="button" />

                <div ref={menuRef} className={styles.responsiveStickyMenu}>
                    <About minimised={showContent} />
                </div>
                {/* <div style={{ display: selectedPage ? "initial" : "none" }} className={styles.separator}></div> */}

            </div>
            {/* {showContent && } */}
            <div style={{ margin: 'auto' }}></div>
            {showContent &&
                <>
                    <div role="navigation"><PageSelector<PageInfo>
                        options={pageOptions}
                        selected={selectedPage}
                        onSelected={(el) => {
                            window.history.pushState({}, "", el.url);
                            selectPage(el);
                        }}
                    />
                    </div>
                    <div style={{ height: 32 }}></div>
                    <div ref={contentRef} className={styles.content}>
                        <div style={{ margin: 64 }}>{selectedPage.page}</div>
                        <div style={{ height: 64 }}></div>
                    </div>
                </>}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Links className={styles.padding} style={{ userSelect: 'none' }} />
                <AnimatedMe />
            </div>
        </div>
    );
};
