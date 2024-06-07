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
	<div>
		<h2>I work on</h2>
		<ul>
			<li><button>Systems</button></li>
			<li class="active"><button>User Interfaces</button></li>
			<li><button>Devtools</button></li>
		</ul>
	</div>

	<div class="preview">
		<img src="/img/sycl.png" alt="">
		<Cards large items={[{
			title: "The Snitch",
			content: "Crafted brand and website for satirical publication.",
			interactive: true,
			verticallyCompact: true,
		}, {
			title: "Software You Can Love Vancouver",
			highlighted: true,
			content: "Brand and website for software conference.",
			interactive: true,
			verticallyCompact: true,
		}]} />
	</div>
</div>

<div class="highlight">
	<h2 style="margin-bottom: 20px;">Highlighted Projects</h2>

	<Cards items={projects} />
</div>

<style lang="scss">
	.hero {
		display: flex;
		gap: 4rem;

		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		margin-bottom: 1rem;
		padding: 3rem;
		border-radius: var(--border-radius);

		height: calc(100vh - (0.75rem * 2 + 1.075rem + 2.25rem + 1.25rem));

		background: linear-gradient(to bottom, var(--background-sub), var(--background));

		h2 {
			margin-bottom: 1rem;
		}

		li {
			margin-top: 0;
			margin-bottom: 0.2rem;

			max-width: 25ch;
			font-size: 2.625em;

			&>button {
				font-weight: 500;
				color: var(--foreground-sub-2);
				line-height: 1;

				transition:
					0.2s color;
			}
		
			&:hover>button {
				color: var(--foreground-sub);
			}

			&.active>button {
				color: var(--highlight);
			}

			&.active:hover>button {
				color: var(--highlight-sub);
			}
		}

		img {
			border: 1px solid var(--background-sub-2);
			border-radius: var(--border-radius);
			width: 1200px;
			height: 450px;
			object-fit: cover;
		}
	}

	.preview {
		display: flex;
		gap: 0.75rem;
		flex-direction: column;
	}
</style>
