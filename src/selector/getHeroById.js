import { heroes } from "../data/heroes";

export const getHeroById = (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw new Error('El Id no pertenece a ningun heroe');

    return hero;
};