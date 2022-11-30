import getOptions, { getData, getNames } from "@/helpers/options";

describe("Opciones",() =>
{
    test("Debe regresar un arreglo de numeros",() =>
    {
        // Obtener la info
        const data = getData();
        // Comprobar longitud
        expect(data.length).toBe(650);
        // Comprobar valores
        expect(data[0]).toBe(1);
        expect(data[100]).toBe(101);
        expect(data[649]).toBe(650);
    });

    test("Debe regresar un array de 4 elemtos con los nombres",async () =>
    {
        const [p1,p2,p3,p4] = await getNames([1,2,3,4]);
        expect(p1.name).toBe("BULBASAUR");
        expect(p2.name).toBe("IVYSAUR");
        expect(p3.name).toBe("VENUSAUR");
        expect(p4.name).toBe("CHARMANDER");
    });

    test("Debe regresar un array con los valores mezclados",async () =>
    {
        const data = await getOptions();
        // De 4
        expect(data.length).toBe(4);
        // El id y name debe ser cualquier valor de su tipo
        expect(data).toEqual(
            [
                {
                    id: expect.any(Number),
                    name: expect.any(String)
                },{
                    id: expect.any(Number),
                    name: expect.any(String)
                },{
                    id: expect.any(Number),
                    name: expect.any(String)
                },{
                    id: expect.any(Number),
                    name: expect.any(String)
                },
            ]
        );
    });
})