import scutter1 from '@public/images/scutter1.webp'
import scutter2 from '@public/images/scutter2.webp'
import createAndCapture from '@public/images/createAndCapture.webp'
import pictocraft from "@public/images/pictocraft.webp"

import { StaticImage } from 'src/lib/StaticImage'

export enum PortfolioTag{
    Creative,
    Assistive
}

export interface PortfolioItem {
    title: string
    tag: PortfolioTag
    content: JSX.Element,
    url?: string,
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: "This website (2022)", 
        tag: PortfolioTag.Creative,
        content: 
            <p>I wanted to update my website to make it easier to update content and showcase my generative art. I want to speak through examples.</p>,
    },
    {
        title: "Optiphonic (2020+)",
        tag: PortfolioTag.Creative,
        url: "http://instagram.com/optiphonic",
        content: 
        <div>
            <div style={{width: "100%", display: "flex"}}>
                <iframe style={{margin: "0 auto", border: "none"}} width="320px" height="320px" src="https://mega.nz/embed/bYYUiTqA#3ZUu6S5wuDsjtp76TwF-P8t_0-rutFbiomdxRzVPJt8" allowFullScreen={true} ></iframe> 
            </div>

            <p>
                I have been performing visual art at festivals and music events under the name Optiphonic. Many years ago I was inspired by music visualizers in winamp and iTunes, since then I have created my own and started performing them for different events. Check out some of my renders and performances <a href="https://instagram.com/optiphonic">on instagram</a>.
            </p>

            <p>
                With this work, I'm currently developing tools that allow me to bring the surfaces of the real world into my generative worlds. I'm lucky to collaborate with some other awesome artists in this work and I hope to develop even larger collaborative things in the future! <a href="mailto:edeetee@gmail.com">Email me</a> if you want to collab :)
            </p>
        </div>
       
    },

    {
        title: "TASKA Prosthetics (2020)",
        tag: PortfolioTag.Assistive,
        content: <p>
            Worked for TASKA Prosthetics to update and maintain their phone app. I went into the job desiring to work with patients and design software that aligned with research into how to best assist users. The role ended up being more software engineering that I desired so I moved on after a year.
        </p>
    },

    {
        title: "Blind Foundation Alexa Scholarship (2018/19)", 
        tag: PortfolioTag.Assistive,
        content: 
            <p>
                As part of a summer scholarship with Victoria University at the end of my degree, I researched, designed, experimented and iterated on a app for the Amazon Alexa platform to assist with the lives of visually impaired people. I explored the potentials and limitations of the technology and how it could best be leveraged to assist the target audience. After learning the technology with an experimental game prototype and interviewing members of the community, we ended up developing a voice frontend to <a href="http://www.eventfinda.co.nz">eventfinda</a> instead of assistance with transport or blind foundation communications.
            </p>
    },

    {
        title: "Pictocraft (2019)", 
        tag: PortfolioTag.Assistive,
        url: "https://github.com/edeetee/pictocraft",
        content: 
        <div>
            <StaticImage src={pictocraft}/>
            <p>
                For my final project at Victoria University, I carried out independent research where I created a modification of the game <a href="http://www.minecraft.net">Minecraft</a> in order to give communication abilities to people with language difficulties. I integrated an existing English to Picograph system into the game to translate received text into images and made a web interface to allow communicating back by pressing buttons on a tablet. It's not 100% accurate, but the ability to communicate ideas like “I want to build a brick house on a hill” can give users a lot more depth than they had otherwise.
            </p>
        </div>
    },

    {
        title: "Scutter - Asymmetric VR (2019)",
        tag: PortfolioTag.Creative,
        url: "https://github.com/edeetee/scutter",
        content: 
            <div>
                <div style={{display: 'flex'}}>
                    <StaticImage style={{width: "50%", height: "50%"}} src={scutter1}/>
                    <StaticImage style={{width: "50%", height: "50%"}} src={scutter2}/>
                </div>
                <p>
                    For a university game design course, I designed a multiplayer game best described as blind mans bluff in VR. Up to two players hold a controller each and one player dons the headset. As the controller players move around, a corresponding object in virtual space follows their movements. The VR player's goal is find the objects that represent the controllers moving around and take the controller from the other players, pressing a button to verify. While this happens, the controller players are getting vibrations that guide them to goals in space, with the aim to gain as many points as possible.
                </p>
            </div>
    },

    {
        title: "Misc Experiments (2017/18)",
        tag: PortfolioTag.Creative,
        content: 
        <div>
            Here's a collection of small experiments that I want to keep around
            <a href="https://bl.ocks.org/edeetee">
                <h4>All Uni CC Projects</h4>
            </a>
            <a href="http://bl.ocks.org/edeetee/7324d937d2230ebd5e62d9db425732ac/3136f1ec2b489d1791881a2fee1b0a15e8be4a1d">
                <h4>Infinite Clock</h4>
            </a>
            <a href='http://bl.ocks.org/edeetee/6ff4a260e77466f45231d15c53c66160/08fd98cc603e279051dbdd5694013757dc772d21' >
                <h4>Particles</h4>
            </a>
            <a href="https://medium.com/@edeetee/live-style-transfer-modulated-by-audio-frequency-analysis-for-edm-events-4a76acabd029">
                <h4>Audio modulated style transfer</h4>
            </a>
        </div>
    },

    {
        title: "Create and Capture for Garry's Mod (2015)",
        tag: PortfolioTag.Creative,
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=389065555",
        content: 
        <div>
            <StaticImage src={createAndCapture}/>
            <p>
                With my friend Tom Lewis (now a practicing game designer), we build a multiplayer gamemode for the popular game platform Garry's Mod. We did a lot of user testing with our friends and learnt a lot about collaborative and design driven development. The game ended up being a lot of fun and had several thousand downloads.
            </p>
        </div>
    }
]

export const RenderPortfolio = (items: PortfolioItem[]) => 
    <>
        {items.map((item, i) => 
            <div key={i}> 

                {item.url != null ? 
                    <a href={item.url}><h3>{item.title}</h3></a> : 
                    <h3>{item.title}</h3>}

                {item.content}
            </div>
        )}
    </>