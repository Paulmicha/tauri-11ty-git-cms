<script>
	// Components.
	import ThemeSwitcher from '$lib/components/nav/ThemeSwitcher.svelte';
	import MenuMain from '$lib/components/nav/MenuMain.svelte';
	import Breadcrumb from '$lib/components/nav/Breadcrumb.svelte';

	// Stylesheets.
	import '@fontsource/karla';
	import '../app.css';

	// Navigation.
	const modules = import.meta.glob('./**/+page.svelte');
</script>

<header>
	<MenuMain {modules} />
	<div class="container grid">
		<div class="grid-item-expand">
			<Breadcrumb />
		</div>
		<ThemeSwitcher />
	</div>
</header>

<main class="container">
	<slot />
</main>

<style>
	.grid-item-expand {
		flex-grow: 1;
	}
</style>
