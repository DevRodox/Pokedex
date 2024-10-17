import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchPokemons } from './hooks';
import { PokemonInfo, PokemonImage, PokemonStats } from './components';
import './Pokedex.css';

export const PruebaTecnicaApp = () => {
  
  const { name, image, pokemonStats, 
          pokemonTypes, pokemonAbilities, 
          getPokemon, isLoading } = useFetchPokemons();

  return (
    <div className="container ">

      <img src='fondoPokemon.png' alt="Fondo Pokémon" className="background-image" />

      <div className="pokedex row">
        {
          isLoading && (<h2> Cargando... </h2>)
        }
        <div className="col-md-6">
          <PokemonImage image={ image } name={ name } />
          <PokemonInfo 
            name={ name } 
            pokemonTypes = { pokemonTypes } 
            pokemonAbilities={ pokemonAbilities }
          />
        </div>

        <div className="col-md-6">
          <PokemonStats pokemonStats={ pokemonStats } getPokemon={ getPokemon } />
        </div>

      </div>
    </div>
  );
};
