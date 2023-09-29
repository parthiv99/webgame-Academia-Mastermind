<script>
	import { questionPageImages } from '$lib/gameAssets.js';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	export let points = 0;
	export let totalPoints = 0;
	export let highestScore = 0;
	export let earnedPoints = 0;
	export let subjectColor = 'gold';
	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});
	$: progress.set(points);
</script>

<div id="earned-points">
	{#if earnedPoints > 0}
		<span class="points-num" in:fade out:fly={{ duration: 1000, x: 50, y: 50 }}
			>+{earnedPoints}</span
		>
		<img src={questionPageImages.star} alt="star" in:fade out:fly={{ duration: 1000, x: 50, y: 50 }} />
	{/if}
</div>
<div id="highest-score">Highest Score: <span class="points-num">{highestScore}</span></div>
<div class="points-row">
	<img src={questionPageImages.star} alt="star" />
	<span class="total-points-ctn">
		<span class="earned-points-ctn" id="points-bar" style="width: {$progress}%;">
			{#if points > 0}
				<span class="points-text" transition:fade={{ duration: 1000 }}>{points}</span>
			{/if}
		</span>
	</span>
	<span class="points-text" style="color: {subjectColor}">{totalPoints}</span>
</div>

<style>
	#earned-points {
		height: 50px;
		display: flex;
		align-items: center;
	}

	#highest-score {
		font-size: 35px;
		font-weight: 600;
		color: whitesmoke;
	}

	.points-num {
		margin-left: 10px;
		font-size: 40px;
		font-weight: 900;
		color: gold;
	}

	img {
		height: 50px;
	}

	.points-row {
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: whitesmoke;
		border: 2px solid whitesmoke;
	}

	.total-points-ctn {
		display: flex;
		justify-content: start;
		height: 30px;
		max-width: 400px;
		width: 70%;
		margin-left: 10px;
		margin-right: 10px;
		border-radius: 20px;
		background-color: lightslategrey;
		border: 2px solid lightgray;
	}

	.earned-points-ctn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		border-radius: 20px;
		background-color: gold;
	}

	.points-text {
		font-size: x-large;
		font-weight: bold;
	}

	@media (min-width: 801px) and (max-width: 1200px) {
		.total-points-ctn {
			width: 100%;
			margin: 0;
			margin-left: 5px;
		}

		.points-text,
		.points-num {
			font-size: 30px;
		}

		.earned-points-ctn,
		.total-points-ctn {
			height: 25px;
		}

		img {
			height: 30px;
		}

		#highest-score {
			font-size: 25px;
		}
	}

	@media (max-width: 800px) {
		img {
			height: 20px;
		}

		.points-text,
		#highest-score {
			font-size: 15px;
		}

		.total-points-ctn {
			width: 100%;
			margin: 0px 5px;
		}

		.earned-points-ctn,
		.total-points-ctn {
			height: 20px;
		}

		#highest-score span,
		.points-num {
			font-size: 20px;
		}
	}
</style>
