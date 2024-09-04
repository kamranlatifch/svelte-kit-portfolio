<script>
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';

    export let form;

    const redirectTo = $page?.url?.searchParams?.get('redirectTo') || '/';
    console.log('FORM IS', form);
    console.log('Redirect to is', redirectTo);
</script>

<form method="post" action="?/login" use:enhance class="grid gap-3">
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="User Name" value={form?.username ?? ''} />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
    <button type="submit" formaction="?/register">Register</button>
</form>
