import { useState } from "react";
import { useEffect } from "react";
import { pokeApi } from "../api";

export const useFetchPokemons = () => {
    
    const [ pokemon, setPokemon ] = useState({
        name: '',
        image: ''
    });

    useEffect(() => {
        getPokemon();
    }, []);

    const getPokemon = async() => {
        try {
            
            let randomNumber = Math.floor(Math.random() * 1025) + 1;

            const { data } = await pokeApi.get(`/pokemon/${ randomNumber }`);
            const { name, sprites } = data;
            const { front_default: image } = sprites.other['official-artwork'];

            setPokemon({
                name,
                image
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