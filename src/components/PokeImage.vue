<template>
<h2>¿Quién es ese Pokemon?</h2>
<div class="img-container">
    <img class="img-hint" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon">
    <img class="img-show fade-in" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Pokemon">
</div>
</template>

<script>
export default
{

}
</script>

<style scoped>
.img-container {
    height: 250px;
}

.img-hint {
    filter: brightness(0);
}

img {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
}
</style>
