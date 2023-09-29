<script>
	// import components
	import Timer from '$lib/components/Timer.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import Balloons from '$lib/components/Balloons.svelte';
	import PointBar from '$lib/components/PointBar.svelte';
	import Lives from '$lib/components/Lives.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import Choices from '$lib/components/Choices.svelte';
	import Button from '$lib/components/Button.svelte';
	import SubjectInfo from '$lib/components/SubjectInfo.svelte';
	import TextRow from '$lib/components/TextRow.svelte';

	// import audio files
	import wrongChoiceSound from '$lib/assets/audio/wrongChoice.mp3';
	import correctChoiceSound from '$lib/assets/audio/correctChoice.mp3';
	import twentySeconds from '$lib/assets/audio/20sec.mp3';
	import eightSeconds from '$lib/assets/audio/8sec.mp3';
	import applauseSound from '$lib/assets/audio/applauseSound.mp3';
	import gameOverSound from '$lib/assets/audio/gameOverSound.mp3';

	// import avatar
	import { avatarIframe } from '$lib/gameAssets.js';

	// import game logic functions
	import { calculateEarnedPoints } from '$lib/gameLogic.js';

	// extract data
	export let data;
	const { user, totalPoints, questions, subject, subjectColor, backgroundImage, level } = data;
	let { currentPoints } = data;
	const currentLevelNum = parseInt(level[level.length - 1]);
	const nextLevelNum = currentLevelNum + 1;
	let nextLevel;

	// Initialize game
	let points = 0;
	let earnedPoints = 0;
	let highestScore = currentPoints;
	let lives = 3;
	let index = 0;
	let gameOver = false;
	let isWon = false;
	let question = '';
	let choices = [];
	let message = '';
	let correctAnswer = '';
	let secondsRemaining = 30;
	let elapsedTime = 0;
	let paused = false;
	let randomQuestions;
	let isSaving = false;
	let timeOut = 0;
	let started = false;

	// Audio
	let wrongSoundAudio;
	let correctSoundAudio;
	let eightSecAudio;
	let twentySecAudio;
	let applauseAudio;
	let gameOverAudio;

	const maxQuestions = questions.length;

	// Game starts here
	const startGame = () => {
		started = true;
		randomQuestions = questions.sort(() => Math.random() - 0.5);
		setNextQuestion();
	};

	// Set the timer & set next question and 4 choices
	const setNextQuestion = () => {
		secondsRemaining = 30;
		elapsedTime = 0;
		twentySecAudio.play();
		const interval = setInterval(() => {
			if (paused) {
				paused = false;
				clearInterval(interval);
			} else {
				if (secondsRemaining == 0) {
					clearInterval(interval);
					lives--;
					if (index + 1 < maxQuestions && lives > 0) {
						index++;
						setNextQuestion();
					} else setGameOver();
				} else {
					elapsedTime++;
					secondsRemaining--;
				}

				if (secondsRemaining < 9) eightSecAudio.play();
			}
		}, 1000);
		question = randomQuestions[index].question;
		choices = randomQuestions[index].choices.sort(() => Math.random() - 0.5);
		correctAnswer = randomQuestions[index].answer;
	};

	// Set game over. Determine whether player has won or lost
	const setGameOver = () => {
		clearPage();
		if (points > highestScore) highestScore = points;
		timeOut = 2000;
		if (points >= 100) {
			isWon = true;
			timeOut = 10000;
			nextLevel = 'level' + nextLevelNum.toString();
			applauseAudio.play();
			message = 'Congratulations. You win!!!';
		} else if (lives <= 0) {
			gameOverAudio.play();
			message = 'Out of lives. You lose :(';
		} else {
			gameOverAudio.play();
			message = 'Out of questions. You lose :(';
		}

		setTimeout(() => {
			if (highestScore > currentPoints) {
				message = 'Updating Score...';
				isSaving = true;
				updateUserStats().then((response) => {
					isSaving = false;
					if ('error' in response) {
						message = response['error']
					}
					else {
						currentPoints = highestScore;
						message = response['success']
					}
				});
			}
			if (nextLevel == 'level6') message = '!!!All levels have been cleared!!!';
			gameOver = true;
		}, timeOut);
	};

	// Clear the previous question and choices
	const clearPage = () => {
		question = '';
		choices = [];
		correctAnswer = '';
		nextLevel = '';
	};

	// Compare selected choice with the correct answer
	const checkChoice = (e) => {
		// pause the timer
		paused = true;
		twentySecAudio.pause();
		twentySecAudio.currentTime = 0;
		eightSecAudio.pause();
		eightSecAudio.currentTime = 0;

		const selectedChoice = e.target;
		if (selectedChoice.innerText == correctAnswer) {
			correctSoundAudio.play();
			earnedPoints = calculateEarnedPoints(elapsedTime)
			setTimeout(() => {
				points += earnedPoints;
				if (points > 100) points = 100;
				earnedPoints = 0;
			}, 500);
		} else {
			lives--;
			wrongSoundAudio.play();
		}
		clearPage();
		setTimeout(() => {
			if (index < maxQuestions - 1 && lives > 0 && points < 100) {
				index++;
				setNextQuestion();
			} else setGameOver();
		}, 500);
	};

	// Restart game
	const restartGame = () => {
		message = '';
		lives = 3;
		index = 0;
		message = '';
		points = 0;
		gameOver = false;
		isWon = false;
		randomQuestions = questions.sort(() => Math.random() - 0.5);
		applauseAudio.pause();
		applauseAudio.currentTime = 0;
		gameOverAudio.pause();
		gameOverAudio.currentTime = 0;
		setNextQuestion();
	};

	// Redirect player to the next level
	const toNextLevel = () => {
		window.location.replace(`/protected/subjects/${subject}/${nextLevel}`);
	};

	// Call API to update player's stats
	const updateUserStats = async () => {
		const username = user.username;
		const response = await fetch('/protected/api/updateUserStats', {
			method: 'PUT',
			body: JSON.stringify({ subject, level, nextLevel, highestScore, username }),
			headers: {
				'content-type': 'application/json'
			}
		});
		return await response.json();
	};
