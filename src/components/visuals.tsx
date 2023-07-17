import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";
import { Video } from "src/lib/Video";

const halfBoxStyle = {margin: "0 auto", border: "none", width: "50%", aspectRatio: "1/1"}

export const Events = () =>
<div>
    <div>

            <p>
                I have been performing visual art at festivals and music events under the name <b>Optiphonic</b>. Many years ago I was inspired by music visualizers in winamp and iTunes. Since then I have created my own and started performing them for events all over the south island. You can see more of my content <a href="https://instagram.com/optiphonic">on instagram</a>.
            </p>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Video unmutable style={{ width: 300 }} src="https://user-images.githubusercontent.com/7484745/253841919-00aac186-7d5b-4839-8db7-d66f50b6a360.mp4" />
                <Video unmutable style={{ width: 300 }} src="https://user-images.githubusercontent.com/7484745/253841968-ac6e9e32-4514-4d5e-bcee-56ed53065d3e.mp4" />
        </div>

        <p>
                In contrast to many VJs, I exclusively perform realtime content - I don't use pre-rendered videos. This means that I can respond to the music and the crowd in realtime. I spent most of my creative time playing around with new tools for control and developing experimental rendering techniques.
            </p>
        <p>
            I'm lucky to collaborate with some other awesome creative people through this work and I hope to develop even larger collaborative things in the future! <a href="mailto:edeetee@gmail.com">Email me</a> if you want to collab :)
        </p>
    </div>

    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Visuals))}
</div>