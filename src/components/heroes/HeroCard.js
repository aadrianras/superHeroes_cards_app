import React from 'react';

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters, handlePopUp }) => {

    return (
        <div className="heroes_card" onClick={() => handlePopUp({ id, show: true })}>
            <div className="heroes_card_content">
                <div>
                    <img src={`./assets/heroes/${id}.jpg`} className="hero_card_img" alt={superhero} />
                </div>
                <div className="heroes_card_text">
                    <p><span>Álter ego:</span> {alter_ego}</p>
                    <p><span>Personajes:</span> {characters}</p>
                    <p><span>Primera aparición:</span> {first_appearance}</p>
                    <p>{publisher}</p>
                </div>
            </div>
            <h3>{superhero}</h3>
        </div>
    )
}
