<script>
    let {score = 0} = $props()
</script>

<span id="rating">
    {#if score >= 10}
        ⭐
    {:else}
        •
    {/if}

    {#if score >= 25}
        ⭐
    {:else}
        •
    {/if}

    {#if score >= 50}
        ⭐
    {:else}
        •
    {/if}
</span>

<style>
    #rating {
        background-color: rgb(0 0 0 / 0.24);
        padding: 2px;
        border-radius: 8px;
        margin-left: 8px;
    }
</style>
