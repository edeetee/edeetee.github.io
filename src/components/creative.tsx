import { PortfolioTag, RenderPortfolio } from "src/lib/Portfolio";
import { portfolioItems } from '@src/lib/PortfolioItem';

export const Creative = () =>
    <>
        <p style={{ fontSize: 28, fontStyle: 'italic' }}>
            It fills my cup to create beautiful and fun and interactive experiences. Here is a selection of this output.
        </p>
        {RenderPortfolio(portfolioItems.filter(item => item.tag == PortfolioTag.Creative))}
    </>