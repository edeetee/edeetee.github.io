
<script lang="ts">
    export let embedId: string
</script>

<div class="container">
    <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
    />
</div>

<style>
    .container {
        position: relative;
        aspect-ratio: 16/9;
    }

    iframe {
        height: 100%;
        width: 100%;
    }
</style>