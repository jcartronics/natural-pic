// Importa estilos
import './styles.css';

// Importa react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importa componentes
import { Navbar } from './components/Navbar';
import { Home } from './views/Home'
import { Favoritos } from './views/Favoritos'
import { useEffect, useState } from 'react';
import { MyContext } from './context/MyContext';


function App() {

  //Define estados
  const [fotos, setFotos] = useState({});

  const obtenerFotos = async() => {
    try {
      const endpoint = "./fotos.json";
      const res = await fetch(endpoint);
      const jsonData = await res.json();

      if (!jsonData.photos.length > 0){
        throw new Error("No hay fotos!")
      } else {
        setFotos(jsonData)
      }

    } catch (error) {
      console.log("Error al obtener datos", error)
    }
  }

  useEffect(() => {
    obtenerFotos();
  }, [])

  return (
    <div className="App">
      <MyContext.Provider value={{ fotos, setFotos }}>
        <BrowserRouter>
          {/* //Componentes */}
          <Navbar />

          {/* //Rutas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
