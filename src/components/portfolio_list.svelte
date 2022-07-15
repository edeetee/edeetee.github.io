<script lang="ts">
    import type {PortfolioItem} from "@src/util/Portfolio"

    export let items: PortfolioItem[];
</script>

<div class="items_block">
    {#each items as item}
        <div> 
            <div class="divider"/>

            {#if item.url != null}
                <a href={item.url}><h3>{item.title}</h3></a>
            {:else}
                <h3>{item.title}</h3>
            {/if}

            {item.content}
        </div>
    {/each}
</div>

<style>
    .items_block{
        margin-bottom: 10vh;
    }

    .divider {
        width: 100%;
        height: 1;
        background-color: #AAA;
        margin: 32px 0;
    }
</style>