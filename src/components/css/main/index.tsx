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
    {page: <Creative />, label: "Creative", name: "creative"},
    {page: <Assistive />, label: "Assistive", name: "assistive"},
    {page: <Skills />, label: "Skills", name: "skills"},
    {page: <History/>, label: "History", name: "history"}
].map(info => {
    return {url: `/#${info.name}`, ...info}
})

export const Main: React.FC = () => {
    const [selectedPage, selectPage] = useState<PageInfo>(pageOptions[0])
    const [showContent, setShowContent] = useState(false);


    const menuRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    async function tryUpdateView(initial = false) {
        if (window.history.state != null && (window.history.state.as != selectedPage?.url || initial)) {
            const new_page = pageOptions.find(info => info.url == window.history.state.as)
            if (new_page != null) {
                setShowContent(true)
                selectPage(new_page)
            }

            // await asyncAnimationFrame()
            // const y = contentRef.current?.getBoundingClientRect()?.top
            // const menuY = menuRef.current?.getBoundingClientRect()?.top
            // if(y !== undefined && menuY != undefined)
            //     scrollTo({
            //         top: y-menuY,
            //         behavior: "smooth"
            //     })
        }
    }

    useEffect(() => {
        window.addEventListener('hashchange', () => tryUpdateView())
    })

    useEffect(() => {
        tryUpdateView(true)
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', alignItems: 'stretch' }} >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 64 }}>
                <ContentExpander expanded={!showContent} onClick={() => setShowContent(!showContent)} />

                <div ref={menuRef} className={styles.responsiveStickyMenu}>
                    <About minimised={showContent} />
                </div>
                {/* <div style={{ display: selectedPage ? "initial" : "none" }} className={styles.separator}></div> */}

            </div>
            {/* {showContent && } */}
            <div style={{ margin: 'auto' }}></div>
            {showContent &&
                <>
                    <PageSelector<PageInfo>
                    options={pageOptions}
                    selected={selectedPage}
                    />
                    <div style={{ height: 32 }}></div>
                    <div ref={contentRef} className={styles.content}>
                        <div style={{ margin: 64 }}>{selectedPage.page}</div>
                        <div style={{ height: 64 }}></div>
                    </div>
                </>}
            <Links className={styles.padding} />
            <AnimatedMe />
        </div>
    );
};
