<script>
	import ProfileImage from './ProfileImage.svelte';

	export let userName = '';
	export let userImg = '';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	import small_logo from '$lib/assets/images/small-logo.png';
</script>

<div class="menu-bar">
	<a href="/"><img src={small_logo} alt="corner-logo" class="logo" /></a>
	{#if userName != ''}
		<button class="menu-display-button" on:click={toggleMenu}>
			<ProfileImage src={userImg}/>
		</button>
	{:else}
		<div>
			<a href="/signin">Sign In</a>
			|
			<a href="/signup">Sign Up</a>
			|
			<a href="/leaderboard">Rank</a>
		</div>
	{/if}
</div>

{#if userName != ''}
	<overlay class:open={isMenuOpen}>
		<div class="side-menu">
			<button class="close-button" on:click={toggleMenu}>
				<div class="bar-1" />
				<div class="bar-2" />
			</button>
			<ul>
				<li>{userName}</li>
				<li><a href="/protected/home" on:click={toggleMenu}>Home</a></li>
				<li><a href="/protected/subjects" on:click={toggleMenu}>Subjects</a></li>
				<li><a href="/leaderboard" on:click={toggleMenu}>Rank</a></li>
				<form action="/signout" method="POST">
					<button class="form-button">Sign Out</button>
				</form>
			</ul>
		</div>
	</overlay>
{/if}

<style>
	/*Top menu bar*/
	.menu-bar {
		padding: 0px 40px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		border-bottom: 4px solid gray;
		font-size: 50px;
	}

	.logo {
		height: 90px;
		cursor: pointer;
	}
	.menu-display-button {
		background-color: transparent;
		margin-top: 0;
		border: 0;
		cursor: pointer;
	}

	/*Overlay side-menu*/
	overlay {
		display: none;
	}
	overlay.open {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		background-color: rgba(0, 0, 0, 0.7);
		animation: fadeIn 1s;
	}
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.side-menu {
		z-index: 100;
		position: absolute;
		right: 0;
		width: 45%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		animation-name: slideInLeft;
		animation-duration: 1s;
	}

	@keyframes slideInLeft {
		from {
			transform: translateX(300px);
		}
		to {
			transform: translateX(0);
		}
	}

	ul {
		list-style-type: none;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		gap: 3vh;

		margin-top: 30vh;
		margin-bottom: 4vh;

		font-size: 2rem;
		color: #ccbad3;
	}
	ul a {
		color: #818181;
	}
	@media (hover: hover) {
		ul a:hover {
			color: white;
			transition: 0.5s;
		}
	}
	/*Close Button in Menu*/
	.close-button {
		display: flex;
		height: 30px;
		width: 30px;

		background-color: #f4c606;
		border: 0;
		border-radius: 45%;

		align-items: center;

		position: absolute;
		left: 10%;
		top: 5%;

		cursor: pointer;
	}
	.close-button > div {
		height: 5px;
		width: 20px;

		background-color: #28180c;

		position: absolute;
	}
	.bar-1 {
		transform: rotateZ(45deg);
	}
	.bar-2 {
		transform: rotateZ(135deg);
	}
	@media (hover: hover) {
		.close-button:hover {
			transform: translateY(3px);
		}
	}
</style>
