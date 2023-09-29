<!-- source: https://codepen.io/Jemimaabu/pen/vYEYdOy -->
<script>
	export let isWon = false;
</script>

{#if isWon}
	<div id="balloon-container">
		<div class="balloon ninth" style="" />
		<div class="balloon seventh" style="" />
		<div class="balloon first" style="" />
		<div class="balloon second" style="" />
		<div class="balloon third" style="" />
		<div class="balloon forth" style="" />
		<div class="balloon fifth" style="" />
		<div class="balloon sixth" style="" />
		<div class="balloon eigth" style="" />
		<div class="balloon tenth" style="" />
	</div>
{/if}

<style>
	#balloon-container {
		margin-top: 300px;
		margin-left: 200px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		animation: float 8s ease-in infinite;
	}

	.balloon {
		height: 150px;
		width: 120px;
		border-radius: 75% 75% 70% 70%;
		position: relative;
		opacity: 0.8;
	}

	.first {
		top: 120px;
		left: 120px;
		transform: rotate(-30deg);
		background-color: red;
		color: red;
		box-shadow: inset -7px -3px 10px red;
	}

	.second {
		right: -30px;
		transform: rotate(-10deg);
		background-color: purple;
		color: purple;
		box-shadow: inset -7px -3px 10px purple;
	}

	.third {
		top: 20px;
		transform: rotate(20deg);
		background-color: royalblue;
		color: royalblue;
		box-shadow: inset -7px -3px 10px royalblue;
	}

	.forth {
		right: 180px;
		top: 70px;
		background-color: gold;
		color: gold;
		box-shadow: inset -7px -3px 10px gold;
	}

	.fifth {
		top: 120px;
		right: 220px;
		transform: rotate(30deg);
		background-color: orangered;
		color: orangered;
		box-shadow: inset -7px -3px 10px orangered;
	}

	.sixth {
		transform: rotate(30deg);
		right: 280px;
		top: 50px;
		background-color: greenyellow;
		color: greenyellow;
		box-shadow: inset -7px -3px 10px greenyellow;
	}

	.seventh {
		transform: rotate(-30deg);
		top: 50px;
		left: 180px;
		background-color: aqua;
		color: aqua;
		box-shadow: inset -7px -3px 10px aqua;
	}

	.eigth {
		transform: rotate(45deg);
		right: 350px;
		top: 100px;
		background-color: chocolate;
		color: chocolate;
		box-shadow: inset -7px -3px 10px chocolate;
	}

	.ninth {
		transform: rotate(-45deg);
		left: 250px;
		top: 100px;
		background-color: grey;
		color: grey;
		box-shadow: inset -7px -3px 10px grey;
	}

	.tenth {
		right: 650px;
		top: 150px;
		background-color: black;
		color: black;
		box-shadow: inset -7px -3px 10px black;
	}

	.balloon:before {
		content: '';
		height: 100px;
		width: 0.5px;
		padding: 0.5px;
		background-color: lightyellow;
		display: block;
		position: absolute;
		top: 125px;
		left: 0;
		right: 0;
		margin: auto;
	}

	.balloon:after {
		content: '▲';
		text-align: center;
		display: block;
		position: absolute;
		color: inherit;
		top: 120px;
		left: 0;
		right: 0;
		margin: auto;
	}

	@keyframes float {
		from {
			transform: translateY(10vh);
		}
		to {
			transform: translateY(-150vh);
		}
	}
</style>
