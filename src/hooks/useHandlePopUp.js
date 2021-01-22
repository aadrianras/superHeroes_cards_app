import { useState } from "react";
import { heroes } from "../data/heroes";



export const useHandlePopUp = () => {
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

    return { popUp, handlePopUp };
}