</script>

<audio src={wrongChoiceSound} bind:this={wrongSoundAudio} />
<audio src={correctChoiceSound} bind:this={correctSoundAudio} />
<audio src={twentySeconds} bind:this={twentySecAudio} />
<audio src={eightSeconds} bind:this={eightSecAudio} />
<audio src={gameOverSound} bind:this={gameOverAudio} />
<audio src={applauseSound} bind:this={applauseAudio} />

<div class="page-ctn" style="background-image: url({backgroundImage});">
	<div id="top-ctn">
		<div id="top-left-ctn">
			<SubjectInfo {subject} {currentLevelNum} {subjectColor} />
			<div id="reward-ctn">
				<span>Reward</span>
				<Avatar avatar={avatarIframe[subject][level]}/>
			</div>
		</div>

		<div id="top-center-ctn">
			<Timer {secondsRemaining} />
		</div>
		
		<div id="top-right-ctn">
			<PointBar {points} {totalPoints} highestScore={currentPoints} {earnedPoints} {subjectColor} />
			<Lives {lives} />
		</div>
	</div>

	
	<TextRow text={message} color={subjectColor} />
	<TextRow text={question} color={subjectColor} />
	<Choices {choices} {checkChoice} />

	<div style="text-align: center;">
		{#if !started}
			<Button buttonName="Start" buttonAction={startGame} />
		{/if}
		{#if gameOver}
			<Button buttonName="Restart" buttonAction={restartGame} />
			{#if isWon && nextLevel != 'level6' && currentPoints == totalPoints}
				<Button buttonName="Next Level" buttonAction={toNextLevel} />
			{/if}
		{/if}
	</div>

	<Spinner {isSaving} />
	<Balloons {isWon} />
</div>

<style>
	.page-ctn {
		flex-direction: column;
		justify-content: start;
		height: 100vh;
	}

	#top-ctn {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}

	#top-left-ctn {
		padding-top: 10px;
		display: flex;
		flex-direction: column;
        justify-content: start;
		align-items: center;
	}

	#reward-ctn {
		margin-top: 20px;
		margin-bottom: 50px;
		width: 50%;
		border-radius: 50%;
		font-size: 25px;
		padding-top: 10px;
		font-weight: bold;
		text-align: center;
		background-color: white;
	}

	#top-center-ctn {
		display: flex;
        justify-content: center;
        align-items: end;
		margin-bottom: 100px;
	}

	#top-right-ctn {
		padding-right: 30px;
	}

	@media (min-width: 801px) and (max-width: 1200px) {
		#top-right-ctn {
			padding-right: 10px;
		}
	}

	@media (max-width: 800px) {
		#top-right-ctn {
			padding-right: 5px;
		}

		#top-left-ctn {
			padding-left: 5px;
		}
	}
</style>
