import { StatBar } from "./";

export const PokemonStats = ({ statsPokemon }) => {
    return(
        <div className="stats">
            <h5 className="text-center">Stats</h5>
            <div className="stat-graph">
                {Array.isArray(statsPokemon) && statsPokemon.length > 0 ? (
                    statsPokemon.map((stat, index) => (
                        <StatBar key={ index } stat={ stat }/>
                    ))
                ) : (
                    <p>No hay estadísticas disponibles.</p>
                )}
            </div>
        </div>
    );
};