
export const PokemonTypes = ({ type }) => {
    return (
        <span key={ type } className={ `type-label ${ type }` }> 
            { type } 
        </span>
    );
};
