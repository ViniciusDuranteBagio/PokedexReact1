import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import {searchPokemon} from "./api"
import Pokedex from './components/Pokedex';

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon =  async () => {
    try{
      setLoading(true);
      const result = await setPokemons();
      setPokemons(result);
      setLoading(false);
    } catch(error) {
      console.log("fetch pokemons error: ", error);
    }
  }

  useEffect(() => {
    console.log('carregou')
    fetchPokemon();
  }, [])
 
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
      <div className="App">

      </div>
    </div>
  );
}

export default App;
