import scutter1 from '@public/images/scutter1.webp'
import scutter2 from '@public/images/scutter2.webp'
import createAndCapture from '@public/images/createAndCapture.webp'
import pictocraft from "@public/images/pictocraft.webp"
import unleashedSocietyDejaVuduu from "@public/images/unleashedSocietyDejaVuduu.webp"
import unleashedSocietyInProgress from "@public/images/unleashedSocietyInProgress.webp"

import { Image } from 'src/lib/StaticImage'
import { Youtube } from './Youtube'
import { Separator } from './separator'
import { Video } from './Video'
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react'

export enum PortfolioTag {
    Creative,
    Assistive,
    Visuals
}

/**
 * 
 * @param year actual year
 * @param month 1-12
 * @param day 1-31
 * @returns Date
 */
function date(year: number, month?: number, day?: number) {
    return new Date(year, (month ?? 1) - 1, day ?? 1)
}

const centeredFlexStyle: CSSProperties = { display: 'flex', flexDirection: 'row', alignItems: 'start', flexWrap: 'wrap', justifyContent: 'space-around' }

export interface PortfolioItem {
    title: string,
    date: Date,
    tag: PortfolioTag
    content: JSX.Element,
    url?: string,
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: "Mary Hush",
        tag: PortfolioTag.Visuals,
        date: date(2023, 5),
        content:
            <div>
                <p>
                    For this experimental event, we took over a swanky conference center in Christchurch. We had many floors of interactive art and music made by over 50 creators.
                </p>
                <p>I managed the main stage visuals and created a show control system for the opening ceremony, using TouchOSC to control lights and sounds that went along with the opening ceremony, where participants of the 'Holographic hotel' arrived through portals in time and space.</p>
                <div style={centeredFlexStyle}>
                    <Video src='https://github.com/edeetee/edeetee.github.io/assets/7484745/bfb6ee96-6576-4939-94a8-e719aae3a22a' />
                    <Image src={require("@public/images/mh_dragon.jpg")} />
                </div>
            </div>
    },
    {
        title: "Twisted Frequency Website",
        url: "https://twistedfrequency.nz",
        tag: PortfolioTag.Creative,
        date: date(2023, 6),
        content:
            <div>
                <a href='https://twistedfrequency.nz'> <Image style={{ width: '100%' }} src={require("@public/images/tf-web.webp")} disableLink /> </a>
                <p>
                    Took static elements made by a graphic designer and recreated them in code to create interactive animated elements that fit into the theme for the <a href="https://twistedfrequency.nz">new Twisted Frequency website</a>.
                    I used <a href="http://regl.party/">regl</a> to to create line polygons and leaf particles.
                </p>
            </div>
    },
    {
        title: "Robot head",
        tag: PortfolioTag.Creative,
        date: date(2023, 2, 22),
        content:
            <div>
                <div style={centeredFlexStyle}>
                    <Video style={{ width: 300 }} src='https://github.com/edeetee/edeetee.github.io/assets/7484745/f624c6be-ed87-4bd0-973e-bad487336421' />
                    <Video unmutable style={{ width: 300 }} src='https://user-images.githubusercontent.com/7484745/253836224-fa02cf26-d18e-461b-92b0-02775d6028d4.mp4' />
                </div>
                <p>
                    We created a robot head that allowed a performer (in the cockpit) to control various elements of the head.
                    I programmed generative art for the led matrices that responded the the performers voice.
                    I programmed it in Rust and got it running on a Raspberry Pi alongside the audio code, generating the animations on the fly and sending them to the ArtNET led controller.
                    Worked with Doppler Electric, Tom Cosm and <a href="https://www.instagram.com/christian.vee.art/">Chris Van der meys</a>
                </p>
            </div>
    },
    {
        title: "Twisted Frequency",
        tag: PortfolioTag.Visuals,
        url: "https://twistedfrequency.nz",
        date: date(2023),
        content:
            <div>
                <p>
                    I headed main stage projection this year, after being a guest VJ for several years. It was a good challenge to work as a team and leverage the skills of many creative and technical people.
                </p>
                <div style={centeredFlexStyle}>
                    <Image style={{ width: 350 }} src={require('@public/images/tf_23_0.webp')} />
                    <Image style={{ width: 350 }} src={require('@public/images/tf_23_1.webp')} />
                </div>
                <Youtube embedId='05LZwgacdOQ' />
            </div>
    },
    {
        title: "Dude where's my turtle?",
        tag: PortfolioTag.Visuals,
        date: date(2022, 10, 1),
        content:
            <div>
                <div style={centeredFlexStyle}>
                    <Video unmutable src="https://user-images.githubusercontent.com/7484745/254428275-761daede-d3a3-4db5-a314-f342b0822871.MOV" />
                    <Video unmutable src="https://user-images.githubusercontent.com/7484745/254428340-655d6f64-9069-4b1b-986c-a3664f2c6768.mp4" />
                </div>
            </div>
    },
    {
        title: "Syncronicity",
        tag: PortfolioTag.Visuals,
        date: date(2022, 10, 22),
        content:
            <div>
                <Youtube embedId='D3JL0f5XKTo' />
                <p>Managed and performed visuals for this one night event near Christchurch. I was really proud of how I utilised the layering of the stage facade</p>
            </div>
    },
    {
        title: "Spaceship \"DiscoVery\" Airbnb",
        url: "https://linktr.ee/discoveryship",
        tag: PortfolioTag.Creative,
        date: date(2022, 6),
        content:
            <div>
                <p>
                    Got to collaborate with other skilled artists <a href="https://linktr.ee/discoveryship">(links here)</a> to add interactive elements to a spaceship themed airbnb made from the shell of an airplane.
                </p>
                <Youtube embedId='q3hAaLLpg0A' />
                <p>
                    My initial work focused on:
                </p>
                <ul>
                    <li>An interactive touchscreen exterior view to be the main menu for home automation</li>
                    <li>A game viewed in the cockpit, controlled via the joysticks</li>
                </ul>
                <p>
                    It was a hit at Armageddon Auckland and there are plans to do more development before it is open for booking.
                </p>
            </div>
    },
    {
        title: "Now that's not music",
        tag: PortfolioTag.Visuals,
        date: date(2022, 8, 28),
        content:
            <div>
                <Video src="https://user-images.githubusercontent.com/7484745/254429379-84129801-c0fc-479c-9ed8-ca57e70b06df.mp4" />
            </div>
    },
    {
        title: "Cultured",
        tag: PortfolioTag.Visuals,
        date: date(2022, 1),
        content:
            <div>
                <p>
                    Performed at a mostly psy event near Peel Forest to send off a family farm.
                </p>
                <Youtube embedId='qiAt0ZFS1eQ' />
                <p>
                    Had a hand in designing the stage to match projections to wrap around the dance floor. This performance is an example of my live rendered 3D content where I experiment with infinite geometries.
                </p>
                <p>Producer/DJ: <a href="https://soundcloud.com/keithunsheathed">Keith</a></p>
            </div>
    },
    {
        title: "Unleashed Society",
        tag: PortfolioTag.Visuals,
        date: date(2022, 5),
        content:
            <div>
                <Youtube embedId='dXHccbCmphk' />
                <div style={{
                    display: "flex",
                    flexDirection: "row"
                }}>
                    <Image style={{ width: '100%' }} src={unleashedSocietyInProgress} />
                    <div style={{ flexBasis: 8 }} />
                    <Image style={{ width: '100%' }} src={unleashedSocietyDejaVuduu} />
                </div>
                <p>
                    For this gig, I collaborated with stage designers to map out this custom built taniwha. I was really happy with the result - ghostly taniwha watching over the audience with my reactive shapes adding depth. I especially valued having enough time in this project to prototype different visual styles beforehand and get the mapping pixel perfect.
                </p>
            </div>

    },
    {
        title: "This website",
        tag: PortfolioTag.Creative,
        date: date(2022),
        content:
            <p>I wanted to update my website to make it easier to update content and showcase my generative art. I want to speak through examples.</p>,
    },

    {
        title: "TASKA Prosthetics",
        tag: PortfolioTag.Assistive,
        date: date(2020),
        content: <p>
            Worked for TASKA Prosthetics to update and maintain their phone app. I went into the job desiring to work with patients and design software that aligned with research into how to best assist users. I learnt a lot about project management including continuous integration, deployment and spreading work across a team. The role was not giving me the support and variety I desired so I moved on after a year.
        </p>
    },

    {
        title: "Blind Foundation Alexa Scholarship (2018/19)",
        tag: PortfolioTag.Assistive,
        date: date(2018),
        content:
            <p>
                As part of a summer scholarship with Victoria University at the end of my degree, I researched, designed, experimented and iterated on a app for the Amazon Alexa platform to assist with the lives of visually impaired people. I explored the potentials and limitations of the technology and how it could best be leveraged to assist the target audience. After learning the technology with an experimental game prototype and interviewing members of the community, we ended up developing a voice frontend to <a href="http://www.eventfinda.co.nz">eventfinda</a> instead of assistance with transport or blind foundation communications.
            </p>
    },

    {
        title: "Pictocraft (2019)",
        tag: PortfolioTag.Assistive,
        date: date(2019),
        url: "https://github.com/edeetee/pictocraft",
        content:
            <div>
                <Image src={pictocraft} />
                <p>
                    For my final project at Victoria University, I carried out independent research where I created a modification of the game <a href="http://www.minecraft.net">Minecraft</a> in order to give communication abilities to people with language difficulties. I integrated an existing English to Picograph system into the game to translate received text into images and made a web interface to allow communicating back by pressing buttons on a tablet. It's not 100% accurate, but the ability to communicate ideas like “I want to build a brick house on a hill” can give users a lot more depth than they had otherwise.
                </p>
            </div>
    },

    {
        title: "Scutter - Asymmetric VR (2019)",
        date: date(2019),
        tag: PortfolioTag.Creative,
        url: "https://github.com/edeetee/scutter",
        content:
            <div>
                <div style={{ display: 'flex' }}>
                    <Image src={scutter1} />
                    <Image src={scutter2} />
                </div>
                <p>
                    For a university game design course, I designed a multiplayer game best described as blind mans bluff in VR. Up to two players hold a controller each and one player dons the headset. As the controller players move around, a corresponding object in virtual space follows their movements. The VR player's goal is find the objects that represent the controllers moving around and take the controller from the other players, pressing a button to verify. While this happens, the controller players are getting vibrations that guide them to goals in space, with the aim to gain as many points as possible.
                </p>
            </div>
    },

    {
        title: "Misc Experiments",
        tag: PortfolioTag.Creative,
        date: date(2018),
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

    //TODO: link https://www.youtube.com/watch?v=DQYl4LjfknA
    {
        title: "Create and Capture for Garry's Mod (2015)",
        tag: PortfolioTag.Creative,
        date: date(2015),
        url: "https://steamcommunity.com/sharedfiles/filedetails/?id=389065555",
        content:
            <div>
                <Image src={createAndCapture} />
                <p>
                    With my friend Tom Lewis (now a practicing game designer), we build a multiplayer gamemode for the popular game platform Garry's Mod. We did a lot of user testing with our friends and learnt a lot about collaborative and design driven development. The game ended up being a lot of fun and had several thousand downloads.
                </p>
            </div>
    }
]

const titleStyle: CSSProperties = {
    borderLeft: "solid",
    borderWidth: 8,
    // borderColor: "rgba(.5,.5,.5,0.5)",
    borderRadius: 0,
    paddingLeft: 8,
};

export const RenderPortfolio = (items: PortfolioItem[]) =>
    <div>
        {items.map((item, i) =>
            <div style={{ position: 'relative' }} key={i}>

                {/* dividers */}
                <Separator />

                <div style={{ transform: 'translate(-100%, 0)', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'end', fontSize: 16, position: 'absolute', left: -16, verticalAlign: 'center', top: 44 }}>{item.date.getFullYear()}</div>
                {/* title */}
                {item.url != null ?
                    <a href={item.url}><h1 style={titleStyle}>{item.title}</h1></a> :
                    <h1 style={titleStyle}>{item.title}</h1>}

                {/* <div style={{ width: '100%', height: 1, backgroundColor: 'grey' }}> </div> */}

                {item.content}
            </div>
        )}
    </div>