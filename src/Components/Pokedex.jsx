import React, { useState } from 'react'
import PokemonCard from './PokemonCard'

export default function Pokedex() {

    //make request to https://pokeapi.co/api/v2/pokemon/1/
    //iterate over list and display:
    //                                  -name
    //                                  -button to URL
    // use useState to update PokemonCard when a URL is clicked
    // display 'name' 'picture' 'ability 1' 'ability 2'
    
  const [pokemonListUI, setpokemonListUI] = useState(<h2 className='pokemon-card'> Pokemon will appear here...</h2>)

  let pokemonList = []

  const pokedexRequest = () => { 

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allPokemon => { allPokemon.results.forEach(pokemon => { pokemonList.push(pokemon) })  } )
    .then( () => {
                    setpokemonListUI( pokemonList.map( (pokemon, index) => {
                      return( <PokemonCard pokemon={pokemon} index={index} /> )
                      })
                    )
                } )

    console.log(pokemonList)

    
  }


  return (
    <>

    <button onClick={pokedexRequest}> Load Pokedex </button>

    { pokemonListUI }

    </>
  )
}
