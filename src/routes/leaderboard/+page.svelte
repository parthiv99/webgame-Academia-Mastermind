<script>
    export let data

    const { playerList } = data;

    import { RankPageImages } from '$lib/gameAssets.js';
    import ProfileImage from '$lib/components/ProfileImage.svelte';

    const star = RankPageImages.star;
    const goldCup = RankPageImages.goldCup;
    const silverCup = RankPageImages.silverCup;
    const bronzeCup = RankPageImages.bronzeCup;
    const starBackGround = RankPageImages.starBackGround;

</script>


<div class="page-ctn" style="background-image: url({starBackGround});">
    <div class="subject-title">Leader board</div>
    <div class="board">

        <div class="row title">
            <div class="cell first">Rank</div>
            <div class="cell">Name</div>
            <div class="cell">Mathematics</div>
            <div class="cell">Science</div>
            <div class="cell">Social Science</div>
            <div class="cell last">Total</div>
        </div>

        
        {#each playerList as player}
            <div class="row">

                <div class="cell" >
                    {#if player.rank == 1}
                        <span><img src={goldCup} class="cup" alt="gold cup"></span>
                    {:else if player.rank == 2}
                        <span><img src={silverCup} class="cup" alt="silver cup"></span>
                    {:else if player.rank == 3}
                        <span><img src={bronzeCup} class="cup" alt="bronze cup"></span>
                    {:else}
                    <span>{player.rank}</span>
                    {/if}
                </div>
                
                
                <div class="cell player">
                    <span class="profile-img"><ProfileImage src={player.profile} /></span>
                    <span class="username">{player.name}</span>
                </div>
                <div class="cell">
                    <span>{player.mathPoints}</span>
                    <span><img src={star} alt="star" class="star-img"></span>
                </div>
                <div class="cell">
                    <span>{player.sciencePoints}</span>
                    <span><img src={star} alt="star" class="star-img"></span>
                </div>
                <div class="cell">
                    <span>{player.socialSciencePoints}</span>
                    <span><img src={star} alt="star" class="star-img"></span>
                </div>
                <div class="cell">
                    <span>{player.totalPoints}</span>
                    <span><img src={star} alt="star" class="star-img"></span>
                </div>
            </div>  
        {/each}
        
    </div>
</div>

<style>
    .page-ctn {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
    }

    .subject-title {
        font-size: 40px;
        border: 2px solid #071330;
        background-color: rgb(7, 19, 48);
        border-radius: 20px;
        padding: 10px 30px;
        position: absolute;
        top: 110px;
        color: #FFD700;
    }

    .board {
        margin: 60px 0px;
        width: 1200px;
        color: white;
        background-color: whitesmoke;
        border: 15px solid rgb(40, 24, 12);
        border-radius: 10px;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-transform: capitalize;
        font-size: 25px;
        margin: 25px 20px;
        border-radius: 30px;
        font-weight: bold;
        background-color: rgba(40, 24, 12, 0.9);
    }

    .row:hover {
        background-color: rgba(40, 24, 12, 1);
        scale: 1.05;
    }

    .title {
        font-style: italic;
        font-size: 30px;
    }

    .cell {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 200px;
    }

    .player {
        justify-content: start;
    }

    .profile-img {
        width: 40px;
        margin-left: 20px;
    }

    .star-img {
        width: 35px;
        margin-left: 5px;
    }

    .username {
        margin-left: 30px;
    }

    .cup {
        width: 100px;
    }

</style>