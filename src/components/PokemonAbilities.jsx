export const PokemonAbilities = ({ ability }) => {
    return(
        <span key={ ability }>
            { `${ ability } ` }
        </span>
    );
};