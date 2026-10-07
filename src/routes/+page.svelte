<script>
    import Highscore from "#lib/component/Highscore.svelte";
    import Benefits from "#lib/component/Benefits.svelte";
</script>

<section id="hero">
    <div class="flex-center flex-column">
        <h1 class="margin-5">Willkommen</h1>
        <p class="secondary margin-5">Verbessere deine Schreibgeschwindigkeit</p>
        <a href="/lesson" class="btn btn-primary">Test starten</a>
    </div>
</section>

<Highscore></Highscore>

<Benefits></Benefits>

<div class="footer-space"></div>

<style>
    #hero {
        min-height: 200px;
        margin-top: 80px;
    }

    .footer-space {
        height: 70px;
    }
</style>
