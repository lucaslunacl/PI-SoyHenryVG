import './App.css';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import Home from './Components/Home/Home.jsx'
import NJuego from './Components/CrearJuego/NJuego.jsx'
import Detalles from './Components/Detalles/Detalles.jsx'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path='/Home' element={<Home />}/>
        <Route path='/Create' element={<NJuego/>}/>
        <Route path='/games/:id' element={<Detalles/>}/>
      </Routes>

    </div>
  );
}

export default App;
