<script>
    import {statsCookie} from "#lib/index.js";
    import {onMount} from "svelte";
    import {writable} from "svelte/store";

    let score = writable()

    onMount(() => {
        score.set(statsCookie.getCookie("highscore").toString())
    })

</script>

<section id="highscore" class="highlight flex-center">

    {#if $score}
        <h2>Dein persönlicher Highscore: {$score}</h2>
    {:else}
        <h2>Du hast noch keinen highscore :O</h2>
    {/if}

</section>

<style>
    #highscore {
        margin-block: 50px;
    }
</style>