<script>
	import { page } from '$app/stores';  

	const links = [
		{ href: "/", title: "Home" },
		{ href: "/resume", title: "Resume" },
		{ href: "/projects", title: "Projects" },
		{ href: "/contact", title: "Contact" },
		{ href: "/hire-me", title: "Hire Me" },
	];
</script>

<div>
	<h1 class="brand"><a href="/">Auguste Rame</a></h1>

	<nav class="nav print_hide">
		{#each links as link}
			<a href={link.href} class:active={link.href == $page.url.pathname}>
				<span>{link.title}</span>
			</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.nav {
		display: flex;
		gap: 2rem;

		padding: 0.75rem 2.5rem;

		font-size: 1.075em;
		font-weight: 500;
		
		background-color: var(--background-sub-2);

		&>a.active {
			color: var(--highlight-sub);
			text-decoration-style: wavy;
		}
	}

	.brand {
		padding: 1rem 2.5rem;

		font-size: 2.25em;
		font-weight: 600;
		line-height: 1;
		letter-spacing: -0.03em;

		& > * {
			color: var(--foreground);
			text-decoration: none;
		}
	}
</style>
