<script>
	export let data;
	const { user, userStats, maxPoints }= data;

	import { SUBJECTS } from '$lib/gameLogic.js';
	import { subjectStlyes, pageBackGround } from '$lib/gameAssets.js';
	import PointsProgress from '$lib/components/PointsProgress.svelte';
	import ProfileImage from '$lib/components/ProfileImage.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let index = 0;
	let edited = false;
	let msg = '';
	let editButton;
	let nameButton;
	let profileButton;
	let nameInput;
	let newName;
	let currentProfile = user.profile;
	let newProfileSrc;

	// Max image size is 2Mbs
	const MAX_SIZE = 2 * 1000 * 1000
	
	const editUserInfo = () => {
		editButton.innerText = editButton.innerText == 'Edit' ? 'Cancel' : 'Edit'
		edited = !edited;
		if (newProfileSrc && newProfileSrc != user.profile) currentProfile = user.profile
	};

	const checkName = () => {
		nameButton.disabled = true
		newName = nameInput.value.toString().trim();
		const validName = /^[a-zA-Z\s]+$/;

		// Length check
		if (newName.length > 20 || newName.length < 1) {
			msg = 'Name must be between 1 and 20 characters!'
		}
		
		// Alphabetical character only check
		else if (!newName.match(validName)) {
			msg = 'Name can only contain alphabetical characters!'
		} 
		// Same name check
		else if (newName === user.name) {
			msg = 'New name is the same as the current name!'
		} 
		// Name is valid
		else {
			msg = ''
			nameButton.disabled = false
		}

		setTimeout(() => {
			msg = ''
		}, 2000)
	};

	const updateName = async () => {
		const username = user.username
		const response = await fetch('/protected/api/updateUserName', {
		method: 'PUT',
		body: JSON.stringify({ username, newName }),
		headers: {
			'content-type': 'application/json'
		}
		});
		const responseMsg = await response.json();
		if (responseMsg == 'success') {
			msg = 'Change name successfully'
			user.name = newName
		}
		else msg = responseMsg.toString()
		editUserInfo()
		setTimeout(() => {
			msg = ''
		}, 3000)
	};

	const onFileSelected = (e) => {
  		let image = e.target.files[0];
		// check img size
		if (image.size > MAX_SIZE) {
			msg = 'Max acceptable image size is 2Mbs'
			profileButton.disabled = true
		}
		else {
			let reader = new FileReader();
        	reader.readAsDataURL(image);
        	reader.onload = e => {
				newProfileSrc = e.target.result.toString()
        		currentProfile = newProfileSrc
			}
			msg = ''
			profileButton.disabled = false
    	};

		setTimeout(() => {
			msg = ''
		}, 2000)
	}

	const updateProfile = async () => {
		const username = user.username
		const response = await fetch('/protected/api/updateUserProfile', {
		method: 'PUT',
		body: JSON.stringify({ username, newProfileSrc}),
		headers: {
		'content-type': 'application/json'
		}
		});
		const responseMsg = await response.json();
		if (responseMsg == 'success') {
			msg = 'Change profile successfully'
			user.profile = newProfileSrc
		}
		else 
			msg = responseMsg.toString()

		editUserInfo()
		setTimeout(() => {
			msg = ''
			window.location.replace('/protected/home')
		}, 3000)
	};

	const decreaseIxdex = () => {
		if (index > 0)	index--
	};

	const increaseIndex = () => {
		if (index < user.avatar.length - 1) index++
	};
</script>

