<script lang="ts">
	import { page } from "$app/stores";
	import type { Resume } from "$lib/content";

	const resume = $page.data.resume as Resume;

	function printThisPage() {
		print();
	}
</script>

<svelte:head>
	<title>Auguste Rame - Resume</title>
</svelte:head>

<h2>Resume</h2>

<div class="contact">
	<a href="https://github.com/SuperAuguste">SuperAuguste on GitHub</a>
	<span>&bull;</span>
	<a href="https://www.linkedin.com/in/auguste-rame"
		>Auguste Rame on LinkedIn</a
	>
	<span>&bull;</span>
	<a href="/contact">augustera.me/contact</a>
	<span class="print_hide">&bull;</span>
	<span class="print_hide"
		><i>(psst, you can <a on:click={printThisPage} on:keypress={printThisPage} href="#" role="button">print this page</a> to get a nice PDF of it)</i></span
	>
</div>

<div class="hero">
	<div>
		<svelte:component this={resume.about.content} />
	</div>

	<div>
		<svelte:component this={resume.skills.content} />
	</div>
</div>

<div class="experience">
	<h3>Experience</h3>

	<div class="list">
		{#each resume.experience as experience}
			<div>
				<span class="date">
					{experience.meta.start} - {experience.meta.end ?? ""} 
				</span>
				<div class="details">
					<svelte:component this={experience.content} />
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="talks">
	<h3>Talks</h3>

	<ul>
		{#each resume.talks as talk}
			<li>
				<span class="date">
					{talk.meta.date}
				</span>
				<div class="details">
					<svelte:component this={talk.content} />
				</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.contact {
		margin-top: 1.5rem;
		line-height: 1.5;
	}

	.hero {
		display: flex;
		gap: 2.5rem;

		& > * {
			flex: 1;

			:global(h3) {
				margin-top: 1.5rem;
				margin-bottom: 0.7rem;
			}

			:global(p) {
				margin-top: 0px;
			}
		}
	}

	.experience, .talks {
		h3 {
			margin-top: 1.5rem;
			margin-bottom: 1.25rem;
		}

		&>.list {
			&>div {
				break-inside: avoid;

				margin-bottom: 1rem;

				border: 1px solid var(--background-sub-2);
				border-radius: 0.5rem;
				padding: 1.75rem;
				background-color: var(--background-sub);

				:global(h4) {
					margin-bottom: 1rem;
					line-height: 1.15;
				}

				:global(p) {
					margin-top: 0.5rem;
					margin-bottom: 0.75rem;
				}

				.date {
					display: block;
					margin-bottom: 0.25rem;
					font-size: 1.05em;
				}
			}
		}
	}
</style>
