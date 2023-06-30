// Importa estilos
import './styles.css';

// Importa react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importa componentes
import { Navbar } from './components/Navbar';
import { Home } from './views/Home'
import { Favoritos } from './views/Favoritos'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
