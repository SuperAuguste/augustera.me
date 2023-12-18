import type { Resume } from "$lib/content";

export async function load() {
	const resumeMarkdown = import.meta.glob("$lib/content/en/resume/**/*.md", { eager: true });
	const about = resumeMarkdown["/src/lib/content/en/resume/about.md"];
	const skills = resumeMarkdown["/src/lib/content/en/resume/skills.md"];
	
	const experience = [];
	const talks = [];

	for (const md in resumeMarkdown) {
		if (md.startsWith("/src/lib/content/en/resume/experience")) {
			const e = resumeMarkdown[md];
			experience.push({
				content: e.default,
				meta: e.metadata,
			});
		} else if (md.startsWith("/src/lib/content/en/resume/talks")) {
			const t = resumeMarkdown[md];
			talks.push({
				content: t.default,
				meta: t.metadata,
			});
		}
	}

	experience.sort((a, b) => {
		if (a.meta.end === undefined && b.meta.end !== undefined) return -1;
		return new Date(b.meta.start) - new Date(a.meta.start);
	});
	talks.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

	const resume: Resume = {
		about: {
			content: about.default,
			meta: about.metadata,
		},
		skills: {
			content: skills.default,
			meta: skills.metadata,
		},
		experience,
		talks,
	};

	return {
		resume,
	};
}
