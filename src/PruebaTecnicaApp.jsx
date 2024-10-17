import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchPokemons } from './hooks';
import { PokemonInfo, PokemonImage, PokemonStats } from './components';
import './Pokedex.css';

export const PruebaTecnicaApp = () => {
  const { name, image, statsPokemon, getPokemon } = useFetchPokemons();

  return (
    <div className="container">
      <div className="pokedex row">
        
        <div className="col-md-6">
          <PokemonImage  image={ image } name={ name } />
          <PokemonInfo name={ name } getPokemon={ getPokemon } />
        </div>

        <div className="col-md-6">
          <PokemonStats statsPokemon={ statsPokemon }/>
        </div>

      </div>
    </div>
  );
};
