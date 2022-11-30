import pokeApi from "@/api/pokeapi";

// Crear array con las opciones
export const getData = () =>
{
    let data = []; // Todas las opciones
    for (let i = 0; i < 650; i++)
        data.push(i + 1);
    return data;
}

/**
 * Obtener 4 opciones aleatorias de la lista
 */
const getOptions = async () =>
{
    // obtener todos y ordenar de forma aleatoria
    let data = getData().sort(() => Math.random() - .5);

    return getNames(data.slice(0,4))

    // Obtener datos de API
    // Crear array de promises para llamarlas todas a la vez

}

export const getNames = async ([id1,id2,id3,id4] = []) =>
{
    const proms = [
        pokeApi.get(`/${ id1 }`),
        pokeApi.get(`/${ id2 }`),
        pokeApi.get(`/${ id3 }`),
        pokeApi.get(`/${ id4 }`),
    ];
    // Desestructurar
    let [p1,p2,p3,p4] = await Promise.all(proms);
    return [
        {id: p1.data.id,name: p1.data.name.toUpperCase()},
        {id: p2.data.id,name: p2.data.name.toUpperCase()},
        {id: p3.data.id,name: p3.data.name.toUpperCase()},
        {id: p4.data.id,name: p4.data.name.toUpperCase()},
    ];
}

export default getOptions

