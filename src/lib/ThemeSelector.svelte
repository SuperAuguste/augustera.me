<script lang="ts">
	import type { ChangeEventHandler } from "svelte/elements";
	import theme, { type Theme } from "$lib/stores/theme";
	import { browser } from "$app/environment";

	const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		$theme = (event.target as HTMLSelectElement).value as Theme;
	};

	$: {
		if (browser) {
			document.documentElement.classList.remove("theme_override_light");
			document.documentElement.classList.remove("theme_override_dark");
			if ($theme !== "system")
				document.documentElement.classList.add(
					`theme_override_${$theme}`,
				);
		}
	}
</script>

<div>
	<label for="theme_selector">Theme</label>
	<select id="theme_selector" on:change={onChange}>
		<option value="system" selected={$theme === "system"}
			>Browser Default</option
		>
		<option value="light" selected={$theme === "light"}>Light</option>
		<option value="dark" selected={$theme === "dark"}>Dark</option>
	</select>
</div>

<style lang="scss">
	div {
		position: fixed;

		border: 3px solid var(--foreground);
		border-radius: 10px;

		padding: 0.625rem 1.25rem;

		bottom: 0.8rem;
		right: 0.8rem;

		background-color: var(--background);

		& > label {
			margin-right: 0.25rem;
		}
	}
</style>
