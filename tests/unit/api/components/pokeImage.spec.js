import PokeImage from "@/components/PokeImage";
import { shallowMount } from "@vue/test-utils";

describe("PokeImage",() =>
{
    test("Debe coincidir con el spanshot",() =>
    {
        // Crear wrapper
        const wrapper = shallowMount(PokeImage,{
            props:
            {
                pokeId: 1,
                isVisible: false
            }
        });
        expect(wrapper.html()).toMatchSnapshot();
    });

    test("Debe mostrar la imagen oculta y el pokemon 20",() =>
    {
        // Crear wrapper
        const wrapper = shallowMount(PokeImage,{
            props:
            {
                pokeId: 20,
                isVisible: true,
            }
        });

        // Buscar las 2 imagenes
        const [img1,img2] = wrapper.findAll("img");
        expect(img1).toBeTruthy(); // Se muestra 1
        expect(img2).toBe(undefined); // Se oculta la otra
        // La img 1 es visible
        expect(img1.classes()).toContain("img-show");
    });

    test("Debe mostrar la imagen si isVisible=true",() =>
    {
        // Crear wrapper
        const wrapper = shallowMount(PokeImage,{
            props:
            {
                pokeId: 20,
                isVisible: true,
            }
        });

        // Buscar las 2 imagenes
        const img1 = wrapper.find("img");
        expect(img1).toBeTruthy(); // Se muestra 1
        // La img 1 es visible
        expect(img1.classes()).toContain("img-show");
    });

    test("El source de la imágen debe ser correcto",() =>
    {
        // Crear wrapper
        const pokeId = 20;
        const wrapper = shallowMount(PokeImage,{
            props:
            {
                pokeId,
                isVisible: true,
            }
        });

        // Buscar las 2 imagenes
        const img1 = wrapper.find("img");
        const src = "https://raw.githubusercontent.com/PokeAPI/" +
            "sprites/master/sprites/pokemon/other/dream-world/" +
            `${ pokeId }.svg`;
        expect(img1.attributes("src")).toBe(src);
    });
});