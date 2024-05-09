<script lang="ts">
	import { page } from "$app/stores";
	import type { BlogPost } from "$lib/content";

	const post = $page.data.post as BlogPost;
</script>
<svelte:head>
    <title>Auguste Rame - Blog</title>
</svelte:head>

<h2>{post.title}</h2>

<svelte:component this={post.content}></svelte:component>
