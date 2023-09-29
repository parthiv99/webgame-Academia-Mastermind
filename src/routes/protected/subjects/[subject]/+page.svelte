<script>
	export let data
	import { LEVELS } from "$lib/gameLogic.js"
	import { levelPageImages } from "$lib/gameAssets.js"
	const { subject, unlockedLevels } = data

	const lock = levelPageImages.lock
	const displayedSubject = subject.name[0].toUpperCase() + subject.name.slice(1).replace('_', ' ')

</script>

<div class="page-ctn" style="background-image: url({subject.backgroundImage});">
	<div class="subject-title" style="color: {subject.color}">{displayedSubject}</div>
	<div class="levels-grid">
		{#each LEVELS as level}
			{#if unlockedLevels.includes(level)}
				<a href="/protected/subjects/{subject.name}/{level}" class="level {level} unlocked-level" style="background-color: {subject.color}">
					{level.substring(0, 5) + " " + level.substring(5)}
				</a>
			{:else}
				<div class="level {level}" style="background-image: url({lock});"></div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.page-ctn {
		flex-direction: column;
		align-items: center;
	}

	.levels-grid {
		margin-top: 50px;
		display: grid;
		row-gap: 30px;
	}

	.level {
		background-position: center;
		background-repeat: no-repeat;
		background-size: 120px;
		background-color: rgba(0, 0, 0, 0.7);
		font-size: 30px;
		font-weight: 400;
		color: white;
		text-transform: capitalize;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.unlocked-level {
		background: unset;
	}

	.unlocked-level:hover {
		scale: 1.5;
		animation: spin 3s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.level1 {
		grid-column: 1/2;
		grid-row: 1/2;
	}

	.level2 {
		grid-column: 3/4;
		grid-row: 1/2;
	}

	.level3 {
		grid-column: 5/6;
		grid-row: 1/2;
	}

	.level4 {
		grid-column: 2/3;
		grid-row: 2/3;
	}

	.level5 {
		grid-column: 4/5;
		grid-row: 2/3;
	}

	@media (max-width: 850px) {
		.page-ctn {
			height: unset;
		}

		.levels-grid {
			display: flex;
			flex-direction: column;
			margin-top: 20px;
		}
	}
</style>
