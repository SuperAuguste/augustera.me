<script lang="ts" context="module">
	export interface CardLink {
		href: string;
		title: string;
	}

	export interface CardInfo {
		interactive?: boolean;
		highlighted?: boolean;
		arrowed?: boolean;

		thumbHref?: string;
		thumbAlt?: string;

		title?: string;
		content?: string;

		href?: string;
		links?: CardLink[];
	}
</script>

<script lang="ts">
	export let info: CardInfo;
</script>

<a
	href={info.href}
	class:card={true}
	class:interactive={info.interactive}
	class:highlighted={info.highlighted}
>
	{#if info.thumbHref}
		<img src={info.thumbHref} alt={info.thumbAlt} />
	{/if}

	{#if info.title || info.content}
		<div class="body">
			{#if info.title}
				<span class="title" class:arrowed={info.arrowed}
					>{info.title}</span
				>
			{/if}

			{#if info.content}
				<p class="content">{info.content}</p>
			{/if}
		</div>
	{/if}

	{#if info.links && info.links.length > 0}
		<div class="links">
			{#each info.links as link}
				<a href={link.href}>{link.title}</a>
			{/each}
		</div>
	{/if}
</a>

<style lang="scss">
	.card {
		display: flex;

		flex-direction: column;

		border: 1px solid var(--background-sub-2);
		border-radius: 0.5rem;

		color: var(--foreground);
		text-decoration: none;

		overflow: hidden;
		background-color: var(--background-sub);

		&.interactive {
			cursor: pointer;
			transition:
				0.2s background-color,
				0.2s border-color;

			&:hover {
				background-color: var(--background-sub-2);
			}
		}

		&.highlighted {
			color: var(--background);
			border-color: var(--highlight);
			background-color: var(--highlight);

			&.interactive:hover {
				border-color: var(--highlight-sub);
				background-color: var(--highlight-sub);
			}
		}
	}

	img {
		width: 100%;
		height: 12.5rem;

		object-fit: cover;
	}

	.body {
		padding: 1.15rem;

		flex-grow: 1;

		.title {
			font-size: 1.25em;
			font-weight: 700;
		}

		.content {
			margin-bottom: 0;
		}
	}

	.links {
		display: flex;

		flex-direction: row;

		gap: 1rem;

		padding: 1.15rem;
		padding-top: 0;
	}

	.arrowed {
		&::after {
			margin-left: 0.9rem;

			content: "🡒";
			font-size: 1em;
			font-weight: 700;
			font-family: "Inter";
		}
	}
</style>
