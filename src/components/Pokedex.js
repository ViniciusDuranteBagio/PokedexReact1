import React from "react";

const Pokedex = (props) => {
    const { pokemons, loading } = props;
    return (
        <div>
            <div className="pokedex-header">
                <h1>
                    Pokedex
                </h1>
                <div>
                    Paginação:
                </div>
            </div>
            {loading ?
                (<div>
                    Carregando...
                </div>) :
                (
                    <div className="pokedex-grid">
                        {pokemons.map((pokemon, index) => {
                            //return (<Pokemon><Pokemon/>)
                            return (
                                <div>
                                    <div>#{pokemon.id}</div>
                                    <div>Nome: {pokemon.name}</div>
                                    <img src={pokemon.sprite.front_default} alt={pokemon.name} />
                                </div>
                            )
                        })}
                    </div>
                )}
        </div>
    );
};


export default Pokedex; 