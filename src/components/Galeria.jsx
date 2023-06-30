
import React, { useContext } from 'react'

//Importa estilos
import "../assets/css/galeria.css";
import { MyContext } from '../context/MyContext';

export const Galeria = () => {

    const {fotos, setFotos} = useContext(MyContext);

    console.log(fotos);

  return (
    <div className="galeria grid-columns-5 p-3">
        {fotos?.photos?.map((foto) => 
            <img key={foto.id} src={foto.src.tiny} alt="" />
        )}
    </div>
  )
}
