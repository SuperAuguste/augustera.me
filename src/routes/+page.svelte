<script lang="ts">
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import Cards from "$lib/Cards.svelte";
	import type { Project } from "$lib/content";

	const buzzwords = [
		"Vision-driven",
		"Goal-oriented",
		"Synergistic",
		"Best-in-breed",
		"Agile",
		"Paradigm-shifting",
		"Holistic",
		"Data-driven",
		"Product-focused"
	];

	const buzzword = browser
		? buzzwords[Math.floor(Math.random() * buzzwords.length)]
		: "JavaScript-less";

	const projects = [
		...$page.data.projects
			.filter((proj: Project) => proj.featured)
			.map((proj: Project) => ({
				title: proj.name,
				href: proj.href,
				interactive: true,
			})),
		{
			title: "See all projects",
			href: "/projects",
			highlighted: true,
			interactive: true,
			arrowed: true,
		},
	];
</script>

<svelte:head>
	<title>Auguste Rame</title>
</svelte:head>

<div class="hero">
	<h2>
		<u id="buzzword">{buzzword}</u> enough to publish an unfinished website
	</h2>
	<a href="/resume" class="arrow_end">I have a resume though</a>
</div>

<div class="highlight">
	<h2 style="margin-bottom: 20px;">Highlighted Projects</h2>

	<Cards items={projects} />
</div>

<style lang="scss">
	.hero {
		display: flex;

		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		height: calc(100vh - 96px);

		& > h2 {
			margin-top: 0;
			margin-bottom: 2.5rem;

			max-width: 25ch;

			font-size: 2.625em;
		}

		& > a {
			border: 1px solid var(--background-sub-2);
			border-radius: 100px;

			padding: 1rem 2.5rem;

			color: var(--foreground);
			font-size: 1.375em;
			font-weight: 700;
			text-transform: uppercase;
			text-decoration: none;

			background-color: var(--background-sub);
			transition:
				0.2s color,
				0.2s background-color;

			&:hover {
				background-color: var(--background-sub-2);
			}
		}
	}

	.arrow_end {
		&::after {
			margin-left: 0.9rem;

			content: "🡒";
			font-size: 1em;
			font-weight: 700;
			font-family: "Inter";
		}
	}
</style>
