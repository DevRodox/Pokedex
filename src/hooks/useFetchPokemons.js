import { useState } from "react";
import { useEffect } from "react";
import { pokeApi } from "../api";
import { capitalizeFirstLetter } from "../helpers/capitalizeFirstLetter ";

export const useFetchPokemons = () => {
    
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
            
            let randomNumber = Math.floor(Math.random() * 1025) + 1;

            const { data } = await pokeApi.get(`/pokemon/${ randomNumber }`);
            
            const { name, sprites, stats, types, abilities } = data;
            const { front_default: image } = sprites.other['official-artwork'];

            const pokemonStats = stats.map( stat => ({
                base_stat: stat.base_stat,
                name: stat.stat.name
            }));

            const pokemonTypes = types.map( type => ([
                type.type.name
            ]));

            const pokemonAbilities = abilities.map( ability => ([
                ability.ability.name
            ]));

            setPokemon({
                name: capitalizeFirstLetter( name ),
                image,
                pokemonStats,
                pokemonTypes,
                pokemonAbilities
            });

        } catch (error) {
            console.log(`Error: ${error} `)
        }
    };

    return{
        ...pokemon,
        getPokemon
    };

};