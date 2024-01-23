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

	<ul>
		{#each resume.experience as experience}
			<li>
				<span class="date">
					{experience.meta.start} - {experience.meta.end ?? ""} 
				</span>
				<div class="details">
					<svelte:component this={experience.content} />
				</div>
			</li>
		{/each}
	</ul>
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

		& > ul {
			margin: 0;
			padding: 0;
			list-style: none;

			& > li {
				break-inside: avoid;

				margin-bottom: 1.75rem;

				:global(h4) {
					margin-bottom: 0.5rem;
					line-height: 1.15;
				}

				:global(ul) {
					list-style: circle;
					padding-left: 2rem;
				}

				:global(li) {
					line-height: 1.35;

					margin-bottom: 0.3rem;
				}

				:global(p) {
					margin-top: 0.5rem;
					margin-bottom: 0.75rem;
				}

				.date {
					display: block;
					margin-top: 1rem;
					margin-bottom: 0.25rem;
					font-size: 1.05em;
				}
			}
		}
	}
</style>
