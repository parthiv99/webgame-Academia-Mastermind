<script>
	export let choices;
	export let checkChoice = () => {};
	import { fade } from 'svelte/transition';
	import hoverSound from '$lib/assets/audio/hoverSound.mp3';

	let hoverAudio;

	const applyEffects = () => {
		hoverAudio.play();
	};
</script>

<audio src={hoverSound} bind:this={hoverAudio} />
<div id="choice-ctn">
	{#each choices as choice}
		<button
			class="choice"
			on:click={checkChoice}
			on:mouseover={applyEffects}
			on:focus={applyEffects}
			transition:fade
		>
			<span>{choice}</span>
		</button>
	{/each}
</div>

<style>
	#choice-ctn {
		padding: 0;
		margin: 30px 300px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 30px;
		column-gap: 80px;
	}

	.choice {
		font-size: 30px;
		font-weight: bold;
		color: black;
		background-color: lightgray;
		padding: 10px;
		border-radius: 35px;
		border: none;
		text-align: center;
		cursor: pointer;
	}

	.choice:hover {
		background-color: gold;
	}

	@media (min-width: 801px) and (max-width: 1200px) {
		#choice-ctn {
			margin: 30px 30px;
		}
	}

	@media (max-width: 800px) {
		#choice-ctn {
			margin: 30px 10px;
		}

		.choice {
			font-size: 20px;
		}
	}
</style>
