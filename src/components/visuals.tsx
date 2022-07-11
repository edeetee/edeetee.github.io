import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";

export const Visuals = () => 
<div>
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

    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Visuals))}
</div>