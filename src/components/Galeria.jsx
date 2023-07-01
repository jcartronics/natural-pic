
import React, { useContext } from 'react'

//Importa estilos
import "../assets/css/galeria.css";

//Importa componentes
import { Heart } from './Heart';

//Estados
import { MyContext } from '../context/MyContext';
import { Foto } from './Foto';

export const Galeria = () => {

    const {fotos, setFotos} = useContext(MyContext);

    const darLike = (foto) => {
        foto.liked = !foto.liked;
        setFotos([...fotos])
    }
    

  return (
    <div className="galeria grid-columns-5 p-3">
        {fotos?.map((foto) => 
            <Foto key={foto.id} foto={foto} darLike={darLike} />
        )}
    </div>
  )
}
