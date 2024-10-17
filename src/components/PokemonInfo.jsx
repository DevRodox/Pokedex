
export const PokemonInfo = ({ name, getPokemon, pokemonTypes }) => {
    console.log(pokemonTypes);
    return (
        <>
            <div className="mt-3">
                <div className="pokemon-name">{name}</div>
                <div className="text-white p-2 mt-2 rounded">
                    { pokemonTypes.map( type => (
                        <span key={ type } className={ `type-label ${ type }` }> 
                            { type } 
                        </span>
                    ))}
                </div>
            </div>

            <button className="btn btn-primary mt-3 mb-4" onClick={ getPokemon }>
                Mostrar Pokemón
            </button>
        </>
    );
};
