import { loadJSON, type Resume } from "$lib/content.server.js";

export async function load() {
	return {
		resume: (await loadJSON("resume.json")) as Resume,
	};
}
