<script lang="ts">
	import { page } from "$app/stores";
	import type { Resume } from "$lib/content.server";

	const resume = $page.data.resume as Resume;
</script>

<div class="contact">
	<a href="https://github.com/SuperAuguste">SuperAuguste on GitHub</a>
	<span>&bull;</span>
	<a href="https://www.linkedin.com/in/auguste-rame"
		>Auguste Rame on LinkedIn</a
	> <span>&bull;</span>
	<a href="https://discord.gg/zig">aurame @ discord.gg/zig</a>
	<span class="print_hide">&bull;</span>
	<span class="print_hide"
		><i>(psst, you can print this page to get a nice PDF of it)</i></span
	>
</div>

<div class="hero">
	<div>
		<h3>{resume.blurbs.about.title}</h3>
		<p>
			{@html resume.blurbs.about.text}
		</p>
	</div>

	<div>
		<h3>{resume.blurbs.skills.title}</h3>
		<p>
			{@html resume.blurbs.skills.text}
		</p>
	</div>
</div>

<div class="experience">
	<h3>{resume.blurbs.experience}</h3>

	<ul>
		{#each resume.experience as experience}
			<li>
				<header>
					<h4>
						{@html experience.title}
					</h4>
					<div><div></div></div>
					<time>{@html experience.time}</time>
				</header>

				<ul>
					{#each experience.points as point}
						<li>
							{@html point}
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.hero {
		display: flex;
		gap: 2.5rem;

		& > * {
			flex: 1;

			& > h3 {
				margin-top: 1.5rem;
				margin-bottom: 0.7rem;
			}

			& > p {
				margin-top: 0px;
			}
		}
	}

	.experience {
		& > h3 {
			margin-top: 1.5rem;
			margin-bottom: 0.9rem;
		}

		& > ul {
			margin: 0;
			padding: 0;
			list-style: none;

			& > li {
				break-inside: avoid;

				margin-bottom: 10px;

				& > header {
					display: flex;
					align-items: center;
					justify-content: space-between;

					margin-bottom: 7.5px;

					& > h4 {
						margin: 0;
					}

					& > div {
						display: flex;
						flex: 1;
						justify-content: space-around;

						& > div {
							border-radius: 100px;

							width: calc(100% - 40px);
							height: 3px;

							background-color: var(--foreground-sub-2);
						}
					}

					& > time {
						color: var(--foreground-sub);
						font-size: 20px;
						font-family: "Sofia Sans";
						font-weight: 500;
					}
				}

				& > ul {
					list-style: circle;
					padding-left: 40px;

					& > li {
						line-height: 1.35;

						margin-bottom: 5px;
					}
				}
			}
		}
	}
</style>
