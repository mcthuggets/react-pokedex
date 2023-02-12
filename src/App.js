import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import PokemonCard from './Components/PokemonCard';

function App() {

  return (
  <>
    <Navbar />

    <Banner />

    <div className='black-background'>
      <PokemonCard />
    </div>
  </>
  );
}

export default App;
