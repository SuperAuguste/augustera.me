<script lang="ts">
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import Cards from "$lib/Cards.svelte";
	import type { Project } from "$lib/content";
</script>

<svelte:head>
	<title>Auguste Rame</title>
</svelte:head>

<div class="hero">
	<div class="topics">
		<h2>I work on</h2>
		<ul>
			<li><button>Systems</button></li>
			<li class="active"><button>User Interfaces</button></li>
			<li><button>Devtools</button></li>
		</ul>
		<a href="/projects" class="cta">All Projects</a>
	</div>

	<div class="preview">
		<video src="/scrollthroughs/snitch.mp4" muted controls></video>
	
		<div class="cards">
			<Cards large items={[{
				title: "The Snitch",
				highlighted: true,
				content: "Crafted brand and website for satirical publication.",
				interactive: true,
				verticallyCompact: true,
				onClick() {},
			}, {
				title: "Software You Can Love Vancouver",
				content: "Brand and website for software conference.",
				interactive: true,
				verticallyCompact: true,
				onClick() {},
			}]} />
		</div>
	</div>
</div>

<style lang="scss">
	.hero {
		display: flex;
		gap: 4rem;

		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		padding: 3rem;
		border-radius: var(--border-radius);

		height: calc(100vh - (1rem * 2 + 2.25rem + 0.75rem * 2 + 1.075em + 1.75rem * 2));

		border: 1px solid var(--background-sub-2);
		background: linear-gradient(to bottom, var(--background-sub), var(--background));
	}

	.topics {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;

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
	}

	.preview {
		display: flex;
		gap: 0.75rem;
		flex-direction: column;

		max-width: 100%;
		max-height: 100%;

		video {			
			display: block;

			border: 1px solid var(--background-sub-2);
			border-radius: var(--border-radius);
			
			width: 100%;
			height: 100%;
			max-width: 100%;
			max-height: 100%;
			
			object-fit: contain;
			background-color: var(--background-sub);
		}
	}

	.cta {
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

		&::after {
			margin-left: 0.9rem;

			content: "🡒";
			font-size: 1em;
			font-weight: 700;
			font-family: "Inter";
		}
	}
</style>
