
export const PokemonInfo = ({ name, getPokemon }) => {
    return (
        <>
            <div className="mt-3">
                <input type="text" className="form-control w-50" value={name} readOnly />
                <div className="bg-success text-white p-2 mt-2 rounded">
                    {name ? `${name} es un Pokémon...` : 'Selecciona un Pokémon para ver detalles.'}
                </div>
            </div>

            <button className="btn btn-primary mt-3 mb-4" onClick={ getPokemon }>
                Mostrar Pokemón
            </button>
        </>
    );
};
