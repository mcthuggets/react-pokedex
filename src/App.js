import Home from './Pages/Home';
//
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Pokemon from './Pages/Pokemon';

function App() {

  return (
  <>
    <Router>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Pokemon' element={<Pokemon/>} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
