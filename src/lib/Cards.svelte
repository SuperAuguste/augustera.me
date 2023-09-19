<script lang="ts">
	import Card, { type CardInfo } from "./Card.svelte";

	export let items: CardInfo[];
	export let large: boolean = false;
</script>

<div class="cards" class:large>
	{#each items as item}
		<Card info={item} />
	{/each}
</div>

<style lang="scss">
	.cards {
		display: grid;

		gap: 0.75rem;
		grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));

		&.large {
			grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
		}
	}
</style>
