<script>
	// import Eleventy from '@11ty/eleventy';
	import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
	import { componentStore } from '$lib/stores/component.js';

	let compilationResult;

	function addComponent() {
		componentStore.update(arr => {
			arr.push({
				"foo": Math.random().toString(36).substring(7, 20),
				"bar": Math.random().toString(36).substring(5, 25)
			});
			return arr;
		});
	}

	async function writeTestFile() {
		// i.e. : /home/username/.local/share/com.tauri-11ty-git-cms.dev/index.md
		await writeTextFile(
			'index.md',
			JSON.stringify($componentStore, null, 2),
			{ dir: BaseDirectory.AppData, append: false }
		);
	}

	async function compileStaticSite() {
		// const elev = new Eleventy();
		// await elev.write();
		// compilationResult = await elev.toJSON();
		compilationResult = { test: "test" };
	}
</script>

<svelte:head>
	<title>Debug (WIP)</title>
	<meta name="description" content="Debug (WIP)." />
</svelte:head>

<h1>Debug (WIP)</h1>

<button type="button" on:click={addComponent}>
	Add component
</button>

<pre>$componentStore : { JSON.stringify($componentStore, null, 2) }</pre>

<button type="button" on:click={writeTestFile}>
	Write test file
</button>

<button type="button" on:click={compileStaticSite}>
	Compile Static Site
</button>

<pre>compilationResult : { JSON.stringify(compilationResult, null, 2) } </pre>
