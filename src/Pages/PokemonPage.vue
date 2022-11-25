<template>
<div>
    <poke-image :pokeId="id" :isVisible="true" />
    <poke-options :options="poke_data" />
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
        }
    },
    methods:
    {
        async GetData()
        {
            this.poke_data = await getOptions();
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
