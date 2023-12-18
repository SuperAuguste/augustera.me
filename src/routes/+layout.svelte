<script>
	import Footer from "$lib/Footer.svelte";
	import Nav from "$lib/Nav.svelte";
	import ThemeSelector from "$lib/ThemeSelector.svelte";
</script>

<div class="wrapper">
	<Nav />

	<main>
		<slot />
	</main>

	<Footer />

	<ThemeSelector />
</div>

<style lang="scss">
	@import url("../lib/style/reset.scss");
	@import url("https://rsms.me/inter/inter.css");
	@import url("https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@500..700&display=swap");

	main {
		padding: 1.25rem 2.5rem;
		padding-top: 0;
		flex: 1 1 0;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	:global {
		* {
			box-sizing: border-box;

			&:focus-visible {
				outline: 3px solid var(--highlight);
			}
		}

		:root {
			font-size: 16px;
			font-family: "Sofia Sans";
		}

		@media only screen and (max-width: 800px) {
			:root {
				font-size: 14px;
			}
		}

		@media only screen and (min-width: 1600px) {
			:root {
				font-size: 18px;
			}
		}

		html,
		body {
			margin: 0;
			padding: 0;

			color: var(--foreground);
			background-color: var(--background);

			min-height: 100vh;
		}

		p,
		li {
			font-size: 1em;
			font-family: "Inter";
			line-height: 120%;
			letter-spacing: -0.011em;
		}

		p {
			margin-top: 1.5rem;
			margin-bottom: 1.5rem;
		}

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: "Sofia Sans";
		}

		h2 {
			font-size: 2em;
		}

		h3 {
			font-size: 1.5em;
			font-weight: 700;
		}

		h4 {
			font-size: 1.25em;
			font-weight: 600;
		}

		a {
			color: var(--highlight);
		}

		i {
			font-style: italic;
		}

		u {
			text-decoration: underline;
		}

		code {
			font-family: 'Courier New', Courier, monospace;
		}

		@mixin light {
			color-scheme: light;

			--foreground: hsl(0, 0%, 10%);
			--background: hsl(0, 0%, 90%);
			--highlight: hsl(160, 90%, 25%);

			--foreground-sub: hsl(0, 0%, 20%);
			--foreground-sub-2: hsl(0, 0%, 60%);

			--background-sub: hsl(0, 0%, 85%);
			--background-sub-2: hsl(0, 0%, 78%);

			--highlight-sub: hsl(160, 90%, 50%);
			--highlight-sub-2: hsl(160, 90%, 20%);
		}

		@mixin dark {
			color-scheme: dark;

			--foreground: hsl(0, 0%, 90%);
			--background: hsl(0, 0%, 10%);
			--highlight: hsl(160, 50%, 50%);

			--foreground-sub: hsl(0, 0%, 80%);
			--foreground-sub-2: hsl(0, 0%, 40%);

			--background-sub: hsl(0, 0%, 15%);
			--background-sub-2: hsl(0, 0%, 20%);

			--highlight-sub: hsl(160, 50%, 30%);
			--highlight-sub-2: hsl(160, 50%, 70%);
		}

		@media (prefers-color-scheme: light) {
			:root {
				@include light;
			}
		}
		@media (prefers-color-scheme: dark) {
			:root {
				@include dark;
			}
		}

		.theme_override_light {
			@include light;
		}
		.theme_override_dark {
			@include dark;
		}

		@page {
			margin: 0;

			margin-top: 40px;
			margin-bottom: 40px;
		}

		@media print {
			:root {
				@include light;
				--background: white;
				font-size: 16px !important;

				.print_hide {
					display: none;
				}
			}

			#theme_switcher {
				display: none;
			}

			.footer {
				display: none;
			}
		}
	}
</style>
