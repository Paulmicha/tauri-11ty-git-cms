<script>
	// todo
	// @see node_modules/@picocss/pico/docs/js/src/theme-switcher.js
</script>

<details role="list">
	<summary aria-haspopup="listbox" class="secondary">Theme</summary>
	<ul role="listbox">
		<li><button data-theme-switcher="auto">Auto</button></li>
		<li><button data-theme-switcher="light">Light</button></li>
		<li><button data-theme-switcher="dark">Dark</button></li>
	</ul>
</details>

<style>
	details[role="list"] {
		margin: 0;
	}
	button[data-theme-switcher] {
		background: none;
		border: none;
		margin: 0;
		padding: 0;
		cursor: pointer;
		text-align: left;
	}
</style>
