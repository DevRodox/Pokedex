import { useState, useEffect } from "react";
import { getPokemonData } from "../helpers";

export const useFetchPokemons = () => {

    const [isLoading, setIsLoading] = useState( true );
    const [ pokemon, setPokemon ] = useState({
        name: '',
        image: '',
        pokemonStats: {},
        pokemonTypes: [],
        pokemonAbilities: []
    });

    useEffect(() => {
        getPokemon();

        const intervalId = setInterval(() => {
            getPokemon();
        }, 30000);

        return () => clearInterval(intervalId);
    }, []);

    const getPokemon = async() => {
        try {
            const pokemonData = await getPokemonData();
            setPokemon( pokemonData );
            setIsLoading( false );
       
        } catch (error) {
            console.log(`Error: ${error} `)
        }
    };

    return{
        isLoading,
        ...pokemon,
        getPokemon
    };

};