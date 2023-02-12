import React, {useState} from 'react'


export default function PokemonCard( pokemon, index ) {

  const [pokeInfo, setpokeInfo] = useState('')

  const [imgURL, setimgURL] = useState('/images/question-mark.png')


  const loadPokeInfo = () => {

    fetch( pokemon.pokemon.url )
    .then(response => response.json() )
    .then( pokeInfo => setimgURL(pokeInfo.sprites.front_default) )

  }

  return (

    <>

      <div className='pokemon-card' onClick={loadPokeInfo}>

        <h2 className='pokemon-card' > {pokemon.pokemon.name} </h2>

        <img src={imgURL} width={'100px'} height={'100px'}></img>

      </div>
        
    </>
  )
}
