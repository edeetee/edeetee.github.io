<script>
    import Background from "@src/components/background/index.svelte"
    import Foreground from "@src/components/foreground.svelte"
</script>

<svelte:head>
    <title>Edward Taylor</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
</svelte:head>


<Background/>
<Foreground/>


<style global>
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto", "Segoe UI", "Noto Sans", "Helvetica Neue", Arial, Helvetica, sans-serif !important;
        text-decoration: none !important;

        outline: none;
    }

    /* TODO: remove these 2 styles */
    p div{
        line-height: 1.4em;
    }

    li{
        margin: 8px 0;
    }

    /* http://mrmrs.io/links/ */
    a {
        transition: color .4s;
        color: rgb(23, 103, 160) !important;
        cursor: pointer; 
        text-decoration: none;
    }

    a:hover   { 
        color: #7FDBFF !important;
    }

    a:active  {
        transition: color .3s !important;
        color: #007BE6 !important;
    }
</style>