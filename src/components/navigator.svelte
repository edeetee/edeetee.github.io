<script lang="ts">
    type Selection = {label: string};

    export let options: Selection[];
    // export let selected: Selection | undefined

</script>

{#each options as option}
    <a>
        <h2>
            {option.label}
        </h2>
    </a>
{/each}

<style>
    h2 {
        /* fontWeight: isSelected ? "bold" : "inherit",  */
        border-left: "solid";
        border-width: 1;
        padding-left: 8;
    }
</style>