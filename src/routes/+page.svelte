<script>
	import { avatarIframe } from "$lib/gameAssets";
	const avatar = avatarIframe.landingPage
	import Avatar from "$lib/components/Avatar.svelte";
</script>

<div class="ctn">
	<Avatar {avatar} />
</div>

<style>
	.ctn {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 80vh;
	}

</style>
