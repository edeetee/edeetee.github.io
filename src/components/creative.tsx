import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";

export const Creative = () => 
<>
    <p>
        When I'm bored, it fills my cup to create beautiful and fun things. Here is a selection of this output.
    </p>
    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Creative))}
</>