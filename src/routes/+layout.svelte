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

<ThemeSwitcher />
<MenuMain {modules} />
<Breadcrumb />

<slot />
