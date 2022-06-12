import { portfolioItems, PortfolioTag } from "src/lib/portfolioItems";
import { TitledItems } from "src/lib/TitledList";

export const Creative = () => 
<>
    <p>
        When I'm bored, it fills my cup to create beautiful and fun things. Here is a selection of this output.
    </p>
    {TitledItems(portfolioItems.filter(item => item.tag == PortfolioTag.Creative))}
</>