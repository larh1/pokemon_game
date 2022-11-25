<template>
<h5 class="mt-2">Selecciona una opción</h5>
<div class="options-container" :class="{disabled:!disabled}">
    <ul class="asd">
        <li :ref="'op_'+poke.id" :key=poke.id v-for="poke in options" @click="CheckSelected(poke.id)">{{poke.name}}</li>
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
    },
    data()
    {
        return {
            selected: 1,
            disabled: true,
        }
    },
    methods:
    {
        /**
         * Verificar que el seleccionado es el correcto
         */
        CheckSelected(id)
        {
            this.selected = id;
            this.$emit('poke-selection', id)
        },

        /**
         * Muestra si el seleccionado es correto
         */
        CheckWinner(correct)
        {
            this.disabled = false;
            let cls = correct ? "correct" : "error";
            let id = `op_${this.selected}`;
            let elem = this.$refs[id][0];
            elem.classList.add(cls);
        },

        /**
         * Reestablecer los datos
         */
        Reset()
        {
            this.disabled = false;
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
    margin-bottom: 5px;
    padding: 5px 2px 2px 2px;
    border-radius: 8px;
    width: 250px;
    background-color: white;
}

li:hover {
    background-color: aliceblue;
}

.correct {
    background-color: rgb(25, 209, 129);
    border-color: rgb(25, 209, 129);
    color: white;
}

.correct:hover {
    background-color: rgb(25, 209, 129);
    border-color: rgb(25, 209, 129);
    color: white;
}

.error {
    background-color: rgb(209, 40, 25);
    color: white;
}

.error:hover {
    background-color: rgb(209, 40, 25);
    color: white;
}

.disabled {
    pointer-events: none;
}
</style>
