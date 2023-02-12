import React, {useState} from 'react'


export default function PokemonCard( pokemon, index ) {

  const [pokeInfo, setpokeInfo] = useState('')


  const loadPokeInfo = () => {

    fetch( pokemon.pokemon.url )
    .then(response => response.json() )
    .then( pokeInfo => console.log(pokeInfo) )

  }

  return (

    <>
        <h2 className='pokemon-card' onClick={loadPokeInfo}> {pokemon.pokemon.name} </h2>
        { pokeInfo }
    </>
  )
}
