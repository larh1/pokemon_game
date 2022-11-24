<template>
<div>
    <poke-image :pokeId="id" :isVisible="true" />
    <poke-options />
</div>
</template>

<script>
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
        }
    }
}
</script>

<style>

</style>
