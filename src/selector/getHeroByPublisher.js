import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if (!validPublishers.includes(publisher)) throw new Error('Solo se permiten los publishers "DC Comics" ó "Marvel Comics"');

    return heroes.filter(hero => hero.publisher === publisher);
};