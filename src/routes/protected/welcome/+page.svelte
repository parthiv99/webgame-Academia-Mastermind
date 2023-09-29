<svelte:head>
    <meta http-equiv = "refresh" content = "7; url = /protected/subjects" />
</svelte:head>

<script>
    import { fly } from 'svelte/transition'
    import welcomeSound from '$lib/assets/audio/welcomeSound.mp3'

    let timeOut = false;
    setTimeout(() => {
        timeOut = true;
    }, 6000);

</script>

<audio src={welcomeSound} autoplay loop></audio>

{#if !timeOut}
    <div class="page-ctn" out:fly="{{ duration: 2000, x: -1000}}">
        <div class="welcome-msg">Welcome <br/> Explorer!</div>
    </div>
{/if}

<style>
    /* source: https://codepen.io/uiswarup/pen/XWgQJrq */
    
    .page-ctn {
        height: 75vh;
        align-items: center;
    }

    @keyframes textclip {
        to {
        background-position: 200% center;
        }
    }

    .welcome-msg {
        background-image: linear-gradient(
            -225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%
        );
        background-size: auto auto;
        background-clip: border-box;
        background-size: 200% auto;
        color: #fff;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: textclip 2s linear infinite;
        display: inline-block;
        font-size: 230px;
    }
    
    @media (min-width: 600px) and (max-width: 800px) {
        .welcome-msg {
            font-size: 100px;
        }
    }

    @media (max-width: 599px) {
        .welcome-msg {
            font-size: 50px;
        }
    }
</style>

