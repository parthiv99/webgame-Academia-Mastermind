<script>
	export let buttonName = '';
	export let buttonAction = () => {};
	import hoverSound from '$lib/assets/audio/hoverSound.mp3';

	let hoverAudio;

	const playSound = () => {
		hoverAudio.play();
	};
</script>

<audio src={hoverSound} bind:this={hoverAudio} />
<button class="btn" on:click={buttonAction} on:mouseover={playSound} on:focus={playSound}>{buttonName}</button>

<style>
	.btn {
		/* margin-top: 50px; */
		margin-right: 20px;
		width: 250px;
		padding: 10px 20px;
		font-size: 30px;
		font-weight: 700;
		background-color: rgb(5, 143, 5);
		border: 2px solid lightgreen;
		border-radius: 30px;
		color: aliceblue;
		cursor: pointer;
	}

	.btn:hover {
		background-color: rgb(2, 105, 2);
	}

</style>
