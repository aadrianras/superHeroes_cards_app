import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => history.replace('/')

    return (
        <div className="login_container">
            <h1>Iniciar sesión</h1>
            <p>Haz click en login para iniciar tu sesión</p>
            <button onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
