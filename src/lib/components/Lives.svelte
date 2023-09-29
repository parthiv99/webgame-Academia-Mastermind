<script>
	export let lives = 3;

	import heart from '$lib/assets/images/heart.png';
	import { fade } from 'svelte/transition';
</script>

<div id="lives-ctn">
	<span>LIVES:</span>
	<div id="lives">
		{#each { length: lives } as live}
			<img src={heart} alt="lives" out:fade />
		{/each}
	</div>
</div>

<style>
	#lives-ctn {
		padding: 5px 10px;
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		font-weight: 900;
		font-size: 30px;
		background-color: wheat;
		border: 2px solid white;
		color: rgb(194, 3, 41);
	}

	#lives {
		display: flex;
	}

	#lives img {
		max-width: 40px;
		width: 100%;
		height: auto;
		padding-right: 20px;
	}

	@media (min-width: 801px) and (max-width: 1200px) {
		#lives-ctn {
			font-size: 22px;
		}

		#lives {
			margin-left: 10px;
		}

		#lives img {
			padding-right: 10px;
		}
	}

	@media (max-width: 800px) {
		#lives-ctn {
			font-size: 14px;
		}

		#lives img {
			width: 25px;
			padding-left: 3px;
			padding-right: 0px;
		}
	}
</style>
