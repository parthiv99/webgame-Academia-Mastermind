<script>
    export let secondsRemaining;
</script>

{#if secondsRemaining > 9}
    <div id="timer">0:{secondsRemaining}</div>
{:else}
    <div id="timer" style="color: red"><span>0:0{secondsRemaining}</span></div>
{/if}

<style>
    #timer {
        background-color: white;
        border: 2px solid whitesmoke;
        border-radius: 20px;
        font-size: 60px;
        font-weight: 600;
        width: 60%;
        text-align: center;
    }

    @keyframes blinker {
        50% { opacity: 0; }
    }

    #timer span {
        animation: blinker 1s linear 0s infinite;
    }

    @media (max-width: 800px) {
        #timer {
            font-size: 40px;
        }
    }
</style>