<script>
    /** @type {import('./$types').LayoutData} */
    export let data;

    import { page } from '$app/stores';
    import Overlaymenu from "$lib/components/overlaymenu.svelte";

</script>


{#if $page.error?.message}
    <div></div>
{:else}
    <Overlaymenu 
    userName={data.user?.username ?? ""}
    userImg={data.user?.profile ?? ""}
    /> 
{/if}

<main>
    <slot />
</main>


