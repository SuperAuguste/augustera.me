import { default as posts, Post } from "./_posts";

const lookup = new Map<string, Post>();
for (const post of posts) {
	lookup.set(post.slug, post);
};

export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;

	const post = lookup.get(slug);
	if (post) {
		return {
			body: post
		};
	}
}
