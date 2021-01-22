import React from 'react';
import { useHandlePopUp } from '../../hooks/useHandlePopUp';
import { getHeroByPublisher } from '../../selector/getHeroByPublisher';
import { HeroCard } from './HeroCard';
import { HeroPopUp } from './HeroPopUp';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroByPublisher(publisher);

    const { popUp, handlePopUp } = useHandlePopUp();



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
