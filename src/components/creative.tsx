import { portfolioItems, PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";

export const Creative = () => 
<>
    <p>
            It fills my cup to create beautiful and fun and interactive experiences. Here is a selection of this output.
    </p>
    {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Creative))}
</>