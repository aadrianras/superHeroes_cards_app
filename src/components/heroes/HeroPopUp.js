import React from 'react'

export const HeroPopUp = ({ id, superhero, publisher, alter_ego, first_appearance, characters, handlePopUp }) => {
    return (
        <>
            <div className="overlay" onClick={() => handlePopUp({ id: '', show: false })} />

            <div className="heroes_card_popUp" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg)` }}>
                <div className="heroes_card_text_popUp">
                    <h3>{superhero}</h3>
                    <p><span>Álter ego:</span> {alter_ego}</p>
                    <p><span>Personajes:</span> {characters}</p>
                    <p><span>Primera aparición:</span> {first_appearance}</p>
                    <p>{publisher}</p>
                </div>
            </div>
        </>
    )
}
