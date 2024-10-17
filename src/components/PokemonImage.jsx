
export const PokemonImage = ({ image, name }) => {
    return(
        <div className="screen">
            <img src={image} alt={name} className="pokemon-image" />
        </div>
    );
};