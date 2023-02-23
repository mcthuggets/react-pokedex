import React, { useState } from 'react'
import PokemonCard from './PokemonCard'

export default function Pokedex() {
    
  const [pokemonListUI, setpokemonListUI] = useState(<h2 className='pokemon-card'> Pokemon will appear here...</h2>)

  let pokemonList = []

  const pokedexRequest = () => { 

    //get pokemon data
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => { response.json() } )
      .then(allPokemon => { allPokemon.results.forEach(pokemon => { pokemonList.push(pokemon) })  } )
      .then( () => {
                      setpokemonListUI( pokemonList.map( (pokemon, index) => {
                        return( <PokemonCard pokemon={pokemon} key={index} /> )
                        })
                      )
                  } )
    }
  


  return (
    <>

    <div className='black-background'>

    <button onClick={pokedexRequest}> Load Pokedex </button>


    <div className='pokeList'>
      { pokemonListUI }
    </div>

    </div>



    </>
  )
}
