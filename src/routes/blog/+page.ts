import type { BlogPostSummary } from "$lib/content";

export async function load() {
	const markdownFiles = import.meta.glob("$lib/content/en/blog/*.md", { eager: true });
	
	const posts: BlogPostSummary[] = [];

	for (const md in markdownFiles) {
        const e = markdownFiles[md];
        posts.push({
            slug: md.split("/")[md.split("/").length - 1].split(".")[0],
            title: e.metadata.title,
            publish_date: new Date(e.metadata.publish_date),
        });
	}

	posts.sort((a, b) => +a.publish_date - +b.publish_date);

	return {
		posts,
	};
}
