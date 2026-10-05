<script>
    import { test } from "vitest";

    let {score} = $props();

    let title = "";
    let color = ""

    let ranks = [
        {
            score: 10,
            title: "Fristlose Kündigung mehr als gerechtfertigt!",
            color: "red"
        },
        {
            score: 20,
            title: "Kannst deine Tastatur auch einfach endsorgen!",
            color: "red"
        },
        {
            score: 30,
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
            score: 60,
            title: "Scheiß Cheater!",
            color: "purple"
        }
    ]

    ranks.forEach((rank) => {
        if (rank.score < score) {
            title = rank.title
            color = rank.color
        }
    })

</script>

<h3 style="background-color: {color}; color: white; padding: 5px; border-radius: 10px">{title}</h3>