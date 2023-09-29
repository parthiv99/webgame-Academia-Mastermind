<script>
    export let src;
    export let width = "60px";
    export let height = "60px";
</script>

<img src={src} alt="user profile" width={width} height={height}>

<style>
    img {
        border-radius: 50%;
        object-fit: cover;
    }
</style>



