<script>
	// @link https://blog.aakashgoplani.in/generate-breadcrumb-and-navigation-in-sveltekit
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	export let modules;
	let menu = [];

	onMount(() => {
		for (let path in modules) {
			let pathSanitized = path.replace(".svelte", "").replace("./", "/");

			// for group layouts
			if (pathSanitized.includes("/(")) {
				pathSanitized = pathSanitized.substring(
					pathSanitized.indexOf(")/") + 1
				);
			}

			// for dynamic paths -> needs more triaging
			if (pathSanitized.includes("[")) {
				pathSanitized = pathSanitized.replaceAll("[", "").replaceAll("]", "");
			}

			pathSanitized = pathSanitized.replace("/+page", "");

			menu = [
				...menu,
				{
					title: pathSanitized
						? pathSanitized.substring(pathSanitized.lastIndexOf("/") + 1)
						: "home",
					link: pathSanitized ? pathSanitized : "/",
				},
			];
		}
	});
</script>

<div>
	<ul>
		{#each menu as item}
			<li>
				<a href={item.link} class:active={$page.url.pathname === item.link}
					>{item.title}</a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	/* todo */
</style>
