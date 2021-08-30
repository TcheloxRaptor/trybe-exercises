import React from 'react';
import Pokemon from './Pokemon';
import '../data';
import pokemons from '../data';

class Pokedex extends React.Component {
  render() {
    const arrayPokemon = pokemons;
    return(
      <div className="pokedex-container">
        {arrayPokemon.map((pokemon, id) => <Pokemon key={id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
