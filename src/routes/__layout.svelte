<script>
    import "../styles/index.scss";
    import Nav from "$lib/Nav.svelte";
</script>

<div>
    <Nav />
    <main>
        <slot />
    </main>
</div>

<style>
    main {
        margin-left: 4rem;

        padding: 4rem;

        color: white;
    }
</style>
