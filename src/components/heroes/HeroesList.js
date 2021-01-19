import React, { useState } from 'react';
import { getHeroByPublisher } from '../../selector/getHeroByPublisher';
import { HeroCard } from './HeroCard';
import { HeroPopUp } from './HeroPopUp';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);
    const [popUp, setPopUp] = useState({
        hero: {},
        show: false
    });

    const handlePopUp = ({ id, show }) => {
        const heroPopUp = {
            hero: heroes.find(hero => hero.id === id),
            show
        };
        setPopUp(heroPopUp);
    };

    return (
        <div className="Heroes_container">
            {
                popUp.show && <HeroPopUp handlePopUp={handlePopUp} {...popUp.hero} />
            }
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        handlePopUp={handlePopUp}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
