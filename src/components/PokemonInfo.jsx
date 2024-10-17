import { PokemonAbilities, PokemonTypes } from "./";

export const PokemonInfo = ({ name, pokemonTypes, pokemonAbilities }) => {
   
    
    return (
        <>
            <div className="mt-3">
                <div className="pokemon-name">{name}</div>
                <div className="pokemon-abilities">
                    Habilities: <br/>
                    { pokemonAbilities.map( ability => (
                        <PokemonAbilities key={ ability } ability={ ability }/>
                    ))}
                </div>
                <div className="text-white p-2 mt-2 rounded mb-2">
                    { pokemonTypes.map( type => (
                        <PokemonTypes key={ type } type={ type } />
                    ))}
                </div>
            </div>
        </>
    );
};
