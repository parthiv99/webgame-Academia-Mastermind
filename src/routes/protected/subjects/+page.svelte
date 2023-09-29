<script>
	import { subjectStlyes, pageBackGround } from "$lib/gameAssets.js";
	import { SUBJECTS } from "$lib/gameLogic.js";
</script>

<div class="page-ctn" style="background-image: url({pageBackGround.img});">
	<div class="subject-title">Choose a Subject</div>
	<div class="doors-ctn">
		{#each SUBJECTS as subject}
		<div class="wrapper">
			<a href="/protected/subjects/{subject}">
				<img src={subjectStlyes[subject].icon} alt="{subject} icon"/>
			</a>
			<div id="left-door" class="door" style="background-color: {subjectStlyes[subject].color}">
				<div class="shape" />
				<div class="shape" />
				<div id="left-knob" class="knob" />
			</div>
			<div id="right-door" class="door" style="background-color: {subjectStlyes[subject].color}">
				<div class="shape" />
				<div class="shape" />
				<div id="right-knob" class="knob" />
			</div>
		</div>
		{/each}
	</div>
</div>

<style>
	/* door style source: https://codepen.io/Coding-Star/pen/WNpeKEX */
	.page-ctn {
		flex-direction: column;
		justify-content: space-evenly;
		position: relative;
	}

	.subject-title {
		position: absolute;
		text-align: center;
		top: 160px;
		left: 50px;
		right: 50px;
	}

	.doors-ctn {
		margin-top: 80px;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	.wrapper {
		height: 350px;
		width: 300px;
		position: relative;
		/* 3D */
		perspective: 1000px;
		background-color: gainsboro;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.door {
		/* background-color: #61412D; */
		height: 100%;
		width: 50%;
		position: absolute;
		/* inner layout */
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	#left-door {
		top: 0;
		left: 0;
		border-right: 1px solid black;
		/* transition */
		transform-origin: left;
		transition: transform 3s;
	}

	#right-door {
		top: 0;
		right: 0;
		border-left: 1px solid black;
		/* transition */
		transform-origin: right;
		transition: transform 3s;
	}

	.shape {
		border: 4px solid black;
		width: 100px;
		height: 130px;
	}

	.knob {
		width: 10px;
		height: 50px;
		background-color: #d7dade;
		position: absolute;
	}

	#left-knob {
		top: 50%;
		right: 10px;
	}

	#right-knob {
		top: 50%;
		left: 10px;
	}

	/* Door swing effect */
	.wrapper:hover #left-door {
		transform: rotateY(-140deg);
	}

	.wrapper:hover #right-door {
		transform: rotateY(140deg);
	}

	@media (min-width: 601px) and (max-width: 1200px) {
		.page-ctn {
			width: 100%;
		}

		.wrapper {
			width: 200px;
			height: 250px;
		}

		.shape {
			width: 70px;
			height: 100px;
		}
	}

	@media (max-width: 600px) {
		.doors-ctn {
			flex-direction: column;
			align-items: center;
		}

		.wrapper {
			margin-top: 50px;
			width: 250px;
			height: 300px;
		}

		.page-ctn {
			height: unset;
			justify-content: start;
		}
	}
</style>
