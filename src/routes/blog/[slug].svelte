<script context="module">
    import { base } from "$app/paths";
    import { formatDate } from "$lib/utils";

    export async function load({ page, fetch }) {
        const slug = page.params.slug;
        const post = await fetch(`${base}/blog/${slug}.json`).then((r) => r.json());
        return {
            props: { post },
        };
    }
</script>

<script lang="ts">
    import type { Post } from "./_posts";

    export let post: Post;

    console.log(post);
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<div class="bisect">
    <div>
        <h1 class="title">{post.title}</h1>
        <h2>Auguste Rame &bull; {formatDate(new Date(post.published))}</h2>

        {@html post.content}
    </div>
    <div>
        {#if post.thumbnail}
            <img src={post.thumbnail}>
        {/if}
    </div>
</div>

<style lang="scss">
    h2 {
        margin: 0;
    }
</style>
