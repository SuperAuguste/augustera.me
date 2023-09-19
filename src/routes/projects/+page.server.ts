import { loadJSON, type Project } from "$lib/content.server.js";

export async function load() {
	return {
		projects: (await loadJSON("projects.json")) as Project[],
	};
}
