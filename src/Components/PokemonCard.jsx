import React, {useState} from 'react'


export default function PokemonCard( pokemon, index ) {

  const [img, setImg] = useState('../images/question-mark.png')
  const [ ability1, setAbility1] = useState('???')
  const [ ability2, setAbility2] = useState('???')
  const [ attr, setAttr] = useState('???')
  const [ attr2, setAttr2] = useState('???')

  const getAndSetPokemonInfo = () => {

    fetch( pokemon.pokemon.url )
    .then(response => response.json() )
    .then( pokeInfo => {
                        setImg(pokeInfo.sprites.front_default)
                      }
          )

  }

  return (

    <>

      <div className='pokemon-card' >

        <h2> {pokemon.pokemon.name} </h2>

        <img src={img} height={'150px'} width={'150px'} onClick={ getAndSetPokemonInfo }></img>

        <div className='pokemon-card-details'>
          <h2> { ability1 }</h2>
          <h2> Ability 2</h2>
          <h2> hdhdhd </h2>
          <h2> hdhdhdhd </h2>
        </div>


      </div>
        
    </>
  )
}
