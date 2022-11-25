<template>
<h4>Selecciona una opción</h4>
<div class="options-container">
    <ul>
        <li :key=poke.id v-for="poke in options"
        @click="$emit('poke-selection',poke.id)">{{poke.name}}</li>
    </ul>
</div>
</template>

<script>
export default
{
    emits: ["poke-selection"], // Definir emits
    props:
    {
        options:
        {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.options-container {
    display: flex;
    justify-content: center;
}

ul {
    text-align: center;
    list-style-type: none;
}

li {
    border: 1px solid rgba(203, 201, 201, 0.5);
    cursor: pointer;
    margin-bottom: 10px;
    padding: 10px 5px 5px 5px;
    border-radius: 8px;
    width: 250px;
    background-color: white;
}

li:hover {
    background-color: aliceblue;
}
</style>
