<script lang="ts">
	import { page } from "$app/stores";
	import Cards from "$lib/Cards.svelte";
	import type { BlogPostSummary } from "$lib/content";

	const posts = $page.data.posts as BlogPostSummary[];
</script>
<svelte:head>
    <title>Auguste Rame - Blog</title>
</svelte:head>

<h2>Blog</h2>

<p>Mostly technical writing.</p>

<Cards items={posts.map(post => ({
    title: post.title,
    content: `${post.publish_date.toDateString()}`,
    interactive: true,
    href: `blog/${post.slug}`
}))} large={true} />
