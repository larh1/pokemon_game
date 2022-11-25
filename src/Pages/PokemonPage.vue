<template>
<div>
    <div v-if="pokemon.id">
        <poke-image :pokeId="pokemon.id" :isVisible="true" />
        <poke-options :options="poke_data" />
    </div>
    <h2 v-else>Cargando...</h2>
</div>
</template>

<script>
import getOptions from "@/helpers/options";
import PokeImage from "@/components/PokeImage.vue";
import PokeOptions from "@/components/PokeOptions.vue";
export default
{
    components:
    {
        "poke-image": PokeImage,
        "poke-options": PokeOptions,
    },
    data()
    {
        return {
            id: 1,
            poke_data: [],
            pokemon:
            {},
        }
    },
    methods:
    {
        async GetData()
        {
            // Obtener las opciones
            this.poke_data = await getOptions();
            // Obtener el ganador
            const id = Math.floor(Math.random() * 4);
            this.pokemon = this.poke_data[id];
        }
    },
    mounted()
    {
        this.GetData();
    }
}
</script>

<style>

</style>
