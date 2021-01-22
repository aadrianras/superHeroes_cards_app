import React from 'react'
import { useParams } from 'react-router-dom'

export const HeroeScreen = () => {

    const params = useParams();

    return (
        <div>
            <h1>Heroe</h1>
            <p>{process.env.PUBLIC_URL}</p>
            <p>{JSON.stringify(params)}</p>
        </div>
    )
}
