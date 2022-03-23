class TitledJSX {
    title: string
    content: JSX.Element

    constructor(title: string, content: JSX.Element){
        this.title = title
        this.content = content
    }
}

//TODO: images

const portfolioItems: TitledJSX[] = [
    new TitledJSX("This website", <p>I wanted to update my website to make it easier to update content and showcase my generative art. I want to speak through my art and my words.</p>),

    new TitledJSX("Blind Foundation Alexa Scholarship (2018/19)", 
    <p>
        As part of a summer scholarship with Victoria University at the end of my degree, I researched, designed, experimented and iterated on a app for the Amazon Alexa platform to assist with the lives of visually impaired people. I explored the potentials and limitations of the technology and how it could best be leveraged to assist the target audience. After learning the technology with an experimental game prototype and interviewing members of the community, we ended up developing a voice frontent to <a href="http://www.eventfinda.co.nz">eventfinda</a> instead of assistance with transport or blind foundation communications.
    </p>),

    new TitledJSX("Pictocraft (2019)", 
    <p>
        For my final project at Victoria University, I carried out independent research where I created a modification of the game <a href="http://www.minecraft.net">Minecraft</a> in order to give communication abilities to people with language difficulties. I integrated an existing English to Picograph system into the game to translate recieved text into images and made a web interface to allow communicating back by pressing buttons on a tablet. It's not 100% accurate, but the ability to communicate ideas like “I want to build a brick house on a hill” can give users a lot more depth than they had otherwise.
    </p>),

    new TitledJSX("Scutter - Asymmetric VR (2019)",
    <p>
        For a university game design course, I designed a multiplayer game best described as blind mans bluff in VR. Up to two players hold a controller each and one player dons the headset. As the controller players move around, a corresponding object in virtual space follows their movements. The VR player's goal is find the objects that represent the controllers moving around and take the controller from the other players, pressing a button to verify. While this happens, the controller players are getting vibrations that guide them to goals in space, with the aim to gain as many points as possible.
    </p>
    )
]

export const Portfolio = () => 
    <>
        {portfolioItems.map((item, i) => 
            <div key={i}> 
                <h3>{item.title}</h3>
                {item.content}
            </div>
        )}
    </>