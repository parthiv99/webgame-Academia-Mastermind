<script>
    /** @type {import('./$types').ActionData} */
    export let form
</script>

{#if form?.error}
    <div class="form-error-msg">{form?.message}</div>
{/if}

<div class="page-ctn">
    <form method="POST" autocomplete="off" class="form-ctn">
        <div class="form-title">Sign in</div>
        <label class="form-label" for="username">Username</label>
        <input class="form-input" type="text" id="username" name="username" required>
        <label class="form-label" for="password">Password</label>
        <input class="form-input" type="password" id="password" name="password" required>  
        <button class="form-button">Let's Go!</button>
        <p class="form-extra">Don't have an account? <a href="/signup">Create One</a></p>
    </form>
</div>



