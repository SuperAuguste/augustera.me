<script>
	let slideoutVisible = false;

	const links = [
		{ href: "/", title: "Home" },
		{ href: "/resume/", title: "Resume" },
		{ href: "/projects/", title: "Projects" },
	];
</script>

<div>
	<nav class="nav">
		<h1 class="brand"><a href="/">Auguste Rame</a></h1>

		<div
			class="burger"
			on:click={() => (slideoutVisible = !slideoutVisible)}
			on:keypress={(event) =>
				event.key === "Enter"
					? (slideoutVisible = !slideoutVisible)
					: void {}}
			role="button"
			tabindex="0"
		>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</nav>

	<div class="slideout" class:shown={slideoutVisible}>
		{#each links as link}
			<a href={link.href} on:click={() => (slideoutVisible = false)}
				><span>{link.title}</span></a
			>
		{/each}
	</div>
</div>

<style lang="scss">
	.nav {
		padding: 1.8rem 2.5rem;

		display: flex;

		align-items: center;
		justify-content: space-between;
	}

	.brand {
		margin: 0;

		font-size: 2.25em;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -1.5px;

		& > * {
			color: var(--foreground);
			text-decoration: none;
		}
	}

	.burger {
		position: fixed;

		right: 40px;

		display: flex;

		flex-direction: column;

		gap: 5px;

		cursor: pointer;
		z-index: 100;

		& > * {
			width: 6.25rem;
			height: 0.1875rem;

			background-color: var(--foreground);
		}
	}

	.slideout {
		position: fixed;

		display: block;

		top: 0;
		right: 0;

		padding-top: 96px;

		width: 400px;
		height: 100%;

		transform: translate(500px, 0);
		transition: 0.2s transform;
		pointer-events: none;
		background-color: var(--background-sub);

		&.shown {
			transform: translate(0, 0);
			pointer-events: all;
		}

		& > * {
			display: flex;

			align-items: center;
			justify-content: right;

			padding: 30px 40px;

			width: 100%;

			color: var(--foreground);
			font-size: 1.625em;
			font-weight: 700;
			text-transform: uppercase;
			text-decoration: none;

			cursor: pointer;
			transition: 0.2s background-color;
			background-color: var(--background-sub-2);

			&:hover {
				background-color: var(--highlight-sub);
			}
		}
	}
</style>
