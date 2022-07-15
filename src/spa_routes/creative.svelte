<script>
    import { portfolioItems, PortfolioTag, RenderPortfolio } from "@src/util/Portfolio";
    import PortfolioList from "@src/components/portfolio_list.svelte";

    const creativePortfolio = portfolioItems.filter(item => item.tag == PortfolioTag.Creative)
</script>

<p>
    When I'm bored, it fills my cup to create beautiful and fun things. Here is a selection of this output.
</p>
<PortfolioList items={creativePortfolio}/>