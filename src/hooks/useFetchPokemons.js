import { useState } from "react";
import { useEffect } from "react";
import { pokeApi } from "../api";

export const useFetchPokemons = () => {
    
    const [ pokemon, setPokemon ] = useState({
        name: '',
        image: '',
        statsPokemon: {}
    });

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async() => {
        try {
            
            let randomNumber = Math.floor(Math.random() * 1025) + 1;

            const { data } = await pokeApi.get(`/pokemon/${ randomNumber }`);
            
            const { name, sprites, stats } = data;
            const { front_default: image } = sprites.other['official-artwork'];

            const statsPokemon = stats.map( stat => ({
                base_stat: stat.base_stat,
                name: stat.stat.name
            }));

            setPokemon({
                name,
                image,
                statsPokemon
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