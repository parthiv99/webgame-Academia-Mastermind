<script>
    import { page } from '$app/stores';
    import Button from '$lib/components/Button.svelte';

    const goBack = () => {
      window.location.replace('/protected/subjects');
    };

</script>

<div class="page-ctn">
  <div class="error-ctn">{$page.status}: {$page.error?.message}</div>
  <div><Button buttonName="Select Subject" buttonAction={goBack} /></div>
</div>

<style>
  .page-ctn {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: black;
  }

  .error-ctn {
    color: white;
    font-size: 50px;
    margin-bottom: 50px;
  }
</style>
