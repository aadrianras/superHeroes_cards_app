
export const FormSearch = ({ superhero, handleInputChange, handleSubmit }) => {

    return (
        <>
            <h1>Busca a tu heroe</h1>
            <form onSubmit={handleSubmit}>
                <input
                    tabIndex="1"
                    type="text"
                    placeholder="Buscar heroe..."
                    name="superhero"
                    value={superhero}
                    onChange={handleInputChange}
                />
                <button type="submit" >
                    Buscar
                    </button>
            </form>
        </>
    )
}
