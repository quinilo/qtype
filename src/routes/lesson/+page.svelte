<script>
    import Lesson from "#lib/component/lesson/Lesson.svelte";
    import {writable} from "svelte/store";

    let inLesson = writable(false)
    let content = writable("")

    let lessons = [
        {
            name: "asdf",
            content: "asdfjklö asdfjklö fjdkslaö asdfjklö dada fafa jaka lala sasa kaja dada fafa dad dad fad fad sad sad lad lad jad jad hallo hage fahl dase kahl sala lade jall"
        },
        {
            name: "basic",
            content: "Jeden Tag will ich gerne spielen. Ich tippe gerne. Das Tippen macht mir Spaß. Alle Buchstaben kenne ich schon. Die flinken Finger tippen schnell. Eine ruhige Hand hilft dir beim Schreiben auf der Tastatur. wir üben jeden tag ein kleines stück weiter."
        },
        {
            name: "hard",
            content: "Das Schreiben mit der Tastatur gehört heute zu den wichtigsten Grundkompetenzen in Schule und Beruf. Wer das Zehnfingersystem beherrscht, spart jeden Tag viel Zeit und schont die Gelenke. Am Anfang braucht man etwas Geduld, bis sich das Muskelgedächtnis entwickelt hat. Wichtig ist vor allem, den Blick vom Bildschirmrand oder der Tastatur wegzuhalten und die Grundstellung nicht zu verlieren. Mit ein wenig Übung am Tag wirst du schnell Fortschritte bemerken."
        },
        {
            "name": "zwergen-aufstand",
            "content": "Grummel-brummel-zischel-krach! Wer hat den Keks aus der Dose geklaut? Ein winziger Wichtel mit riesigen Stiefeln stolperte über ein langes Kabel. Zack! Düsenantrieb aktiviert. Der Toaster fliegt jetzt zum Mond. Tschüssi, kleiner Toaster!"
        },
        {
            "name": "psychedelischer-salat",
            "content": "Zickzack-Zitter-Aal im Limonaden-Ozean! Fliegende Gurken-Ritter bewerfen die Senf-Festung mit Konfitüre-Kanonen. Warum liegt hier überhaupt Stroh? Egal, knabber an der lila Pixel-Waffel, während die Tasten im Kreis tanzen. Huba-huba-hoppla!"
        },
        {
            "name": "capslock-gemetzel",
            "content": "wArUm ScHrEiBsT dU nIcHt NoRmAl?! dIeSeS sTeNdEl-dEnDeL-dInG bRiNgT mEiNe FiNgEr ZuM gLüHeN. hIlFe, mein cApSlOcK iSt KaPuTt! oDeR iSt DaS eInFaCh NuR dEr NEUESTE tReNd AuS dEm iNtErNeT? zAcK-zIcK-zUcK-wEg!"
        },
        {
            "name": "sonderzeichen-massaker",
            "content": "@@@ Wichtiges_Update_v2.0_BETA @@@ [Status: !!KRITISCH!!] {Index===>99} ~~~ (Prozent: 42,7%) +++ #HashtagDesWahnsinns ~~~ Kannst du das flüssig tippen? <--- Wenn ja, bist du ein Gott. ---> Oder ein sehr schneller Roboter... (Systemfehler: 0x80070002?!)"
        },
        {
            "name": "zungenbrecher-galore",
            "content": "Zwischen zwei Zwetschgenzweigen zwitschern zwei geschwätzige Schwalben. Fischers Fritze fischt frische Fische, aber der fiese Friesen-Fürst frittiert faule Flundern flach. Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid. Schneller! Noch schneller!"
        },
        {
            "name": "dada-diktat",
            "content": "Mumpitz im Quadrat! Kladderadatsch! Der Rhabarberkompott-Roboter dekomprimiert die dadaistische Datensuppe. Flupp-di-wupp, das Klappkrokodil klaubt klebrige Kaugummis. Schnickschnack, Humbug, Pustekuchen, Firlefanz und Pipapo. Ende der Durchsage."
        },
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

    function randomLesson() {
        /**
         * @type {any[]}
         */
        const pool = []
        let randomizedLesson = "";

        lessons.forEach((lesson) => {
            lesson.content.split(" ").forEach((word) => {
                pool.push(word)
            })

        })

        function randomFromPool() {
            return pool[Math.floor(Math.random() * pool.length)];
        }

        for (let i = 1; i <= 50; i++) {
            console.log(randomFromPool())
            randomizedLesson = randomizedLesson + randomFromPool() + " "
        }

    }

    async function restartLesson() {
        await inLesson.set(false)
        startLesson($content)
    }

</script>

{#if $inLesson}
    <Lesson originalText="{$content}">
    </Lesson>

    <div class="split">
        <button class="btn" on:click={() => {inLesson.set(false)}}>Zurück zur Auswahl</button>
        <button class="btn" on:click={() => {restartLesson()}}>Übung neu starten</button>
    </div>
{:else}
    <section id="select-lesson" class="flex-center">
        <div class="highlight flex-column flex-center ">
            <h3>Lessons</h3>
            {#each lessons as lesson}
                <button class="btn" on:click={() => {startLesson(lesson.content)}
            }>{lesson.name}</button>
            {/each}
            <hr>
            <button class="btn" on:click={() => {randomLesson()}}>Random</button>
            <button class="btn" on:click={() => {randomLesson()}}>Custom</button>
        </div>
    </section>
{/if}

<style>
    button {
        width: 100%;
    }

    #select-lesson div {
        min-width: 200px;
    }
</style>

