<script lang="ts">
    import Links from "@src/components/links.svelte";
    import Navigator from "@src/components/navigator.svelte"
    import Creative from "@src/spa_routes/creative.svelte";
    import Router from 'svelte-spa-router'
    import type { SvelteComponent, SvelteComponentTyped } from "svelte/internal";

    interface PageInfo {
        label: string,
        path: string,
        component: ConstructorOfATypedSvelteComponent
    }

    //TODO: modularise this
    const pageOptions: PageInfo[] = [
        // {label: "Music Visuals", name: "visuals"},
        {label: "Creative", path: "/creative", component: Creative},
        // {label: "Assistive", name: "assistive"},
        // {label: "Skills", name: "skills"}
    ]

    const routes = pageOptions.reduce(
        (obj, item) => Object.assign({[item.path]: item.component}, obj),
        {
            // "*": 
        }
    )

</script>

<Navigator options = {pageOptions} />
<Links/>

<Router {routes} />