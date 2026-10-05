<script>
    import Lesson from "#lib/component/lesson/Lesson.svelte";
    import {writable} from "svelte/store";

    let inLesson = writable(false)
    let content = writable("")

    let lessons = [
        {
            name: "Hello World",
            content: "Hello World Hello World"
        },
        {
            name: "Lorem",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        }
    ]

    /**
     * @param {string} newContent
     */
    function startLesson(newContent) {
        content.set(newContent)
        inLesson.set(true)
    }


</script>

{#if $inLesson}
    <Lesson originalText="{$content}">
    </Lesson>

    <button class="btn" on:click={() => {inLesson.set(false)}}>Back to lesson select</button>
{:else}
    <section id="select-lesson" class="flex-center">
        <div class="highlight flex-column flex-center">
            <h3>Lessons</h3>
            {#each lessons as lesson}
                <button class="btn" on:click={() => {startLesson(lesson.content)}
            }>{lesson.name}</button>
            {/each}
        </div>
    </section>
{/if}

<style>
    button {
        width: 100% ;
    }
</style>

