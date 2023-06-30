// Importa estilos
import './styles.css';

// Importa react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importa componentes
import { Navbar } from './components/Navbar';
import { Home } from './views/Home'
import { Favoritos } from './views/Favoritos'
import { useEffect, useState } from 'react';


function App() {

  //Define estados
  const [fotos, setFotos] = useState({});

  const obtenerFotos = async() => {
    const endpoint = "./fotos.json";
    const res = await fetch(endpoint);
    const jsonData = await res.json();

    setFotos(jsonData);
  }

  useEffect(() => {
    obtenerFotos();
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
      {/* //Componentes */}
        <Navbar />

        {/* //Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
