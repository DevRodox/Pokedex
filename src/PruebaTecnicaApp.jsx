import { useFetchPokemons } from "./hooks/useFetchPokemons";

export const PruebaTecnicaApp = () => {

    const { name, image, getPokemon} = useFetchPokemons();

    return (
        <>
            <h1>{ name }</h1>
            <hr />
            <img src={ image } alt={ name } />
            <button onClick={ getPokemon } >
                Mostrar Pokemón
            </button>
        </>
    );
};
