import React from 'react';
import { useFetchPokemons } from './hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pokedex.css';

export const PruebaTecnicaApp = () => {
  const { name, image, statsPokemon, getPokemon } = useFetchPokemons();
  console.log(statsPokemon);

  return (
    <div className="container">
      <div className="pokedex row">

        <div className="col-md-6">
          <div className="screen">
            <img src={image} alt={name} className="pokemon-image" />
          </div>
          <div className="mt-3">
            <input type="text" className="form-control w-50" value={name} readOnly />

            <div className="bg-success text-white p-2 mt-2 rounded">
              {name ? `${name} es un Pokémon...` : 'Selecciona un Pokémon para ver detalles.'}
            </div>
          </div>
          <button className="btn btn-primary mt-3 mb-4" onClick={ getPokemon }>
            Mostrar Pokemón
          </button>
        </div>

        <div className="col-md-6">
            <div className="stats">
              <h5 className="text-center">Stats</h5>
              <div className="stat-graph">
                {Array.isArray(statsPokemon) && statsPokemon.length > 0 ? (
                  statsPokemon.map((stat, index) => (
                    <div key={index} className="mb-3">
                      <div className="d-flex justify-content-between">
                        <span>{stat.name}</span>
                        <span>{stat.base_stat}</span>
                      </div>
                      <div className="progress" style={{ height: '10px' }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${(stat.base_stat / 200) * 100}%` }}
                          aria-valuenow={stat.base_stat}
                          aria-valuemin="0"
                          aria-valuemax="200"
                        >
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No hay estadísticas disponibles.</p>
                )}
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};
