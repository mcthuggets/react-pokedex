import React, {useState} from 'react'


export default function PokemonCard( pokemon, index ) {

  const [pokeInfo, setpokeInfo] = useState('')

  const [imgURL, setimgURL] = useState('/images/question-mark.png')

  const loadPokeInfo = () => {

    fetch( pokemon.pokemon.url )
    .then(response => response.json() )
    .then( pokeInfo =>  { 
                          console.log(pokeInfo);
                          setimgURL(pokeInfo.sprites.front_default) 
                        } )

  }

  return (

    <>

      <div className='pokemon-card' onClick={loadPokeInfo}>

        <h2> {pokemon.pokemon.name} </h2>

        <div className='pokemon-card-details'>

          <div>
            <img src={imgURL} width={'100px'} height={'100px'}></img>
          </div>
          
          <div>
            {/** more details to be added here */}
          </div>
          

        </div>


      </div>
        
    </>
  )
}
