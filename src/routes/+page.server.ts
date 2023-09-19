import type { Project } from "$lib/content";
import projects from "$lib/content/en/projects.json";

export async function load() {
	return {
		projects: projects as Project[],
	};
}
