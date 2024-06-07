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
		flex-wrap: wrap;
		column-gap: 2.5rem;

		& > * {
			flex: 1;
			min-width: 30ch;

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

		&>ul {
			&>li {
				position: relative;

				break-inside: avoid;

				margin-bottom: 1rem;

				border: 1px solid var(--background-sub-2);
				border-radius: var(--border-radius);
				background-color: var(--background-sub);

				:global(h4) {
					margin-bottom: 1rem;
					line-height: 1.15;
				}

				:global(p) {
					margin-top: 0.5rem;
					margin-bottom: 0;
				}

				.date {
					margin-left: 1.5rem;
					display: inline-block;
					border-bottom-left-radius: 0.25rem;
					border-bottom-right-radius: 0.25rem;
					padding: 0.5rem;
					font-size: 1.05em;
					background-color: var(--background-sub-2);

					@media print {
						border: 1px solid var(--background-sub-2);
						border-top: 0;
					}
				}

				.details {
					padding: 1.5rem;
					padding-top: 0.75rem;
				}
			}
		}
	}
</style>
