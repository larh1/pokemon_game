<template>
<div>
    <poke-image />
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
    }
}
</script>

<style>

</style>
