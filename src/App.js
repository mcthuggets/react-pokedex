import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import Pokedex from './Components/Pokedex';
import PokemonCard from './Components/PokemonCard';

function App() {

  return (
  <>
    <Navbar />

    <Banner />

    <div className='black-background'>
      <Pokedex />
    </div>
  </>
  );
}

export default App;
