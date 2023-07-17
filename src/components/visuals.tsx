import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";
import { Video } from "src/lib/Video";

const halfBoxStyle = {margin: "0 auto", border: "none", width: "50%", aspectRatio: "1/1"}

export const Events = () =>
<div>
    <div>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Video unmutable style={{ width: 300 }} src="https://user-images.githubusercontent.com/7484745/253841919-00aac186-7d5b-4839-8db7-d66f50b6a360.mp4" />
                <Video unmutable style={{ width: 300 }} src="https://user-images.githubusercontent.com/7484745/253841968-ac6e9e32-4514-4d5e-bcee-56ed53065d3e.mp4" />
        </div>

        <p>
            I have been performing visual art at festivals and music events under the name Optiphonic. Many years ago I was inspired by music visualizers in winamp and iTunes, since then I have created my own and started performing them for different events. Check out some of my renders and performances <a href="https://instagram.com/optiphonic">on instagram</a>.
        </p>

        <p>
            Some of the technology I make in relation to visual art include:
            <ul>
                <li>Tools to represent real spaces in the virtual and vice versa</li>
                <li>Extending existing tools to improve quality of life</li>
                <li>Midi control systems</li>
                <li>Low level programming for embedded visual systems (raspberry pi)</li>
            </ul>
        </p>

        <p>
            I'm lucky to collaborate with some other awesome creative people through this work and I hope to develop even larger collaborative things in the future! <a href="mailto:edeetee@gmail.com">Email me</a> if you want to collab :)
        </p>
    </div>

    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Visuals))}
</div>