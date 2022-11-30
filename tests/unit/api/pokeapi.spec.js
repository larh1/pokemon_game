import pokeApi from "@/api/pokeapi";

describe("api",() =>
{
    /**
     * La URL de axios debe ser la correcta
     */
    test("Axios debe estar configurado correctamente",() =>
    {
        expect(pokeApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon")
    });
})