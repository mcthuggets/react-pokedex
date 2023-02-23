import React, {useState} from 'react'


export default function PokemonCard( pokemon, index ) {


  return (

    <>

      <div className='pokemon-card' >

        <h2> {pokemon.pokemon.name} </h2>

        <div className='pokemon-card-details'>

        </div>


      </div>
        
    </>
  )
}
