import React from 'react';
import { useFetchPokemons } from './hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';

export const PruebaTecnicaApp = () => {
  const { name, image, getPokemon } = useFetchPokemons();

  return (
    <div className="container">
      <div className="pokedex row">
        
        <div className="col-md-6">
          <div className="screen">
            <img src={image} alt={name} className="pokemon-image" />
          </div>
          <div className="mt-3">
            <input type="text" className="form-control" value={name} readOnly />
            <div className="bg-success text-white p-2 mt-2 rounded">
              {name ? `${name} es un Pokémon...` : 'Selecciona un Pokémon para ver detalles.'}
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={getPokemon}>
            Mostrar Pokemón
          </button>
        </div>

        <div className="col-md-6">
          <div className="stats">
            <h5 className="text-center">Stats</h5>
            <div className="stat-graph">

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
