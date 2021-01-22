import { heroes } from "../data/heroes";

export const getHeroByName = (nameSuperhero = '', setRespuesta) => {

    if (nameSuperhero.length < 3) return setRespuesta({
        message: 'Minimo 3 letras para buscar al heroe',
        hero: {}
    });

    const heroeSearch = heroes.find(hero => hero.superhero.toLowerCase().includes(nameSuperhero.toLowerCase()));

    if (!heroeSearch) return setRespuesta({
        message: 'No existe un heroe con ese nombre',
        hero: {}
    });

    setRespuesta({
        message: '',
        hero: heroeSearch
    });
};
