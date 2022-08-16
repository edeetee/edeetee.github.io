import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";

export const Assistive = () => 
<>
    <p>
        More than giving people joy through creativity, I want to use my unique position (skills, privilege, experience) to assist with the complexity and problems of the world we live in.
    </p>
    <p>
        I've had my fair share of mental difficulties and understand some of the invisible barriers the world has for differently abled people.
        I'm looking for new opportunities to leverage my place in the world for positive outcomes for humans and our environment.
    </p>
    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Assistive))}
</>