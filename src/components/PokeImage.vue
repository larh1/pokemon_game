<template>
<h2>¿Quién es ese Pokemon?</h2>
<div class="img-container">
    <img class="img-hint" :src="imgSrc" alt="Pokemon" height="200">
    <img v-show="isVisible" class="img-show fade-in" :src="imgSrc" alt="Pokemon" height="200">
</div>
</template>

<script>
export default
{
    props:
    {
        pokeId:
        {
            type: Number,
            required: true,
        },
        isVisible:
        {
            type: Boolean,
            required: true,
            default: false,
        }
    },
    data()
    {
        return {}
    },
    computed:
    {
        imgSrc()
        {
            return "https://raw.githubusercontent.com/PokeAPI/" +
                "sprites/master/sprites/pokemon/other/dream-world/" +
                `${this.pokeId}.svg`;
        }
    }
}
</script>

<style scoped>
.img-container {
    height: 200px;
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
