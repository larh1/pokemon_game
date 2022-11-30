import PokeOptions from "@/components/PokeOptions";
import { shallowMount } from "@vue/test-utils";

describe("pokeOptions",() =>
{
    let wrapper;
    // Definir el snapshot para usarlo global
    beforeEach(() =>
    {
        wrapper = shallowMount(PokeOptions,
            {
                props:
                {
                    options: [
                        {id: 1,name: "BULBASAUR"},
                        {id: 2,name: "IVYSAUR"},
                        {id: 3,name: "VENUSAUR"},
                        {id: 4,name: "CHARMANDER"},
                    ]
                }
            });
    });

    test("Debe coincidir con el snapshot",() =>
    {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("Debe contener 4 elementos y coincidir con el nombre",() =>
    {
        const data = wrapper.findAll("li");
        expect(data.length).toBe(4); // 4 Elementos
        // .text() -> obtiene el texto del elemento
        expect(data[0].text()).toBe("BULBASAUR");
        expect(data[1].text()).toBe("IVYSAUR");
        expect(data[2].text()).toBe("VENUSAUR");
        expect(data[3].text()).toBe("CHARMANDER");
    });

    test("Debe emitir el evento 'poke-selection' con sus parametros",() =>
    {
        const [l1,l2,l3,l4] = wrapper.findAll("li");
        // Mandar evento
        l1.trigger("click");
        l2.trigger("click");
        l3.trigger("click");
        l4.trigger("click");
        // Argumento esperado:1,2,3,4
        // console.log(wrapper.emitted("poke-selection"));
        expect(wrapper.emitted("poke-selection")[0][0]).toBe(1);
        expect(wrapper.emitted("poke-selection")[1][0]).toBe(2);
        expect(wrapper.emitted("poke-selection")[2][0]).toBe(3);
        expect(wrapper.emitted("poke-selection")[3][0]).toBe(4);
    });
})