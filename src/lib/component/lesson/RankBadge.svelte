<script>
    import { test } from "vitest";

    let {score} = $props();

    let title = "";
    let color = ""

    let ranks = [
        {
            score: 10,
            title: "Kannst deine Tastatur auch einfach endsorgen!",
            color: "red"
        },
        {
            score: 25,
            title: "Mieß Scheiße, schäm dich!",
            color: "red"
        },
        {
            score: 40,
            title: "Ganz Okay... aber nicht gut.",
            color: "orange"
        },
        {
            score: 50,
            title: "Besser als erwartet",
            color: "green"
        },
        {
            score: 70,
            title: "Scheiß Cheater!",
            color: "purple"
        }
    ]

    ranks.forEach((rank) => {
        if (rank.score < score) {
            title = rank.title
            color = rank.color
        }

        if (score < 0) {
            title = "Fristlose Kündigung mehr als gerechtfertigt!"
            color = "red"
        }
    })

</script>

<div style="background-color: {color}" id="badge" class="flex-center flex-column">
    <p>Score: {score}</p>
    <h3>{title}</h3>
</div>

<style>
    #badge {
        padding: 5px;
        border-radius: 10px;
        color: white;
    }

    p, h3 {
        margin: 0px;
        color: white;
    }
</style>