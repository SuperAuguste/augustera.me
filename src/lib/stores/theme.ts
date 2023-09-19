import { browser } from "$app/environment";
import { writable } from "svelte/store";

export type Theme = "system" | "light" | "dark";

const defaultValue = "system";
const initialValue = (
	browser
		? window.localStorage.getItem("theme") ?? defaultValue
		: defaultValue
) as Theme;

const theme = writable<Theme>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem("theme", value);
	}
});

export default theme;