<div class="page-ctn" style="background-image: url({pageBackGround.img});">
	<div class="page-grid">
		<div class="user-info">
			<div class="box-title">Profile</div>

			{#if msg != ''}
				<div transition:fade class="msg-ctn">{msg}</div>
			{/if}

			<div class="box-field">Username: {user.username}</div>

			{#if edited}
			<div class="update-info">
				<label for="name"></label>
				<input type="text" id="name" name="name" placeholder="Enter new name" on:keydown={checkName} on:keyup={checkName} bind:this={nameInput}>
				<button type="submit" class="form-button" on:click={updateName} disabled bind:this={nameButton}>Change name</button>
			</div>
			{:else}
				<div class="box-field">Name: {user.name}</div>
			{/if}

			<ProfileImage src={currentProfile} width="200px" height="200px" />

			{#if edited}
					<div class="update-info">
						<label for="newProfile"></label>
						<input type="file" name="newProfile" id="newProfile" accept=".jpg,.png,.jpeg" on:change={(e)=>onFileSelected(e)}>
						<button class="form-button" on:click={updateProfile} disabled bind:this={profileButton}>Change profile</button>
					</div>	
			{/if}
				
			<button class="form-button" type="button" on:click={editUserInfo} bind:this={editButton}>Edit</button>
		
		</div>
		<div class="points">
			<div class="box-title">Progress</div>
			{#each SUBJECTS as subject, i}
				<PointsProgress points={userStats[i].points} {subject} {maxPoints}  />
			{/each}
		</div>

		<div class="stack-level">
			<div class="box-title">Pick up where you left off</div>
			<div>
				{#each SUBJECTS as subject, i}
					<div class="subject-row" >
						<div class="subject-ctn">
							<img src={subjectStlyes[subject].icon} alt={subject} />
							<span style="color: {subjectStlyes[subject].color}">{subject.replace("_", " ")}</span>
						</div>
						<div class="level-ctn">
							<a href="/protected/subjects/{subject}/{userStats[i].level}">{userStats[i].level}</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
		<div class="avatar-display">
			<div class="box-title">Reward Collection</div>
			{#if user.avatar.length > 0}
				<Avatar avatar={user.avatar[index]} />
				<div class="arrow-ctn">
					<button class="arrow" on:click={decreaseIxdex}>
						<Icon icon="material-symbols:arrow-circle-left-rounded" width="100%" height="100%"/>
					</button>
					<button class="arrow" on:click={increaseIndex} >
						<Icon icon="material-symbols:arrow-circle-right-rounded" width="100%" height="100%"/>
					</button>	 
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	
	.page-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1.5fr 1fr;
		column-gap: 60px;
		row-gap: 20px;
		/* grid-auto-rows: minmax(100px, auto); */
		padding: 4%;
	}
	.user-info {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: column;
		grid-column: 1/2;
		grid-row: 1/6;
		background-color: rgb(170, 174, 210);
		border: 4px solid white;
		box-shadow: 5px 10px 5px #888888;
	}
	.points {
		grid-column: 2;
		grid-row: 1/3;
		background-color: rgb(170, 174, 210);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		border: 4px solid white;
		box-shadow: 5px 10px 5px #888888;
	}
	.stack-level {
		grid-column: 2;
		grid-row: 3/6;
		background-color: rgb(170, 174, 210);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		border: 4px solid white;
		box-shadow: 5px 10px 5px #888888;
	}

	.stack-level img {
		height: 40px;
	}

	.subject-row {
		margin-top: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		text-align: center;
		font-size: 30px;
		font-weight: bold;
	}

	.subject-ctn {
		text-transform: capitalize;
		margin-left: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
	}

	.level-ctn {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
	}

	.avatar-display {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		grid-column: 3;
		grid-row: 1/6;
		background-color: rgb(170, 174, 210);
		border: 4px solid white;
		box-shadow: 5px 10px 5px #888888;
	}

	.arrow-ctn {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.arrow {
		width: 70px;
		height: 70px;
		cursor: pointer;
		border: none;
		background-color: rgb(170, 174, 210);
	}


	.box-title {
		text-align: center;
		font-weight: 900;
		font-size: 35px;
		color: #28180c;
	}

	.box-field {
		/* margin-top: 50px; */
		font-size: 30px;
	}

	.update-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 80%;
		justify-content: space-around;
	}

	.update-info input {
		font-size: 24px;
		border-radius: 10px;
		border: none;
		padding: 5px 5px;
		margin-right: 20px;
	}

	.update-info input:focus {
		border-bottom: 4px solid #28180c;
	}

	.msg-ctn {
		color: crimson;
		border: 2px solid gray;
		padding: 2px 2px;
		background-color: lightgray;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;
		font-size: 26px;
		font-style: italic;
	}

	.form-button {
		margin-top: 0px;
	}

	@media (min-width: 801px) and (max-width: 1200px) {
		.subject-row {
			font-size: 22px;
		}

		.box-title {
			font-size: 28px;
		}

		.subject-ctn {
			margin-left: 5px;
		}

		.level-ctn {
			margin-right: 5px;
		}

		.box-field {
			font-size: 22px;
		}

		.page-grid {
			column-gap: 10px;
		}
	}

	@media (max-width: 800px) {

		.page-grid {
			grid-template-columns: 1fr 1fr;
			column-gap: 20px;
			row-gap: 30px;
		}

		.user-info {
			grid-column: 1/2;
			grid-row: 1/4;
		}

		.points {
			grid-column: 1/2;
			grid-row: 4/6;
		}

		.stack-level {
			grid-column: 2/4;
			grid-row: 1/4;
		}

		.avatar-display {
			grid-column: 2/4;
			grid-row: 4/6;
		}

		.box-title {
			font-size: 26px;
		}

		.subject-row {
			font-size: 22px;
		}

		.subject-ctn {
			margin-left: 0px;
		}

		.level-ctn {
			margin-right: 5px;
		}

		.box-field {
			font-size: large;
		}

		.stack-level img {
			height: 30px;
		}
	}
</style>
