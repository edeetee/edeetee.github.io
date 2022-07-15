<script>
    import { mdiAt, mdiCodeTags, mdiGithub, mdiInstagram } from "@mdi/js"

    const linkItems = [
        {
            title: "edeetee@gmail.com",
            url: "mailto:edeetee@gmail.com",
            mdiPath: mdiAt
        },
        {
            title: "Optiphonic",
            url: "https://instagram.com/optiphonic",
            mdiPath: mdiInstagram
        },
        {
            title: "Github",
            url: "https://github.com/edeetee",
            mdiPath: mdiGithub
        },
        {
            title: "Source code",
            url: "https://github.com/edeetee/edeetee.github.io",
            mdiPath: mdiCodeTags
        }
    ]
</script>

{#each linkItems as link}
    <a href={link.url}>
        <svg viewBox="0 0 24 24"><path d={link.mdiPath}></path></svg>
        <h4>{link.title}</h4>
    </a>
{/each}

<style>
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 6px 0;
    }

    svg {
        width: 18px;
        height: 18px;
        margin: auto 0;
    }

    h4{
        margin: auto 0;
        padding-left: 4px;
    }
</style>