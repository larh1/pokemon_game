<template>
<div>
    <pokemon-page />
</div>
</template>

<script>
import PokemonPage from "@/Pages/PokemonPage.vue";
export default
{
    name: 'App',
    components:
    {
        "pokemon-page": PokemonPage
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
body{
    background-color: #efefef;
}
</style>
