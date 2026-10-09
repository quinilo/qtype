<script>
    import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import Cursor from "#lib/component/lesson/Cursor.svelte";
    import RankBadge from "#lib/component/lesson/RankBadge.svelte";
    import {statsCookie} from "#lib";

    let {originalText = '', cookieId = ''} = $props();

    let text = writable(originalText)
    let ended = writable(false)
    let started = writable(false)

    // svelte-ignore non_reactive_update
    let errors = 0
    // svelte-ignore non_reactive_update
    let wpm = 0

    onMount(() => {
        let startTimestamp = Date.now()

        addEventListener("keypress", (event) => {
            let key = event.key
            if (key === $text.at(0)) {
                if (!$started) start()
                text.set($text.substring(1))

                if ($text.length === 0) end()
            } else {
                errors++
            }

        })

        function start() {
            startTimestamp = Date.now()

            console.log("debug: starting")
            started.set(true)
        }

        function end() {
            let seconds = Math.round(Date.now() - startTimestamp) / 1000;
            let words = originalText.split(" ").length

            wpm = Math.round((words / seconds) * 60)

            let score = wpm - errors

            statsCookie.saveHighscore("highscore", score)
            statsCookie.saveHighscore("lesson-" + cookieId, score)

            ended.set(true)
        }
    })

</script>

{#if $ended}

    <section id="summary" class="highlight">

        <h3>Geschafft!</h3>
        <ul>
            <li>Fehler: {errors}</li>
            <li>WPM: {wpm}</li>
        </ul>

        <div class="flex-center flex-column">
            <h3>Deine persönliche Einschätzung:</h3>
            <RankBadge score={wpm-errors}></RankBadge>
            <p>Die persönliche einschätzung ist ungeschönt und brutal ehrlich, sie sagt dir genau wo du stehst.</p>
            <p></p>
        </div>

    </section>

{:else}

    <section id="test">

        <div class="flex-center">
            <h3>
                {#if $started}
                    Lesson started!
                {:else}
                    Start typing the text...
                {/if}
            </h3>
        </div>

        <div id="display" class="highlight">
            <Cursor/>{$text}</div>

    </section>

{/if}

<style>

    #display {
        padding-inline: 50px;
    }

</style>