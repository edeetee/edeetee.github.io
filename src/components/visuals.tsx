import { PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";
import { portfolioItems } from '@src/lib/PortfolioItem';
import { Video } from "src/lib/Video";

const halfBoxStyle = { margin: "0 auto", border: "none", width: "50%", aspectRatio: "1/1" }

export const Events = () =>
    <div>
        <div>
            <div style={{ fontSize: '10vw', fontFamily: 'Poppkorn', textAlign: 'center', marginBottom: 32 }}>Optiphonic</div>
            <p>
                I perform visual art at festivals and music events around New Zealand.
                Inspired by music visualizers in winamp and iTunes, I create computer programs that transform audio data into visually pleasing stage projections.

            </p>
            <p>
                I forge original visual toolchains with Resolume, Touchdesigner and his own experimental software. His generative works transform stages into dynamic installations, merging seamlessly with the art of musicians and stage designers for a cohesive experience.
                You can see more of my content if you scroll down or <a href="https://instagram.com/optiphonic">on instagram</a>.
            </p>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Video unmutable style={{ width: 300 }} src="https://user-images.githubusercontent.com/7484745/253841919-00aac186-7d5b-4839-8db7-d66f50b6a360.mp4" />
                <Video unmutable style={{ width: 300 }} src="https://user-images.githubusercontent.com/7484745/253841968-ac6e9e32-4514-4d5e-bcee-56ed53065d3e.mp4" />
            </div>

            <p>

            </p>
        </div>

        {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Visuals))}
    </div>