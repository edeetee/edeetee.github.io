import { mdiAt, mdiCodeTags, mdiGithub, mdiInstagram } from "@mdi/js"
import Image from "next/image"

interface LinkItem {
    title: string,
    url: string
    mdiPath: string
}

const linkItems: LinkItem[] = [
    {
        title: "Email me",
        url: "mailto:edeetee@gmail.com",
        mdiPath: mdiAt
    },
    {
        title: "Optiphonic on Instagram",
        url: "https://instagram.com/optiphonic",
        mdiPath: mdiInstagram
    },
    {
        title: "Github",
        url: "https://github.com/edeetee",
        mdiPath: mdiGithub
    },
    {
        title: "Source for this website",
        url: "https://github.com/edeetee/edeetee.github.io",
        mdiPath: mdiCodeTags
    }
]

export const Links: React.FC = () => 
<div>
    {
        linkItems.map((item, i) => 
            <a key={i} href={item.url} style={{display: "flex", flexDirection: "row", alignItems: "center", margin:"6px 0"}}>
                <svg style={{width: "18px", height: "18px", margin: "auto 0"}} viewBox="0 0 24 24"><path d={item.mdiPath}></path></svg>
                <h4 style={{margin: "auto 0", paddingLeft:"4px"}}>{item.title}</h4>
            </a>
        )
    }
</div>