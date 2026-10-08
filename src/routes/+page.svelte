<script>
    import Highscore from "#lib/component/Highscore.svelte";
    import Benefits from "#lib/component/Benefits.svelte";
</script>

<section id="hero">
    <div class="flex-center flex-column">
        <h1 class="margin-5" style="font-size: 40px">Willkommen</h1>
        <p class="secondary margin-5">Verbessere deine Schreibgeschwindigkeit</p>
        <a href="/lesson" class="btn btn-primary">Test starten</a>
    </div>
</section>

<Highscore></Highscore>

<Benefits></Benefits>

<section id="cta">
    <div class="highlight text-center">
        <h3>Na los, worauf wartest du noch?</h3>
        <p class="secondary">Starte noch heute durch und werde zum Meister an der Tastatur!</p>
    </div>
</section>

<style>
    #hero {
        min-height: 200px;
        margin-top: 80px;
    }

    #cta {
        margin-block: 80px;
    }
</style>
