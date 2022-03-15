class PortfolioItem {
    title: String
    content: JSX.Element

    constructor(title: String, content: JSX.Element){
        this.title = title
        this.content = content
    }
}

const portfolioItems: PortfolioItem[] = [
    new PortfolioItem("This website", <p>I wanted to update my website to make it easier to update content and showcase my generative art...</p>),

    new PortfolioItem("Blind Foundation Alexa Scholarship (2018/19)", 
    <p>
        As part of a summer scholarship with Victoria University at the end of my degree, I researched, designed, experimented and iterated on a app for the Amazon Alexa platform to assist with the lives of visually impaired people. I explored the potentials and limitations of the technology and how it could best be leveraged to assist the target audience. After learning the technology with an experimental game prototype and interviewing members of the community, we ended up developing a voice frontent to <a href="http://www.eventfinda.co.nz">eventfinda</a> instead of assistance with transport or blind foundation communications.
    </p>),

    new PortfolioItem("Pictocraft", 
    <p>
        For my final project at Victoria University, I carried out independent research where I created a modification of the
    </p>)
]

export const Portfolio: React.FC = () => 
    <div> 
        {portfolioItems.map((item, i) => 
            <div key={i}> 
                <h3>{item.title}</h3>
                {item.content}
            </div>
        )}
    </div>