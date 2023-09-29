<script>
    export let text = "";
    export let color = "black";
    import { fade } from 'svelte/transition';
</script>

{#if text != ""}
    <div class="text-ctn" transition:fade>
        <p style="background-color: {color};">{text}</p>
    </div>
{/if}

<style>
    .text-ctn {
        margin: 0px 60px;
        display: flex;
        justify-content: center;
		font-size: 35px;
		font-weight: 700;
	}

    .text-ctn p {
        margin: 0;
        color: white;
        height: auto;
        width: fit-content;
        border-radius: 20px;
        padding: 20px 20px;
        border: 2px solid white;
    }

    @media (max-width: 800px) {
        .text-ctn {
            font-size: 20px;
        }
    }

</style>