import React, { useState } from 'react'

export default function Banner() {

  let pokemonList = []

  const pokedexRequest = () => { 

    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(allPokemon => { allPokemon.results.forEach(pokemon => { pokemonList.push(pokemon) }) } )

    console.log(pokemonList)
  }

  return (
    <>
        <div className='welcome-2-columns'>

            <div>
                <h2> Welcome to the world of Pokemon!</h2>
                
                <h3> An exciting world filled with magical beasts, some friends and some foes.My name is Professor Oak, lead Pokemon researcher in the town of Kanto. Use the Pokedex to find information about any Pokemon in the world! </h3>

                <button onClick={pokedexRequest}> Load Pokedex </button>
            </div>

            <div>
                <img src='/images/Oak.webp'></img>
            </div>

        </div>
    </>
  )
}
