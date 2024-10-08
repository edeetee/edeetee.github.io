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
            <p>

            </p>
        </div>

        {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Visuals))}
    </div>