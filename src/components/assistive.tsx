import { portfolioItems, PortfolioTag } from "src/lib/portfolioItems";
import { TitledItems } from "src/lib/TitledList";

export const Assistive = () => 
<>
    <p>
        More than giving people joy through creativity, I want my work to help with reality. I've been expanding my creative work and am looking for new opportunities to apply my skills to assist the environment and underprivileged people, specifically people with disabilities.
    </p>
    {TitledItems(portfolioItems.filter(item => item.tag == PortfolioTag.Assistive))}
</>