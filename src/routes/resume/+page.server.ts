import type { Resume } from "$lib/content";
import resume from "$lib/content/en/resume.json";

export async function load() {
	return {
		resume: resume as Resume,
	};
}
