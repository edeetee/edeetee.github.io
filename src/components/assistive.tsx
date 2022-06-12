import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";

export const Assistive = () => 
<>
    <p>
        More than giving people joy through creativity, I want my work to help with reality. I've been expanding my creative work and am looking for new opportunities to apply my skills to assist the environment and underprivileged people, specifically people with disabilities.
    </p>
    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Assistive))}
</>