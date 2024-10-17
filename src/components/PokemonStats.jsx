import { StatBar } from "./";

export const PokemonStats = ({ pokemonStats }) => {
    return(
        <div className="stats">
            <h5 className="text-center">Stats</h5>
            <div className="stat-graph">
                {Array.isArray(pokemonStats) && pokemonStats.length > 0 ? (
                    pokemonStats.map((stat, index) => (
                        <StatBar key={ index } stat={ stat }/>
                    ))
                ) : (
                    <p>No hay estadísticas disponibles.</p>
                )}
            </div>
        </div>
    );
};