import React from 'react'
import PokemonCard from './PokemonCard'

export default function Pokedex() {

    //make request to https://pokeapi.co/api/v2/pokemon/1/
    //iterate over list and display:
    //                                  -name
    //                                  -button to URL
    // use useState to update PokemonCard when a URL is clicked
    // display 'name' 'picture' 'ability 1' 'ability 2' 

    console.log('first')

    fetch( "https://pokeapi.co/api/v2/pokemon" )
      .then( res => { 
                      console.log(res)
                      console.log('hi');
                    } )
      .catch( err => { console.log('oops! something went wrong...');})


  return (
    <>

    <PokemonCard />

    </>
  )
}
