<script>
    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import { subjectStlyes } from '$lib/gameAssets.js';
    import { questionPageImages } from '$lib/gameAssets.js';
    const star = questionPageImages.star

    export let points = 0;
    export let subject = "";
    export let maxPoints = 100;

    const percent = (points / maxPoints) * 100
    
	const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});
	$: progress.set(percent)
   
</script>


<div class="point-row">
    <img src={subjectStlyes[subject].icon} alt={subject} class="subject-img">
    <span class="total-ctn">
        <span class="earned-points-ctn" style="width: {$progress}%;">
            {#if points > 0}
                <span class="points-text">{points}</span>
            {/if}
        </span>
    </span>
    <span class="points-text">{maxPoints}</span>
    <img src={star} alt='star' class="star-img">
</div>

    
<style>

    .subject-img {
        height: 50px;
    }

    .star-img {
        height: 35px;
        margin-left: 5px;
    }

    .point-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0px 5px 10px #888888;
        background-color: whitesmoke;
        border: 2px solid whitesmoke;
    }

    .total-ctn {
        display: flex;
        justify-content: start;
        height: 30px;
        /* max-width: 400px; */
        width: 80%;
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
        text-align: center;
        background-color: gold;
    }

    .points-text {
        font-size: 25px;
        font-weight: bold;
    }

    @media (min-width: 801px) and (max-width: 1200px) {
        .total-ctn {
            width: 100%;
            margin: 0;
            margin-left: 5px;
        }

        .points-text {
            font-size: 18px;
        }

        .earned-points-ctn, .total-ctn {
            height: 25px;
        }

    }

    @media (max-width: 800px) {
    
        .points-text {
            font-size: 13px;
        }

        .total-ctn {
            width: 100%;
            margin: 0px 5px;
        }

        .earned-points-ctn, .total-ctn {
            height: 20px;
        }

    }
</style>