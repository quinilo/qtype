<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from "#lib/component/Navbar.svelte";
	import Footer from "#lib/component/Footer.svelte";
	import "#lib/assets/css/root.css"
	import '#lib/assets/css/buttons.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar></Navbar>

{@render children()}

<div class="footer-space"></div>

<Footer></Footer>

