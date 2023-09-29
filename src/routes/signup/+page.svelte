<script>
    /** @type {import('./$types').ActionData} */
    export let form
</script>

{#if form?.error}
    <div class="form-error-msg">{form?.message}</div>
{/if}

<div class="page-ctn">
    <form method="POST" autocomplete="off" class="form-ctn">
        <div class="form-title">Sign up</div>
        <label class="form-label" for="name">Name</label>
        <input class="form-input" type="text" id="name" name="name" value={form?.name ?? ''} required>
        <label class="form-label" for="username">Username</label>
        <input class="form-input" type="text" id="username" name="username" value={form?.username ?? ''} required>
        <label class="form-label" for="password">Password</label>
        <input class="form-input" type="password" id="password" name="password" value={form?.password ?? ''} required>  
        <button class="form-button">Let's Go!</button>
        <p class="form-extra">Have an account? <a href="/signin">Sign in</a></p>
    </form>
</div>
