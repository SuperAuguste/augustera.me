<script lang="ts">
	import { page } from "$app/stores";
	import Cards from "$lib/Cards.svelte";
	import type { Project } from "$lib/content";

	const projects = $page.data.projects.map((proj: Project) => ({
		title: proj.name,
		thumbHref: proj.img ?? "/img/rainbowoflove.png",
		content: proj.description,
		links: [
			{
				title: "Learn More",
				href: proj.href,
			},
		],
	}));
</script>

<svelte:head>
	<title>Auguste Rame - Projects</title>
</svelte:head>

<h2>Projects</h2>

<p>
	Here's a collection of my favorite projects that combine my passion for
	programming and design. From websites to developer tooling, I love
	creating functional and visually appealing experiences that solve
	complex technical problems while bring joy to users.
</p>

<Cards items={projects} large={true} />
