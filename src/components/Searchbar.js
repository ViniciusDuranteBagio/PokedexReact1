import React, {useState} from "react";
import { searchPokemon } from "../api";

const Searchbar = (/*props*/) => {
    //const {onSearch} = props;
    const [search, setSearch] =  useState();
    const [pokemon, setPokemon] =  useState();


    const onChangeHandler = (e) =>{
        setSearch(e.target.value);
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search);
    }

    const onSearchHandler = async (pokemonName) =>{
        const result = await searchPokemon(pokemonName);
        setPokemon(result);
      } 

  

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Pesquisar Pokemon"  onChange={onChangeHandler}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}> Buscar</button>
            </div>
            <div>
                {pokemon ? (
                    <div>
                        <div>Nome : {pokemon.name}</div>
                        <div>Peso : {pokemon.weight} kg</div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Searchbar;   