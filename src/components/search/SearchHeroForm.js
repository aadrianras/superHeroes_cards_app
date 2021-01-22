import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks/useForm';
import { useHandlePopUp } from '../../hooks/useHandlePopUp';
import { HeroCard } from '../heroes/HeroCard';
import { HeroPopUp } from '../heroes/HeroPopUp';
import { FormSearch } from './FormSearch';
import { getHeroByName } from '../../selector/getHeroByName';


export const SearchHeroForm = ({ history }) => {

    //IMPORTAMOS EL POPUP
    const { popUp, handlePopUp } = useHandlePopUp();

    //RECIBIMOS EL PARAMETRO DESDE LOS PARAMS
    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);

    //ESTADO DEL INPUT DEL FORMULARIO DE BUSQUEDA
    const [formHook, handleInputChange, reset] = useForm({ superhero: q });
    const { superhero } = formHook;
    const [respuesta, setRespuesta] = useState({
        message: 'Encontremos a tu heroe favorito',
        hero: {}
    })

    useEffect(() => {
        getHeroByName(q, setRespuesta);
    }, [q]);

    const handleSubmit = (e) => {
        e.preventDefault();

        //ENVIAMOS EL PARAMETRO A LOS PARAMS DE LA URL
        const { value } = e.target.superhero;
        history.push(`?q=${value}`);
        reset();
    };

    return (
        <div className="busqueda">
            <div className="busqueda_form">
                <FormSearch
                    superhero={superhero}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div className="busqueda_card">
                {
                    popUp.show && <HeroPopUp handlePopUp={handlePopUp} {...popUp.hero} />
                }
                {
                    !respuesta.hero.id
                        ? <p>{respuesta.message}</p>
                        : <HeroCard
                            key={respuesta.hero.id}
                            handlePopUp={handlePopUp}
                            {...respuesta.hero}
                        />
                }
            </div>
        </div>
    )
}
