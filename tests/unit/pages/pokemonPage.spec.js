import PokemonPage from "@/Pages/PokemonPage";
import { shallowMount } from "@vue/test-utils";

describe("PokemonPage",() =>
{
    // Montar al inicio. Se puede reutilizar
    let wrap;
    beforeEach(() =>
    {
        wrap = shallowMount(PokemonPage);
    });

    test("Debe coincidir con el snapshot cuando cargó la info",() =>
    {
        const wrap1 = shallowMount(PokemonPage,{
            data()
            {
                return {
                    id: 1,
                    poke_data: [],
                    pokemon:
                    {
                        id: 1,
                        name: "BULBASAUR"
                    },
                    showPoke: false,
                    showAnswer: false,
                    message: "",
                }
            }
        })
        expect(wrap1.html()).toMatchSnapshot();
    });

    test("Debe cargar la data en el mounted()",() =>
    {
        // Spy del GetData
        const getDataSpy = jest.spyOn(PokemonPage.methods,"GetData");
        // Montar Page
        const wrp2 = shallowMount(PokemonPage);
        expect(getDataSpy).toHaveBeenCalled(); // Se llamó al montar
    });

    test("PokemonImage y PokeOptions deben existir",() =>
    {
        // crear wrap
        const wrap1 = shallowMount(PokemonPage,{
            data()
            {
                return {
                    id: 1,
                    poke_data: [],
                    pokemon:
                    {
                        id: 1,
                        name: "BULBASAUR"
                    },
                    showPoke: false,
                    showAnswer: false,
                    message: "",
                }
            }
        });
        // compomente  poke-image (-stub???)
        const image = wrap1.find("poke-image-stub");
        expect(image.exists()).toBeTruthy();
        // compomente  poke-options (-stub???)
        const options = wrap1.find("poke-options-stub");
        expect(options.exists()).toBeTruthy();
        // PokeImage :pokeId=1
        expect(image.attributes("pokeid")).toBe("1")
        // PokeOptions :options debe existir
        expect(options.attributes("options")).toBe("");
    });

    test("PokemonImage y PokeOptions deben existir",async () =>
    {
        // crear wrap
        const wrap = shallowMount(PokemonPage,{
            data()
            {
                return {
                    id: 1,
                    poke_data: [],
                    pokemon:
                    {
                        id: 1,
                        name: "BULBASAUR"
                    },
                    showPoke: false,
                    showAnswer: false,
                    message: "",
                }
            }
        });
        // Comprobar el poke 1
        await wrap.vm.CheckSelected(1);
        expect(wrap.find("h3").exists()).toBe(true);
        expect(wrap.find("h3").text()).toBe("¡Correcto, es BULBASAUR!");
        expect(wrap.vm.showPoke).toBe(true);

        // Comprobar el poke != 1
        await wrap.vm.CheckSelected(2);
        expect(wrap.find("h3").exists()).toBe(true);
        expect(wrap.vm.message).toBe("Oops!, era BULBASAUR");
        expect(wrap.vm.showPoke).toBe(true);
    })
})