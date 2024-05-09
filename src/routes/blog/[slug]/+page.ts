import type { BlogPost } from "$lib/content";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	const markdownFiles = import.meta.glob(`$lib/content/en/blog/*.md`, { eager: true });

	let e = null;
    for (const md in markdownFiles) {
        if (md.split("/")[md.split("/").length - 1].split(".")[0] == params.slug) {
            e = markdownFiles[md]
        }
    }
    if (!e) throw error(404);

    const post: BlogPost = {
        slug: params.slug,
        title: e.metadata.title,
        publish_date: new Date(e.metadata.publish_date),
        content: e.default,
    };

	return {
		post,
	};
}
