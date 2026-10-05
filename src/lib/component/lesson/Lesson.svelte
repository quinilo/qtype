<script>
    import {onMount} from "svelte";
    import {writable} from "svelte/store";
    import Cursor from "#lib/component/lesson/Cursor.svelte";

    let originalText = ""
    let text = writable("Hallo Welt")
    let ended = writable(false)
    let started = writable(false)
    let errors = 0

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
            originalText = $text

            console.log("debug: starting")
            started.set(true)
        }

        function end() {
            let seconds = Math.round(Date.now() - startTimestamp) / 1000;
            let words = originalText.split(" ").length

            wpm = Math.round((words / seconds) * 60)

            ended.set(true)
        }
    })

</script>

{#if $ended}

    <section id="summary" class="highlight">

        <h3>You are done!</h3>
        <ul>
            <li>Errors: {errors}</li>
            <li>WPM: {wpm}</li>
        </ul>

    </section>

{:else}

    <section id="test">

        <h3>Type the text</h3>

        <div id="display" class="highlight"><Cursor/>{$text}</div>

    </section>

{/if}

<style>

    #display {
        padding-inline: 50px;
    }

</style>