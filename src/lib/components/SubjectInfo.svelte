<script>
    export let subject = "";
    export let currentLevelNum = 0;
	export let subjectColor = "#28180c";
    const displayedSubject = subject.toUpperCase().replace('_', ' ');
</script>

<div id="subject-info">
    <p style="color: {subjectColor}">{displayedSubject}</p>
    <p>LEVEL<span class="level-num" style="color: {subjectColor}">{currentLevelNum}</span></p>
</div>

<style>
    #subject-info {
		width: 60%;
		text-align: center;
		font-size: 30px;
		font-weight: 900;
		border: 2px solid whitesmoke;
		border-radius: 20px;
		background-color: lightyellow;
	}

	#subject-info p {
		margin: 0;
	}

    .level-num {
		font-family: Arial, Helvetica, sans-serif;
		margin-left: 20px;
		font-size: 40px;
		text-decoration: underline;
		color: black;
	}

    @media (max-width: 800px) {
        #subject-info {
            font-size: 15px;
        }

        .level-num {
            font-size: 20px;
        }
    }
</style>